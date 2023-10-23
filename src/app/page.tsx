'use client'
import dynamic from "next/dynamic"
import { AddTrack } from "./components/AddTrack";
import { MapStats } from "./components/MapStats";
import { useEffect, useState } from "react";
import { fetchHike, fetchTracks } from "./api/apiClient";
import { HikeList } from "./components/Hikes";
import { CreateHikeForm } from "./components/AddHike";

export default function Home() {
  const Map = dynamic(() => import("./components/Map").then(mod => mod.Map), { ssr: false });

  const [currentHike, setCurrentHike] = useState<Hike>()
  const [currentTrack, setCurrentTrack] = useState<Track>()
  const [tracks, setTracks] = useState<Track[]>([])
  const [hikes, setHikes] = useState<Hike[]>([])

  const loadNewHike = async (hikeID: string) => {
    const newHike = await fetchHike(hikeID)
    setCurrentHike(newHike)
  }

  const saveHike = async (hike: Hike) => {
    setHikes([...hikes, hike])
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

      <Map currentHike={currentHike} currentTrack={currentTrack} />

      <div className="grid lg:grid-cols-3">

        <div>
          <HikeList hikes={hikes} currentHike={currentHike} setCurrentHike={loadNewHike} />
          <CreateHikeForm saveHike={saveHike} />
        </div>

        <div>
          <AddTrack tracks={tracks} hikes={hikes} />
        </div>

        <div>
          <MapStats />
        </div>
      </div>

    </main>
  )
}
