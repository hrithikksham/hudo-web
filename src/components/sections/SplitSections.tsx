"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";

export default function SplitSection() {
  return (
    <section className="py-24 border-t border-gray-100">
      <Container>
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="md:w-1/3">
            <span className="text-sm font-bold uppercase tracking-widest text-gray-400 sticky top-32">
              Vision
            </span>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="md:w-2/3"
          >
            <h2 className="text-3xl md:text-5xl font-medium leading-[1.1] mb-8 text-gray-900">
              Clarity is the only metric.
            </h2>
            <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
              <p>
                HUDO exists because modern software has become too loud. We focus
                on correctness and long-term thinking.
              </p>
              <p>
                We don't build to impress investors; we build to solve the
                specific, messy, human problems that slow your business down.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}