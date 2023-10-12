'use client'
import { useRef, useEffect, PropsWithChildren } from "react"
import { MapContainer, Marker, Popup, TileLayer, useMap, Polyline } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import { LatLngExpression } from "leaflet"

export const Map: React.FC<PropsWithChildren> = () => {

    var latlngs: LatLngExpression[] = [
        [54.25949505530297756195068359375, -4.4629850797355175018310546875],
        [54.26073423586785793304443359375, -4.46283244527876377105712890625],
        [54.2616585083305835723876953125, -4.46297091431915760040283203125],
    ];
    return (
        <MapContainer
            center={latlngs[0]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: '100vh' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Polyline
                positions={latlngs}
                color="red"
                weight={6} />
        </MapContainer>
    )

}
