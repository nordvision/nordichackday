import React, { Component } from 'react';
import { Map as LeafletMap, GeoJSON, TileLayer } from 'react-leaflet'
import Pins from './Pins.js';
import worldGeoJSON from 'geojson-world-map';

class MapWidget extends Component {
  constructor(props) {
    super(props)
    let pins = []
    for (let i = 0; i < 5000; i++) {
      pins.push([Math.floor(Math.random() * 50), Math.floor(Math.random() * 50)]);
    }
    this.state = {
      pins
    }
  }


  render() {

    const pins = this.state.pins
    return (
      <LeafletMap
        center={[50, 10]}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Pins {...this.props} pins={pins}/>
      </LeafletMap>
    );
  }
}

export default MapWidget;
