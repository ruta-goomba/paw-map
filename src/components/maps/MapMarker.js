import React, {PropTypes} from 'react';
import {MapMarkerStyle} from './MapMarkerStyle';

const MapMarker = ({lat, lng, text}) => {
  return (
    <div className="section__map--marker" style={MapMarkerStyle}>
      {text}
    </div>
  );
};

MapMarker.propTypes = {
  lat: PropTypes.string.isRequired,
  lng: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default MapMarker;
