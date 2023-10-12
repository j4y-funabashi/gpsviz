interface GPSPoint {
    lat: number;
    lng: number;
    elevation: number
    timestamp: string;
}

interface Track {
    name?: string;
    points: GPSPoint[];
}

interface Hike {
    name: string
    tracks: Track[]
}
