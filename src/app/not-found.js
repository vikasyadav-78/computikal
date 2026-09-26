'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-4xl font-extrabold text-slate-900 mb-2">404 - Page Not Found</h2>
      <p className="text-slate-600 mb-6">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-full bg-brand-blue text-white text-sm font-semibold hover:bg-brand-blue-dark transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
