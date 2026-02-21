import React, { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';

const CTASection = () => {
  const { t, lang } = useTranslation();
  const [email, setEmail] = useState('');

  const handleSend = () => {
    if(!email) return alert(lang === 'ar' ? 'يرجى إدخال الإيميل' : 'Please enter email');
    window.location.href = `mailto:salman.houssam@gmail.com?subject=New SaaS Inquiry&body=${email}`;
  };

  return (
    <section className="py-20 bg-gradient-to-t from-[#090412] to-[#130924] border-t border-purple-900/30 text-center">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{lang === 'ar' ? 'ابدأ رقمنة عملك اليوم' : 'Digitize Your Business Today'}</h2>
        <p className="text-slate-400 mb-8">{lang === 'ar' ? 'تواصل معنا للحصول على استشارة مجانية حول أنظمتنا السحابية' : 'Contact us for a free consultation on our cloud systems.'}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPlaceholder}
            className="bg-white/5 border border-slate-700/50 px-6 py-3 rounded-xl outline-none text-white focus:border-purple-500 transition-colors sm:w-64"
          />
          <button onClick={handleSend} className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg">
            {lang === 'ar' ? 'طلب استشارة' : 'Request Consultation'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;