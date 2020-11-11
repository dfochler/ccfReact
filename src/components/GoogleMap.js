import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export default class GoogleMap extends Component {
    
   
    render() {
      return (
        <React.Fragment>
        <div className="mt-5 ml-auto mr-3" style={{ height: '50vh', width: '50%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key:"AIzaSyCJsSot2i2j3pYs4h4Os3aOH_BOiwTuFG8",
            language: "en",
            region: "US"
                }}
            defaultCenter={{lat: 35.06, lng:-85.25}}
            defaultZoom={11}>
          </GoogleMapReact>
        </div>
        </React.Fragment>
      );
    }
  }