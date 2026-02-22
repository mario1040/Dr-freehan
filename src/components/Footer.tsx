import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// واجهة لخصائص عنصر الاتصال
interface ContactItemProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  isLink?: boolean;
  href?: string;
  isRTL?: boolean;
}

const Footer = () => {
  const { t, isRTL } = useLanguage();

  const quickLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about-us', label: t.nav.about },
    { href: '/services', label: t.nav.services },
    { href: '/doctors', label: t.nav.doctors },
    { href: '/offers', label: t.nav.offers },
    { href: '/contact-us', label: t.nav.contact },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", hover: "hover:bg-blue-600 hover:border-blue-600 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]" },
    { icon: Instagram, href: "https://instagram.com", hover: "hover:bg-pink-600 hover:border-pink-600 hover:shadow-[0_0_15px_rgba(219,39,119,0.5)]" },
    { icon: Twitter, href: "https://twitter.com", hover: "hover:bg-sky-500 hover:border-sky-500 hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]" },
    { icon: Linkedin, href: "https://linkedin.com", hover: "hover:bg-blue-700 hover:border-blue-700 hover:shadow-[0_0_15px_rgba(29,78,216,0.5)]" },
  ];

  return (
    <footer className="relative bg-[#0a0f16] text-slate-300 overflow-hidden pt-24 pb-8 border-t border-amber-900/20">
      
      {/* ================= BACKGROUND EFFECTS ================= */}
      {/* إضاءات ذهبية خافتة في الخلفية لتعطي طابع الفخامة */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[150px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-slate-800/30 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />
      
      {/* نقش هندسي دقيق جداً */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="container relative z-10 px-4 sm:px-6 mx-auto">
        
        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* 1. Brand & Social */}
          <div className="space-y-8">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="inline-block relative"
            >
               {/* تأثير إضاءة خلف اللوجو */}
               <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full" />
               
               {/* ====== اللوجو الحقيقي للعيادة ====== 
                 قم بتغيير المسار في src ليتوافق مع مسار صورة اللوجو الخاص بك (مثلاً: /assets/logo.png)
               */}
               <Link to="/" className="relative block">
                 <img 
                   src="/logo.png" // ضَع مسار اللوجو هنا
                   alt="SF Touch Clinic Logo" 
                   className="h-16 w-auto object-contain transition-transform duration-500 hover:scale-105"
                   // في حال لم يكن اللوجو جاهزاً، هذه الصورة المؤقتة ستعمل لتوضيح الفكرة
                   onError={(e) => {
                     (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=SF+Touch&background=f59e0b&color=fff&size=128&font-size=0.4&rounded=true";
                   }}
                 />
               </Link>
            </motion.div>

            <p className="text-sm leading-relaxed text-slate-400 max-w-xs font-medium">
              {t.footer.aboutText || (isRTL 
                ? 'نقدم أرقى خدمات التجميل والعناية بالبشرة بأحدث التقنيات العالمية تحت إشراف نخبة من الأطباء لضمان نتائج تفوق توقعاتك.' 
                : 'Providing the finest beauty and skin care services with the latest international technologies under the supervision of elite doctors.')}
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 hover:-translate-y-1 text-slate-300 hover:text-white ${social.hover}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-lg font-bold text-white mb-8 relative inline-block font-cairo">
              {t.footer.quickLinks}
              <span className="absolute -bottom-3 left-0 w-8 h-1 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full" />
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.href} className="group flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-amber-400">
                    <ArrowRight className={`w-3.5 h-3.5 text-amber-600/50 group-hover:text-amber-400 transition-all duration-300 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-8 relative inline-block font-cairo">
              {t.footer.branches}
              <span className="absolute -bottom-3 left-0 w-8 h-1 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full" />
            </h4>
            <div className="space-y-6">
               <ContactItem 
                 icon={MapPin} 
                 title={t.footer.damietta} 
                 desc="Safwa Mall, 2nd Floor" 
                 isRTL={isRTL}
               />
               <ContactItem 
                 icon={MapPin} 
                 title={t.footer.newDamietta} 
                 desc="Central Zone, 1st Floor" 
                 isRTL={isRTL}
               />
               <ContactItem 
                 icon={Phone} 
                 title={isRTL ? "اتصل بنا" : "Call Us"} 
                 desc="0572260062" 
                 isLink 
                 href="tel:0572260062"
                 isRTL={isRTL}
               />
            </div>
          </div>

          {/* 4. Newsletter & Hours (Premium Glass Card) */}
          <div>
            <h4 className="text-lg font-bold text-white mb-8 relative inline-block font-cairo">
              {t.footer.workingHours}
              <span className="absolute -bottom-3 left-0 w-8 h-1 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full" />
            </h4>
            
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 backdrop-blur-md mb-8 shadow-2xl relative overflow-hidden group hover:border-amber-500/30 transition-colors duration-500">
               {/* تأثير توهج داخلي للبطاقة */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full -z-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
               
               <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
                     <Clock className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                     <p className="text-white font-bold text-sm mb-1">{isRTL ? 'ساعات العمل' : 'Opening Hours'}</p>
                     <p className="text-xs text-slate-400 font-medium leading-relaxed">{t.footer.hours}</p>
                  </div>
               </div>
               
               <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                     <Mail className="w-4 h-4 text-slate-300" />
                  </div>
                  <a href="mailto:info@sftouch.com" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">info@sftouch.com</a>
               </div>
            </div>

            {/* Premium Newsletter Input */}
            <div className="relative group">
               <input 
                 type="email" 
                 placeholder={isRTL ? 'اشتركي في نشرتنا...' : 'Subscribe newsletter...'} 
                 className={`w-full bg-[#0f172a] border border-slate-800 rounded-full py-3.5 ${isRTL ? 'pr-5 pl-14' : 'pl-5 pr-14'} text-sm text-white focus:outline-none focus:border-amber-500/50 focus:bg-[#1e293b] transition-all duration-300 shadow-inner`}
               />
               <button className={`absolute top-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-600 to-amber-500 rounded-full p-2.5 text-white hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all duration-300 hover:scale-105 ${isRTL ? 'left-1.5' : 'right-1.5'}`}>
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
               </button>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-slate-800/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 font-medium">
            {t.footer.copyright}
          </p>
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
             <a href="#" className="hover:text-amber-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300">
               {isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}
             </a>
             <a href="#" className="hover:text-amber-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300">
               {isRTL ? 'الشروط والأحكام' : 'Terms & Conditions'}
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// مكون عناصر الاتصال المحدث
const ContactItem = ({ icon: Icon, title, desc, isLink, href, isRTL }: ContactItemProps) => {
  const Content = () => (
    <div className="flex gap-4 group cursor-default items-center">
       <div className="w-12 h-12 rounded-2xl bg-white/[0.03] flex items-center justify-center border border-white/10 group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-all duration-500 group-hover:-translate-y-1 shrink-0">
          <Icon className="w-5 h-5 text-slate-400 group-hover:text-amber-500 transition-colors duration-500" />
       </div>
       <div>
          <p className="text-white font-bold text-sm mb-1 group-hover:text-amber-400 transition-colors duration-300">{title}</p>
          <p className="text-xs text-slate-400 font-medium">{desc}</p>
       </div>
    </div>
  );

  return isLink ? <a href={href} className="block">{Content()}</a> : Content();
};

export default Footer;