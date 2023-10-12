'use client'
import { useRef, useEffect, PropsWithChildren } from "react"
import { MapContainer, Marker, Popup, TileLayer, useMap, Polyline } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import { LatLngExpression } from "leaflet"

export const Map: React.FC<PropsWithChildren> = () => {

    var latlngs: LatLngExpression[] = [
        [53.90563071705400943756103515625, -1.694386638700962066650390625],
        [53.92242218367755413055419921875, -1.71332848258316516876220703125],
        [53.93093031831085681915283203125, -1.69319883920252323150634765625],
    ];
    return (
        <MapContainer
            center={latlngs[0]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: '50vh' }}
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
