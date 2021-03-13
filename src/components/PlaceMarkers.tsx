import React, {useState} from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import {Location} from "../constants/constants";

interface PlaceMarkersProps {
    location: Location
}

/**
 * The PlaceMarkers component returns a Marker for a location on a GoogleMap. It will also display an InfoWindow if the marker is clicked
 * @param {location} param0 the location object which contains the country name and location, city names, and years visited
 */
const PlaceMarkers = ({location}: PlaceMarkersProps) => {

  const [showDescription, setDescription] = useState(false);
  const toggleDescription = () => setDescription(!showDescription);
  return (
    <React.Fragment>
      <Marker position={location.location} onClick={() => setDescription(true)}/>
      {showDescription ? 
        <InfoWindow position={location.location} onCloseClick={toggleDescription}>
          <div>
            <span className="info-window-title">
              {location.country}
            </span>
            <span className="info-window-sub">
              {'Cities: ' + location.cities.join(', ')}
            </span>
            <span className="info-window-sub">
              {'Years: ' + location.years.join(', ')}
            </span>
          </div>
        </InfoWindow>
        :
        null
      }
    </React.Fragment>
  );
}
 
export default PlaceMarkers;