import fs from "fs"
import path from "path";
import { track20221014, track20221015 } from "./allTracks";

export const fetchTracks = async (): Promise<Track[]> => {

    return [
        { id: "2022-10-19", points: [] },
        { id: "2022-10-18", points: [] },
        { id: "2022-10-17", points: [] },
        { id: "2022-10-16", points: [] },
        { id: "2022-10-15", points: [] },
        { id: "2022-10-14", points: [] },
        { id: "2022-10-08", points: [] },
    ]

}

export const fetchTrack = async (trackID: string): Promise<Track> => {

    const allTracks = new Map<string, GPSPoint[]>()
    allTracks.set("2022-10-14", track20221014)
    allTracks.set("2022-10-15", track20221015)

    if (allTracks.has(trackID)) {
        return {
            points: allTracks.get(trackID)!
        }
    }

    return {
        points: []
    }
}
