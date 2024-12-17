"use client";
import React from "react";
import Link from "next/link";
import "./website.css";

export default function HomePage() {
  return (
    <div>
      {/* Header */}
      <header className="navbar">
        <div className="logo-container">
          <img src="/LOGO.png" alt="Logo" className="logo" />
          <div className="logo-text">
            <h1>Newbies</h1>
            <h2>Estate</h2>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact</a></li>
            <li><Link href="/Persona">Invest</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <img
          src="/house.gif"
          alt="Banner Image"
          className="hero-image"
        />
        <div className="hero-content">
          <h1>Welcome to Newbies Estate</h1>
          <p>Building a better future for all</p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="grid-section">
        <div className="grid-item">
          <h2>Our Mission</h2>
          <p>Driving innovation and sustainability across industries.</p>
        </div>
        <div className="grid-item">
          <h2>Our Projects</h2>
          <p>Explore our cutting-edge projects worldwide.</p>
        </div>
        <div className="grid-item">
          <h2>Our Values</h2>
          <p>We believe in integrity, excellence, and people first.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Team Newbies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
