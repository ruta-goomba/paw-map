import React, {PropTypes} from 'react';
/* eslint-disable react/display-name */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prop-types */

const renderCircles = (props) => {
  return (coords, index) => {
    const circleProps = {
      cx: props.xScale(coords[0]),
      cy: props.yScale(coords[1]),
      r: 2,
      key: index
    };
    return <circle {...circleProps} />;
  };
};

const DataCircles = (props) => {
  return <g>{props.data.map(renderCircles(props))}</g>;
};

DataCircles.propTypes = {
  data: PropTypes.array
};

renderCircles.propTypes = {
  xScale: PropTypes.func,
  yScale: PropTypes.func
};

export default DataCircles;
