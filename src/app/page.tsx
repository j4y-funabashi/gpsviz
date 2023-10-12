'use client'
import dynamic from "next/dynamic"
import { AddTrack } from "./components/AddTrack";
import { MapStats } from "./components/MapStats";
import { useState } from "react";
import { fetchHike } from "./apiClient";

export default function Home() {
  const Map = dynamic(() => import("./components/Map").then(mod => mod.Map), { ssr: false });

  const [currentHike, setCurrentHike] = useState<Hike>()

  const loadNewHike = async (hikeID: string) => {
    const newHike = await fetchHike(hikeID)
    setCurrentHike(newHike)
  }

  return (
    <main>

      <Map currentHike={currentHike} />

      <div className="grid lg:grid-cols-3">
        <div>
          <AddTrack />
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
