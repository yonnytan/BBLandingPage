"use client";

import React, { useRef } from "react";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Features } from "@/sections/Features";
import { Footer } from "@/sections/Footer";

export default function Home() {
  const featuresRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header featuresRef={featuresRef} />
      <Hero />
      <Features ref={featuresRef} />
      <Footer />
    </>
  );
}