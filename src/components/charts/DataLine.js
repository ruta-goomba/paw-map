import React from 'react';
import * as d3 from 'd3';

const renderLine = (props) => {
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

const DataLine = (props) => {
  return <path d={} datum={props.data}/>;
};

export default DataLine;
