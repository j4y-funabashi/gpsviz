interface AddTrackProps {
    tracks: Track[]
}

export const AddTrack = ({ tracks }: AddTrackProps) => {

    const selectOptions = tracks.map((track) => {
        return (
            <option key={track.id} value={track.id}>{track.id}</option>
        )
    })

    return (
        <form className="space-y-2">
            <label className="block">
                Choose a track
                <select required defaultValue="none">
                    <option value="none" disabled>--- select a track ---</option>
                    {selectOptions}
                </select>
            </label>

            <input type="submit" value="Add to Hike" className="bg-green-500 px-2 rounded" />
        </form>
    )
}
