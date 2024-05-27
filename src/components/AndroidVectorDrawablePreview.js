import React, { useEffect, useState } from 'react';

const AndroidVectorDrawablePreview = ({ xmlString }) => {
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    // Create a Blob from the Android Vector Drawable XML string
    const blob = new Blob([xmlString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);

    // Load the SVG content from the Blob URL
    fetch(url)
      .then((response) => response.text())
      .then((svgContent) => setSvgContent(svgContent));

    // Clean up the Blob URL when the component is unmounted
    return () => {
      URL.revokeObjectURL(url);
    }; 
  }, [xmlString]);



  return (
    <div>
      {svgContent && (
        <div>
          <h3>Android Vector Drawable Preview:</h3>
          <div style={{backgroundColor: "red", height: "100px", width: "100px", color: "white"}} dangerouslySetInnerHTML={{ __html: svgContent }} />
          {/* <svg
            style={{backgroundColor: "red"}}
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            dangerouslySetInnerHTML={{ __html: xmlString }}
          /> */}
        </div>
      )}
    </div>
  );
};

export default AndroidVectorDrawablePreview;