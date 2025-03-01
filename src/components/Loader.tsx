"use client"

import Lottie from "lottie-react";
import { Suspense, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import animationData from "../../public/loading_animation.json";

export default function LottieLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Show loader on initial load and route changes
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [pathname, searchParams]); // This will trigger on route changes

  if (!loading) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r bg-[#0a0a0f]">
      <div className="w-80 h-80">
        <Suspense fallback={null}>
          <Lottie
            animationData={animationData}
            loop={true}
          />
        </Suspense>
      </div>
    </div>
  );
}