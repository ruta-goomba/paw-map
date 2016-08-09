import React, {PropTypes} from 'react';
import * as d3 from 'd3';
/* eslint-disable react/no-multi-comp */

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

renderLine.propTypes = {
  data: PropTypes.array,
  xScale: PropTypes.func,
  yScale: PropTypes.func
};

export default DataLine;
