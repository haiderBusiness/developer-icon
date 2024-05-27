
// import imageConversion from 'image-conversion';

// import Compressor from 'compressorjs';



// const compressImageAndDownload = (blob, fileName) => {
//     new Compressor(blob, {
//         quality: 0.5, // Adjust the quality as needed (0 to 1)
//         success(result) {
//           // `result` is the compressed Blob or Uint8Array

//           // Create a temporary anchor element to trigger the download
//           const downloadLink = document.createElement('a');
//           downloadLink.href = URL.createObjectURL(result);
//           downloadLink.download = `${fileName}.png`; // Change the filename as needed

//           // Trigger a click event to start the download
//           downloadLink.click();

//           // Clean up the created link
//           URL.revokeObjectURL(downloadLink.href);
//         },
//         error(err) {
//           console.error(err.message);
//         },
//       });
// }

// const downloadSvgAsPng = async (svgString, fileName = "image") => {

//     // Create a data URI from the SVG string
//     const svgDataUri = `data:image/svg+xml;base64,${btoa(svgString)}`;

//     // Create an Image element
//     const img = new Image();

//     // Set the Image source to the SVG data URI
//     img.src = svgDataUri;

//     // After the image is loaded, draw it onto a canvas
//     img.onload = async () => {
//       const canvas = document.createElement('canvas');
//       const ctx = canvas.getContext('2d');
//       canvas.width = img.width;
//       canvas.height = img.height;
//       ctx.drawImage(img, 0, 0, img.width, img.height);

//     //   console.log("imageWidth: ", img.width)

//       // Convert the canvas to a data URL representing the PNG format
//     //   const pngDataUri = canvas.toDataURL('image/png');

//     //   const pngDataUri = await imageConversion.compressToPNG(canvas, { quality: 0.1});

//     canvas.toBlob((blob) => { 
//         compressImageAndDownload(blob, fileName)
//     })
    
//     //   console.log("comppressedImage: ", comppressedImage)

//       // Create a temporary anchor element to trigger the download
//     //   const downloadLink = document.createElement('a');
//     //   downloadLink.href = pngDataUri;
//     //   downloadLink.download = `${fileName}.png`;

//     //   // Trigger the download
//     //   downloadLink.click();
//     };
//   };





// import React, { useRef } from 'react';
// import Compressor from 'compressorjs';
// // import { optimize } from 'svgo-browser';
// import optimize from 'svgo-browser/lib/optimize';
// // import { optimize } from 'svgo';

// // const result = optimize(svgString, {
// //   path: 'path-to.svg', // recommended
// //   multipass: true, // all other config fields are available here
// // });

// // const optimizedSvgString = result.data;



//   const downloadSvgAsPng = async (svgString2, fileName) => {
//     // Get the SVG element as a string
//     // const svgString = new XMLSerializer().serializeToString(svgRef.current);

//     // Optimize the SVG using svgo

//     const svgString = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//     <path fill-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill="currentColor"/>
//     <path fill-rule="evenodd" d="M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z" fill="currentColor"/>
//   </svg>`;
//     // const optimizedSvgString = await optimizeSvg(svgString);

//     // Create a data URI from the optimized SVG string
//     const svgDataUri = `data:image/svg+xml;base64,${btoa(svgString)}`;

//     // Create an Image element
//     const img = new Image();

//     // Set the Image source to the SVG data URI
//     img.src = svgDataUri;

//     // After the image is loaded, draw it onto a canvas
//     img.onload = async () => {
//       // Create a canvas with dimensions similar to the SVG
//       const canvas = document.createElement('canvas');
//       const ctx = canvas.getContext('2d');
//       canvas.width = img.width; // Set canvas width to SVG width
//       canvas.height = img.height; // Set canvas height to SVG height
//       ctx.drawImage(img, 0, 0, img.width, img.height);

//       // Convert the canvas to a Blob
//       canvas.toBlob((blob) => {
//         // Use Compressor to compress the Blob
//         new Compressor(blob, {
//           quality: 0.1, // Adjust the quality as needed (0 to 1)
//           success(result) {
//             // `result` is the compressed Blob or Uint8Array

//             // Create a temporary anchor element to trigger the download
//             const downloadLink = document.createElement('a');
//             downloadLink.href = URL.createObjectURL(result);
//             downloadLink.download = 'image.png'; // Change the filename as needed

//             // Trigger a click event to start the download
//             downloadLink.click();

//             // Clean up the created link
//             URL.revokeObjectURL(downloadLink.href);
//           },
//           error(err) {
//             console.error(err.message);
//           },
//         });
//       }, 'image/png');
//     };
//   };

//   const optimizeSvg = async (svgString) => {
//     const result = await svgo.optimize(svgString);
//     return result.data;
//   };



/// -> WITH IMAGE OPTIMAIZATION
// import getSvgoInstance from 'svgo-browser/lib/get-svgo-instance';
// import Compressor from 'compressorjs';


// const compressImageAndDownload = (blob, fileName) => {
//     new Compressor(blob, {
//         quality: 0.5, // Adjust the quality as needed (0 to 1)
//         success(result) {
//           // `result` is the compressed Blob or Uint8Array
          
//           // Create a temporary anchor element to trigger the download
//           const downloadLink = document.createElement('a');
//           downloadLink.href = URL.createObjectURL(result);
//           downloadLink.download = `${fileName}.png`; // Change the filename as needed

//           // Trigger a click event to start the download
//           downloadLink.click();

//           console.log("here we got: ", result)

//           // Clean up the created link
//           URL.revokeObjectURL(downloadLink.href);
//         },
//         error(err) {
//           console.error(err.message);
//         },
//       });
// }



// const downloadSvgAsPng = async (svgString, fileName) => {
//     // Get the SVG element as a string
//     // const svgString = new XMLSerializer().serializeToString(svgRef.current);

//     // Optimize the SVG using svgo-browser
//     const svgo = getSvgoInstance();
  
//     svgo.optimize(svgString).then((res) => {
//         const optimizedSvgString = res.data

//         const svgDataUri = `data:image/svg+xml;base64,${btoa(optimizedSvgString)}`;

//         // Create an Image element
//         const img = new Image();

//         // Set the Image source to the SVG data URI
//         img.src = svgDataUri;

//         // After the image is loaded, draw it onto a canvas
//         img.onload = async () => {
//             const canvas = document.createElement('canvas');
//             const ctx = canvas.getContext('2d');
//             // canvas.width = img.width;
//             // canvas.height = img.height;
//             // ctx.quality = 0.1
//             // ctx.drawImage(img, 0, 0, img.width, img.width);
//             canvas.width = (img.width - 120);
//             canvas.height = (img.height - 120);
//             ctx.drawImage(img, 0, 0, (img.width - 120), (img.width - 120));

//             //   console.log("imageWidth: ", img.width)
//             // Convert the canvas to a data URL representing the PNG format
//             //   const pngDataUri = canvas.toDataURL('image/png');

//             //   const pngDataUri = await imageConversion.compressToPNG(canvas, { quality: 0.1});

//             canvas.toBlob((blob) => { 
                
//                 compressImageAndDownload(blob, fileName)
//             })
//         };
//     });
// }

// export default downloadSvgAsPng;



/// -> WITH IMAGE OPTIMAIZATION
import getSvgoInstance from 'svgo-browser/lib/get-svgo-instance';




const downloadSvgAsPng = async (svgString, fileName, size, callBack = () => {console.log("you need to do the callback...this is just a test console")}) => {

     // Optimize the SVG using svgo-browser
    const svgo = getSvgoInstance();
  
    svgo.optimize(svgString).then((res) => {
        //TODO: 
        const optimizedSvgString = res.data

        // Convert the optimized SVG to PNG
        const blob = new Blob([svgString], { type: 'image/svg+xml' });
        const svgUrl = URL.createObjectURL(blob);

        // Create an Image element
        const img = new Image();

        // Set the Image source to the SVG data URI
        img.src = svgUrl;

        // After the image is loaded, draw it onto a canvas
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);

            // Convert the canvas to a data URL representing the PNG format
            const pngDataUri = canvas.toDataURL('image/png');

            // Create a temporary anchor element to trigger the download
            const downloadLink = document.createElement('a');
            downloadLink.href = pngDataUri;
            downloadLink.download = `${fileName}_${size}.png`;;


            downloadLink.addEventListener('click', () => {
                setTimeout(() => {
                  callBack();
                }, 500); // Adjust the delay as needed
                
              });

            // Trigger the download
            downloadLink.click();

            // Clean up the created link
            URL.revokeObjectURL(svgUrl);
        };
    });

    
}

export default downloadSvgAsPng;