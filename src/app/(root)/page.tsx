"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Blocks } from "lucide-react"
import { motion } from "framer-motion"
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button"
import { ShinyIntroText } from "@/components/shiny-text"
import { WobbleCardDemo } from "@/components/Wobble-Card"
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs"

const FEATURES = [
  {
    id: "editor",
    label: "Smart Editor",
    icon: "💻",
    image: "/smart_editor.png",
    description: "Advanced syntax highlighting and intelligent code completion across multiple languages"
  },
  {
    id: "snippets",
    label: "Code Snippets",
    icon: "📝",
    image: "/snippets_page.png",
    description: "Share and organize your code snippets efficiently with easy access and management"
  },
  {
    id: "profile",
    label: "Developer Profile",
    icon: "👤",
    image: "/profile_page.png",
    description: "Showcase your coding journey with a personalized developer profile"
  },
  {
    id: "languages",
    label: "Language Support",
    icon: "⚡",
    image: "/language_support.png",
    description: "Support for all major programming languages with specialized features for each"
  },
]

const LANGUAGES = [
  { name: "JavaScript", icon: "/javascript.png" },
  { name: "Python", icon: "/python.png" },
  { name: "TypeScript", icon: "/typescript.png" },
  { name: "Java", icon: "/java.png" },
  { name: "C++", icon: "/cpp.png" },
  { name: "Go", icon: "/go.png" },
  { name: "Ruby", icon: "/ruby.png" },
  { name: "Rust", icon: "/rust.png" },
]

export default function Home() {
  const [activeFeature, setActiveFeature] = useState("editor")

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-800 bg-[#1e1e2e]/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 relative">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group relative">
            {/* logo hover effect */}
            <div
              className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 
              group-hover:opacity-100 transition-all duration-500 blur-xl"
            />

            {/* Logo */}
            <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
              <Blocks className="w-6 h-6 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
            </div>

            <div className="relative">
              <span
                className="block text-lg font-semibold bg-gradient-to-r
                from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text"
              >
                CodeStudio
              </span>
              <span className="block text-xs text-blue-400/60 font-medium">
                Interactive Code Editor
              </span>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link>
            <Link href="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</Link>
            <Link href="/snippets" className="text-sm text-gray-400 hover:text-white transition-colors">Snippets</Link>
            <Link href="/editor" className="text-sm text-gray-400 hover:text-white transition-colors">Editor</Link>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10
                border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden">
                  <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
                    Sign In
                  </span>
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link
                href="/editor"
                className="group flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10
                border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden"
              >
                <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
                  Get Started
                </span>
                <ArrowRight className="w-4 h-4 transform translate-x-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </SignedIn>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto max-w-6xl px-4 pt-32 pb-24">
          <div className="relative mb-12 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ShinyIntroText />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-[60px] mb-8 leading-tight font-bold tracking-tight px-4"
            >
              <span className="bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text inline-flex items-center gap-2">
                Write Better Code{" "}
                <Image
                  src="/computer.png"
                  alt="Computer"
                  width={100}
                  height={100}
                  className="inline-block"
                />
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text">
                on the go
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg mb-8 max-w-2xl"
            >
              The intelligent code editor that helps you write, share, and collaborate.
              <br />
              Built for modern development teams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/editor">
                <InteractiveHoverButton className="border-blue-500/20 bg-[#1e1e2e] text-blue-400 shadow-lg shadow-blue-500/5">
                  Try Editor Now
                </InteractiveHoverButton>
              </Link>
            </motion.div>
          </div>

          {/* Editor Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-24 max-w-7xl mx-auto text-center"
          >
            <div className="inline-block transform hover:scale-[1.02] transition-all duration-300">
              <Image
                src="/editing_page.png"
                alt="Code editor interface"
                width={1200}
                height={800}
                className="rounded-xl shadow-2xl"
                priority
              />
            </div>
          </motion.div>
          </section>

        {/* Language Support */}
        <section className="bg-[#1e1e2e] py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text"
            >
              Supporting Your Favorite Languages
            </motion.h2>
            <div className="grid grid-cols-4 gap-8 sm:grid-cols-8">
              {LANGUAGES.map((lang) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center space-y-3 hover:scale-110 transition-transform"
                >
                  <Image
                    src={lang.icon}
                    alt={lang.name}
                    width={48}
                    height={48}
                    className="rounded-lg"
                  />
                  <span className="text-sm text-gray-400">{lang.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-24 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-12 bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text"
          >
            Unleash Your Coding Potential
          </motion.h2>

          <div className="grid grid-cols-2 gap-24 max-w-5xl mx-auto">
            <div className="space-y-4">
              {FEATURES.map(({ id, label, icon, description }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="border-b border-gray-800 last:border-0"
                >
                  <button
                    onClick={() => setActiveFeature(id)}
                    className="w-full flex items-center justify-between p-4 hover:bg-[#1e1e2e] transition-colors rounded-md"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{icon}</span>
                      <div className="text-left">
                        <span className="font-semibold text-xl text-gray-200 block">{label}</span>
                        {activeFeature === id && (
                          <p className="mt-2 text-gray-400 text-sm">{description}</p>
                        )}
                      </div>
                    </div>
                    <span className={`text-2xl text-blue-400 transition-transform duration-200 ${activeFeature === id ? "rotate-45" : ""}`}>
                      {activeFeature === id ? "×" : "+"}
                    </span>
                  </button>
                </motion.div>
              ))}
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#1e1e2e] rounded-xl overflow-hidden h-[400px] shadow-xl shadow-blue-500/5"
              >
                <Image
                  src={FEATURES.find(f => f.id === activeFeature)?.image || FEATURES[0].image}
                  alt={`${activeFeature} feature`}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#1e1e2e] py-24">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text"
            >
              Ready to Transform Your Development?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 mb-8"
            >
              Join the community of developers writing better code together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/editor">
                <InteractiveHoverButton className="border-blue-500/20 bg-[#0a0a0f] text-blue-400">
                  Start Coding Now
                </InteractiveHoverButton>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Wobble Card Section */}
        <section className="container mx-auto px-4 py-24 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <WobbleCardDemo />
          </motion.div>
        </section>
      </main>
    </div>
  )
}
