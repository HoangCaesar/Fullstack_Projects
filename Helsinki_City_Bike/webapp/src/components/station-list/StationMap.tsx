import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

// Project import
import { Station } from '../../models';

// type
interface StationMapleProps {
    lat: number;
    lng: number;
    zoom: number;
    stationInfo?: Station;
}

// ==============================|| STATION VIEW  ||============================== //

const StationMap = ({ lat, lng, zoom, stationInfo }: StationMapleProps) => {
    const [coordinates, setCoordinates] = useState<StationMapleProps>({ lat, lng, zoom });

    useEffect(() => {
        setCoordinates({ lat, lng, zoom });
    }, [lat, lng, zoom]);

    return (
        <MapContainer
            center={[coordinates.lat, coordinates.lng]}
            zoom={coordinates.zoom}
            scrollWheelZoom={false}
            style={{ width: '90vw', height: '100vh' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[coordinates.lat, coordinates.lng]}>
                <Popup>
                    {stationInfo?.station?.station} <br /> {stationInfo?.station?.address?.address?.label}.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default StationMap;
