'use client'
import { useRef, useEffect, PropsWithChildren } from "react"
import { MapContainer, Marker, Popup, TileLayer, useMap, Polyline, Tooltip } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import { LatLngExpression, latLngBounds } from "leaflet"

interface MapProps {
    currentHike?: Hike
    currentTrack?: Track
}

interface ZoomToTrackProps {
    allPoints: LatLngExpression[]
}
const ZoomToTrack = ({ allPoints }: ZoomToTrackProps) => {
    const m = useMap()

    if (allPoints.length !== 0) {
        const hikebounds = latLngBounds(allPoints)
        m.fitBounds(hikebounds)
    }

    return null
}

export const Map = ({ currentHike, currentTrack }: MapProps) => {

    const allPoints: LatLngExpression[] = []

    // convert current track to polyline
    const currentTrackLte: LatLngExpression[] = currentTrack ? currentTrack.points.map((gpsPoint) => {
        const nPoint: LatLngExpression = [gpsPoint.lat, gpsPoint.lng]
        allPoints.push(nPoint)
        return nPoint
    }) : [];

    // convert hike to tracks
    const allTracks: LatLngExpression[][] = []
    currentHike?.tracks.forEach((trk) => {
        const lte: LatLngExpression[] = trk.points.map((gpsPoint) => {
            const nPoint: LatLngExpression = [gpsPoint.lat, gpsPoint.lng]
            allPoints.push(nPoint)
            return nPoint
        });
        allTracks.push(lte)
    })

    const defaultLocation = { lat: 53.79648, lng: -1.54785 }
    const mapCenter = allTracks.length > 0 ? allTracks[0][0] : defaultLocation
    const mapZoom = allTracks.length > 0 ? 11 : 7
    const lineWeight = 6
    const hikeLineColor = "red"
    const trackLineColor = "green"

    // createPolyLines
    const polyLines = allTracks.map((track, i) => {
        const tt = `Track ${i + 1}: ${currentHike?.name}`
        return (
            <Polyline
                positions={track}
                color={hikeLineColor}
                weight={lineWeight}>
                <Tooltip sticky>{tt}</Tooltip>
            </Polyline>
        )
    })

    const currentTrackPolyline = (
        <Polyline
            positions={currentTrackLte}
            color={trackLineColor}
            weight={lineWeight}>
            <Tooltip sticky>New Track</Tooltip>
        </Polyline>
    )

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
            {currentTrackPolyline}

            <ZoomToTrack allPoints={allPoints} />

        </MapContainer>
    )
}
