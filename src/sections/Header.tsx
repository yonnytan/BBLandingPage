"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/bbLogo.png";

interface HeaderProps {
  featuresRef: React.RefObject<HTMLDivElement>;
}

export const Header: React.FC<HeaderProps> = ({ featuresRef }) => {
  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-80 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <Link href="/">
            <Image src={Logo} alt="BeatBytes Logo" width={40} height={40} style={{borderRadius: 5}} />
          </Link>
        </div>
        <nav className="flex space-x-4">
          <Link href="/">Home</Link>
          <button onClick={scrollToFeatures}>Features</button>
          <Link href="/support">Support</Link>
        </nav>
      </div>
    </header>
  );
};
