"use client"

import { Player } from "@lottiefiles/react-lottie-player"

export const LoadingState = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0a0a0f]/80 backdrop-blur-sm z-50">
      <div className="w-32 h-32">
        <Player
          src="/loading_animation.lottie"
          autoplay
          loop
          className="w-full h-full"
        />
      </div>
    </div>
  )
}