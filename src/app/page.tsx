'use client'
import dynamic from "next/dynamic"
import { AddTrack } from "./components/AddTrack";
import { MapStats } from "./components/MapStats";

export default function Home() {
  const Map = dynamic(() => import("./components/Map").then(mod => mod.Map), { ssr: false });

  return (
    <main>
      <Map />

      <div className="grid grid-cols-2">
        <div>
          <AddTrack />
        </div>

        <div>
          <MapStats />
        </div>
      </div>

    </main>
  )
}
