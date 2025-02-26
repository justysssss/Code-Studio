"use client"

import { motion } from "framer-motion"
import { Scale } from "lucide-react"
import NavigationHeader from '@/components/NavigationHeader'

export default function TermsPage() {
  // Format date consistently
  const formattedDate = new Date().toLocaleDateString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric'
  });

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
            <Scale className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text">
            Terms and Conditions
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Last Updated */}
      <section className="container mx-auto max-w-4xl px-4">
        <div className="text-gray-400 text-center pb-12 border-b border-gray-800">
          Last updated: {formattedDate}
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto max-w-4xl px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-16"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-200">1. Agreement to Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              By accessing and using Code Studio, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you do not have permission to access or use our services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-200">2. User Rights and Restrictions</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              You are granted a limited, non-exclusive, non-transferable license to use Code Studio in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-5 text-gray-400 space-y-2">
              <li>Use the service for any illegal purposes</li>
              <li>Attempt to gain unauthorized access to any part of the service</li>
              <li>Copy, modify, or distribute our code or content without permission</li>
              <li>Use the service in any way that could damage or impair its functionality</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-200">3. Intellectual Property</h2>
            <p className="text-gray-400 leading-relaxed">
              The service, including all content, features, and functionality, is owned by Code Studio and is protected by international copyright, trademark, and other intellectual property laws. Our code editor, snippets, and related features are proprietary technology.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-200">4. User Content</h2>
            <p className="text-gray-400 leading-relaxed">
              By submitting code snippets or other content to Code Studio, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content for the purpose of providing and improving our services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-200">5. Privacy and Data Usage</h2>
            <p className="text-gray-400 leading-relaxed">
              Your use of Code Studio is also governed by our Privacy Policy. We collect and process personal data as described in our Privacy Policy, in compliance with applicable data protection laws.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-200">6. Disclaimer and Limitation of Liability</h2>
            <p className="text-gray-400 leading-relaxed">
              Code Studio is provided &quot;as is&quot; without any warranties, express or implied. We do not guarantee that the service will be uninterrupted, secure, or error-free. In no event shall Code Studio be liable for any indirect, incidental, special, consequential, or punitive damages.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-200">7. Termination</h2>
            <p className="text-gray-400 leading-relaxed">
              We reserve the right to terminate or suspend access to our service immediately, without prior notice, for any conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason at our sole discretion.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-200">8. Changes to Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the service. Your continued use of Code Studio after such modifications constitutes acceptance of the updated terms.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-200">9. Governing Law</h2>
            <p className="text-gray-400 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Code Studio operates, without regard to its conflict of law provisions.
            </p>
          </div>

          <div className="mt-12 text-center space-y-4 pt-8 border-t border-gray-800">
            <p className="text-gray-400">If you have any questions about these Terms, please contact us.</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}