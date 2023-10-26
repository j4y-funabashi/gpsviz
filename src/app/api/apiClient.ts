import { track20221008, track20221014, track20221015, track20221016 } from "./allTracks";

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
    allTracks.set("2022-10-08", track20221008)
    allTracks.set("2022-10-14", track20221014)
    allTracks.set("2022-10-15", track20221015)
    allTracks.set("2022-10-16", track20221016)


    if (allTracks.has(trackID)) {
        return {
            points: allTracks.get(trackID)!
        }
    }

    return {
        points: []
    }
}
