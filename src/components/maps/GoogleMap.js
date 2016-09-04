import React, {PropTypes} from 'react';
import GoogleMap from 'google-map-react';
import LoadingDots from '../common/LoadingDots';
import MapMarker from './MapMarker';

/* eslint-disable react/jsx-no-bind */

const default_position = {lat: 52.629729, lng: -1.131592};
const text = '...';
let markers = [];

class GMap extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      map: {},
      maps: {}
    };

    this.updateMapState = this.updateMapState.bind(this);
    this.clearOverlays = this.clearOverlays.bind(this);
    this.setNewOverlay = this.setNewOverlay.bind(this);
    this.createNewOverlay = this.createNewOverlay.bind(this);
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.points[0] !== this.props.points[0]){
      this.updateMapState();
    }
  }

  clearOverlays() {
    while(markers.length) { markers.pop().setMap(null); }
    markers.length = 0;
  }

  setNewOverlay(heatmap){
    markers.push(heatmap);
    markers[0].setMap(this.state.map);
  }

  createNewOverlay(){
    const heatmap = new this.state.maps.visualization.HeatmapLayer({
      data: this.props.points.map(point => (
      {
        location: new this.state.maps.LatLng(point['location'][1], point['location'][0]),
        weight: point['weight']
      }))
    });
    return heatmap;
  }

  updateMapState(event){
    if (this.state.maps.visualization) {
      this.clearOverlays();
      const heatmap = this.createNewOverlay();
      this.setNewOverlay(heatmap);
    }
  }

  render(){
    return (
      <div className="section__map" style={{height:this.props.map_styles.height +'px'}}>
        {(this.props.loading) ? <LoadingDots/> : null}
        <GoogleMap
          bootstrapURLKeys={{
            key: 'AIzaSyD1K2OVJWLAZvnNT6Ae_ZOdsE9F_9uTBLY',
            language: 'en'
          }}
          defaultCenter={default_position}
          defaultZoom={6}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({map, maps}) => {
            this.setState({map: map, maps: maps});
            this.updateMapState();
          }}
        >
          {[0, 1, 2].map(pos =>
            <MapMarker
              key={pos}
              lat={(this.props.hotspots.length>0) ? this.props.hotspots[pos]['location'][1] : '52.629729'}
              lng={(this.props.hotspots.length>0) ? this.props.hotspots[pos]['location'][0] : '-1.131592'}
              text={(this.props.hotspots.length>0)  ? (this.props.hotspots[pos]['weight']).toString() : text}
            />)}
        </GoogleMap>
      </div>
    );
  }
}

GMap.propTypes = {
  date: PropTypes.string.isRequired,
  points: PropTypes.array,
  hotspots: PropTypes.array,
  loading: PropTypes.bool,
  map_styles: PropTypes.object
};

export default GMap;
