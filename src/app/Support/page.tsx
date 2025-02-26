"use client"

import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Mail, MessageSquare, Book, HelpCircle } from "lucide-react"
import NavigationHeader from '@/components/NavigationHeader'

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left"
      >
        <span className="text-gray-200 font-medium">{question}</span>
        <span className={`text-blue-400 transition-transform ${isOpen ? 'rotate-45' : ''}`}>
          {isOpen ? '×' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-400">
          {answer}
        </div>
      )}
    </div>
  )
}

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <NavigationHeader />

      {/* Hero Section */}
      <section className="container mx-auto max-w-6xl px-4 pt-32 pb-24">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text">
            How can we help?
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find answers, get help, and share your feedback
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="container mx-auto max-w-6xl px-4 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#1e1e2e] p-6 rounded-xl border border-gray-800"
          >
            <MessageSquare className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-200 mb-2">Community Support</h3>
            <p className="text-gray-400 mb-4">
              Join our community forums to get help from other developers and share your knowledge.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2"
            >
              Join Discussion →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#1e1e2e] p-6 rounded-xl border border-gray-800"
          >
            <Book className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-200 mb-2">Documentation</h3>
            <p className="text-gray-400 mb-4">
              Explore our comprehensive guides and API documentation to get started.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2"
            >
              View Docs →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#1e1e2e] p-6 rounded-xl border border-gray-800"
          >
            <Mail className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-200 mb-2">Email Support</h3>
            <p className="text-gray-400 mb-4">
              Contact our support team directly for personalized assistance.
            </p>
            <a
              href="#contact"
              className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2"
            >
              Contact Us →
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#1e1e2e] py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <HelpCircle className="w-10 h-10 text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400">
              Find quick answers to common questions about CodeStudio
            </p>
          </div>

          <div className="space-y-2">
            <FAQItem
              question="How do I get started with CodeStudio?"
              answer="Sign up for a free account, then head to the editor to start coding. Our interactive tutorials will guide you through the basics of using CodeStudio's features."
            />
            <FAQItem
              question="What programming languages are supported?"
              answer="CodeStudio supports all major programming languages including JavaScript, Python, TypeScript, Java, C++, Go, Ruby, and Rust. Each language comes with syntax highlighting and intelligent code completion."
            />
            <FAQItem
              question="Can I collaborate with other developers?"
              answer="Yes! CodeStudio offers real-time collaboration features. Share your workspace URL with others to code together, leave comments, and review changes in real-time."
            />
            <FAQItem
              question="Is there a limit to the number of snippets I can save?"
              answer="Free accounts can save up to 50 snippets. Pro accounts have unlimited snippet storage along with additional features like private snippets and team collaboration."
            />
            <FAQItem
              question="How do I report a bug or request a feature?"
              answer="Use our GitHub issues page to report bugs or suggest new features. You can also reach out to our support team through the contact form below."
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="container mx-auto max-w-3xl px-4 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400">
            Have a specific question or need help? Send us a message.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-[#1e1e2e] border border-gray-800 rounded-lg text-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-[#1e1e2e] border border-gray-800 rounded-lg text-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-2 bg-[#1e1e2e] border border-gray-800 rounded-lg text-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-2 bg-[#1e1e2e] border border-gray-800 rounded-lg text-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 rounded-lg font-medium transition-all duration-200"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  )
}

export default SupportPage