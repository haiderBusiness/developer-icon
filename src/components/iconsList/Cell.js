import {Component} from "react";

import { setIconFunction } from '../../store/actions';
import DynamicSvgComponent from "../DynamicSvgComponent";
import getItemByName from './getItemByName';

import styles from "../../styles/iconsList.module.css"
import iconSections from "../../asets/iconsSections/iconSections.json"
import Theme from "../../theme/Theme";


const iconSectionsArr = iconSections

class Cell extends Component {
  constructor(props) {
    super(props);
  }

  onIconClick = (IconFunc) => {
    const { onClick, rowIndex, customParam, columnIndex } = this.props;
    const itemIndex = rowIndex * customParam.columnCount + columnIndex
    const obj = {
      itemIndex: itemIndex,
      iconFunction: IconFunc
    }
    onClick(obj);
    // dispatch(setIconFunction(IconFunc));
  };

  render() {
    const {
      allIcons,
      columnIndex,
      rowIndex,
      style,
      customParam,
      isSelectedItemIndex,
    } = this.props;

    const SingleIcon = allIcons[rowIndex * customParam.columnCount + columnIndex];

    if(!SingleIcon) {
      return null
    }
    const clickedStyle = { 
      boxShadow: isSelectedItemIndex ? `0 0 5px ${Theme.colors.themeBlue}` : null,
    }

    



    const hashWithoutHashtag = window.location.hash.replace('#', '');
    const hash = hashWithoutHashtag.replaceAll('-', ' ');
    const iconSectionName = window.location.hash ? hash : 'Ant Design Icons';

    const shortcutSmallCase = getItemByName(iconSectionsArr, iconSectionName);

    const shortcut = shortcutSmallCase
      ? shortcutSmallCase.replace(/^\w/, (match) => match.toUpperCase())
      : '';

    // if (SingleIcon.name) {

    // }
    // console.log("SingleIcon.name: ", SingleIcon)
    const nameWithoutShortcut = SingleIcon.name.replace(shortcut, '');

    // put a space between before each word starts with capital letter
    const name = nameWithoutShortcut.replace(/([A-Z])(?![A-Z])/g, ' $1');

    const customStyle = {
      marginLeft: columnIndex === 0 ? '25px' : '0px',
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
          onClick={() => this.onIconClick(SingleIcon)}
        >
          <div className={styles.iconDiv}>
            {SingleIcon && <SingleIcon size={35} className={styles.icon} />}
            {/* <DynamicSvgComponent data={SingleIcon()} className={styles.icon} width={35} height={35} /> */}
          </div>

          <div className={styles.textDiv}>
            <div className={styles.text}>{SingleIcon ? name : 'undefined'}</div>
            <div className={styles.iconSectionText}>{iconSectionName}</div>
          </div>
        </div>
      </div>
    );
  }
}



  export default Cell;