import React, {PropTypes} from 'react';
import Intro from '../common/Intro';
import Section from '../common/Section';
import Radios from '../forms/Radios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as crimeActions from '../../actions/crimeActions';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      category: 'violent-crime',
      errors: {}
    };

    this.updateCategoryState = this.updateCategoryState.bind(this);
  }

  updateCategoryState(event) {
    return this.setState({category: event.target.value});
  }

  render(){
    return (
      <div>
        <Intro/>
        <Section header_content="UK crime heatmaps by crime type (excluding Scotland) for January 2016">
          <Radios
            categories={this.props.crime_categories}
            selected={this.state.category}
            onRadioChange={this.updateCategoryState}
          />
        </Section>
        <Section header_content="UK crime charts by crime type (excluding Scotland) for January 2016">
          <Intro/>
        </Section>
      </div>
    );
  }
}

HomePage.propTypes = {
  crimes: PropTypes.array.isRequired,
  crime_categories: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    crimes: state.crimes,
    crime_categories: state.crime_categories,
    category: state.category
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(crimeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
