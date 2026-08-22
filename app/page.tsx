'use client';

import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Facilities from '@/components/Facilities';
import Equipment3D from '@/components/Equipment3D';
import Trainers from '@/components/Trainers';
import Membership from '@/components/Membership';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import WhatsAppCard from '@/components/WhatsAppCard';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackgroundMusic from '@/components/BackgroundMusic';

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {/* Intro Loading Screen */}
      <LoadingScreen onComplete={() => setLoadingComplete(true)} />

      {/* Background Gym Audio Player Widget */}
      <BackgroundMusic />

      {/* Main Experience */}
      <div className={`transition-opacity duration-1000 ${loadingComplete ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Stats />
          <Facilities />
          <Equipment3D />
          <Trainers />
          <Membership />
          <Gallery />
          <Testimonials />
          <WhatsAppCard />
          <Location />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
