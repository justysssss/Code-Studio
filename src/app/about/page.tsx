"use client"

import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Code2, Sparkles } from "lucide-react"
import NavigationHeader from '@/components/NavigationHeader'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <NavigationHeader />

      {/* Hero Section */}
      <section className="container mx-auto max-w-6xl px-4 pt-24 pb-24">
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transform rotate-45" />
            <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-semibold">Elevate Your Coding Experience</span>
              <Sparkles className="w-5 h-5 text-blue-400" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center space-y-6"
            >
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="inline-block bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text mb-2">
                  Your Journey
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text">
                  Starts Here
                </span>
              </h2>
              
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                From concept to creation, we&apos;re transforming the way developers write,
                share, and collaborate on code. Join us in building the future of development.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-6"
              >
                <Link
                  href="/editor"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                >
                  <Code2 className="w-5 h-5" />
                  <span className="font-medium">Start Coding Now</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Introduction */}
      <section className="bg-[#1e1e2e] py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text">
                Meet the Developer
              </h2>
              <p className="text-gray-400 text-lg">
                Hi, I&apos;m Sourish Bose, a Full Stack Developer passionate about creating impactful web solutions.
                With expertise in HTML, CSS, JavaScript, and modern frameworks, I&apos;m dedicated to building tools
                that make developers&apos; lives easier.
              </p>
              <p className="text-gray-400 text-lg">
                My journey in web development has taught me the importance of intuitive design, clean code, and
                continuous learning. Code Studio is a manifestation of these principles.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="/code_editor.png"
                alt="Code Editor Interface"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl hover:scale-[1.02] transition-all duration-300"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto max-w-6xl px-4 py-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text"
        >
          Key Features
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1e1e2e] rounded-xl p-6 space-y-4"
          >
            <Image
              src="/smart_editor.png"
              alt="Smart Editor"
              width={500}
              height={300}
              className="rounded-lg w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold text-blue-400">Smart Editor</h3>
            <p className="text-gray-400">Intelligent code suggestions and syntax highlighting for efficient coding</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#1e1e2e] rounded-xl p-6 space-y-4"
          >
            <Image
              src="/snippets_page.png"
              alt="Code Snippets"
              width={500}
              height={300}
              className="rounded-lg w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold text-blue-400">Code Snippets</h3>
            <p className="text-gray-400">Save and organize your frequently used code snippets efficiently</p>
          </motion.div>
        </div>
      </section>

      {/* Languages Support */}
      <section className="bg-[#1e1e2e] py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text"
          >
            Supporting Your Favorite Languages
          </motion.h2>
          <div className="grid grid-cols-4 gap-8 sm:grid-cols-8">
            {[
              { name: "JavaScript", icon: "/javascript.png" },
              { name: "Python", icon: "/python.png" },
              { name: "TypeScript", icon: "/typescript.png" },
              { name: "Java", icon: "/java.png" },
              { name: "C++", icon: "/cpp.png" },
              { name: "Go", icon: "/go.png" },
              { name: "Ruby", icon: "/ruby.png" },
              { name: "Rust", icon: "/rust.png" },
            ].map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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

      {/* Future & Roadmap */}
      <section className="container mx-auto max-w-6xl px-4 py-24">
        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text"
          >
            Future Roadmap
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gray-400 text-lg">
                As an independent company, we&apos;re committed to long-term development and continuous improvement.
                Our roadmap includes:
              </p>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">•</span>
                  Advanced collaboration features with video chat integration
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">•</span>
                  AI-powered code suggestions and optimization
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">•</span>
                  Expanded language support and custom extensions
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">•</span>
                  Enhanced project management tools
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="/editing_page.png"
                alt="Future features preview"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl hover:scale-[1.02] transition-all duration-300"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="bg-[#1e1e2e] py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text">
              Get Involved
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Your feedback and involvement are crucial to making Code Studio better. Join our community and help shape the future of coding.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-left">
              {[
                { title: "Report Issues", desc: "Help us improve by reporting bugs" },
                { title: "Share Ideas", desc: "Suggest new features and improvements" },
                { title: "Join Discussions", desc: "Participate in community talks" },
                { title: "Contribute", desc: "Help build the next big feature" }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#0a0a0f] p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all"
                >
                  <h3 className="text-blue-400 font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage