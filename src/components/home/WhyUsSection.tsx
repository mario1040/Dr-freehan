import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Stethoscope, Cpu, ClipboardList, Award, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface FeatureItem {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
}

const WhyUsSection = () => {
  const { t, isRTL } = useLanguage();

  const features: FeatureItem[] = [
    {
      id: 1,
      icon: Stethoscope,
      title: t.whyUs.doctorsCare.title,
      description: t.whyUs.doctorsCare.description,
    },
    {
      id: 2,
      icon: Cpu,
      title: t.whyUs.technology.title,
      description: t.whyUs.technology.description,
    },
    {
      id: 3,
      icon: ClipboardList,
      title: t.whyUs.customized.title,
      description: t.whyUs.customized.description,
    },
    {
      id: 4,
      icon: Award,
      title: t.whyUs.results.title,
      description: t.whyUs.results.description,
    },
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      
      {/* ================= BACKGROUND MAGIC ================= */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* إضاءات خلفية غير منتظمة لتعطي عمقاً إبداعياً */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-slate-100/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 max-w-3xl mx-auto flex flex-col items-center"
        >
          {/* Premium Badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-amber-200/60 bg-amber-50/50 backdrop-blur-sm text-amber-700 text-sm font-bold tracking-widest uppercase shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>{isRTL ? 'لماذا عياداتنا؟' : 'Why Choose Us?'}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-cairo leading-[1.2]">
            {isRTL ? 'نصنع الفارق في' : 'Making a Difference in'} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 animate-gradient-x">
              {isRTL ? 'عالم التجميل' : 'The Aesthetic World'}
            </span>
          </h2>
        </motion.div>

        {/* ================= CREATIVE GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-12 lg:pb-24">
          {features.map((feature, i) => (
            <SpotlightCard key={i} feature={feature} index={i} isRTL={isRTL} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ================= SPOTLIGHT CARD COMPONENT =================
const SpotlightCard = ({ feature, index, isRTL }: { feature: FeatureItem, index: number, isRTL: boolean }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const Icon = feature.icon;
  
  // تأثير التدرج الإبداعي: البطاقات الفردية تنزل للأسفل قليلاً في الشاشات الكبيرة
  const isOdd = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative h-full flex flex-col border border-slate-200/60 bg-white/60 backdrop-blur-xl shadow-xl shadow-slate-200/30 rounded-[2.5rem] overflow-hidden cursor-default transition-transform duration-500 hover:-translate-y-2 ${isOdd ? 'lg:translate-y-12' : ''}`}
      onMouseMove={handleMouseMove}
    >
      {/* 1. Spotlight Background Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(245, 158, 11, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* 2. Spotlight Animated Border */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-20"
        style={{
            background: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                rgba(245, 158, 11, 0.5),
                transparent 60%
              )
            `,
            maskImage: `linear-gradient(black, black) content-box, linear-gradient(black, black)`,
            WebkitMaskImage: `linear-gradient(black, black) content-box, linear-gradient(black, black)`,
            maskComposite: `exclude`,
            WebkitMaskComposite: `xor`,
            padding: `1.5px`,
        }}
      />

      {/* 3. Card Content */}
      <div className="relative h-full p-8 md:p-10 flex flex-col items-start z-10">
        
        {/* Floating Icon Container */}
        <div className="relative mb-8">
           <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-xl scale-50 group-hover:scale-150 transition-transform duration-700 ease-out" />
           <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white to-slate-50 border border-slate-100 shadow-sm flex items-center justify-center group-hover:border-amber-200 group-hover:shadow-amber-500/20 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-amber-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-full" />
              <Icon className="w-7 h-7 text-slate-700 group-hover:text-white transition-colors duration-500 relative z-10" />
           </div>
        </div>

        {/* Text Content */}
        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors duration-300 font-cairo">
          {feature.title}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow font-medium">
          {feature.description}
        </p>

        {/* Bottom Indicator (Creative Line & Number) */}
        <div className="w-full flex justify-between items-end mt-auto relative pt-6 before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-slate-200 before:to-transparent">
           <span className="text-4xl font-light text-slate-200 font-cairo group-hover:text-amber-200 transition-colors duration-500 select-none">
             0{index + 1}
           </span>
           
           <div className={`w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-amber-50 group-hover:border-amber-200 transition-all duration-500 transform ${isRTL ? 'translate-x-4 group-hover:translate-x-0' : '-translate-x-4 group-hover:translate-x-0'}`}>
              <ArrowRight className={`w-4 h-4 text-amber-600 transition-transform duration-500 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
           </div>
        </div>

      </div>
    </motion.div>
  );
};

export default WhyUsSection;