import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Awards } from "@/components/Awards";
import { Menu } from "@/components/Menu";
import { Vibe } from "@/components/Vibe";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Awards />
      <Menu />
      <Vibe />
      <Visit />
      <Footer />
    </main>
  );
}
