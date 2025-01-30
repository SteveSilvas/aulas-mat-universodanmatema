"use client";
import React from "react";
import Benefits from "./screens/Benefits";
import Plains from "./screens/Plains";
import Testimonials from "./screens/Testimonials";
import Flyer from "./screens/Flyer";
import Contact from "./screens/Contact";
import HomeScreen from "./screens/HomeScreen";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <HomeScreen />
      <Plains />
      <Benefits />
      <Flyer />
      <Testimonials />
      <Contact />
    </div>
  );
}