'use client'
import { useRef, useEffect, PropsWithChildren } from "react"
import { MapContainer, Marker, Popup, TileLayer, useMap, Polyline, Tooltip } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import { LatLngExpression } from "leaflet"

interface MapProps {
    currentHike?: Hike
}

export const Map = ({ currentHike }: MapProps) => {

    // convert hike to tracks
    const allTracks: LatLngExpression[][] = []
    currentHike?.tracks.forEach((trk) => {
        const lte: LatLngExpression[] = trk.points.map((gpsPoint) => {
            return [gpsPoint.lat, gpsPoint.lng]
        });

        allTracks.push(lte)
    })

    const defaultLocation = { lat: 53.79648, lng: -1.54785 }
    const mapCenter = allTracks.length > 0 ? allTracks[0][0] : defaultLocation
    const mapZoom = allTracks.length > 0 ? 11 : 7
    const lineWeight = 6
    const lineColor = "red"

    // createPolyLines
    const polyLines = allTracks.map((track, i) => {
        const tt = `Track ${i + 1}: ${currentHike?.name}`
        return (
            <Polyline
                positions={track}
                color={lineColor}
                weight={lineWeight}>
                <Tooltip sticky>{tt}</Tooltip>
            </Polyline>
        )
    })

    return (
        <MapContainer
            center={mapCenter}
            zoom={mapZoom}
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
