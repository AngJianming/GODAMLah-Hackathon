"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Client } from "persona";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const personaClient = new Client({
      templateId: "itmpl_1MNWv1ds31yPbSj2bPrpmYAo7DvT",
      environment: "sandbox",
      onReady: () => console.log("Persona ready"),
      onComplete: (inquiryId) => {
        console.log("Verification complete:", inquiryId);
        router.push("/Register");
      },
      onError: (error) => console.error("Persona error:", error),
    });

    personaClient.open();
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen text-gray-700">
      <p>Loading identity verification...</p>
    </div>
  );
}

