'use client';

import React, { useState } from 'react';

export default function Logo({ className = '', height = 36, showText = true }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`inline-flex items-center gap-2.5 cursor-pointer group select-none ${className}`}>
      {!imgError ? (
        <img
          src="/logo/logo.png"
          alt="Computikal Logo"
          width={180}
          height={150}
          decoding="async"
          style={{ height: `${height}px`, width: 'auto' }}
          className="object-contain transition-transform duration-200 group-hover:scale-105"
          onError={() => setImgError(true)}
        />
      ) : (
        /* High quality vector fallback matching exact brand logo colors */
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 flex-shrink-0">
            {/* Top Left Blue Block */}
            <div className="absolute top-0 left-0.5 w-4 h-3.5 bg-[#0070C0] rounded-xs"></div>
            {/* Top Right Red Block */}
            <div className="absolute top-1 right-0 w-4 h-3.5 bg-[#C81E2B] rounded-xs"></div>
            {/* Bottom Left Yellow Block */}
            <div className="absolute bottom-0 left-0 w-4 h-3.5 bg-[#FFD100] rounded-xs z-10"></div>
          </div>
          {showText && (
            <span className="font-serif font-semibold text-xl tracking-tight leading-none">
              <span className="text-[#0070C0]">Computi</span>
              <span className="text-[#C81E2B]">kal</span>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
