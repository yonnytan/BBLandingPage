"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  MotionProps,
  MotionStyle,
} from "framer-motion";

import bbImage from "@/assets/bbIphone.png";
import speakerImage from "@/assets/bbSpeaker.png";
import apple from "@/assets/appstore.png";

// Constants
const COLORS = {
  primary: "#183EC2",
  secondary: "#EAEEFE",
  gradient: {
    from: "#000000",
    to: "#352ce8",
  },
};

interface AnimatedSpeakerProps {
  className?: string;
  style?: MotionStyle;
  animate?: MotionProps["animate"];
}

interface GradientTextProps {
  children: React.ReactNode;
}

interface ContentProps {
  translateY: any; // You might want to use a more specific type here
}

// Components
const AnimatedSpeaker: React.FC<AnimatedSpeakerProps> = ({
  className,
  style,
  animate,
}) => (
  <motion.div
    className={`hidden lg:block absolute ${className}`}
    style={style}
    animate={animate}
    transition={{ duration: 1 }}
  >
    <Image
      src={speakerImage}
      width={220}
      height={200}
      alt="Speaker"
      loading="lazy"
    />
  </motion.div>
);

const GradientText: React.FC<GradientTextProps> = ({ children }) => (
  <span
    className="bg-clip-text text-transparent"
    style={{
      backgroundImage: `linear-gradient(to right, ${COLORS.primary}, black)`,
    }}
  >
    {children}
  </span>
);

// Main Component
export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-20 pb-20 md:pt-5 md:pb-10 overflow-x-clip "
      style={{
        background: `radial-gradient(ellipse 200% 100% at bottom left, ${COLORS.primary}, ${COLORS.secondary} 100%)`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="md:flex items-center justify-between">
          <LeftContent translateY={translateY} />
          <RightContent translateY={translateY} />
        </div>
      </div>
    </section>
  );
};

// Sub-components
const LeftContent: React.FC<ContentProps> = ({ translateY }) => (
  <div className="md:w-1/2 lg:w-5/12">
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mt-6">
      <GradientText>BeatBytes</GradientText>
    </h1>
    <p className="text-2xl md:text-3xl text-black tracking-tight mt-6">
      Play over <strong>150 MILLION</strong> songs for <strong>FREE</strong>{" "}
      with BeatBytes!
    </p>
    <AnimatedSpeaker
      className="top-[124px] right-[-100px]"
      style={{ translateY }}
      animate={{ rotate: 70 }}
    />
    <div className="mt-8">
      <button>
        <Image src={apple} alt="apple" height={5} width={200} />
      </button>
    </div>
  </div>
);

const RightContent: React.FC<ContentProps> = ({ translateY }) => (
  <div className="mt-20 md:mt-0 md:w-1/2 lg:w-7/12 relative">
    <motion.div
      className="w-full h-full flex justify-center items-center"
      animate={{ translateY: [-20, 30] }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 3,
        ease: "easeInOut",
      }}
    >
      <Image
        src={bbImage}
        alt="BeatBytes App Interface"
        className="w-full h-auto max-w-[80%] md:max-w-full"
        priority
      />
    </motion.div>
    <AnimatedSpeaker
      className="bottom-[20%] left-[-50%] rotate-180"
      style={{ translateY }}
      animate={{ rotate: -100 }}
    />
    <AnimatedSpeaker
      className="top-[5%] left-[-40%]"
      style={{ translateY }}
      animate={{ rotate: 10 }}
    />
    <AnimatedSpeaker
      className="top-[90%] -right-[25%]"
      style={{ translateY }}
      animate={{ rotate: 50 }}
    />
  </div>
);

export default Hero;
