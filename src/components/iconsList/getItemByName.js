function getItemByName(arr, name) {
    const searchingName = name.replaceAll("-", " ")
    // let i = 0;
    // const maxIterations = arr.length;
    // let foundItem;
    // while (true) {
  
    //   console.log("1: ", arr[i].name.toLowerCase(), " 2: ", searchingName.toLowerCase());
    //     if(arr[i].name.toLowerCase() === searchingName.toLowerCase()) {
    //       foundItem = arr[i]
    //       break;
    //     }
    //     if (i === maxIterations - 1) {
    //         break;
    //     }
  
    //     // Your loop logic goes here
  
    //     i++;
    // }
  
  
    var foundItem = arr.find(function (item) {
        // console.log("original: ", item.name.toLowerCase(), "to be searched ",searchingName.toLowerCase())
        // console.log("1: ", item.name.toLowerCase(), " 2: ", searchingName.toLowerCase());
        // console.log("searchingName.toLowerCase()", searchingName.toLowerCase())
        return item.name.toLowerCase() === searchingName.toLowerCase();
    });
  
    return foundItem ? foundItem["shortcut"] : null;
  }

  export default getItemByName;