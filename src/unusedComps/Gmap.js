import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 35.06,
      lng: -85.25
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyCJsSot2i2j3pYs4h4Os3aOH_BOiwTuFG8",
          language: "en",
          region: "US"
              }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
>
        
          <AnyReactComponent
            lat={35.1}
            lng={-85}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;