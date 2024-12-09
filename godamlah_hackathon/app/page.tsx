"use client";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Left Section */}
            <div className="flex flex-1 items-center justify-start">
              <div className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                KYC
              </div>
            </div>

            {/* Center Section */}
            <div className="flex flex-1 items-center justify-center">
              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  <Link
                    href="/Services"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Services
                  </Link>
                  <Link
                    href="/About"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    About
                  </Link>
                  <Link
                    href="/Marketplace"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Marketplace
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    FAQ
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-1 items-center justify-end">
              <Link
                href="/Register"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Register
              </Link>
              <Link
                href="/Login"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex justify-center items-center h-screen text-6xl">
        Know Your Customer
      </div>
    </div>
  );
}
