"use client"

import React from 'react'
import { motion } from "framer-motion"
import { Shield, Lock, UserCheck, Database } from "lucide-react"
import NavigationHeader from '@/components/NavigationHeader'

const PrivacyPage = () => {
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
            <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your data.
          </p>
        </div>
      </section>

      {/* Last Updated */}
      <section className="container mx-auto max-w-4xl px-4">
        <div className="text-gray-400 text-center pb-12 border-b border-gray-800">
          Last updated: February 26, 2024
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
            {/* Introduction */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-200">Introduction</h2>
              <p className="text-gray-400 leading-relaxed">
                This Privacy Policy explains how CodeStudio (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, and protects your personal information when you use our online code editor and collaboration platform. We are committed to ensuring that your privacy is protected and we comply with all applicable data protection laws, including the General Data Protection Regulation (GDPR).
              </p>
            </div>

            {/* Data Collection */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Database className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-200">Information We Collect</h2>
              </div>
              <div className="pl-11 space-y-4">
                <h3 className="text-xl font-semibold text-gray-300">Information You Provide</h3>
                <ul className="list-disc pl-5 text-gray-400 space-y-2">
                  <li>Account information (name, email address)</li>
                  <li>Profile information</li>
                  <li>Code snippets and projects</li>
                  <li>Communications with us</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-300 mt-8">Information Automatically Collected</h3>
                <ul className="list-disc pl-5 text-gray-400 space-y-2">
                  <li>Device information</li>
                  <li>Usage data</li>
                  <li>IP address and location data</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </div>
            </div>

            {/* How We Use Your Data */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Lock className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-200">How We Use Your Data</h2>
              </div>
              <div className="pl-11 space-y-4 text-gray-400">
                <p>We use your personal information to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide and improve our services</li>
                  <li>Personalize your experience</li>
                  <li>Process your transactions</li>
                  <li>Send administrative information</li>
                  <li>Provide customer support</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Ensure platform security</li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <UserCheck className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-200">Your Rights</h2>
              </div>
              <div className="pl-11 space-y-4">
                <p className="text-gray-400">Under GDPR and other applicable data protection laws, you have the right to:</p>
                <ul className="list-disc pl-5 text-gray-400 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to data processing</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="text-gray-400 mt-4">
                  To exercise these rights, please contact us at privacy@codestudio.com
                </p>
              </div>
            </div>

            {/* Security */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-200">Security Measures</h2>
              <p className="text-gray-400 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, firewalls, and secure server facilities.
              </p>
            </div>

            {/* Cookies */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-200">Cookies and Tracking</h2>
              <p className="text-gray-400 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our platform. You can control cookie preferences through your browser settings. Essential cookies required for basic platform functionality cannot be disabled.
              </p>
            </div>

            {/* Updates */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-200">Updates to This Policy</h2>
              <p className="text-gray-400 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-200">Contact Us</h2>
              <p className="text-gray-400 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="text-gray-400">
                <p>Email: sourishbose10@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPage