import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main
        style={{
          minHeight: "calc(100vh - 120px)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </>
  );
}
