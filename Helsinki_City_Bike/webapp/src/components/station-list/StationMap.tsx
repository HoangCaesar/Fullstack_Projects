import React, { useRef, useEffect } from "react";
import L from "leaflet";

// ==============================|| STATION VIEW  ||============================== //

const StationMap = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        const map = L.map(mapRef.current).setView([lat, lng], zoom);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        L.marker([lat, lng]).addTo(map);
    }, [lat, lng, zoom]);

    return <div ref={mapRef} style={{ height: '300px' }} />;
};

export default StationMap;
