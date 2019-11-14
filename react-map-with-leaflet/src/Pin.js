import * as React from 'react';
import { Marker, Popup } from 'react-leaflet';
import './map-widget.css';
import L from 'leaflet';

class Pin extends React.Component {
  

  render() {

    

    const redIcon = new L.Icon({
        iconUrl: require('./img/red.jpg'),
         //iconRetinaUrl: require('../img/marker-pin-person.svg'),
        iconAnchor: null,
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(60, 75),
        className: 'leaflet-div-icon'
    });
   /* const redIcon = L.icon({
      iconUrl: 'https://library.kissclipart.com/20180830/wxe/kissclipart-leaflet-red-marker-clipart-computer-icons-map-clip-8f7aa090f29836d5.jpg',
      //shadowUrl: 'leaf-shadow.png',
  
      iconSize:     [38, 95], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });*/

    return (
      <Marker
        icon = {redIcon}
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
