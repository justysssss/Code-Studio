// src/components/NotFoundComponent.tsx (Create a new file)
"use client";

import dynamic from 'next/dynamic';
import { Code2, HomeIcon, Terminal } from "lucide-react";
import Link from "next/link";
import NavigationHeader from "@/components/NavigationHeader";
import { useEffect, useState } from "react";
import type { Variants } from "framer-motion";

// Dynamically import motion components with ssr disabled
const MotionDiv = dynamic(
  () => import("framer-motion").then(mod => mod.motion.div),
  { ssr: false }
);

const MotionSpan = dynamic(
  () => import("framer-motion").then(mod => mod.motion.span),
  { ssr: false }
);

const MotionH2 = dynamic(
  () => import("framer-motion").then(mod => mod.motion.h2),
  { ssr: false }
);

export function NotFoundComponent() {  //Renamed Component
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Glitch animation variants for individual characters
  const glitchVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      }
    }),
    hover: {
      y: [-2, 2, -2],
      color: ['#ffffff', '#60a5fa', '#ffffff'],
      textShadow: [
        '0 0 10px rgba(96,165,250,0)',
        '0 0 20px rgba(96,165,250,0.5)',
        '0 0 10px rgba(96,165,250,0)',
      ],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "mirror" as const
      }
    }
  }

  // Container variants for 3D effect
  const containerVariants: Variants = {
    initial: {
      rotateX: 0,
      rotateY: 0,
      scale: 1
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3
      }
    }
  }

  // Random glitch effect
  const [glitchKey, setGlitchKey] = useState(0);
  useEffect(() => {
    if (!isMounted) return;

    const interval = setInterval(() => {
      if (!isHovering) {
        setGlitchKey(prev => prev + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovering, isMounted]);

  // Render static content during SSR
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-[#0a0a0f]">
        <NavigationHeader />
        <div className="container mx-auto max-w-6xl px-4 pt-32 pb-24 text-center">
          <h1 className="text-[120px] font-bold text-white">404</h1>
          <h2 className="text-2xl text-gray-400/80">Page Not Found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] animate-grid">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#1e1e2e,transparent)]" />
      </div>

      <NavigationHeader />

      <div className="container relative mx-auto max-w-6xl px-4 pt-32 pb-24">
        <div className="text-center space-y-8">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Terminal className="w-20 h-20 text-blue-400 mx-auto mb-6 relative z-10" />
            {/* Glow effect */}
            <div className="absolute inset-0 blur-2xl bg-blue-500/20 rounded-full" />
          </MotionDiv>

          <div className="perspective-[1000px]">
            <MotionDiv
              key={glitchKey}
              variants={containerVariants}
              initial="initial"
              animate={isHovering ? "hover" : "initial"}
              className="space-y-4"
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
              style={{ transformStyle: "preserve-3d" }}
            >
              <h1 className="text-[120px] font-bold leading-none tracking-wider flex justify-center gap-4">
                {"404".split("").map((char, i) => (
                  <MotionSpan
                    key={i}
                    custom={i}
                    variants={glitchVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    className="inline-block relative"
                    style={{
                      textShadow: "0 0 10px rgba(96,165,250,0.3)",
                      color: "#fff"
                    }}
                  >
                    {char}
                    {/* Character glitch effect */}
                    <MotionSpan
                      className="absolute inset-0 text-blue-400 mix-blend-screen"
                      initial={{ opacity: 0, x: 0 }}
                      animate={{
                        opacity: [0, 0.5, 0],
                        x: [-2, 2, -2],
                        transition: {
                          duration: 0.2,
                          repeat: Infinity,
                          repeatType: "mirror"
                        }
                      }}
                    >
                      {char}
                    </MotionSpan>
                  </MotionSpan>
                ))}
              </h1>
              <MotionH2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl text-gray-400/80 font-light tracking-wide"
              >
                Signal Lost in the Digital Void
              </MotionH2>
            </MotionDiv>
          </div>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-xl mx-auto group"
          >
            <div className="bg-[#1e1e2e]/40 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-xl">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center gap-2 mb-3 text-gray-400/80">
                <Code2 className="w-4 h-4" />
                <span className="text-sm font-mono">error.ts</span>
              </div>

              <pre className="text-sm">
                <code className="font-mono">
                  <span className="text-purple-400">try</span>{" "}
                  <span className="text-gray-300">{"{"}</span>
                  {"\n"}
                  <span className="text-gray-300/80">  </span>
                  <span className="text-blue-400">await</span>{" "}
                  <span className="text-green-400">navigateTo</span>
                  <span className="text-gray-300">(</span>
                  <span className="text-orange-300">&quot;/404&quot;</span>
                  <span className="text-gray-300">);</span>
                  {"\n"}
                  <span className="text-gray-300">{"}"}</span>{" "}
                  <span className="text-purple-400">catch</span>{" "}
                  <span className="text-gray-300">{"{"}</span>
                  {"\n"}
                  <span className="text-gray-300/80">  </span>
                  <span className="text-red-400">throw</span>{" "}
                  <span className="text-blue-400">new</span>{" "}
                  <span className="text-green-400">Error</span>
                  <span className="text-gray-300">(</span>
                  <span className="text-orange-300">&quot;Page not found in the matrix&quot;</span>
                  <span className="text-gray-300">);</span>
                  {"\n"}
                  <span className="text-gray-300">{"}"}</span>
                </code>
              </pre>
            </div>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-4"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500/10 hover:bg-blue-500/20
                text-blue-400 rounded-xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/30
                backdrop-blur-sm hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]"
            >
              <HomeIcon className="w-5 h-5" />
              <span>Return to Base</span>
            </Link>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}


export default function NotFound() {
  return <NotFoundComponent/>
}

