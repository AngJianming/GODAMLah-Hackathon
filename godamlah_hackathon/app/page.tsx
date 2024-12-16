"use client";

import React, { useEffect } from "react";
import { Client } from "persona";
import { useRouter } from "next/navigation";

export default function PersonaVerification() {
  const router = useRouter();

  useEffect(() => {
    const personaClient = new Client({
      templateId: "itmpl_1MNWv1ds31yPbSj2bPrpmYAo7DvT", // Replace with your Template ID
      environment: "sandbox", // Change to "production" for live environments
      onReady: () => console.log("Persona is ready"),
      onComplete: (inquiryId) => {
        console.log("Verification complete:", inquiryId);
        router.push("/Register"); // Redirect to the registration form
      },
      onError: (error) => console.error("Persona error:", error),
    });

    personaClient.open();
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <p>Loading Persona verification...</p>
    </div>
  );
}

