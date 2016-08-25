import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries} from 'react-vis';

function processData(props){
  let data = Object.assign({}, props.data);
  if (Object.keys(props.data).length !== props.current_data.length){
    for (let key in data){
      if (props.current_data.indexOf(key) === -1){
        delete data[key];
      }
    }
  }
  return data;
}

const StackedBarPlot = (props) => {
  let data = processData(props);
  return (
    <XYPlot
      xType="ordinal"
      width={props.width}
      height={props.height}
      stackBy="y">
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      {props.current_data.map(category =>
        <VerticalBarSeries
          key={category}
          data={data[category]}/>
      )}
    </XYPlot>
  )
};

export default StackedBarPlot;
