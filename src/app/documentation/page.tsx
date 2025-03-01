"use client"

import React from 'react'
import { motion } from "framer-motion"
import { Book, Code2, Terminal, Braces, Share2, Database, Settings, Workflow } from "lucide-react"
import NavigationHeader from '@/components/NavigationHeader'

const DocumentationPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <NavigationHeader />

      {/* Hero Section */}
      <section className="container mx-auto max-w-6xl px-4 pt-32 pb-24">
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Book className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text">
            Documentation
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Learn about Code Studio&apos;s features, technologies, and how to make the most of our platform.
          </p>
        </div>
      </section>

      {/* Last Updated */}
      <section className="container mx-auto max-w-4xl px-4">
        <div className="text-gray-400 text-center pb-12 border-b border-gray-800">
          Last updated: March 1, 2024
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto max-w-4xl px-4 py-24">
        <div className="prose prose-invert max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-16"
          >
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-200">Overview</h2>
              <p className="text-gray-400 leading-relaxed">
                Code Studio is a powerful online code editor and execution platform that enables developers to write, test, and share code in multiple programming languages while on the go. Our platform combines modern technologies like Monaco Editor for code editing and Piston API for secure code execution.
              </p>
            </div>

            {/* Editor Features */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Code2 className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-200">Editor Features</h2>
              </div>
              <div className="pl-11 space-y-4">
                <h3 className="text-xl font-semibold text-gray-300">Monaco Editor Integration</h3>
                <ul className="list-disc pl-5 text-gray-400 space-y-2">
                  <li>Advanced syntax highlighting for multiple languages</li>
                  <li>Customizable dark theme optimized for long coding sessions</li>
                  <li>Adjustable font size (12-24px) with ligature support</li>
                  <li>Code auto-completion and intelligent suggestions</li>
                  <li>Line numbers and minimap navigation</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-300 mt-8">Editor Customization</h3>
                <ul className="list-disc pl-5 text-gray-400 space-y-2">
                  <li>Font size controls through intuitive slider</li>
                  <li>Code persistence with automatic saving</li>
                  <li>Language-specific default code templates</li>
                  <li>Customizable editor layout and appearance</li>
                </ul>
              </div>
            </div>

            {/* Code Execution */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Terminal className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-200">Code Execution</h2>
              </div>
              <div className="pl-11 space-y-4">
                <h3 className="text-xl font-semibold text-gray-300">Piston API Integration</h3>
                <p className="text-gray-400">
                  We use the Piston API for secure and efficient code execution across multiple programming languages.
                </p>
                <ul className="list-disc pl-5 text-gray-400 space-y-2">
                  <li>Support for JavaScript, Python, Java, and more</li>
                  <li>Secure sandboxed execution environment</li>
                  <li>Real-time compilation and execution</li>
                  <li>Detailed error reporting and output display</li>
                </ul>
              </div>
            </div>

            {/* Language Support */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Braces className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-200">Language Support</h2>
              </div>
              <div className="pl-11 space-y-4">
                <p className="text-gray-400">
                  Code Studio supports a wide range of programming languages with specialized features for each:
                </p>
                <ul className="list-disc pl-5 text-gray-400 space-y-2">
                  <li>JavaScript/TypeScript with Node.js runtime</li>
                  <li>Python with latest version support</li>
                  <li>Java with JDK integration</li>
                  <li>And many more languages with their respective runtimes</li>
                </ul>
              </div>
            </div>

            {/* Code Sharing */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Share2 className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-200">Code Sharing</h2>
              </div>
              <div className="pl-11 space-y-4">
                <p className="text-gray-400">Share your code snippets easily with others:</p>
                <ul className="list-disc pl-5 text-gray-400 space-y-2">
                  <li>Generate shareable links for your code</li>
                  <li>Public and private sharing options</li>
                  <li>Snippet management for registered users</li>
                  <li>Collaborative code viewing and execution</li>
                </ul>
              </div>
            </div>

            {/* Data Management */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Database className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-200">Data Management</h2>
              </div>
              <div className="pl-11 space-y-4">
                <h3 className="text-xl font-semibold text-gray-300">Local Storage</h3>
                <ul className="list-disc pl-5 text-gray-400 space-y-2">
                  <li>Automatic code saving</li>
                  <li>Language-specific code persistence</li>
                  <li>Editor preferences storage</li>
                  <li>Theme and font settings retention</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-300 mt-8">Convex Backend</h3>
                <ul className="list-disc pl-5 text-gray-400 space-y-2">
                  <li>Secure user data storage</li>
                  <li>Code execution history</li>
                  <li>Shared snippets management</li>
                  <li>Real-time data synchronization</li>
                </ul>
              </div>
            </div>

            {/* Additional Features */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Settings className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-200">Additional Features</h2>
              </div>
              <div className="pl-11 space-y-4">
                <ul className="list-disc pl-5 text-gray-400 space-y-2">
                  <li>User authentication via Clerk</li>
                  <li>Responsive design for all devices</li>
                  <li>Keyboard shortcuts for common actions</li>
                  <li>Integrated error handling and reporting</li>
                </ul>
              </div>
            </div>

            {/* Getting Started */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Workflow className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-200">Getting Started</h2>
              </div>
              <div className="pl-11 space-y-4">
                <ol className="list-decimal pl-5 text-gray-400 space-y-4">
                  <li>
                    <span className="font-semibold">Choose your language</span>
                    <p>Select your preferred programming language from the dropdown menu.</p>
                  </li>
                  <li>
                    <span className="font-semibold">Write your code</span>
                    <p>Use our powerful Monaco editor to write or paste your code.</p>
                  </li>
                  <li>
                    <span className="font-semibold">Execute</span>
                    <p>Click the &quot;Run Code&quot; button to execute your code and see the output.</p>
                  </li>
                  <li>
                    <span className="font-semibold">Share (Optional)</span>
                    <p>Use the share button to generate a link to your code snippet.</p>
                  </li>
                </ol>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DocumentationPage;