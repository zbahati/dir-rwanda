import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import LatestNews from "@/components/LatestNews";
export default function Home() {
  return <>
  <div className="w-full min-h-screen">
    <HeroSection />
    <About />
  </div>
  <div>
    <LatestNews/>
  </div>
  </>
}
