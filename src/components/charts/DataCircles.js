import React, {PropTypes} from 'react';
/* eslint-disable react/display-name react/no-multi-comp */

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
  data: PropTypes.array,
  xScale: PropTypes.func,
  yScale: PropTypes.func
};

export default DataCircles;
