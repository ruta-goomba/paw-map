import * as d3 from 'd3';
import React from 'react';
import DataCircles from './DataCircles';
import XYAxis from './XYAxis';

const xRange = function(props){
  const range = [props.padding];
  let pos = props.padding;
  const total = props.width - props.padding;
  const interval = total/props.data.length;
  for (let i = 1; i<props.data.length; i++){
    range.push(pos + interval);
    pos += interval;
  }
  return range;
};
const yMax   = (data)  => d3.max(data, (d) => d[1]);
const yMin   = (data)  => d3.min(data, (d) => d[1]);
const xScale = (props) => {
  return d3.scaleOrdinal()
    .range(xRange(props));
};
const yScale = (props) => {
  return d3.scaleLinear()
    .domain([yMin(props.data), yMax(props.data)])
    .range([props.height - props.padding, props.padding]);
};
const marshalProps = (props) => {
  const scales = { xScale: xScale(props), yScale: yScale(props) };
  return Object.assign({}, props, scales);
};

const ScatterPlot = (props) => {
  const d3Props = marshalProps(props);
  return (
    <div className="section__chart--line">
      <svg width={d3Props.width} height={d3Props.height}>
        <DataCircles {...d3Props}/>
        <XYAxis {...d3Props}/>
      </svg>
    </div>
  );
};

export default ScatterPlot;
