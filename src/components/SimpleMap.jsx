import React from 'react';
import GoogleMapReact from 'google-map-react';
import marker from "../assets/beer.png";

function SimpleMap({brewery}){
	const defaultProps = {
		center: {
			lat: 41.50030645,
			lng: -81.56529555
		},
		zoom: 11
	};

	const {
		name: mapName,
		city: mapCity,
		coordinates: mapCoords,
		state: mapState,
		postal_code: mapPostal_code,
	} = brewery;
	
	// eslint-disable-next-line
	const MyCustomMarker = () => <a href={`https://www.google.com/maps/search/?api=1&query=${mapName}%2C${mapCity}%2C${mapState}%2C${mapPostal_code}`} target="_blank" rel="noreferrer noopener"><img src={marker} className="h-[25px] w-[25px]"/></a>
		
	return(
		<div className="w-[300px] h-[340px] lg:w-[560px] lg:h-[680px]">
			<GoogleMapReact
					yesIWantToUseGoogleMapApiInternals
					bootstrapURLKeys={{key: 'AIzaSyCypv7AfN84bnMefCZRnXQaGoe8E6aF6dk'}}
					zoom={defaultProps.zoom}
					center={mapCoords ? {lat: mapCoords[0], lng: mapCoords[1]} : defaultProps.center}
			>
				<MyCustomMarker
						lat={mapCoords ? mapCoords[0] : defaultProps.center[0]}
						lng={mapCoords ? mapCoords[1] : defaultProps.center[1]}
				/>
			</GoogleMapReact>
		</div>
	);
}

export default SimpleMap
