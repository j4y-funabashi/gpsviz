'use client'
import dynamic from "next/dynamic"
import { AddTrack } from "./components/AddTrack";
import { MapStats } from "./components/MapStats";
import { useEffect, useState } from "react";
import { fetchHike, fetchTracks } from "./api/apiClient";

export default function Home() {
  const Map = dynamic(() => import("./components/Map").then(mod => mod.Map), { ssr: false });

  const [currentHike, setCurrentHike] = useState<Hike>()
  const [tracks, setTracks] = useState<Track[]>([])

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
          <h1>Hikes</h1>
          <ul>
            <li><a href="#" onClick={async () => { loadNewHike("hadrians-wall") }}>Hadrians Wall Path</a></li>
            <li>West Highland Way</li>
            <li>Limestone Way</li>
          </ul>
        </div>

        <div>
          <MapStats />
        </div>
      </div>

    </main>
  )
}
