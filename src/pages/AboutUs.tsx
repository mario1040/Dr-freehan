import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Target, Eye, Sparkles, Diamond, Heart } from 'lucide-react';

const AboutUs = () => {
  const { t, isRTL } = useLanguage();

  // إعدادات الحركة الفاخرة لتتماشى مع باقي الموقع
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
    }
  };

  const container: Variants = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      
      {/* ================= HERO SECTION (Philosophy) ================= */}
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* خلفية جمالية */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-3xl bg-amber-100/40 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <motion.div variants={fadeUp} className="mb-6">
               <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-amber-200/60 bg-amber-50/50 backdrop-blur-sm text-amber-700 text-sm font-bold tracking-widest uppercase shadow-sm">
                 <Sparkles className="w-4 h-4 text-amber-500" />
                 {isRTL ? 'فلسفة الجمال' : 'Our Philosophy'}
               </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 font-cairo leading-tight">
              {isRTL ? 'حيث يلتقي الطب بـ' : 'Where Medicine Meets'} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 animate-gradient-x">
                {isRTL ? 'فن التجميل' : 'The Art of Aesthetics'}
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium max-w-2xl">
              {t.footer?.aboutText || (isRTL 
                ? 'في عياداتنا، نؤمن بأن الجمال الحقيقي ينبع من الثقة بالنفس. بقيادة الدكتورة فريحان زكريا، نكرس جهودنا وخبراتنا لتقديم رعاية تجميلية استثنائية تبرز أجمل ما فيكِ بطريقة طبيعية وآمنة.'
                : 'Under the leadership of Dr. Freehan Zakria, we are dedicated to providing exceptional aesthetic care that highlights your natural beauty in a safe and artistic way.')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= VISION & MISSION (Premium Glass Cards) ================= */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto"
          >
            {/* Vision Card */}
            <motion.div variants={fadeUp} className="relative group">
               <div className="absolute inset-0 bg-amber-500/5 rounded-[2.5rem] transform transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1" />
               <div className="relative h-full bg-white/60 backdrop-blur-xl border border-slate-200/60 p-10 lg:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/40 transition-all duration-500 group-hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mb-8 group-hover:bg-amber-500 transition-colors duration-500">
                    <Eye className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4 font-cairo">
                    {t.about?.vision || (isRTL ? 'رؤيتنا' : 'Our Vision')}
                  </h2>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    {t.about?.visionText || (isRTL 
                      ? 'أن نكون الوجهة الأولى والموثوقة في عالم التجميل والعناية بالبشرة، وأن نضع معايير جديدة للفخامة والجودة الطبية، لنلهم كل امرأة لاكتشاف جمالها الفريد.'
                      : 'To be the most trusted destination in the world of aesthetics, setting new standards for luxury and medical quality.')}
                  </p>
               </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div variants={fadeUp} className="relative group">
               <div className="absolute inset-0 bg-slate-900/5 rounded-[2.5rem] transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1" />
               <div className="relative h-full bg-white/60 backdrop-blur-xl border border-slate-200/60 p-10 lg:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/40 transition-all duration-500 group-hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-slate-900 transition-colors duration-500">
                    <Target className="w-8 h-8 text-slate-700 group-hover:text-amber-400 transition-colors duration-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4 font-cairo">
                    {t.about?.mission || (isRTL ? 'رسالتنا' : 'Our Mission')}
                  </h2>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    {t.about?.missionText || (isRTL 
                      ? 'تقديم أعلى مستويات الرعاية الطبية التجميلية باستخدام أحدث التقنيات العالمية، مع الالتزام التام بالشفافية، الأمان، وتصميم خطة علاجية مخصصة تلبي احتياجات كل حالة بدقة.'
                      : 'To provide the highest levels of aesthetic medical care using the latest global technologies, with full commitment to transparency and safety.')}
                  </p>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= CORE VALUES (Why Dr. Freehan) ================= */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* إضاءات خلفية في القسم الداكن */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-cairo">
              {isRTL ? 'قيمنا' : 'Core'} <span className="text-amber-500">{isRTL ? 'الأساسية' : 'Values'}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
             <ValueItem 
               icon={Diamond} 
               title={isRTL ? "الجودة والفخامة" : "Quality & Luxury"} 
               desc={isRTL ? "نلتزم بتقديم تجربة استثنائية من لحظة دخولك العيادة وحتى الوصول للنتيجة المثالية." : "We commit to providing an exceptional experience from the moment you step in."}
               isRTL={isRTL}
             />
             <ValueItem 
               icon={Heart} 
               title={isRTL ? "الاهتمام الشخصي" : "Personalized Care"} 
               desc={isRTL ? "كل وجه له قصة وجمال خاص، ولذلك نصمم خططاً علاجية تناسب طبيعتكِ أنتِ فقط." : "Every face has a unique beauty, so we design personalized treatment plans."}
               isRTL={isRTL}
             />
             <ValueItem 
               icon={Sparkles} 
               title={isRTL ? "النتائج الطبيعية" : "Natural Results"} 
               desc={isRTL ? "نؤمن بالتجميل الذي يعزز الجمال ولا يغير الملامح، لتحصلي على إطلالة طبيعية ومشرقة." : "We believe in aesthetics that enhance beauty without changing features."}
               isRTL={isRTL}
             />
          </div>
        </div>
      </section>

    </div>
  );
};

// تم حل المشكلة هنا باستخدام React.ElementType بدلاً من any
const ValueItem = ({ icon: Icon, title, desc, isRTL }: { icon: React.ElementType, title: string, desc: string, isRTL: boolean }) => (
  <div className="flex flex-col items-center text-center p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors duration-300">
     <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20">
        <Icon className="w-6 h-6 text-amber-400" />
     </div>
     <h3 className="text-xl font-bold mb-3 font-cairo text-white">{title}</h3>
     <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default AboutUs;