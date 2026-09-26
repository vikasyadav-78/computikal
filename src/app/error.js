'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Something went wrong!</h2>
      <p className="text-slate-600 text-sm mb-6">An unexpected error occurred.</p>
      <button
        onClick={() => reset()}
        className="px-5 py-2 rounded-full bg-brand-blue text-white text-xs font-semibold hover:bg-brand-blue-dark transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
