import {Component} from "react";

import { setIconObject } from '../../store/actions';
import DynamicSvgComponent from "../DynamicSvgComponent";
import getItemByName from './getItemByName';

import styles from "../../styles/iconsList.module.css"
import iconSections from "../../asets/iconsSections/iconSections.json"
import Theme from "../../theme/Theme";


const iconSectionsArr = iconSections

class Cell extends Component {
  constructor(props) {
    super(props);

    const {
      allIcons,
      columnIndex,
      rowIndex,
      style,
      customParam,
      isSelectedItemIndex,
      onClick,
    } = this.props;



    const index = rowIndex * customParam.columnCount + columnIndex;
    const SingleIcon = allIcons[index];

    if(!SingleIcon) {
      return null
    }
    const clickedStyle = { 
      boxShadow: isSelectedItemIndex ? `0 0 5px ${Theme.colors.themeBlue}` : null,
    }

    



    // const hashWithoutHashtag = window.location.hash.replace('#', '');
    // const hash = hashWithoutHashtag.replaceAll('-', ' ');
    // const iconSectionName = window.location.hash ? hash : 'Ant Design Icons';
    
    // const shortcutSmallCase = getItemByName(iconSectionsArr, iconSectionName);


    // search for the first object in the array where the SingleIcon.name starts with the corresponding shortcut. If a match is found, it logs the matching shortcut
    const matchingShortcutObj = iconSectionsArr.find(icon => SingleIcon.name.toLowerCase().startsWith(icon.shortcut.toLowerCase()));

    // console.log("matchingShortcutObj", matchingShortcutObj)


    // const shortcut = shortcutSmallCase
    //   ? shortcutSmallCase.replace(/^\w/, (match) => match.toUpperCase())
    //   : '';

    // make shortcut starts with capital letter
    const capitalShortcut = matchingShortcutObj.shortcut.replace(/^\w/, (match) => match.toUpperCase())

    // if (SingleIcon.name) {

    // }
    // console.log("SingleIcon.name: ", SingleIcon)
    const nameWithoutShortcut = SingleIcon.name.replace(capitalShortcut, '');

    // put a space between before each word starts with capital letter
    const name = nameWithoutShortcut.replace(/([A-Z])(?![A-Z])/g, ' $1');


    const customStyle = {
      marginLeft: columnIndex === 0 ? '25px' : '0px',
    };

    this.state = {
      onClick: onClick,
      itemIndex: index,
      IconFunction: SingleIcon,
      iconName: name,
      iconSectionName: matchingShortcutObj.name,
      style: style,
      clickedStyle: clickedStyle
    };





  }

  onIconClick = (IconFunc) => {
    // const { onClick, rowIndex, customParam, columnIndex } = this.props;
    // const itemIndex = rowIndex * customParam.columnCount + columnIndex

    const { onClick, itemIndex, IconFunction, iconName, iconSectionName  } = this.state;

    // console.log("IconFunc: ", IconFunc)
    const obj = {
      itemIndex: itemIndex,
      iconFunction: IconFunc,
      iconName: iconName,
      iconSectionName: iconSectionName
    }
    onClick(obj);
    // dispatch(setIconObject(IconFunc));
  };

  render() {
   

    const { onClick, itemIndex, IconFunction, iconName, iconSectionName, style, clickedStyle  } = this.state;



    return (
      <div
        style={{
          ...style,
          // ...customStyle
        }}
      >
        <div
          id={this.props.rowIndex}
          style={clickedStyle}
          className={styles.childDiv}
          onClick={() => this.onIconClick(IconFunction)}
        >
          <div className={styles.iconDiv}>
            {IconFunction && <IconFunction 
            size={35} 
            className={styles.icon} />}
            {/* <DynamicSvgComponent data={SingleIcon()} className={styles.icon} width={35} height={35} /> */}
          </div>

          <div className={styles.textDiv}>
            <div className={styles.text}>{IconFunction ? iconName : 'undefined'}</div>
            <div className={styles.iconSectionText}>{IconFunction ? iconSectionName : "undefined"}</div>
            {/* <div className={styles.iconSectionText}>{iconSectionName}</div> */}
          </div>
        </div>
      </div>
    );
  }
}



  export default Cell;