import React, {PropTypes} from 'react';
import Intro from '../common/Intro';
import Section from '../common/Section';
import Radios from '../selectors/Radios';
import ButtonGroup from '../selectors/ButtonGroup';
import LeafletMap from '../maps/LeafletMap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as crimeActions from '../../actions/crimeActions';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      category: 'violent-crime',
      date: '2015-05',
      errors: {}
    };

    this.updateCategoryState = this.updateCategoryState.bind(this);
    this.updateDateState = this.updateDateState.bind(this);
  }

  updateCategoryState(event) {
    return this.setState({category: event.target.value});
  }

  updateDateState(event){
    return this.setState({date: event.target.value});
  }

  render(){
    return (
      <div>
        <Intro/>
        <Section header_content="UK crime heatmaps by crime type (excluding Scotland) for January 2016">
          <ButtonGroup
            dates={this.props.crime_dates}
            selected={this.state.date}
            onButtonClick={this.updateDateState}
          />
          <Radios
            categories={this.props.crime_categories}
            selected={this.state.category}
            onRadioChange={this.updateCategoryState}
          />
          <LeafletMap/>
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
  crime_dates: PropTypes.array.isRequired,
  category: PropTypes.string,
  date: PropTypes.string,
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
