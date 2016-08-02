import React from 'react';
import * as d3 from 'd3';

const renderLine = (props) => {
  let path = d3.line()
    .x((d) => { return props.xScale(d[0]); })
    .y((d) => { return props.yScale(d[1]); })
    .curve(d3.curveCatmullRom.alpha(0.5));
  return <path d={path(props.data)} strokeLinecap="round" stroke="black" fill="none"/>;
};

const DataLine = (props) => {
  return (<g>{renderLine(props)}</g>);
};

export default DataLine;
