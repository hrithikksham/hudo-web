"use client";

import { motion } from "framer-motion";
import Container from "./Container";

export default function Navbar() {
  // WhatsApp Configuration
  const phoneNumber = "919500677722"; // Added country code 91 for India based on your location
  const message = encodeURIComponent("Hello, I am interested ! ");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6 bg-bg/80 backdrop-blur-md border-b border-transparent transition-all duration-300">
      <Container>
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl font-bold tracking-tight text-gray-900"
          >
            HUDO
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-black text-white text-sm font-bold rounded-full transition-transform hover:bg-gray-900"
          >
            Start a project
          </motion.a>

        </div>
      </Container>
    </nav>
  );
}