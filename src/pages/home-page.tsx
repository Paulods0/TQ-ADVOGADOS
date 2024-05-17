import AreasSection from "@/components/home-page-components/areas-section"
import EnciclopediaSection from "@/components/home-page-components/enciclopedia-section"
import HeroSection from "@/components/home-page-components/hero-section"
import IntroductionSection from "@/components/home-page-components/introduction-section"

const HomePage = () => {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <IntroductionSection />
      <AreasSection />
      <EnciclopediaSection />
    </main>
  )
}

export default HomePage
