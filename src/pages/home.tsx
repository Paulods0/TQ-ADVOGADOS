import AreasSection from "@/components/landing-page/area-section"
import EncyclopediaSection from "@/components/landing-page/encyclopedia-section"
import HeroSection from "@/components/landing-page/hero-section"
import PresentationSection from "@/components/landing-page/presentation-section"
import InViewEffect from "@/components/motion/in-view-effect"

const Home = () => {
  return (
    <main className="flex flex-col w-full gap-14">
      <HeroSection />
      <PresentationSection />

      <InViewEffect>
        <AreasSection />
      </InViewEffect>
      <InViewEffect>
        <EncyclopediaSection />
      </InViewEffect>
    </main>
  )
}

export default Home
