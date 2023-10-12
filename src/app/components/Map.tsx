'use client'
import { useRef, useEffect, PropsWithChildren } from "react"
import { MapContainer, Marker, Popup, TileLayer, useMap, Polyline, Tooltip } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import { LatLngExpression } from "leaflet"

interface MapProps {
    currentHike: Hike
}

export const Map = ({ currentHike }: MapProps) => {

    // convert hike to tracks
    const allTracks: LatLngExpression[][] = []
    currentHike.tracks.forEach((trk) => {
        const lte: LatLngExpression[] = trk.points.map((gpsPoint) => {
            return [gpsPoint.lat, gpsPoint.lng]
        });

        allTracks.push(lte)
    })

    // createPolyLines
    const polyLines = allTracks.map((track) => {
        return (

            <Polyline
                positions={track}
                color="red"
                weight={6}>
                <Tooltip sticky>Day 2: 2023-04-09</Tooltip>
            </Polyline>

        )
    })

    return (
        <MapContainer
            center={allTracks[0][0]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: '50vh' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {polyLines}

        </MapContainer>
    )

}
