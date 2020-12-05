import React from 'react';
import GoogleMapReact from 'google-map-react';
import MyMarker from './MyMarker';



const points = [
    { id: 1, title: "Round Pond", lat: 34.93, lng: -85.3},
    { id: 2, title: "The Long Water", lat: 35.1, lng: -85 },
    { id: 3, title: "The Serpentine", lat: 35, lng: -84.9 }
];

export default function GoogleMap() {
    
   
 
      return (
  
        <div className="mt-5 ml-auto mr-3" style={{ height: '50vh', width: '50%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key:"AIzaSyCJsSot2i2j3pYs4h4Os3aOH_BOiwTuFG8",
            language: "en",
            region: "US"
                }}
            defaultCenter={{lat: 35.06, lng:-85.25}}
            defaultZoom={9}>
               {points.map(({ lat, lng, id, title }) => {
          return (
            <MyMarker 
              key={id}
              lat={lat}
              lng={lng}
              text={id}
              tooltip={title}
            />
          );
        })}  
          </GoogleMapReact>
        </div>
        
      );
    }
