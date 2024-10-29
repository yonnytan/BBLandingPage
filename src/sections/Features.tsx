"use client";

import React, { CSSProperties } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  MotionProps,
  MotionValue,
  MotionStyle,
} from "framer-motion";

import bbImage2 from "@/assets/drakess.png";
import speakerImage from "@/assets/bbSpeaker.png";
import apple from "@/assets/app-store-badge.png";

// Constants
const COLORS = {
  primary: "#183EC2",
  secondary: "#EAEEFE",
};

// Component Props Interfaces
interface AnimatedSpeakerProps {
  className?: string;
  style?: MotionStyle;
  animate?: MotionProps["animate"];
}

interface FeatureItemProps {
  title: string;
  description: string;
}

interface FeaturesProps extends React.PropsWithChildren<{}> {
  ref?: React.RefObject<HTMLElement>;
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

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-lg">{description}</p>
  </div>
);

// Main Component
export const Features = React.forwardRef<HTMLElement, FeaturesProps>(
  (props, ref) => {
    const targetRef = React.useRef<HTMLElement>(null);

    React.useImperativeHandle(ref, () => targetRef.current as HTMLElement);

    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
      <section
        ref={targetRef}
        className="pt-16 pb-20 md:pt-24 md:pb-32 overflow-x-clip"
        style={{
          background: `radial-gradient(ellipse 100% 200% at bottom right, ${COLORS.secondary}, ${COLORS.primary} 100%)`,
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-7xl font-bold text-center mb-16">
            Features
          </h2>
          <div className="md:flex items-start justify-between">
            <AppPreview translateY={translateY} />
            <div className="md:w-1/2 lg:w-5/12 md:ml-8">
              <FeaturesList />
            </div>
          </div>
        </div>
      </section>
    );
  }
);

// Sub-components
const FeaturesList: React.FC = () => (
  <>
    <FeatureItem
      title="Free and Unlimited Access"
      description="Enjoy your favorite songs without any subscription fees. BeatBytes gives you unlimited access to an extensive library of music, all for FREE."
    />
    <FeatureItem
      title="Create Your Own Playlists"
      description="Organize your music your way! Easily create custom playlists, curate your favorite tracks, and share them with friends effortlessly."
    />
    <FeatureItem
      title="User-Friendly Interface"
      description="Navigate effortlessly through BeatBytes' sleek design. Whether you're creating playlists or searching for songs, everything is just a tap away."
    />
    <FeatureItem
      title="Toggle Between Audio and Video"
      description="Switch seamlessly between music and music videos with just a tap! Enjoy your favorite tracks as audio-only or watch the official music videos without leaving the app."
    />

    <div className="mt-12 flex justify-center">
      <button>
        <Image
          src={apple}
          alt="Download on the App Store"
          width={400}
          height={5}
        />
      </button>
    </div>
  </>
);

interface AppPreviewProps {
  translateY: MotionValue<number>;
}

const AppPreview: React.FC<AppPreviewProps> = ({ translateY }) => (
  <div className="mt-20 md:mt-0 md:w-1/2 lg:w-7/12 relative">
    <motion.div
      className="w-full h-full flex justify-center items-center"
      animate={{ translateY: [-50, 5] }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 3,
        ease: "easeInOut",
      }}
    >
      <Image
        src={bbImage2}
        alt="BeatBytes App Interface 2"
        className="w-full h-auto max-w-[80%] md:max-w-full lg:rounded-[70px] md:rounded-[50px] sm:rounded-[33px]"
        priority
      />
    </motion.div>
    <AnimatedSpeaker
      className="bottom-[20%] left-[-50%] rotate-180"
      style={{ y: translateY }}
      animate={{ rotate: -100 }}
    />
    <AnimatedSpeaker
      className="top-[5%] left-[-40%]"
      style={{ y: translateY }}
      animate={{ rotate: 10 }}
    />
    <AnimatedSpeaker
      className="top-[90%] -right-[25%]"
      style={{ y: translateY }}
      animate={{ rotate: 50 }}
    />
    <AnimatedSpeaker
      className="top-[90%] -right-[25%]"
      style={{ y: translateY }}
      animate={{ rotate: 50 }}
    />
  </div>
);

Features.displayName = "Features";
