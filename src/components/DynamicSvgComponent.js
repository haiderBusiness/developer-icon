 import React, {useState, useEffect} from 'react';
 import styles from "../styles/modal.module.css"

const DynamicSvgComponent = ({ data, width = 100, height = 100, fill = "#373737", className = ""}) => {
  const [svgData, setSvgData] = useState({});

  useEffect(() => {
    if (data && data.props && data.props.children) {
      const obj = {};
      obj.viewBox = data.props.attr.viewBox;
      setSvgData(obj);
    }
  }, [data]);

  if (!data || !data.props || !data.props.children) {
    return null;
  }

  const processChild = (child, index) => {
    if (!child.type) {
      return null; // Ignore if the type is not provided
    }

    const { type, key, ref, props } = child;
    const attributes = {};

    // Extract all properties from props
    for (const propKey in props) {
      let propValue = props[propKey];
      if (propKey !== 'children') {
        if (propKey === 'strokeWidth') {
          attributes[propKey] = propValue;
          attributes['stroke'] = '#373737';
          attributes['fill'] = 'none';
        } else {
          attributes[propKey] = propValue;
        }
      }
    }

    switch (type) {
      case 'path':
        return <path key={key || index} {...attributes} />;
      case 'circle':
        return <circle key={key || index} {...attributes} />;
      case 'polyline':
        return <polyline key={key || index} {...attributes} />;
      case 'polygon':
        return <polygon key={key || index} {...attributes} />;
      case 'rect':
        return <rect key={key || index} {...attributes} />;
      case 'line':
        return <line key={key || index} {...attributes} />;
      case 'ellipse':
        return <ellipse key={key || index} {...attributes} />;
      case 'text':
        return <text key={key || index} {...attributes}>{props.children}</text>;
      case 'g':
        // Recursively process the children of the group
        const groupChildren = props.children.map(processChild);
        return <g key={key || index} {...attributes}>{groupChildren}</g>;
      case 'image':
        return <image key={key || index} {...attributes} />;
      case 'use':
        return <use key={key || index} {...attributes} />;
      case 'defs':
        // Recursively process the children of defs
        const defsChildren = props.children.map(processChild);
        return <defs key={key || index} {...attributes}>{defsChildren}</defs>;
      case 'radialGradient':
        const gradientStops = props.children.map(processChild);
        return React.createElement(type, { key, ...props }, gradientStops);
      case 'stop':
        return React.createElement(type, { key, ...props });
      default:
        return null;
    }
  };

  const svgElements = data.props.children.map(processChild);

  return (
    <svg
      className={className}
      viewBox={svgData.viewBox}
      width={width}
      height={height}
      fill={fill}
    >
      {svgElements}
    </svg>
  );
};


export default DynamicSvgComponent;

