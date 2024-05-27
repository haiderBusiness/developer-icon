import JSZip from 'jszip';


const downloadAndroidImageset = async (pureSvg = "", folderName, size, callBack = () => {console.log("you need to do the callback...this is just a test message")}) => {
  const zip = new JSZip();

  
  let savedSize = 0
  // Iterate through each SVG string
  for (let i = 0; i < 6; i++) {


    let svgString = ""

    let fileName = ""

    // if(i === 0) {
    //   fileName = `${folderName}_${75}_ldpi`;
    //   svgString = pureSvg.replace(/ width="[^"]*"/, ` width="${75}"`).replace(/height="[^"]*"/, `height="${75}"`);
    // } else if(i === 1) {
    //   fileName = `${folderName}_${100}_mdpi`;
    //   svgString = pureSvg.replace(/ width="[^"]*"/, ` width="${100}"`).replace(/height="[^"]*"/, `height="${100}"`);
    // } else if(i === 2) {
    //   fileName = `${folderName}_${150}_hdpi`;
    //   svgString = pureSvg.replace(/ width="[^"]*"/, ` width="${150}"`).replace(/height="[^"]*"/, `height="${150}"`);
    // }  else if(i === 3) {
    //   fileName = `${folderName}_${200}_xhdpi`;
    //   svgString = pureSvg.replace(/ width="[^"]*"/, ` width="${200}"`).replace(/height="[^"]*"/, `height="${200}"`);
    // }  else if(i === 4) {
    //   fileName = `${folderName}_${300}_xxhdpi`;
    //   svgString = pureSvg.replace(/ width="[^"]*"/, ` width="${300}"`).replace(/height="[^"]*"/, `height="${300}"`);
    // }  else if(i === 5) {
    //   fileName = `${folderName}_${400}_xxxhdpi`;
    //   svgString = pureSvg.replace(/ width="[^"]*"/, ` width="${400}"`).replace(/height="[^"]*"/, `height="${400}"`);
    // }
 

    if(i === 0) {
      fileName = `${folderName}_ldpi`;
      svgString = pureSvg.replace(/ width="[^"]*"/, ` width="${size}"`).replace(/height="[^"]*"/, `height="${size}"`);
    } else if(i === 1) {
      savedSize = size / 0.75
      fileName = `${folderName}_mdpi`;
      svgString = pureSvg.replace(/ width="[^"]*"/, ` width="${size / 0.75}"`).replace(/height="[^"]*"/, `height="${size / 0.75}"`);
    } else if(i === 2) {
      fileName = `${folderName}_hdpi`;
      svgString = pureSvg.replace(/ width="[^"]*"/, ` width="${1.5 * savedSize}"`).replace(/height="[^"]*"/, `height="${1.5 * savedSize}"`);
    }  else if(i === 3) {
      fileName = `${folderName}_xhdpi`;
      svgString = pureSvg.replace(/ width="[^"]*"/, ` width="${2 * savedSize}"`).replace(/height="[^"]*"/, `height="${2 * savedSize}"`);
    }  else if(i === 4) {
      fileName = `${folderName}_xxhdpi`;
      svgString = pureSvg.replace(/ width="[^"]*"/, ` width="${3 * savedSize}"`).replace(/height="[^"]*"/, `height="${3 * savedSize}"`);
    }  else if(i === 5) {
      fileName = `${folderName}_xxxhdpi`;
      svgString = pureSvg.replace(/ width="[^"]*"/, ` width="${4 * savedSize}"`).replace(/height="[^"]*"/, `height="${4 * savedSize}"`);
    }
   


    
    

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
    zip.file(`${folderName}_${size}px_imageset/${fileName}.png`, pngDataUri.split(';base64,').pop(), { base64: true });

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

export default downloadAndroidImageset;
