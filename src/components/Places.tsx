import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import PlaceMarkers from './PlaceMarkers';
import {locationData} from '../constants/constants';

const containerStyle = {
  width: '100%',
  height: '50rem',
  borderRadius: ".5rem"
};

const center = {
  lat: 20,
  lng: 30,
};

/**
 * The Places component returns a GoogleMap with Markers on it for each location I've visited
 * the location data comes from the LocationData.js file (it is hardcoded but I'm planning on making an API to make updating the data easier)
 */
const Places = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY!
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        isLoaded ? <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={2}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {locationData.map((location) => <PlaceMarkers location={location} key={location.country}/>)}
            </GoogleMap>
        </div> : <></>
    );
}
 
export default React.memo(Places);