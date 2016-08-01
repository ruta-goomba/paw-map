import React, {PropTypes} from 'react';
import Info from '../common/Info';
import Section from '../common/Section';
import Radios from '../selectors/Radios';
import LeafletMap from '../maps/LeafletMap';
import ScatterPlot from '../charts/ScatterPlot';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as crimeActions from '../../actions/crimeActions';

const chartStyles = {
  width   : 750,
  height  : 400,
  padding : 50
};

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
    this.props.actions.loadCrimeHotSpots(event.target.value);
    this.props.actions.loadCrimeTotals(event.target.value);
    return this.setState({category: event.target.value});
  }

  updateDateState(event){
    return this.setState({date: event.target.value});
  }

  render(){
    return (
      <div>
        <Info
          text="The data for visualisations is obtained from the UK police API.
        Documentation for this API can be found "
          link="https://data.police.uk/docs/"
        />
        <Section header_content="UK crime heatmaps by crime type (excluding Scotland) for April 2016">
          <Info
            text="Select the crime category to see the heat map of that crime.
            The locations with top three incidences of that crime are marked on the map"
          />
          <Radios
            categories={this.props.crime_categories}
            selected={this.state.category}
            onRadioChange={this.updateCategoryState}
          />
          <LeafletMap
            points={this.props.crimes}
            date={this.state.date}
            hotspots={this.props.hot_spots}
          />
        </Section>
        <Section header_content="Total number of crimes of each category committed in the country between 2015 and 2016 (excluding Scotland)">
          <Info
            text="Select the crime category to see the total number of crimes
            committed on monthly basis for the time period between May 2015 and May 2016"
          />
        </Section>
        <Radios
          categories={this.props.crime_categories}
          selected={this.state.category}
          onRadioChange={this.updateCategoryState}
        />
        <ScatterPlot {...{data: this.props.crime_totals}} {...chartStyles} />
      </div>
    );
  }
}

HomePage.propTypes = {
  crimes: PropTypes.array.isRequired,
  crime_categories: PropTypes.array.isRequired,
  crime_dates: PropTypes.array.isRequired,
  crime_totals: PropTypes.array,
  category: PropTypes.string,
  hot_spots: PropTypes.array,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    crimes: state.crimes,
    crime_categories: state.crime_categories,
    crime_dates: state.crime_dates,
    crime_totals: state.crime_totals,
    category: state.category,
    hot_spots: state.spots
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(crimeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
