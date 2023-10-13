'use client'
import dynamic from "next/dynamic"
import { AddTrack } from "./components/AddTrack";
import { MapStats } from "./components/MapStats";
import { useEffect, useState } from "react";
import { fetchHike, fetchTracks } from "./api/apiClient";
import { HikeList } from "./components/Hikes";

export default function Home() {
  const Map = dynamic(() => import("./components/Map").then(mod => mod.Map), { ssr: false });

  const mockHikes: Hike[] = [
    {
      name: "Yorkshire Three Peaks",
      tracks: []
    }
  ]

  const [currentHike, setCurrentHike] = useState<Hike>()
  const [tracks, setTracks] = useState<Track[]>([])
  const [hikes, setHikes] = useState<Hike[]>(mockHikes)

  const loadNewHike = async (hikeID: string) => {
    const newHike = await fetchHike(hikeID)
    setCurrentHike(newHike)
  }

  useEffect(
    () => {
      const e = async () => {
        const tracks = await fetchTracks()
        setTracks(tracks)
      }
      e()
    }, [setTracks, fetchTracks]
  )

  return (
    <main>

      <Map currentHike={currentHike} />

      <div className="grid lg:grid-cols-3">
        <div>
          <AddTrack tracks={tracks} />
        </div>

        <div>
          <HikeList hikes={hikes} />
        </div>

        <div>
          <MapStats />
        </div>
      </div>

    </main>
  )
}
