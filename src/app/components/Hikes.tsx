import { AddTrack } from "./AddTrack"

interface HikeListProps {
    hikes: Hike[]
    currentHike?: Hike
    setCurrentHike: (hikeID: string) => Promise<void>
    tracks: Track[]
    setCurrentTrack: (trackID: string) => Promise<void>
}

export const HikeList = ({ tracks, currentHike, hikes, setCurrentHike, setCurrentTrack }: HikeListProps) => {

    const hl = hikes.map((h) => {
        const isCurrent = currentHike?.name === h.name
        const trackCount = currentHike?.tracks.length
        return (
            (
                isCurrent ?
                    <li key={h.name}>
                        <a className="text-lg bg-cyan-400" href="#" onClick={async () => { }}>{h.name}</a>
                        {trackCount} tracks
                        <AddTrack tracks={tracks} setCurrentTrack={setCurrentTrack} />
                    </li>
                    :
                    <li key={h.name}><a href="#" onClick={async () => { await setCurrentHike(h.name) }}>{h.name}</a></li>

            )
        )
    })

    return (
        <div>
            <h1 className="text-lg">Hikes</h1>
            <ul className="list-disc list-inside">
                {hl}
            </ul>
        </div>
    )
}
