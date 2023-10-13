import { useState } from "react"

interface CreateHikeFormProps {
    saveHike: (hike: Hike) => Promise<void>
}

export const CreateHikeForm = ({ saveHike }: CreateHikeFormProps) => {

    const [hikeName, setHikeName] = useState("")

    const save = () => {
        saveHike(
            {
                name: hikeName,
                tracks: [],
            }
        )
        setHikeName("")

    }

    return (
        <div>
            <label className="block">
                Name:
                <input type="text" value={hikeName} onChange={(e) => { setHikeName(e.target.value) }} />
            </label>

            <button className="bg-green-500 px-2 rounded" onClick={() => { save() }}>Save Hike</button>
        </div>
    )
}
