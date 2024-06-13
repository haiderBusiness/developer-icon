/// -> DIRECT SVG DOWNLOAD WITHOUT MANIPULATION
// const downloadSvg = (svgString, fileName = "icon") => {
//     // // Create an SVG string
//     // const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="blue" /></svg>`;

//     // Convert the SVG string to a Blob
//     const blob = new Blob([svgString], { type: 'image/svg+xml' });

//     // Create a download link
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;

//     const editedFileName = `${fileName.trim()}.svg`
//     a.download = editedFileName;

//     // Append the link to the document and trigger the click event
//     document.body.appendChild(a);
//     a.click();

//     // Clean up
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
// };

// export default downloadSvg

/// -> MANIPULATED SVG DOWNLOAD

import getSvgoInstance from "svgo-browser/lib/get-svgo-instance";

const downloadSvg = (
  svgString,
  fileName = "icon",
  callBack = () => {
    console.log("you need to do the callback...this is just a test console");
  }
) => {
  // // Create an SVG string
  // const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="blue" /></svg>`;

  const svgo = getSvgoInstance();

  svgo.optimize(svgString).then((res) => {
    //TODO:
    const optimizedSvgString = res.data;

    // Convert the SVG string to a Blob
    const blob = new Blob([svgString], { type: "image/svg+xml" });

    // Create a download link
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;

    const editedFileName = `${fileName.trim()}.svg`;
    a.download = editedFileName;

    a.addEventListener("click", () => {
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
  });
};

export default downloadSvg;
