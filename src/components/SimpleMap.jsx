import React,{useState , useEffect} from 'react';
import GoogleMapReact from 'google-map-react';

function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 41.50030645,
      lng: -81.56529555
    },
    zoom: 11
  };
    // const [coordinates , setCoordinates] = useState(defaultProps.center);

    const MyCustomMarker = () => <span className="material-icons">place</span>;
    
  //   useEffect(() => {
  //      setCoordinates({coords});
  //  }, [{coords}])
   
    return(
      <div className="w-[300px] h-[340px]">
          <GoogleMapReact
              yesIWantToUseGoogleMapApiInternals
              bootstrapURLKeys={{key: process.env.GOOGLE_API_KEY}}
              // defaultZoom={defaultProps.zoom}
              // defaultCenter={defaultProps.center}
              zoom={defaultProps.zoom}
              center={defaultProps.center}
          >
              <MyCustomMarker
                  lat={defaultProps.center[0]}
                  lng={defaultProps.center[1]}
              />
          </GoogleMapReact>
        </div>
    )
}

export default SimpleMap
