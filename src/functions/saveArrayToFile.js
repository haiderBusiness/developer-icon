function saveArrayToFile(arrayToSave, fileName) {
    const jsonData = JSON.stringify(arrayToSave);
    const blob = new Blob([jsonData], { type: "application/json" });
    
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
  
    // Append the link to the body
    document.body.appendChild(link);
  
    // Trigger a click on the link to start the download
    link.click();
  
    // Remove the link from the document
    document.body.removeChild(link);
  }

  export default saveArrayToFile;