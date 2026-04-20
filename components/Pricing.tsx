"use client";
import { Check, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    oldPrice: "Frw 599,000",
    price: "Frw 479,000",
    desc: "Perfect for small businesses looking to establish their online presence.",
    features: [
      { text: "Free domain & Hosting", included: true },
      { text: "Custom Website Design", included: true },
      { text: "Up to 5 Pages with CMS", included: true },
      { text: "Mobile-First Design", included: true },
      { text: "E-commerce Integration", included: false },
      { text: "Admin Dashboard", included: false },
    ],
    themeBg: "bg-accent-cyan text-black",
    themeText: "text-accent-cyan",
    themeIconBg: "bg-accent-cyan/20 text-accent-cyan",
    themeFold: "border-cyan-700",
    // 🚀 Solid Cyan Button
    themeButton: "bg-accent-cyan text-black border-accent-cyan hover:shadow-lg hover:shadow-accent-cyan/20",
    badge: "Active",
  },
  {
    name: "Professional",
    oldPrice: "Frw 1,099,000",
    price: "Frw 899,000",
    desc: "Ideal for growing businesses that need advanced functionality.",
    features: [
      { text: "Free domain & Hosting", included: true },
      { text: "Custom Web App Dev", included: true },
      { text: "Database Integration", included: true },
      { text: "User Auth & Management", included: true },
      { text: "E-commerce & Payments", included: true },
      { text: "Admin Dashboard", included: true },
    ],
    themeBg: "bg-[#8FFF00] text-black",
    themeText: "text-[#8FFF00]",
    themeIconBg: "bg-[#8FFF00]/20 text-[#8FFF00]",
    themeFold: "border-[#5eab00]",
    // 🚀 Solid Green Button
    themeButton: "bg-[#8FFF00] text-black border-[#8FFF00] hover:shadow-lg hover:shadow-[#8FFF00]/20",
    badge: "Save 18%",
    highlight: true,
  },
  {
    name: "Enterprise",
    oldPrice: "Frw 2,499,000",
    price: "Frw 1,899,000",
    desc: "Complete enterprise solution for large-scale requirements.",
    features: [
      { text: "Full-Stack Custom Dev", included: true },
      { text: "Mobile App (iOS/Android)", included: true },
      { text: "Advanced Backend Arch", included: true },
      { text: "Multi-tenant System", included: true },
      { text: "API Integrations", included: true },
      { text: "Dedicated Manager", included: true },
    ],
    themeBg: "bg-accent-amber text-black",
    themeText: "text-accent-amber",
    themeIconBg: "bg-accent-amber/20 text-accent-amber",
    themeFold: "border-amber-600",
    // 🚀 Solid Amber Button
    themeButton: "bg-accent-amber text-black border-accent-amber hover:shadow-lg hover:shadow-accent-amber/20",
    badge: "Popular",
  },
];

export default function Pricing() {
  const handleConsultClick = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 px-6 relative transition-colors duration-500">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-clash text-text-primary tracking-tight">
            Pricing <span className="opacity-30 italic">Plans</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-start mt-4">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "relative flex flex-col p-8 pt-16 rounded-[2.5rem] border transition-all duration-500",
                "bg-white/40 dark:bg-surface/30",
                "box-shadow-2xl shadow-black/5 dark:shadow-none",
                plan.highlight 
                  ? "border-accent-cyan/30 scale-[1.02] z-10 ring-1 ring-accent-cyan/10" 
                  : "border-border-subtle"
              )}
            >
              
              {/* 🚀 THE 3D RIBBON WRAPPER */}
              <div className="absolute top-6 -left-3 z-20">
                <div className={cn(
                  "px-4 py-2 rounded-r-lg shadow-lg relative z-10",
                  plan.themeBg
                )}>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                    {plan.name}
                  </span>
                </div>
                <div 
                  className={cn(
                    "absolute top-full left-0 w-0 h-0 border-t-[10px] border-l-[12px] border-l-transparent z-0",
                    plan.themeFold
                  )} 
                />
              </div>

              {/* Status Badge */}
              <div className="absolute top-6 right-6 z-20">
                <div className="relative px-3 py-1 rounded-full border border-border-subtle bg-surface/5 backdrop-blur-md shadow-sm">
                  <span className={cn("text-[10px] font-bold uppercase tracking-wider", plan.themeText)}>
                    {plan.badge}
                  </span>
                </div>
              </div>
              
              {/* Content Area */}
              <div className="relative z-10 mt-6 mb-8">
                <span className="text-xs text-text-secondary/50 line-through block mb-1">{plan.oldPrice}</span>
                <span className="text-4xl font-bold font-clash text-text-primary tracking-tighter">{plan.price}</span>
              </div>

              <p className="text-sm text-text-secondary mb-10 leading-relaxed font-jakarta font-medium opacity-80">
                {plan.desc}
              </p>

              <div className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    {feature.included ? (
                      <div className={cn("p-1.5 rounded-full", plan.themeIconBg)}>
                        <Check size={12} className="stroke-[3]" />
                      </div>
                    ) : (
                      <div className="p-1.5 rounded-full bg-text-secondary/10">
                        <X size={12} className="text-text-secondary/30" />
                      </div>
                    )}
                    <span className={cn(
                      "text-[12px] font-jakarta font-medium transition-colors",
                      feature.included ? "text-text-primary/90" : "text-text-secondary/40"
                    )}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* 🚀 THE FIXED BUTTON */}
              <button 
                type="button"
                onClick={handleConsultClick}
                className={cn(
                  "group w-full py-5 rounded-2xl font-bold text-[13px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 border cursor-pointer active:scale-95",
                  // 🚀 Applies the specific color permanently to every button
                  plan.themeButton
                )}
              >
                Secure Spot
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}