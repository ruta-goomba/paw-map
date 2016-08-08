import React, {PropTypes} from 'react';
import { Map, TileLayer, Marker} from 'react-leaflet';
import { divIcon, point } from 'leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import LoadingDots from '../common/LoadingDots';

const gradient = { '0.1': '#89BDE0', '0.2': '#96E3E6', '0.4': '#82CEB6', '0.6': '#FAF3A5', '0.8': '#F5D98B', '1.0': '#DE9A96'};
const default_position = [52.629729, -1.131592];
const text = '...';

const LeafletMap = ({points, date, hotspots, loading}) => {
  return (
    <div className="section__map">
      {(loading) ? <LoadingDots/> : null}
      <Map center={[52.629729, -1.131592]} zoom={6}>
        <HeatmapLayer
          points={points}
          longitudeExtractor={m => m['location'][0]}
          latitudeExtractor={m => m['location'][1]}
          gradient={gradient}
          intensityExtractor={m => m['weight']}/>
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {[0, 1, 2].map(pos =>
          <Marker key={Math.random()}
                  position={(hotspots.length>0) ? [hotspots[pos]['location'][1],hotspots[pos]['location'][0]] : default_position}
                  icon={divIcon({className: 'section__map__marker--crime-hot-spot', html:(hotspots.length>0)  ? (hotspots[pos]['weight']).toString() : text, iconSize: point(40, 40)})}
          />
        )}
      </Map>
    </div>
  );
};

LeafletMap.propTypes = {
  date: PropTypes.string.isRequired,
  points: PropTypes.array,
  hotspots: PropTypes.array,
  loading: PropTypes.bool
};

export default LeafletMap;
