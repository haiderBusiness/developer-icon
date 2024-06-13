import getSvgoInstance from "svgo-browser/lib/get-svgo-instance";

const copySvgAsPngToClipboard = async (
  svgString,
  size,
  callBack = () => {
    console.log("you need to do the callback...this is just a test console");
  }
) => {
  // Optimize the SVG using svgo-browser
  const svgo = getSvgoInstance();

  svgo.optimize(svgString).then((res) => {
    const optimizedSvgString = res.data;

    // Convert the optimized SVG to PNG
    const blob = new Blob([optimizedSvgString], { type: "image/svg+xml" });
    const svgUrl = URL.createObjectURL(blob);

    // Create an Image element
    const img = new Image();

    // Set the Image source to the SVG data URI
    img.src = svgUrl;

    // After the image is loaded, draw it onto a canvas
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);

      // Convert the canvas to a Blob representing the PNG format
      canvas.toBlob(async (blob) => {
        try {
          // Write the Blob to the clipboard
          await navigator.clipboard.write([
            new ClipboardItem({
              "image/png": blob,
            }),
          ]);
          console.log("Image copied to clipboard");

          // Execute the callback
          callBack();
        } catch (error) {
          console.error("Failed to copy image to clipboard:", error);
        } finally {
          // Clean up the created URL
          URL.revokeObjectURL(svgUrl);
        }
      }, "image/png");
    };
  });
};

export default copySvgAsPngToClipboard;
