import { ExploreProjects } from "@/components/landing/ExploreProjects"
import { Navbar } from "@/components/landing/Navbar"

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-white">
       <Navbar />
      <ExploreProjects />
    </div>
  )
}

