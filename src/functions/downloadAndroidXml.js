import getSvgoInstance from 'svgo-browser/lib/get-svgo-instance';

import React, { useState } from 'react';
import svg2vectordrawable from 'svg2vectordrawable';

const downloadAndroidXml = (receivedSvgString, fileName = "icon") => {
    // // Create an SVG string
    // const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="blue" /></svg>`;


    const svgo = getSvgoInstance();
  
    // svgo.optimize(receivedSvgString, {
    //     plugins: [{ name: 'android' }],
    //   }).then((res) => {
    //     //TODO: 
    //     const optimizedSvgString = res.data

    //     console.log("svgo svg: ", optimizedSvgString)
    //     console.log("svg: ", receivedSvgString)
        // // Convert the SVG string to a Blob
        // const blob = new Blob([optimizedSvgString], { type: 'text/plain' });

        // // Create a download link
        // const url = URL.createObjectURL(blob);
        // const a = document.createElement('a');
        // a.href = url;

        // const editedFileName = `${fileName.trim()}.svg`
        // a.download = editedFileName;

        // // Append the link to the document and trigger the click event
        // document.body.appendChild(a);
        // a.click();

        // // Clean up
        // document.body.removeChild(a);
        // URL.revokeObjectURL(url);
    // });

    const svgString = receivedSvgString.replace(/ width="[^"]*"/, ` width="24"`).replace(/height="[^"]*"/, `height="24"`);
    svg2vectordrawable(svgString).then((xmlString) => {

      // const modifiedXmlString = xmlString.replace('android:viewportWidth="24"', 'android:viewportWidth="960"').replace('android:viewportHeight="24"', 'android:viewportHeight="960"');

      const modifiedXmlString = xmlString.replace(/ android:viewportWidth="[^"]*"/, `android:viewportWidth="960"`).replace(/android:viewportHeight="[^"]*"/, `android:viewportHeight="960"`);

      const blob = new Blob([modifiedXmlString], { type: 'application/xml' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = `${fileName.trim()}.xml`;

      document.body.appendChild(a);
      a.click();

      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    })
    



    // convertSvgToVectorDrawable(svgString).then((item) => console.log("item",item));
   
    // console.log("xmlFile: ", xmlFile)
};



// const convertSvgToVectorDrawable = (svgCode) => {
//     return new Promise((resolve, reject) => {
//       svg2vectordrawable(svgCode, (err, result) => {
//         if (err) {
//           console.error('Error converting SVG to Vector Drawable:', err);
//           reject(err);
//         } else {
//           resolve(result);
//         }
//       });
//     });
//   };

// const convertSvgToVectorDrawable = (svgCode) => {
//     svg2vectordrawable(svgCode, (err, result) => {
//       if (err) {
//         console.error('Error converting SVG to Vector Drawable:', err);
//         return null
//       } else {
//         return result;
//       }
//     });
//   };



export default downloadAndroidXml



