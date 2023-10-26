import { useState } from "react"

interface AddTrackProps {
    tracks: Track[]
    setCurrentTrack: (trackID: string) => Promise<void>
}

export const AddTrack = ({ tracks, setCurrentTrack }: AddTrackProps) => {

    const [selectedTrack, setSelectedTrack] = useState("")

    const trackOptions = tracks.map((track) => {
        return (
            <option key={track.id} value={track.id}>{track.id}</option>
        )
    })

    return (
        <div>
            <label className="block">
                Choose a track
                <select required value={selectedTrack} onChange={(e) => { setSelectedTrack(e.target.value); setCurrentTrack(e.target.value) }}>
                    <option value="none" disabled>--- select a track ---</option>
                    {trackOptions}
                </select>
            </label>

            <button className="bg-green-500 px-2 rounded" onClick={() => { }}>Add to Hike</button>
        </div>
    )
}
