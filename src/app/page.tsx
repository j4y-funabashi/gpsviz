'use client'
import dynamic from "next/dynamic"

export default function Home() {
  const Map = dynamic(() => import("./components/Map").then(mod => mod.Map), { ssr: false });

  return (
    <main>
      <nav><h1>Hello</h1></nav>
      <Map />
    </main>
  )
}
