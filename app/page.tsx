import Approach from "@/components/templates/Approach";
import Clients from "@/components/templates/Clients";
import Experience from "@/components/templates/Experience";
import Footer from "@/components/templates/Footer";
import Grid from "@/components/templates/Grid";
import Hero from "@/components/templates/Hero";
import RecentProjects from "@/components/templates/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center 
    flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav 
        navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecentProjects/>
        {/*<Clients />*/}
        <Experience />
        <Approach/>
        <Footer/>
      </div>
    </main>
  )
}
