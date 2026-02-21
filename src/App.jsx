import React, { useState } from 'react';
import GeneralPrivacy from './GeneralPrivacy';
import SpecificPrivacy from './SpecificPrivacy';

function App() {
  // 1. إدارة حالة اللغة (ar/en)
  const [lang, setLang] = useState('ar');

  const toggleLang = () => {
    setLang(prev => (prev === 'ar' ? 'en' : 'ar'));
  };

  // 2. قاموس النصوص للغتين
  const t = {
    ar: {
      navServices: "الخدمات",
      navContact: "تواصل معنا",
      heroTitle: "ارتقِ بأعمالك للمستقبل.",
      heroSubTitle: "بأنظمة ذكية وسريعة.",
      heroDesc: "أنظمة سحابية متطورة لإدارة الحجوزات، القوائم الإلكترونية، والمتاجر. صُممت باللون الفضي والبنفسجي لتعكس فخامة علامتك التجارية.",
      emailPlaceholder: "أدخل بريدك الإلكتروني ليصلك جديدنا...",
      orderBtn: "للطلب عبر واتساب",
      dashBookings: "الحجوزات",
      dashMenu: "المنيو",
      dashStore: "المتجر",
      dashTitle: "المبيعات والحجوزات",
      dashStatus: "متصل",
      dashRevenue: "نمو الإيرادات",
      dashAppointments: "المواعيد القادمة",
      secTitle: "تطبيقات مصممة للتميز",
      secDesc: "نقدم لك حلولاً سحابية متكاملة مصممة لتسهيل إدارة أعمالك وزيادة تفاعل عملائك.",
      service1Title: "نظام الحجز الذكي المربوط بواتساب",
      service1Desc: "نظام متكامل لحجز المواعيد عبر الإنترنت وربطها مباشرة مع منصة واتساب للأعمال (WhatsApp Business API).",
      service1Btn: "اطلب النظام الآن ←",
      service2Title: "المنيو الذكي",
      service2Desc: "حركات سلسة وتصميم جذاب يشبه التطبيقات الأصلية.",
      service3Title: "المتجر الإلكتروني",
      service3Desc: "منصة بيع متكاملة مع عربة تسوق، وبوابات دفع.",
      footerRights: "جميع الحقوق محفوظة.",
      footerPrivacy: "الخصوصية العامة",
      footerTerms: "الخصوصية الخاصة (شروط الاستخدام)",
      waMsg: "مرحباً، أريد الاستفسار عن خدمات SalmanSaaS"
    },
    en: {
      navServices: "Services",
      navContact: "Contact Us",
      heroTitle: "Elevate Your Business.",
      heroSubTitle: "With Smart & Fast Systems.",
      heroDesc: "Advanced cloud systems for managing bookings, digital menus, and stores. Designed in silver and purple to reflect your brand's luxury.",
      emailPlaceholder: "Enter your email for updates...",
      orderBtn: "Order via WhatsApp",
      dashBookings: "Bookings",
      dashMenu: "Menu",
      dashStore: "Store",
      dashTitle: "Sales & Bookings",
      dashStatus: "Online",
      dashRevenue: "Revenue Growth",
      dashAppointments: "Upcoming Dates",
      secTitle: "Apps Designed for Excellence",
      secDesc: "We provide integrated cloud solutions designed to simplify business management and increase engagement.",
      service1Title: "Smart WhatsApp Booking System",
      service1Desc: "Integrated system to book appointments online and link them directly to WhatsApp Business API.",
      service1Btn: "Order System Now ←",
      service2Title: "Smart Menu",
      service2Desc: "Smooth animations and attractive design like native apps.",
      service3Title: "E-commerce Store",
      service3Desc: "A complete selling platform with a shopping cart and payment gateways.",
      footerRights: "All rights reserved.",
      footerPrivacy: "General Privacy",
      footerTerms: "Specific Privacy (Terms)",
      waMsg: "Hello, I want to inquire about SalmanSaaS services"
    }
  }[lang];

  // 3. قراءة مسار الرابط للتوجيه
  const path = window.location.pathname;
  if (path === '/general-privacy') return <GeneralPrivacy />;
  if (path === '/specific-privacy') return <SpecificPrivacy />;

  const whatsappNumber = "96178727986";

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen bg-[#090412] text-slate-300 font-sans overflow-x-hidden selection:bg-purple-500 selection:text-white pb-10">
      
      {/* تأثيرات إضاءة خلفية */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-700/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* شريط التنقل (Navbar) */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-20">
        <div className="flex flex-col">
          <div className="text-2xl font-bold flex items-center gap-2 text-slate-100 uppercase tracking-tighter">
            <span className="text-purple-500 text-3xl">✦</span> SalmanSaaS
          </div>
          {/* زر تغيير اللغة - تحت الاسم مباشرة */}
          <button 
            onClick={toggleLang}
            className="mt-1 flex items-center gap-2 px-2 py-0.5 rounded-md border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 transition-all w-fit"
          >
            <span className="text-[9px] uppercase font-bold text-slate-500">{lang === 'ar' ? 'Language:' : 'اللغة:'}</span>
            <span className="text-[10px] font-bold text-purple-400">{lang === 'ar' ? 'English' : 'العربية'}</span>
          </button>
        </div>

        <div className="flex gap-8 items-center text-sm font-medium">
          <a href="#services" className="hover:text-purple-400 transition hidden md:block text-slate-300">{t.navServices}</a>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="px-5 py-2.5 border border-purple-500/40 text-purple-400 rounded-xl hover:bg-purple-500/10 transition shadow-[0_0_15px_rgba(168,85,247,0.1)]">
            {t.navContact}
          </a>
        </div>
      </nav>

      {/* القسم الرئيسي (Hero Section) */}
      <header className="container mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight text-white">
            {t.heroTitle} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-slate-200">
              {t.heroSubTitle}
            </span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
            {t.heroDesc}
          </p>

          <div className="flex flex-col gap-4 max-w-md">
            <div className="bg-white/5 p-1.5 rounded-xl flex items-center w-full border border-slate-700/50 focus-within:border-purple-500/50 transition-colors backdrop-blur-md">
              <input 
                type="email" 
                placeholder={t.emailPlaceholder}
                className="bg-transparent px-4 py-3 outline-none text-white w-full placeholder-slate-500 text-sm"
              />
              <button className="text-slate-400 hover:text-purple-400 px-4 text-sm transition">{lang === 'ar' ? '←' : '→'}</button>
            </div>
            
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${t.waMsg}`}
              target="_blank" rel="noreferrer"
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-6 py-4 rounded-xl font-bold text-lg text-center flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(147,51,234,0.3)] border border-purple-400/30"
            >
              {t.orderBtn}
            </a>
          </div>
        </div>

        {/* الموك اب الرئيسي */}
        <div className="md:w-1/2 relative w-full mt-16 md:mt-0 flex justify-center items-center">
          <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#1c122e] to-[#0f071a] rounded-3xl border border-purple-500/20 shadow-2xl flex flex-col overflow-hidden">
            <div className="h-12 bg-[#090412]/80 border-b border-purple-500/10 flex items-center px-4 justify-between">
              <div className="flex gap-2">
                <span className="bg-purple-600 text-[10px] text-white px-2 py-1 rounded">{t.dashBookings}</span>
                <span className="bg-slate-800 text-[10px] text-slate-400 px-2 py-1 rounded">{t.dashMenu}</span>
                <span className="bg-slate-800 text-[10px] text-slate-400 px-2 py-1 rounded">{t.dashStore}</span>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-6">
               <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">{t.dashTitle}</h3>
                    <p className="text-[10px] text-purple-400">2026 Analytics</p>
                  </div>
                  <div className="bg-purple-500/20 text-purple-300 text-[10px] px-3 py-1 rounded-full">{t.dashStatus}</div>
               </div>
               <div className="grid grid-cols-2 gap-4 flex-1">
                  <div className="bg-[#140a24] rounded-xl border border-purple-500/10 p-4">
                    <span className="text-xs font-bold block mb-4">{t.dashRevenue}</span>
                    <div className="h-20 flex items-end gap-1">
                      <div className="flex-1 bg-purple-900/30 h-1/2 rounded-t"></div>
                      <div className="flex-1 bg-purple-600 h-3/4 rounded-t"></div>
                      <div className="flex-1 bg-purple-400 h-full rounded-t"></div>
                    </div>
                  </div>
                  <div className="bg-[#140a24] rounded-xl border border-purple-500/10 p-4">
                    <span className="text-xs font-bold block mb-4">{t.dashAppointments}</span>
                    <div className="grid grid-cols-4 gap-1 opacity-40">
                      {[...Array(12)].map((_, i) => <div key={i} className="h-4 bg-slate-700 rounded-sm"></div>)}
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* قسم الخدمات */}
      <section className="py-20 bg-[#0e071c] border-t border-purple-900/30" id="services">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">{t.secTitle}</h2>
          <p className="text-slate-400 mb-16 max-w-2xl mx-auto">{t.secDesc}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* خدمة 1 */}
            <div className="bg-[#130924] p-8 rounded-3xl border border-purple-500/20 text-center">
              <h3 className="text-xl font-bold text-slate-100 mb-4">{t.service1Title}</h3>
              <p className="text-sm text-slate-400 mb-6">{t.service1Desc}</p>
              <button className="text-purple-400 font-bold text-sm">{t.service1Btn}</button>
            </div>
            {/* خدمة 2 */}
            <div className="bg-[#130924] p-8 rounded-3xl border border-purple-500/20 text-center">
              <h3 className="text-xl font-bold text-slate-100 mb-4">{t.service2Title}</h3>
              <p className="text-sm text-slate-400 mb-6">{t.service2Desc}</p>
              <button className="text-purple-400 font-bold text-sm">{lang === 'ar' ? 'معاينة المنيو' : 'Preview Menu'}</button>
            </div>
            {/* خدمة 3 */}
            <div className="bg-[#130924] p-8 rounded-3xl border border-purple-500/20 text-center">
              <h3 className="text-xl font-bold text-slate-100 mb-4">{t.service3Title}</h3>
              <p className="text-sm text-slate-400 mb-6">{t.service3Desc}</p>
              <button className="text-purple-400 font-bold text-sm">{lang === 'ar' ? 'زيارة المتجر' : 'Visit Store'}</button>
            </div>
          </div>
        </div>
      </section>

      {/* الفوتر */}
      <footer className="container mx-auto px-6 py-12 border-t border-purple-900/30">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SalmanSaaS. {t.footerRights}
          </div>
          <div className="flex gap-6 text-sm">
            <a href="/general-privacy" className="hover:text-purple-400">{t.footerPrivacy}</a>
            <a href="/specific-privacy" className="hover:text-purple-400">{t.footerTerms}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;