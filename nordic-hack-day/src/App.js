import Leaflet from 'leaflet'
import React, { StrictMode } from 'react'
import CustomComponentExample from './Components/custom-component';

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/'



  const App = () => (
    <StrictMode>
        <CustomComponentExample/>
        
        </StrictMode>

)

export default App;


//const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet;

/*class App extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('container'))*/
