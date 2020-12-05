import React from 'react';
import GoogleMapReact from 'google-map-react';
import MyMarker from './MyMarker';



const points = [
    { id: 1, title: "Glass St. Gardens", lat: 34.93, lng: -85.3},
    { id: 2, title: "St.Elmo Gardens", lat: 35.1, lng: -85 },
    { id: 3, title: "Hill City Gardens", lat: 35, lng: -84.9 }
];

export default function GoogleMap() {
    
   
 
      return (
  
        <div className=" mr-auto" style={{ height: '50vh', width: '50%' }}>
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
