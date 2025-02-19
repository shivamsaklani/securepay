"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function Navbar({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return ()=>{
        window.removeEventListener("scroll",handleScroll);
    }
  }, []);

  return (
    <motion.div
      initial={{ y: -100}}
      animate={{y:0}}
  transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
      className={`w-full top-0 left-0 ${
        isScrolled ? "fixed" : "absolute"
      }`}
    >
      <div className="h-16 w-full flex items-center justify-around text-white">
        {children}
      </div>
    </motion.div>
  );
}
