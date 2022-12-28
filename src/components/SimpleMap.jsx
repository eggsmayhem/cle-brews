import React,{useState , useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import marker from "../assets/beer.png"
function SimpleMap({coords}){
  const defaultProps = {
    center: {
      lat: 41.50030645,
      lng: -81.56529555
    },
    zoom: 11
  };
    // const [coordinates , setCoordinates] = useState(defaultProps.center);

    // const MyCustomMarker = () => <span className="material-icons">place</span>;
    //add link to image that pulls in coords in a link to external google maps 
    const MyCustomMarker = () => <img src={marker} className="h-[25px] w-[25px]"/>
    
  //   useEffect(() => {
  //      setCoordinates({coords});
  //  }, [{coords}])
   
    return(
      <div className="w-[300px] h-[340px]">
          <GoogleMapReact
              yesIWantToUseGoogleMapApiInternals
              bootstrapURLKeys={{key: 'yourkey'}}
              // defaultZoom={defaultProps.zoom}
              // defaultCenter={defaultProps.center}
              zoom={defaultProps.zoom}
              center={coords ? {lat: coords[0], lng: coords[1]} : defaultProps.center}
              // center={defaultProps.center}
          >
              <MyCustomMarker
                  lat={coords ? coords[0] : defaultProps.center[0]}
                  lng={coords ? coords[1] : defaultProps.center[1]}
              />
          </GoogleMapReact>
        </div>
    )
}

export default SimpleMap
