import React, {PropTypes} from 'react';
import { Map, Marker} from 'react-leaflet';
import { divIcon, point } from 'leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import LoadingDots from '../common/LoadingDots';
import {GoogleLayer} from 'react-leaflet-google';

/* eslint-disable react/jsx-no-bind */

const default_position = [52.629729, -1.131592];
const text = '...';

const LeafletMap = ({points, date, hotspots, loading, map_styles}) => {
  return (
    <div className="section__map" style={{height:map_styles.height +'px'}}>
      {(loading) ? <LoadingDots/> : null}
      <Map center={[52.629729, -1.131592]} zoom={6}>
        <HeatmapLayer
          points={points}
          longitudeExtractor={m => m['location'][0]}
          latitudeExtractor={m => m['location'][1]}
          intensityExtractor={m => m['weight']}
          blur={0.01}
          radius={0.01}
          max={(hotspots.length>0) ? hotspots[0]['weight'] : 3}
        />
        <GoogleLayer googlekey="AIzaSyD1K2OVJWLAZvnNT6Ae_ZOdsE9F_9uTBLY"  type="ROADMAP"/>
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
  loading: PropTypes.bool,
  map_styles: PropTypes.object
};

export default LeafletMap;
