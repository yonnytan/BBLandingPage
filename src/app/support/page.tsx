"use client";
import React, { useRef } from 'react';
import SupportHero from './SupportHero';
import FAQSection from './FAQSection';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';

const SupportPage = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  return (
      <>
        <Header featuresRef={featuresRef} />
        <div style={{paddingTop: '80px'}}>
          <SupportHero />
          <FAQSection />
        </div>
        <Footer />
      </>
  );
};

export default SupportPage;