import * as React from 'react';
import { Marker } from 'react-leaflet';
import './map-widget.css';

class Pin extends React.Component {
  render() {
    return (
      <Marker
        className="circle"
        position={this.props.center}
        fillOpacity={this.props.opacity}
        weight={0}
        {...this.props}
      />
    );
  }
}

export default Pin;
