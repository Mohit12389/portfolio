"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { navItems } from "@/data";

import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

// Dynamically import components that use Three.js with ssr: false
const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
  loading: () => <div className="h-screen" />,
});

const Grid = dynamic(() => import("@/components/Grid"), {
  ssr: false,
  loading: () => <div className="h-96" />,
});

const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
  loading: () => <div className="h-96" />,
});

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        {mounted && (
          <>
            <Hero />
            <Grid />
            <RecentProjects />
            <Clients />
            <Experience />
            <Approach />
            <Footer />
          </>
        )}
      </div>
    </main>
  );
};

export default Home;
