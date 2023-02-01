import { useRef, useEffect } from 'react';
import L from 'leaflet';

// type
interface StationMapleProps {
    lat: number;
    lng: number;
    zoom: number;
}

// ==============================|| STATION VIEW  ||============================== //

const StationMap = ({ lat, lng, zoom }: StationMapleProps) => {
    const mapRef = useRef<any>(' ');

    useEffect(() => {
        if (!mapRef.current) return;
        const map = L.map(mapRef.current).setView([lat, lng], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        L.marker([lat, lng]).addTo(map);

        return function cleanup() {
            map.remove();
        };
    }, [lat, lng, zoom]);

    return (
        <div
            ref={mapRef}
            style={{ objectFit: 'cover', width: '100%', maxHeight: '400px', minHeight: '400px' }}
        />
    );
};

export default StationMap;
