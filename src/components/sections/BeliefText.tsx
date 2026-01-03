"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";

export default function BeliefText() {
  return (
    <section className="py-32 md:py-48">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h3 className="text-3xl md:text-5xl font-medium leading-tight text-gray-900 mb-8">
            A calm system creates <br className="hidden md:block"/> a calm business.
          </h3>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
            We believe in clean data. We believe that the best software is the kind you eventually stop noticing, because it just works.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}