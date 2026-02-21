// المسار: src/components/home/HeroSection.jsx

import React, { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';

const HeroSection = () => {
  const { t, lang } = useTranslation();
  
  // حالات القسم الرئيسي
  const [activeService, setActiveService] = useState("bookings");
  const [emailInput, setEmailInput] = useState("");
  
  const whatsappNumber = "96178727986";

  // دالة التمرير للأقسام الأخرى
  const scrollToService = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // دالة إرسال الإيميل
  const handleEmailSend = () => {
    if (!emailInput) {
      alert(lang === 'ar' ? "يرجى إدخال بريدك الإلكتروني" : "Please enter your email");
      return;
    }
    window.location.href = `mailto:salman.houssam@gmail.com?subject=Inquiry&body=Email: ${emailInput}`;
  };

  return (
    <header className="container mx-auto px-6 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center justify-between relative z-10">
      
      {/* 1. قسم النصوص والدعوة للإجراء (الجهة اليمنى بالعربي) */}
      <div className="md:w-1/2 mt-12 md:mt-0">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight text-white">
          {t.heroTitle1} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-slate-200">
            {t.heroTitle2}
          </span>
        </h1>
        
        {/* النص الذي تم تعديله بناءً على صورتك السابقة */}
        <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
          {t.heroSubDesc || "أنظمة سحابية متطورة لإدارة الحجوزات والقوائم الإلكترونية، صممت لتعكس فخامة علامتك التجارية."}
        </p>

        <div className="flex flex-col gap-4 max-w-md">
          {/* حقل الإيميل */}
          <div className="bg-white/5 p-1.5 rounded-xl flex items-center border border-slate-700/50 focus-within:border-purple-500/50 backdrop-blur-md">
            <input 
              type="email" 
              value={emailInput} 
              onChange={(e) => setEmailInput(e.target.value)} 
              placeholder={t.emailPlaceholder} 
              className="bg-transparent px-4 py-3 outline-none text-white w-full text-sm" 
            />
            <button 
              onClick={handleEmailSend} 
              className="bg-purple-600/20 hover:bg-purple-600 text-purple-400 hover:text-white px-5 py-2 rounded-lg text-xs font-bold transition-all"
            >
              {lang === 'ar' ? 'إرسال' : 'Send'}
            </button>
          </div>
          
          {/* زر الواتساب الرئيسي */}
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${t.whatsappText}`} 
            target="_blank" 
            rel="noreferrer" 
            className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-4 rounded-xl font-bold text-center flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(147,51,234,0.3)]"
          >
            {t.orderWhatsApp}
          </a>
        </div>
      </div>

      {/* 2. قسم العرض التفاعلي (Dashboard Preview) - (الجهة اليسرى بالعربي) */}
      <div className="md:w-1/2 relative w-full flex justify-center items-center perspective-1000">
        <div className="w-[100%] md:w-[115%] aspect-[4/3.2] bg-[#0d0718]/90 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col overflow-hidden relative z-10">
          
          {/* شريط الأزرار العلوي */}
          <div className="h-14 bg-white/5 border-b border-white/5 flex items-center px-6 justify-between">
            <div className="flex gap-2">
              {['bookings', 'menu', 'store'].map((service) => (
                <button
                  key={service}
                  onClick={() => { setActiveService(service); scrollToService(`${service}-section`); }}
                  className={`text-[10px] px-3 py-1.5 rounded-full font-bold border transition-all ${
                    activeService === service 
                    ? "bg-purple-600 text-white border-purple-400/30 shadow-[0_0_10px_rgba(168,85,247,0.4)]" 
                    : "bg-white/5 text-slate-400 border-white/5 hover:text-white"
                  }`}
                >
                  {t[`dash${service.charAt(0).toUpperCase() + service.slice(1)}`]}
                </button>
              ))}
            </div>
            
            {/* مؤشر الحالة (Status) */}
            <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-tighter">
                {t.dashStatus || 'Online'}
              </span>
            </div>
          </div>
          
          {/* الرسم البياني والمحتوى الداخلي للداشبورد */}
          <div className="flex-1 p-6 flex flex-col justify-center">
            <div className="h-full bg-white/5 rounded-[2rem] border border-white/5 p-5 flex flex-col">
              <h3 className="text-sm font-bold text-white mb-4">
                {activeService === 'bookings' ? (t.dashSalesTitle || 'Bookings Analytics') : (lang === 'ar' ? 'تحليلات النظام' : 'System Analytics')}
              </h3>
              <div className="flex-1 flex items-end justify-between gap-2">
                {[40, 70, 90, 65, 100].map((h, i) => (
                  <div 
                    key={i} 
                    style={{height: `${h}%`}} 
                    className={`flex-1 rounded-t-lg transition-all duration-700 ${
                      i === 4 ? 'bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]' : 'bg-white/10'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default HeroSection;