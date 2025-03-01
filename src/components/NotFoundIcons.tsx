"use client";

import dynamic from 'next/dynamic';

export const Code2Icon = dynamic(
  () => import('lucide-react').then((mod) => mod.Code2),
  { ssr: false, loading: () => <div className="w-4 h-4" /> }
);

export const HomeIcon = dynamic(
  () => import('lucide-react').then((mod) => mod.HomeIcon),
  { ssr: false, loading: () => <div className="w-4 h-4" /> }
);