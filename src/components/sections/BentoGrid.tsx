"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";

const items = [
  {
    id: "01",
    title: "Operational Clarity",
    desc: "We map messy workflows into clean, linear software paths.",
    col: "md:col-span-2",
  },
  {
    id: "02",
    title: "No Fluff",
    desc: "Zero marketing features. Only tools that solve problems.",
    col: "md:col-span-1",
  },
  {
    id: "03",
    title: "Data Integrity",
    desc: "Structure your data so it serves you, not the other way around.",
    col: "md:col-span-1",
  },
  {
    id: "04",
    title: "Long-term Scale",
    desc: "Built on foundational technologies that won't break next year.",
    col: "md:col-span-2",
  },
];

export default function BentoGrid() {
  return (
    <section className="min-h-screen flex items-center py-24 md:py-32 bg-bg">
      <Container className="w-full">
        {/* Header - Aligned to grid start */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex items-end justify-between border-b border-gray-200 pb-6"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-gray-400">
            Our Approach
          </span>
          <span className="hidden md:block text-xs text-gray-300 font-mono">
            SYSTEM_V1.0
          </span>
        </motion.div>
        
        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[360px]">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`${item.col} group relative flex flex-col justify-between p-8 md:p-12 bg-surface rounded-xl overflow-hidden transition-all duration-500 hover:bg-[#F0F0EE]`}
            >
              {/* Technical Index Number */}
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono text-gray-400 group-hover:text-gray-900 transition-colors duration-500">
                  /{item.id}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-6">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-500 font-light leading-relaxed max-w-md group-hover:text-gray-600 transition-colors duration-500">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}