interface AddTrackProps {
    tracks: Track[]
    hikes: Hike[]
}

export const AddTrack = ({ tracks, hikes }: AddTrackProps) => {

    const trackOptions = tracks.map((track) => {
        return (
            <option key={track.id} value={track.id}>{track.id}</option>
        )
    })

    const hikeOptions = hikes.map((hike) => {
        return (
            <option key={hike.name} value={hike.name}>{hike.name}</option>
        )
    })

    return (
        <form>
            <label>
                Choose a track
                <select required defaultValue="none">
                    <option value="none" disabled>--- select a track ---</option>
                    {trackOptions}
                </select>
            </label>

            <label>
                Choose a hike
                <select required defaultValue="none">
                    <option value="none" disabled>--- select a hike ---</option>
                    {hikeOptions}
                </select>
            </label>

            <input type="submit" value="Add to Hike" className="bg-green-500 px-2 rounded" />
        </form>
    )
}
