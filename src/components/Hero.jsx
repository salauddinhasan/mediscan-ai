"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Scan } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-64 h-60 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25" />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

      <div className="container mx-auto px-6 max-w-7xl relative py-16 lg:py-24">
        {/* Top Badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg shadow-blue-100 border border-blue-100">
            <Sparkles className="h-5 w-5 text-yellow-500" />
            <span className="font-bold text-blue-700">
              🇧🇩 Bangladesh&apos;s First AI-Powered Health Platform
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
            Your Entire{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Medical History
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,6 Q100,12 200,6"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  fill="none"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="50%" stopColor="#4F46E5" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <br />
            Organized in One Place
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Simply{" "}
            <span className="font-bold text-blue-600">
              scan your prescriptions
            </span>{" "}
            and let our AI technology organize your medications, test results,
            and health analytics
            <span className="font-bold text-indigo-600"> automatically</span>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link href="/register">
              <button className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xl rounded-2xl shadow-2xl shadow-blue-200 hover:shadow-blue-300 transition-all duration-300 flex items-center gap-3">
                <Scan className="h-6 w-6" />
                Start Scanning Free
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/demo">
              <button className="px-10 py-5 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-bold text-xl rounded-2xl transition-all duration-300">
                📹 Watch Demo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
