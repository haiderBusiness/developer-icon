function calculateColumnCount(divWidth, smallNumber, columnWidth = 160) {

    const objToReturn = {numberOfColums: 1, justifyContent: "center"}
      if (smallNumber <= 7) {
  
        // if( divWidth >= (smallNumber * columnWidth) ) {
        //   return smallNumber
        // } else 
        // if( divWidth < (smallNumber * columnWidth) )  {
  
  
          // if ( divWidth >= ((smallNumber - 1) * columnWidth)){
          //   return (smallNumber - 1)
          // } else if (divWidth >= ((smallNumber - 2) * columnWidth)) {
          //   return (smallNumber - 2)
          // } else if (divWidth >= ((smallNumber - 3) * columnWidth)) {
          //   return (smallNumber - 3)
          // } else if (divWidth >= ((smallNumber - 4) * columnWidth)) {
          //   return (smallNumber - 4)
          // } else if (divWidth >= ((smallNumber - 5) * columnWidth)) {
          //   return (smallNumber - 5)
          // } else if (divWidth >= ((smallNumber - 6) * columnWidth)) {
          //   return (smallNumber - 6)
          // } 
  
  
          // if ( divWidth >= (smallNumber * columnWidth) ) {
          //     return smallNumber
          //   } else if ( (smallNumber - 6) >= 1 && divWidth >= ((smallNumber - 6) * columnWidth)) {
          //   console.log("first smallNumber: ", smallNumber, "-", 6,  " = ", (smallNumber - 6) )
          //   return (smallNumber - 6)
          // } else if ( (smallNumber - 5) >= 1 && divWidth >= ((smallNumber - 5) * columnWidth)) {
          //   console.log("second smallNumber: ", smallNumber, "-", 5,  " = ", (smallNumber - 5) )
          //   return (smallNumber - 5)
          // } else if ( (smallNumber - 4) >= 1 && divWidth >= ((smallNumber - 4) * columnWidth)) {
          //   console.log("third smallNumber: ", smallNumber, "-", 4,  " = ", (smallNumber - 4) )
          //   return (smallNumber - 4)
          // } else if ( (smallNumber - 3) >= 1 && divWidth >= ((smallNumber - 3) * columnWidth)) {
          //   console.log("fourth smallNumber: ", smallNumber, "-", 3,  " = ", (smallNumber - 3) )
          //   return (smallNumber - 3)
          // } else if ( (smallNumber - 2) >= 1 && divWidth >= ((smallNumber - 2) * columnWidth)) {
          //   console.log("fifth smallNumber: ", smallNumber, "-", 2,  " = ", (smallNumber - 2) )
          //   return (smallNumber - 2)
          // } else if ( (smallNumber - 1) >= 1 && divWidth >= ((smallNumber - 1) * columnWidth)){
          //   console.log("sexth smallNumber: ", smallNumber, "-", 1,  " = ", (smallNumber - 1) )
          //   return (smallNumber - 1)
          // } 
  
  
          if ( divWidth >= (smallNumber * columnWidth) && divWidth >=  (smallNumber * columnWidth) + columnWidth ) {
            
            objToReturn.numberOfColums = smallNumber
            objToReturn.justifyContent = "flex-start"
            return objToReturn
          }
  
          else if ( divWidth >= (smallNumber * columnWidth) && divWidth < (smallNumber * columnWidth) + columnWidth ) {
            objToReturn.numberOfColums = smallNumber
            return objToReturn
          } else if ( (smallNumber - 1) >= 1 && divWidth >= ((smallNumber - 1) * columnWidth)){
            //console.log("sexth smallNumber: ", smallNumber, "-", 1,  " = ", (smallNumber - 1) )
            
            objToReturn.numberOfColums = (smallNumber - 1)
            return objToReturn
          } else if ( (smallNumber - 2) >= 1 && divWidth >= ((smallNumber - 2) * columnWidth)) {
            //console.log("fifth smallNumber: ", smallNumber, "-", 2,  " = ", (smallNumber - 2) )
            
            objToReturn.numberOfColums = (smallNumber - 2)
            return objToReturn
          } else if ( (smallNumber - 3) >= 1 && divWidth >= ((smallNumber - 3) * columnWidth)) {
            //console.log("fourth smallNumber: ", smallNumber, "-", 3,  " = ", (smallNumber - 3) )
            
            objToReturn.numberOfColums = (smallNumber - 3)
            return objToReturn
          } else if ( (smallNumber - 4) >= 1 && divWidth >= ((smallNumber - 4) * columnWidth)) {
            //console.log("third smallNumber: ", smallNumber, "-", 4,  " = ", (smallNumber - 4) )
            
            objToReturn.numberOfColums = (smallNumber - 4)
            return objToReturn
          } else if ( (smallNumber - 5) >= 1 && divWidth >= ((smallNumber - 5) * columnWidth)) {
            //console.log("second smallNumber: ", smallNumber, "-", 5,  " = ", (smallNumber - 5) )
            
            objToReturn.numberOfColums = (smallNumber - 5)
            return objToReturn
          } else if ( (smallNumber - 6) >= 1 && divWidth >= ((smallNumber - 6) * columnWidth)) {
            //console.log("first smallNumber: ", smallNumber, "-", 6,  " = ", (smallNumber - 6) )
            
            objToReturn.numberOfColums = (smallNumber - 6)
            return objToReturn
            }
  
  
  
        // }
      }
  
      if (divWidth >= 1210) {
        objToReturn.numberOfColums = 7
        return objToReturn; 
      } else if (divWidth >= 1070) {
        objToReturn.numberOfColums = 6
        return objToReturn;
      } else if (divWidth >= 930) {
        objToReturn.numberOfColums = 5
        return objToReturn;
      } if (divWidth >= 790) {
        objToReturn.numberOfColums = 4
        return objToReturn;
      } else if (divWidth >= 650) {
        objToReturn.numberOfColums = 3
        return objToReturn;
      } else if (divWidth >= 550) {
        objToReturn.numberOfColums = 3
        return objToReturn;
      } else if (divWidth >= 346) {
        objToReturn.numberOfColums = 2
        return objToReturn;
      } else if(divWidth >= 260) {
        objToReturn.numberOfColums = 1
        return objToReturn;
      } else {
        objToReturn.numberOfColums = 1
        return objToReturn;
      } 
  }

  export default calculateColumnCount;