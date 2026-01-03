"use client";

import { motion } from "framer-motion";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="py-24 border-t border-gray-100 bg-white">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12"
        >
          <div className="flex flex-col gap-4">
            <span className="text-4xl font-bold text-gray-900 tracking-tight">HUDO</span>
            <p className="text-gray-500 font-light text-lg">
              Built for the long term.
            </p>
          </div>
          
          <div className="text-left md:text-right flex flex-col gap-2">
            <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Contact</span>
            <a 
              href="tel:9500677722" 
              className="text-xl md:text-2xl text-gray-900 hover:text-gray-600 transition-colors duration-300 font-medium"
            >
              95006-77722
            </a>
            <span className="text-sm text-gray-400 mt-4">
              © {new Date().getFullYear()} HUDO. All rights reserved.
            </span>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}