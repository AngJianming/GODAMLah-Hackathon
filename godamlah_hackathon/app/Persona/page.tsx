"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Client } from "persona";

export default function Home() {
  const router = useRouter();
  const [isPersonaOpen, setIsPersonaOpen] = useState(true); // Track if Persona modal is open

  useEffect(() => {
    // Initialize Persona Client
    const personaClient = new Client({
      templateId: "itmpl_1MNWv1ds31yPbSj2bPrpmYAo7DvT",
      environment: "sandbox",
      onReady: () => {
        console.log("Persona ready");
      },
      onComplete: (inquiryId) => {
        console.log("Verification complete:", inquiryId);
        setIsPersonaOpen(false); // Close Persona modal after verification complete
        router.push("/Website"); // Redirect to the main page (home)
      },
      onError: (error) => {
        console.error("Persona error:", error);
        setIsPersonaOpen(false); // Close Persona modal on error
      },
      onCancel: ({inquiryId}) => console.log('onCancel'),
    });

    // Open the Persona modal
    personaClient.open();

    // Cleanup function to remove Persona modal when component is unmounted
    return () => {
      setIsPersonaOpen(false); // Set to false to remove modal if the component unmounts
    };
  }, [router]);

  // Only render Persona modal when `isPersonaOpen` is true
  return (
    <div className="flex justify-center items-center h-screen text-gray-700">
      {isPersonaOpen && <p>Loading identity verification...</p>}
    </div>
  );
}
