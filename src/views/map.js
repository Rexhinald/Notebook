import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const styleMap = {
    width: 800,
    height: 600,
}
const styleRoot = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const center = {
    lat: 41.3275,
    lng: 19.8187,
};

const Map =() => {
    return (
        <div style={styleRoot}>
            <LoadScript
                googleMapsApiKey="AIzaSyAy40HIQO-hI7SQWRg-HPUVjyEmGWtjLEI"
            >
                <GoogleMap
                    mapContainerStyle={styleMap}
                    center={center}
                    zoom={13}
                />
            </LoadScript>
        </div>
    )
}
export default React.memo(Map);