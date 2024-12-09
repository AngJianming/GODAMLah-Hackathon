"use client";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ml-0">
          <div className="relative flex h-16 items-center justify-between">
            {/* KYC moved to leftmost part of the nav */}
            <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
              <div className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                KYC
              </div>
            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    FAQ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Link href="/Register" className="text-blue-500 hover:text-blue-700">
        Register
      </Link>
    </div>
  );
}
