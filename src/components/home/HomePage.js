import React, {PropTypes} from 'react';
import Intro from '../common/Intro';
import Section from '../common/Section';
import Radios from '../selectors/Radios';
import LeafletMap from '../maps/LeafletMap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as crimeActions from '../../actions/crimeActions';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      category: 'violent-crime',
      date: '2016-04',
      errors: {}
    };

    this.updateCategoryState = this.updateCategoryState.bind(this);
    this.updateDateState = this.updateDateState.bind(this);
  }

  updateCategoryState(event) {
    this.props.actions.loadCrimes(event.target.value);
    return this.setState({category: event.target.value});
  }

  updateDateState(event){
    return this.setState({date: event.target.value});
  }

  render(){
    return (
      <div>
        <Intro/>
        <Section header_content="UK crime heatmaps by crime type (excluding Scotland) for April 2016">
          <Radios
            categories={this.props.crime_categories}
            selected={this.state.category}
            onRadioChange={this.updateCategoryState}
          />
          <LeafletMap
            points={this.props.crimes}
            date={this.state.date}
          />
        </Section>
      </div>
    );
  }
}

HomePage.propTypes = {
  crimes: PropTypes.array.isRequired,
  crime_categories: PropTypes.array.isRequired,
  crime_dates: PropTypes.array.isRequired,
  category: PropTypes.string,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    crimes: state.crimes,
    crime_categories: state.crime_categories,
    crime_dates: state.crime_dates,
    category: state.category
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(crimeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
