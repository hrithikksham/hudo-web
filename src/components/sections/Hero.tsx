"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";

export default function Hero() {
  return (
    /* 1. h-screen: Forces the section to take the full height of the viewport.
      2. flex items-center: Vertically centers the content.
      3. min-h: Prevents cutting off content on very small screens.
    */
    <section className="h-screen min-h-[600px] flex items-center overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          /* Slower, distinct 'easeOut' for a premium feel */
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          {/* Typography Refinement:
            - md:text-9xl: Massive scale for impact.
            - tracking-tighter: Makes the font feel more 'engineered' and solid.
            - leading-[0.85]: Tights the lines to create a solid block of text.
            - text-gray-300: Lighter secondary text for better minimalist contrast.
          */}
          <h1 className="text-7xl md:text-9xl font-medium tracking-tighter text-gray-900 leading-[0.9] md:leading-[0.85] mb-12">
            Software built <br />
            <span className="text-gray-300">for reality.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-xl leading-relaxed">
            We build digital tools for businesses that value stability over noise.
            Reliable systems for complex operations.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}