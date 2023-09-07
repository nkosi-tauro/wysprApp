import { Suspense, lazy } from "react"
import Navbar from "../components/Navbar";

// Lazy load cards component
const Cards = lazy(() => import("../components/Cards"));


export default function Home() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Cards />
      </Suspense>
    </>
  )
}