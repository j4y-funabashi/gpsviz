interface HikeListProps {
    hikes: Hike[]
}

export const HikeList = ({ hikes }: HikeListProps) => {

    const hl = hikes.map((h) => {
        return (
            <li><a href="#" onClick={async () => { }}>{h.name}</a></li>
        )
    })

    return (
        <div>
            <h1>Hikes</h1>
            <ul>
                {hl}
            </ul>
        </div>
    )
}
