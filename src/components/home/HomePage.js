import React, {PropTypes} from 'react';
import Info from '../common/Info';
import Section from '../common/Section';
import Radios from '../selectors/Radios';
import LeafletMap from '../maps/LeafletMap';
import LinePlot from '../charts/LinePlot';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as crimeActions from '../../actions/crimeActions';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      category: 'violent-crime',
      date: '2016-04',
      loading: false,
      chart_styles: {
        width   : 750,
        height  : 400,
        padding : 50
      }
    };

    this.updateCategoryState = this.updateCategoryState.bind(this);
    this.updateDateState = this.updateDateState.bind(this);
    this.updateLoadState = this.updateLoadState.bind(this);
    this.updateCategoryActions = this.updateCategoryActions.bind(this);
    this.afterReRender = this.afterReRender.bind(this);
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.category !== this.state.category){
      this.afterReRender(this.state.category);
    } else if (prevProps.crime_totals !== this.props.crime_totals){
      this.updateLoadState();
    }
  }

  afterReRender(category){
    const _this = this;
    //wait for DOM update
    window.setTimeout(function () {
      window.requestAnimationFrame(() => {_this.updateCategoryActions(category);});
    }, 0);
  }

  updateCategoryState(event){
    return this.setState({category: event.target.value, loading: true});
  }

  updateCategoryActions(category){
    this.props.actions.loadCrimes(category);
    this.props.actions.loadCrimeHotSpots(category);
    this.props.actions.loadCrimeTotals(category);
  }

  updateLoadState(){
    return this.setState({loading: false});
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
            loading={this.state.loading}
          />
        </Section>
        <Section header_content="Total number of crimes of each category committed in the country between 2015 and 2016 (excluding Scotland)">
          <Info
            text="Select the crime category to see the total number of crimes
            committed on monthly basis for the time period between March 2015 and May 2016"
          />
        </Section>
        <Radios
          categories={this.props.crime_categories}
          selected={this.state.category}
          onRadioChange={this.updateCategoryState}
        />
        <LinePlot
          {...{data: this.props.crime_totals, loading:this.state.loading}}
          {...this.state.chart_styles} />
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
