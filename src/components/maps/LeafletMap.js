import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

const LeafletMap = () => (
  <div className="section__map">
    <Map center={[52.629729, -1.131592]} zoom={6}>
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  </div>
);

export default LeafletMap;
