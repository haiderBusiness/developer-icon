import {Component, useEffect} from "react";

import { setIconObject } from '../../store/actions';
import DynamicSvgComponent from "../DynamicSvgComponent";
import getItemByName from './getItemByName';

import styles from "../../styles/iconsList.module.css"
import iconSections from "../../asets/iconsSections/iconSections.json"
import Theme from "../../theme/Theme";


const iconSectionsArr = iconSections

function Cell ({      
  allIcons,
  columnIndex,
  rowIndex,
  style,
  customParam,
  isSelectedItemIndex,
  onClick,
  }) {



    let state = {
      onClick: onClick,
      itemIndex: null,
      IconFunction: null,
      iconName: null,
      iconSectionName: null,
      style: null,
      clickedStyle: null,
      iconLicenseName: null,
      iconLicenseLink: null
    };

    // const [state, setState] = useState(initialState)

    
  

    const onIconClick = (IconFunc) => {
      // const { onClick, rowIndex, customParam, columnIndex } = this.props;
      // const itemIndex = rowIndex * customParam.columnCount + columnIndex

      const { onClick, itemIndex, IconFunction, iconName, iconSectionName, iconLicenseName, iconLicenseLink  } = state;

      // console.log("IconFunc: ", IconFunc)
      const obj = {
        itemIndex: itemIndex,
        iconFunction: IconFunc,
        iconName: iconName.trim(),
        iconSectionName: iconSectionName,
        iconLicenseName: iconLicenseName,
        iconLicenseLink: iconLicenseLink
      }
      onClick(obj);
      // dispatch(setIconObject(IconFunc));
    };


    
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

    state = {
      onClick: onClick,
      itemIndex: index,
      IconFunction: SingleIcon,
      iconName: name,
      iconSectionName: matchingShortcutObj.name,
      iconLicenseName: matchingShortcutObj.licenseName,
      iconLicenseLink: matchingShortcutObj.licenseLink,
      style: style,
      clickedStyle: clickedStyle
      
    };





    return (
      <div
        style={{
          ...style,
          // ...customStyle
        }}
      >
        <div
          id={rowIndex}
          style={clickedStyle}
          className={styles.childDiv}
          onClick={() => onIconClick(SingleIcon)}
        >
          <div className={styles.iconDiv}>
            {SingleIcon && <SingleIcon 
            size={35} 
            className={styles.icon} />}
            {/* <DynamicSvgComponent data={SingleIcon()} className={styles.icon} width={35} height={35} /> */}
          </div>

          <div className={styles.textDiv}>
            <div className={styles.text}>{SingleIcon ? state.iconName : 'undefined'}</div>
            <div className={styles.iconSectionText}>{SingleIcon ? state.iconSectionName : "undefined"}</div>
            {/* <div className={styles.iconSectionText}>{iconSectionName}</div> */}
          </div>
        </div>
      </div>
    );
  }



  export default Cell;