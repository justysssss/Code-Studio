import { cn } from "@/lib/utils"
import { AnimatedShinyText } from "./magicui/animated-shiny-text"
import { ArrowRightIcon } from "lucide-react"

export function ShinyIntroText() {
  return (
    <div className="items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-blue-400/10 bg-[#1e1e2e] text-sm transition-all ease-in hover:cursor-pointer hover:bg-[#1e1e2e]/80 px-1.5",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-3 py-1 text-blue-400/70 transition ease-out hover:text-blue-400">
          <span>✨ Your Journey Starts Here</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  )
}
