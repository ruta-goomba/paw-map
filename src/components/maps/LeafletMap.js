import React, {PropTypes} from 'react';
import GoogleMap from 'google-map-react';
import LoadingDots from '../common/LoadingDots';
import MapMarker from './MapMarker';

/* eslint-disable react/jsx-no-bind */

const default_position = {lat: 52.629729, lng: -1.131592};
const text = '...';
//googlekey="AIzaSyD1K2OVJWLAZvnNT6Ae_ZOdsE9F_9uTBLY"

const LeafletMap = ({points, date, hotspots, loading, map_styles}) => {
  return (
    <div className="section__map" style={{height:map_styles.height +'px'}}>
      {(loading) ? <LoadingDots/> : null}
      <GoogleMap
        defaultCenter={default_position}
        defaultZoom={6}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({map, maps}) => {
          const heatmap = new maps.visualization.HeatmapLayer({
            data: points.map(point => (
              {location: new maps.LatLng(point['location'][1], point['location'][0]),
              weight: point['weight']}))
          });
          heatmap.setMap(map);
        }}
      >
        {[0, 1, 2].map(pos =>
          <MapMarker
            key={pos}
            lat={(hotspots.length>0) ? hotspots[pos]['location'][1] : '52.629729'}
            lng={(hotspots.length>0) ? hotspots[pos]['location'][0] : '-1.131592'}
            text={(hotspots.length>0)  ? (hotspots[pos]['weight']).toString() : text}
        />)}
      </GoogleMap>
    </div>
  );
};

LeafletMap.propTypes = {
  date: PropTypes.string.isRequired,
  points: PropTypes.array,
  hotspots: PropTypes.array,
  loading: PropTypes.bool,
  map_styles: PropTypes.object
};

export default LeafletMap;
