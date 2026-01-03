"use client"; // Required for animation

import { motion } from "framer-motion";
import Container from "./Container";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6 bg-bg/80 backdrop-blur-sm border-b border-transparent">
      <Container>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.5 }}
          className="text-xl font-bold tracking-tight text-gray-900"
        >
          HUDO
        </motion.div>
      </Container>
    </nav>
  );
}