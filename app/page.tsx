import Hero from "@/components/hero"
import About from "@/components/about"
import Resume from "@/components/resume"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </main>
  )
}
