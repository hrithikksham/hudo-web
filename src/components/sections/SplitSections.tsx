"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";

export default function SplitSection() {
  return (
    <section className="min-h-screen flex items-center bg-bg border-t border-gray-100/50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12">
          
          {/* Left Column: Sticky Label */}
          {/* We use col-span-3 to give the label plenty of breathing room, characteristic of premium layouts */}
          <div className="md:col-span-3 relative">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="md:sticky md:top-32"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                02 — Vision
              </span>
            </motion.div>
          </div>
          
          {/* Right Column: Content */}
          <div className="md:col-span-9 flex flex-col gap-16 md:gap-24">
            
            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-gray-900 leading-[0.95]"
            >
              Clarity is the <br/>
              <span className="text-gray-300">only metric.</span>
            </motion.h2>

            {/* Body Text Block */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <p className="text-lg md:text-xl text-gray-900 font-medium leading-relaxed mb-6">
                  HUDO exists because modern software has become too loud. 
                </p>
                <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
                  We focus on correctness and long-term thinking. We strip away the non-essential to reveal the operational truth of your business.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed border-l border-gray-200 pl-6">
                  "We don't build to impress investors; we build to solve the specific, messy, human problems that slow your business down."
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}