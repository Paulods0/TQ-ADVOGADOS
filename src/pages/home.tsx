import AreasSection from "@/components/landing-page/area-section"
import EncyclopediaSection from "@/components/landing-page/encyclopedia-section"
import HeroSection from "@/components/landing-page/hero-section"
import PresentationSection from "@/components/landing-page/presentation-section"

const Home = () => {
  return (
    <main className="flex flex-col w-full gap-14">
      <HeroSection />
      <PresentationSection />
      <AreasSection />
      <EncyclopediaSection />
    </main>
  )
}

export default Home
