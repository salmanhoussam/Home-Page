import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

const BookingSection = () => {
  const { t, lang } = useTranslation();

  return (
    <section id="bookings-section" className="py-24 border-t border-purple-900/30 bg-[#0c0618]/50 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        
        {/* 1. جهة النصوص (النص العربي سيكون على اليمين بفضل الـ RTL) */}
        <div className="md:w-1/2 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            {t.service1Title}
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed mb-10">
            {t.service1Desc}
          </p>
          
          <ul className="space-y-6">
            <li className="flex items-center gap-4 text-slate-200">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                <span className="text-purple-400 font-bold text-lg">✓</span>
              </div>
              <span className="text-lg font-medium">{lang === 'ar' ? 'نظام حجز ذكي ومتكامل عبر واتساب' : 'Smart & Integrated WhatsApp Booking'}</span>
            </li>
            <li className="flex items-center gap-4 text-slate-200">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                <span className="text-purple-400 font-bold text-lg">✓</span>
              </div>
              <span className="text-lg font-medium">{lang === 'ar' ? 'إدارة المواعيد والعملاء بدقة وسرعة' : 'Fast and Precise Appointment Management'}</span>
            </li>
          </ul>
        </div>

        {/* 2. جهة الصورة (مع تأثيرات الـ SaaS الفخمة) */}
        <div className="md:w-1/2 w-full relative group">
          {/* تأثير التوهج البنفسجي خلف الصورة (Glow) */}
          <div className="absolute inset-0 bg-purple-600/20 blur-[100px] rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"></div>
          
          {/* حاوية الصورة مع حركة خفيفة عند تمرير الماوس */}
          <div className="relative z-10 transform transition-all duration-700 hover:scale-[1.03] hover:-translate-y-2">
            <img 
              src="/images/booking-mockup.png" // تأكد من أن اسم الصورة يطابق هذا المسار
              alt={lang === 'ar' ? 'لوحة تحكم حجوزات واتساب' : 'WhatsApp Booking Dashboard'} 
              className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookingSection;