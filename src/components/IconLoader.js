
import React, {Component, useEffect} from "react"
import iconLoaderStyles from "../styles/iconLoader.module.css"
import styles from "../styles/iconsList.module.css"
import { FixedSizeGrid as Grid } from 'react-window';



class Cell extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      const {
        loaderArray,
        columnIndex,
        rowIndex,
        style,
        customParam,
      } = this.props;
  
      const index = rowIndex * customParam.columnCount + columnIndex;
      const SingleIcon = loaderArray[index];
  
      if(!SingleIcon) {
        return null
      }
      
  
      return (
        <div
          style={{
            ...style,
            // ...customStyle
          }}
        >
          <span className={iconLoaderStyles.loader}></span>
        </div>
      );
    }
  }



export default function IconLoader({loaderArray = [], listAttributes = {}, style, outerRef, className = styles.list }) {


    
    return(
        loaderArray.length > 0 ? (
        <Grid
            // style={style}
            // ref={ref}
            // outerRef={outerRef} 
            className={styles.iconLoader}
            columnCount={listAttributes.columnCount}
            // columnCount={2}
            // rowCount={loaderArray.length / listAttributes.columnCount}
            rowCount={Math.ceil(loaderArray.length / listAttributes.columnCount)}
            
            // rowCount={2}
            columnWidth={listAttributes.columnWidth}
            rowHeight={150}
            height={window.innerHeight}
            // height={200}
            width={window.innerWidth}
            // width={listAttributes.divWidth}
            // width={listAttributes.divWidth}
            // onScroll={onScroll}
            
        >
            {({ columnIndex, rowIndex, style }) => (
            <Cell
                columnIndex={columnIndex}
                rowIndex={rowIndex}
                style={style}
                customParam={listAttributes}
                loaderArray={loaderArray}
               
                // dispath={dispatch}
            />
            )}
        </Grid>)
        :
        (<span className={iconLoaderStyles.loader}></span>)
    )
}


