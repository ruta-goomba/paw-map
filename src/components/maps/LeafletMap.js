import React, {PropTypes} from 'react';
import { Map, TileLayer } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';

const gradient = { '0.1': '#89BDE0', '0.2': '#96E3E6', '0.4': '#82CEB6', '0.6': '#FAF3A5', '0.8': '#F5D98B', '1.0': '#DE9A96'};

const LeafletMap = ({points, date}) => (
  <div className="section__map">
    <Map center={[52.629729, -1.131592]} zoom={7}>
      <HeatmapLayer
        fitBoundsOnLoad
        fitBoundsOnUpdate
        points={points}
        longitudeExtractor={m => m['location'][0]}
        latitudeExtractor={m => m['location'][1]}
        gradient={gradient}
        intensityExtractor={m => m['weight']} />
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  </div>
);

LeafletMap.propTypes = {
  date: PropTypes.string.isRequired,
  points: PropTypes.array
};

export default LeafletMap;
