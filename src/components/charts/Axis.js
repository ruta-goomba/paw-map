import React, {PropTypes} from 'react';
import * as d3 from 'd3';

class Axis extends React.Component {
  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    const node  = this.refs.axis;
    const axis = (this.props.orient === 'bottom') ? d3.axisBottom(this.props.scale) : d3.axisLeft(this.props.scale);
    d3.select(node).call(axis);
  }

  render() {
    return (<g className="axis" ref="axis" transform={this.props.translate}></g>);
  }
}

Axis.propTypes = {
  translate: PropTypes.string,
  orient: PropTypes.string,
  scale: PropTypes.func
};

export default Axis;
