import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

const BookingSection = () => {
  const { t, lang } = useTranslation();

  return (
    <section id="bookings-section" className="py-24 border-t border-purple-900/30 bg-[#0c0618]/50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-black text-white mb-6 tracking-tight">{t.service1Title}</h2>
          <p className="text-xl text-slate-400 leading-relaxed mb-6">{t.service1Desc}</p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-purple-400 font-bold">
              <span className="text-xl">✓</span> {lang === 'ar' ? 'نظام حجز ذكي ومتكامل عبر واتساب' : 'Smart & Integrated WhatsApp Booking'}
            </li>
            <li className="flex items-center gap-3 text-purple-400 font-bold">
              <span className="text-xl">✓</span> {lang === 'ar' ? 'إدارة المواعيد والعملاء بدقة وسرعة' : 'Fast and Precise Appointment Management'}
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 bg-[#130924] p-10 rounded-[3rem] border border-purple-500/20 shadow-inner w-full">
          <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-transparent rounded-2xl border border-white/5 flex items-center justify-center">
              <span className="text-6xl animate-bounce">📱</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;