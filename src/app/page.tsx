'use client'
import dynamic from "next/dynamic"
import { AddTrack } from "./components/AddTrack";
import { MapStats } from "./components/MapStats";

export default function Home() {
  const Map = dynamic(() => import("./components/Map").then(mod => mod.Map), { ssr: false });

  var track1: GPSPoint[] = [
    {
      lat: 53.90563071705400943756103515625,
      lng: -1.694386638700962066650390625,
      elevation: 10,
      timestamp: "2023-04-08T09:52:35.000Z"
    },
    {
      lat: 53.92242218367755413055419921875,
      lng: -1.71332848258316516876220703125,
      elevation: 300,
      timestamp: "2023-04-08T09:52:35.000Z"
    },
    {
      lat: 53.93093031831085681915283203125,
      lng: -1.69319883920252323150634765625,
      elevation: 0,
      timestamp: "2023-04-08T09:52:35.000Z"
    },
    {
      lat: 53.93843899480998516082763671875,
      lng: -1.6957986541092395782470703125,
      elevation: 0,
      timestamp: "2023-04-08T09:52:35.000Z"
    },
  ];
  var track2: GPSPoint[] = [
    {
      lat: 54.03142145834863185882568359375,
      lng: -1.70482168905436992645263671875,
      elevation: 0,
      timestamp: "2023-04-08T09:52:35.000Z"
    },
    {
      lat: 54.03103371150791645050048828125,
      lng: -1.7297815717756748199462890625,
      elevation: 0,
      timestamp: "2023-04-08T09:52:35.000Z"
    },
    {
      lat: 54.02866029180586338043212890625,
      lng: -1.73829984851181507110595703125,
      elevation: 0,
      timestamp: "2023-04-08T09:52:35.000Z"
    },
    {
      lat: 54.03682342730462551116943359375,
      lng: -1.75690180622041225433349609375,
      elevation: 0,
      timestamp: "2023-04-08T09:52:35.000Z"
    },
  ];

  const currentHike: Hike = {
    name: "Hadrians Wall Path",
    tracks: [
      {
        points: track1
      },
      {
        points: track2
      }
    ]
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
            <li><a>Hadrians Wall Path</a></li>
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
