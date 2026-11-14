import { Fragment } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

/**
 * ArchFlow — a clean, reusable high-level system flow diagram.
 * Renders an ordered list of node cards connected by animated arrows
 * (horizontal on desktop, vertical on mobile/tablet).
 */
export const ArchFlow = ({ label = "Illustrative — high-level system flow", nodes = [], testid = "arch-flow" }) => (
  <div className="rounded-3xl border border-white/10 bg-[#12141c] p-6 md:p-10 overflow-hidden" data-testid={testid}>
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 mb-8">{label}</p>
    <div className="flex flex-col lg:flex-row lg:items-stretch gap-3 lg:gap-2">
      {nodes.map((n, i) => (
        <Fragment key={n.t}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: i * 0.12, duration: 0.7 }}
            className="flex-1 min-w-[150px] rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex flex-col gap-3"
            data-testid={`${testid}-node-${i}`}
          >
            <span className="shrink-0 w-11 h-11 rounded-xl bg-[#0a0b0f] border border-white/15 text-[#54f446] flex items-center justify-center">
              <n.icon className="w-5 h-5" />
            </span>
            <div>
              <p className="font-display font-bold text-base leading-snug">{n.t}</p>
              <p className="mt-1 text-sm text-zinc-400 leading-relaxed">{n.d}</p>
            </div>
          </motion.div>
          {i < nodes.length - 1 && (
            <div className="flex justify-center lg:self-center text-[#54f446]">
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.2 }}>
                <ChevronRight className="w-5 h-5 rotate-90 lg:rotate-0" />
              </motion.span>
            </div>
          )}
        </Fragment>
      ))}
    </div>
  </div>
);
