import React, {PropTypes} from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries} from 'react-vis';

function processData(data, current_data){
  let d = Object.assign({}, data);
  if (Object.keys(data).length !== current_data.length){
    for (let key in d){
      if (current_data.indexOf(key) === -1){
        delete d[key];
      }
    }
  }
  return d;
}

const StackedBarPlot = ({data, current_data, chart_styles}) => {
  let d = processData(data, current_data);
  return (
    <XYPlot
      xType="ordinal"
      width={chart_styles.width}
      height={chart_styles.height}
      stackBy="y">
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      {current_data.map(category =>
        <VerticalBarSeries
          key={category}
          data={d[category]}/>
      )}
    </XYPlot>
  )
};

StackedBarPlot.propTypes = {
  data: PropTypes.object.isRequired,
  current_data: PropTypes.array.isRequired,
  chart_styles: PropTypes.object.isRequired
};

export default StackedBarPlot;
