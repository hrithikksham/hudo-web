"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";

const items = [
  {
    title: "Operational Clarity",
    desc: "We map messy workflows into clean, linear software paths.",
    col: "md:col-span-2",
  },
  {
    title: "No Fluff",
    desc: "Zero marketing features. Only tools that solve problems.",
    col: "md:col-span-1",
  },
  {
    title: "Data Integrity",
    desc: "Structure your data so it serves you, not the other way around.",
    col: "md:col-span-1",
  },
  {
    title: "Long-term Scale",
    desc: "Built on foundational technologies that won't break next year.",
    col: "md:col-span-2",
  },
];

export default function BentoGrid() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-gray-400">
            Our Approach
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`${item.col} bg-surface p-8 md:p-12 rounded-2xl border border-transparent hover:border-gray-200 transition-colors duration-500`}
            >
              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-500 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}