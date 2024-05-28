import HeroSection from "@/components/landing-page/hero-section"
import PresentationSection from "@/components/landing-page/presentation-section"

const Home = () => {
  return (
    <main className="flex flex-col w-full gap-14">
      <HeroSection />
      <PresentationSection/>
    </main>
  )
}

export default Home
