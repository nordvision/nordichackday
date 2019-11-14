import * as React from 'react';
import { Marker, Popup } from 'react-leaflet';
import './map-widget.css';

class Pin extends React.Component {
  render() {
    return (
      <Marker
        className="circle"
        position={this.props.coordinates}
        fillOpacity={this.props.opacity}
        weight={0}
        {...this.props}
        >
        <Popup text="hej">
            <div>
              <p>Read the article: <a href={"" + this.props.url}>{this.props.name}</a></p>
            </div>
        </Popup>
        </Marker>
    );
  }
}

export default Pin;
