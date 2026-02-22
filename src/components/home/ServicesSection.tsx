import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ArrowRight, Sparkles, Apple, Scissors } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

const ServicesSection = () => {
  const { t, isRTL } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax ناعم جداً وفاخر
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // توحيد الألوان لتكون كلها فاخرة (ذهبي/عنبري) بدلاً من الألوان المتعددة
  const services = [
    {
      id: '01',
      title: t.services.dermatology.title,
      description: t.services.dermatology.description,
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop',
      href: '/services/dermatology-laser',
    },
    {
      id: '02',
      title: t.services.nutrition.title,
      description: t.services.nutrition.description,
      icon: Apple,
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop',
      href: '/services/nutrition-contouring',
    },
    {
      id: '03',
      title: t.services.hair.title,
      description: t.services.hair.description,
      icon: Scissors,
      image: 'https://images.unsplash.com/photo-1595476103518-3c18c81f1a0a?q=80&w=2070&auto=format&fit=crop',
      href: '/services/hair-restoration',
    },
  ];

  // إعدادات حركة انسيابية مطابقة للـ Hero
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
    }
  };

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden"
    >
       {/* ================= BACKGROUND DECORATION ================= */}
       {/* شبكة خفيفة للمسة هندسية راقية */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
       
       {/* إضاءات خلفية بلون ذهبي هادئ */}
       <motion.div 
         style={{ y: yBg }}
         className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-amber-100/40 rounded-full blur-[120px] -z-10 opacity-60 translate-x-1/3"
       />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 max-w-3xl mx-auto flex flex-col items-center"
        >
          {/* Premium Badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-amber-200/60 bg-amber-50/50 backdrop-blur-sm text-amber-700 text-sm font-bold tracking-widest uppercase shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>{t.services.subtitle || (isRTL ? 'خدماتنا المتكاملة' : 'Our Expertise')}</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-cairo leading-[1.2]">
            {isRTL ? 'رعاية طبية تفوق' : 'Medical Care Beyond'} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 animate-gradient-x">
              {isRTL ? 'التوقعات' : 'Expectations'}
            </span>
          </h2>
          
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl font-medium">
            {isRTL 
              ? 'نقدم لكِ مجموعة شاملة من الخدمات التجميلية والعلاجية المصممة خصيصاً لإبراز جمالك الطبيعي بأعلى معايير الجودة العالمية.'
              : 'We provide a comprehensive range of aesthetic and therapeutic services designed specifically to highlight your natural beauty with world-class standards.'}
          </p>
        </motion.div>

        {/* ================= SERVICES CARDS ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={cardVariants} className="h-full">
              <Link to={service.href} className="group relative block h-[550px] w-full overflow-hidden rounded-[2.5rem] shadow-xl shadow-slate-200/50 ring-1 ring-slate-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 isolate">
                
                {/* 1. Background Image with Premium Zoom */}
                <div className="absolute inset-0 h-full w-full -z-20">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay Gradient (Dark, elegant fade) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-slate-900/10 opacity-80 group-hover:opacity-90 transition-opacity duration-700 -z-10" />

                {/* 2. Top Content (Icon & Elegant Number) */}
                <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-start z-20">
                   <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg group-hover:bg-amber-500 group-hover:border-amber-400 group-hover:text-slate-900 transition-all duration-500">
                      <service.icon className="w-7 h-7" />
                   </div>
                   <span className="text-5xl font-light text-white/30 font-cairo tracking-tight select-none group-hover:text-white/50 transition-colors duration-500">
                      {service.id}
                   </span>
                </div>

                {/* 3. Bottom Content (Premium Glass Card) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] p-7 overflow-hidden relative group-hover:bg-white/15 transition-all duration-500 group-hover:-translate-y-1">
                    
                    <h3 className="text-2xl font-bold text-white mb-3 font-cairo">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-300 text-sm leading-relaxed mb-8 line-clamp-2 group-hover:text-white transition-colors duration-500">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between text-amber-400">
                      <span className="font-bold text-sm tracking-wide uppercase">
                         {t.services.learnMore || (isRTL ? 'اكتشفي المزيد' : 'Discover More')}
                      </span>
                      <div className={`w-10 h-10 rounded-full border border-amber-400/30 flex items-center justify-center transition-all duration-500 group-hover:bg-amber-500 group-hover:text-slate-900 group-hover:scale-110`}>
                         <ArrowRight className={`w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                      </div>
                    </div>

                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;