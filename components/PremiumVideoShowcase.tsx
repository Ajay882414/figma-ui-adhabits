"use client";

import { useState } from "react";
import { Play, Zap } from "lucide-react";

// The component is designed for Tech & Marketing teams. It uses a clean, premium
// aesthetic matching the overall theme: deep black, white grid, and cyan accents.
// It integrates a cinematic looping video as the primary visual showcase.

export default function PremiumVideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);

  // A premium background loop URL. For development, a reliable free stock video
  // server is used. In production, this should point to your optimized,
  // high-resolution cinematic video (e.g., /videos/cinematic-office-loop.mp4).
  const cinematicVideoUrl = "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4?utm_source=chatgpt.com";

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="relative overflow-hidden border-t border-black bg-[#ffffff] " id="showcase">

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 sm:px-8">
        {/* Section Header */}
       

        {/* Video Showcase Container - Exact Layout from Image 49 */}
        <div className="group relative mt-16 overflow-hidden rounded-3xl border border-black transition-all duration-300 ">
          
          {/* Main Background Cinematic Video Loop */}
          {/* This is a high-end loop that plays continuously, showing a premium */}
          {/* modern office and collaborative energy, matching the aesthetic. */}
          <video
            src={cinematicVideoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="h-[480px] w-full object-cover sm:h-[600px]"
          />

          {/* Frosted Glass Overlay with Centered Elements */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/40 p-10 backdrop-blur-[2px] transition-all duration-300 group-hover:bg-black/25">
            
            {/* The centered element matching image 49: Play icon or verified badge */}
            {!isPlaying ? (
              <button
                onClick={handlePlayClick}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 group-hover:h-20 group-hover:w-20"
                aria-label="Play Full Showcase"
              >
                <Play className="h-6 w-6 group-hover:h-8 group-hover:w-8" fill="currentColor" stroke="none" />
              </button>
            ) : (
              <div className="pointer-events-none flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                <Zap className="h-4 w-4 fill-[#23899b] text-[#23899b]" />
                <span>Verified Execution Uptime: 99.98% monitored</span>
              </div>
            )}

            {/* Content text (only if not playing full) */}
            {!isPlaying && (
              <p className="mt-8 max-w-sm text-center text-xs font-medium leading-relaxed text-neutral-300">
                A seamless integration of resilient tech infrastructure and performance-driven
                marketing precision. Built for modern growth teams that command immediate conversion.
              </p>
            )
            }
          </div>

          {/* Final Video Overlay (When user clicks play) */}
          {isPlaying && (
            <video
              src={cinematicVideoUrl}
              autoPlay
              controls
              className="absolute inset-0 z-50 h-full w-full object-cover"
            />
          )}

        </div>
      </div>
    </section>
  );
}