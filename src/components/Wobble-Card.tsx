"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { motion } from "framer-motion";

export function WobbleCardDemo() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-4"
    >
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-[#1e1e2e] min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Smart Code Editor for Modern Development
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Write, share, and collaborate on code with our powerful editor. 
            Supporting multiple languages and real-time collaboration.
          </p>
        </div>
        <Image
          src="/code_editor.png"
          width={600}
          height={600}
          alt="Code editor preview"
          className="absolute -right-4 lg:-right-[40%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#1e1e2e]">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          Code Snippets & Profile
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Share your code snippets and showcase your coding journey with a personalized developer profile.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#1e1e2e] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Multi-language Support with Advanced Features
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Experience seamless coding across multiple programming languages with intelligent syntax highlighting and code completion.
          </p>
        </div>
        <Image
          src="/javascript.png"
          width={500}
          height={500}
          alt="Language support"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </motion.div>
  );
}
