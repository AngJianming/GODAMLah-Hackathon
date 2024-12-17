"use client";
import React from "react";
import { Client } from "persona";

const personaClient = new Client({
  templateId: "itmpl_1MNWv1ds31yPbSj2bPrpmYAo7DvT",
  environment: "sandbox",
  onReady: () => console.log("Persona ready"),
  onComplete: (inquiryId) => {
    console.log("Verification complete:", inquiryId);
  },
  onError: (error) => console.error("Persona error:", error),
});

const Persona = () => {
  const handleClick = () => {
    try {
      personaClient.open();
    } catch (error) {
      console.error("Error opening Persona verification:", error);
    }
  };

  return (
    <div>
      <button 
        onClick={handleClick} 
        style={{
          position: "absolute", 
          top: "80px", 
          right: "20px", 
          padding: "10px 20px", 
          backgroundColor: "#4CAF50", 
          color: "white", 
          border: "none", 
          borderRadius: "5px",
          cursor: "pointer"
        }}>
        Verify Identity
      </button>
    </div>
  );
};

export default Persona;
