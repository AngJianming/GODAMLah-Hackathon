<<<<<<< HEAD
import React from "react";

const Id = () => {
  return <div>Scan your ID Card</div>;
};

export default Id;
=======
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function IdVerification() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false); // Modal visibility state

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => setIsVisible(true), 100); // Add delay to trigger animation
    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);

  const handleDone = () => {
    setIsVisible(false); // Hide modal with animation
    setTimeout(() => router.push("/website"), 300); // Navigate after animation ends
  };

  return (
    <div>
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        {/* Popup box */}
        <div
          className={`bg-white p-8 rounded shadow-lg transform transition-all duration-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Registration Completed</h2>
          <p className="mb-6 text-gray-600 text-center">
            A confirmation email has been sent to your email address.
          </p>
          <button
            onClick={handleDone}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded shadow w-full"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
>>>>>>> main
