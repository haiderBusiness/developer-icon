import JSZip from 'jszip';

function generateJsonOjbect(imageName, size) {

    const object = 
    {
        images:[
            { filename:`${imageName}.png`, idiom:"universal", scale: "1x", size: `${size}x${size}` },
            { filename:`${imageName}@2x.png`, idiom:"universal", scale: "2x", size: `${size}x${size}` },
            { filename:`${imageName}@3x.png`, idiom:"universal", scale: "3x", size: `${size}x${size}` }
            ],
        info: { author: "xcode", "template-rendering-intent": "template", version: 1 }
    }
    
    return object
}

const downloadIosImageset = async (svgString = "", folderName, size, callBack = () => {console.log("you need to do the callback...this is just a test message")}) => {
  const zip = new JSZip();

  const svgStrings = [svgString, svgString, svgString]
  // Iterate through each SVG string
  for (let i = 0; i < svgStrings.length; i++) {


    const pureSvg = svgStrings[i];
    const svgString = pureSvg.replace(/ width="[^"]*"/, ` width="${size * (i + 1)}"`).replace(/height="[^"]*"/, `height="${size * (i + 1)}"`);

    
    const fileName = i === 0 ? `${folderName}` : `${folderName}@${i + 1}x`;

    // Optimize the SVG using svgo-browser if needed

    // Convert the optimized SVG to PNG
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const svgUrl = URL.createObjectURL(blob);

    // Create an Image element
    const img = new Image();

    // Set the Image source to the SVG data URI
    img.src = svgUrl;

    // Wait for the image to load
    await new Promise((resolve) => {
      img.onload = resolve;
    });

    // Create a canvas and draw the image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);

    // Convert the canvas to a data URL representing the PNG format
    const pngDataUri = canvas.toDataURL('image/png');

    // Add the PNG data to the zip file
    zip.file(`${folderName}_imageset/${fileName}.png`, pngDataUri.split(';base64,').pop(), { base64: true });

    if((i + 1) === svgStrings.length) {
        zip.file(`${folderName}_imageset/Contents.json`, JSON.stringify(generateJsonOjbect(folderName, size)));
    } 

    // Clean up
    URL.revokeObjectURL(svgUrl);
  }

  // Generate zip file content
  const content = await zip.generateAsync({ type: 'blob' });

  // Create a download link
  const url = URL.createObjectURL(content);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${folderName}_${size}px_imageset.zip`;

  a.addEventListener('click', () => {
    setTimeout(() => {
      callBack();
    }, 500); // Adjust the delay as needed
    
  });
  // Append the link to the document and trigger the click event
  document.body.appendChild(a);
  a.click();

  // Clean up
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
};

// // Example usage
// const svgStrings = [
//   '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="50" cy="50" r="40" fill="blue" /></svg>',
//   // Add more SVG strings as needed
// ];

export default downloadIosImageset;
