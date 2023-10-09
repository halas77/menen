"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Shop from "@/components/Shop";
import React, { useState } from "react";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Shop />
      <Footer />
    </main>
  );
}
