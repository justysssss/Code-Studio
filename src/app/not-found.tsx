"use client";

import Link from 'next/link';
import { Code2Icon, HomeIcon } from '@/components/NotFoundIcons';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center space-y-6">
          <h1 className="text-8xl font-bold text-white tracking-wider">404</h1>
          <h2 className="text-xl text-gray-400/80">Page Not Found</h2>
          
          <div className="bg-[#1e1e2e]/40 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50">
            <div className="flex items-center gap-2 mb-3 text-gray-400/80">
              <span className="w-4 h-4 mb-2">
                <Code2Icon />
              </span>
              <span className="text-sm font-mono ml-2">error.ts</span>
            </div>
            <pre className="text-sm overflow-x-auto">
              <code className="font-mono text-gray-300">
                <span className="text-red-400">Error</span>: Path not found in codebase
              </code>
            </pre>
          </div>
          
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-500/10 hover:bg-blue-500/20
              text-blue-400 rounded-lg transition-all duration-300 border border-blue-500/20 hover:border-blue-500/30"
          >
            <span className="w-4 h-4">
              <HomeIcon />
            </span>
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}