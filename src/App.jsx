import React, { useState } from 'react'; // أضفنا useState
import GeneralPrivacy from './GeneralPrivacy';
import SpecificPrivacy from './SpecificPrivacy';
import { translations } from './translations'; // استيراد الترجمات

function App() {
  const [lang, setLang] = useState('ar'); // حالة اللغة الافتراضية
  const t = translations[lang]; // اختصار للوصول للنصوص

  const path = window.location.pathname;
  if (path === '/general-privacy') return <GeneralPrivacy />;
  if (path === '/specific-privacy') return <SpecificPrivacy />;

  const whatsappNumber = "96178727986";

  return (
    <div dir={t.dir} className="min-h-screen bg-[#090412] text-slate-300 font-sans overflow-x-hidden selection:bg-purple-500 selection:text-white pb-10">
      
      {/* Navbar مع زر اللغة تحت الاسم */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-20">
        <div className="flex flex-col">
          <div className="text-2xl font-bold flex items-center gap-2 text-slate-100">
            <span className="text-purple-500 text-3xl">✦</span> SalmanSaaS
          </div>
          {/* زر تبديل اللغة الأنيق */}
          <button 
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="text-[10px] font-bold text-purple-400 mt-1 px-2 py-0.5 border border-purple-500/20 rounded-md hover:bg-purple-500/10 transition w-fit"
          >
            {lang === 'ar' ? 'English' : 'العربية'}
          </button>
        </div>
        <div className="flex gap-8 items-center text-sm font-medium">
          <a href="#services" className="hover:text-purple-400 transition hidden md:block text-slate-300">{t.navServices}</a>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="px-5 py-2.5 border border-purple-500/40 text-purple-400 rounded-xl hover:bg-purple-500/10 transition">
            {t.navContact}
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 mt-12 md:mt-0">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight text-white">
            {t.heroTitle1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-slate-200">
              {t.heroTitle2}
            </span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">{t.heroDesc}</p>
          <div className="flex flex-col gap-4 max-w-md">
            <div className="bg-white/5 p-1.5 rounded-xl flex items-center w-full border border-slate-700/50 backdrop-blur-md">
              <input type="email" placeholder={t.emailPlaceholder} className="bg-transparent px-4 py-3 outline-none text-white w-full text-sm" />
              <button className="text-slate-400 hover:text-purple-400 px-4 text-sm transition">{lang === 'ar' ? '←' : '→'}</button>
            </div>
            <a href={`https://wa.me/${whatsappNumber}?text=${t.whatsappText}`} target="_blank" rel="noreferrer" className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-4 rounded-xl font-bold text-lg text-center transition-all hover:scale-[1.02] border border-purple-400/30">
              {t.orderWhatsApp}
            </a>
          </div>
        </div>

        {/* Dashboard Mockup - نستخدم النصوص من t أيضاً */}
        <div className="md:w-1/2 relative w-full flex justify-center items-center perspective-1000">
          <div className="w-[100%] md:w-[110%] aspect-[4/3] bg-gradient-to-br from-[#1c122e] to-[#0f071a] rounded-3xl border border-purple-500/20 flex flex-col overflow-hidden">
            <div className="h-12 bg-[#090412]/80 border-b border-purple-500/10 flex items-center px-4 justify-between">
              <div className="flex gap-2">
                <span className="text-[10px] md:text-xs bg-purple-600 text-white px-3 py-1.5 rounded-md font-bold">{t.dashBookings}</span>
                <span className="text-[10px] md:text-xs bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md">{t.dashMenu}</span>
                <span className="text-[10px] md:text-xs bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md">{t.dashStore}</span>
              </div>
              <div className="text-xs text-slate-400 hidden md:block">{t.dashPanelTitle}</div>
            </div>
            <div className="flex-1 p-6 flex flex-col gap-6">
               <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 mb-1">{t.dashSalesTitle}</h3>
                    <p className="text-xs text-purple-400">{t.dashSalesSub}</p>
                  </div>
                  <div className="bg-purple-500/20 border border-purple-500/50 text-purple-300 text-xs font-bold px-4 py-1.5 rounded-full">{t.dashStatus}</div>
               </div>
               <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
                  <div className="bg-[#140a24] rounded-2xl border border-purple-500/10 p-5 flex flex-col shadow-inner">
                     <span className="text-sm font-bold text-slate-300 mb-4">{t.dashGrowth}</span>
                     <div className="flex items-end justify-between h-full gap-2 pt-2">
                        <div className="w-full bg-slate-700 h-[30%] rounded-t-md"></div>
                        <div className="w-full bg-purple-600 h-[75%] rounded-t-md"></div>
                        <div className="w-full bg-gradient-to-t from-purple-600 to-purple-400 h-[100%] rounded-t-md"></div>
                     </div>
                  </div>
                  <div className="bg-[#140a24] rounded-2xl border border-purple-500/10 p-5 flex flex-col">
                     <span className="text-sm font-bold text-slate-300 mb-4">{t.dashUpcoming}</span>
                     <div className="grid grid-cols-7 gap-1 flex-1 opacity-40">
                        {[...Array(14)].map((_, i) => <div key={i} className="h-4 bg-slate-700 rounded-sm"></div>)}
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-[#0e071c] border-t border-purple-900/30" id="services">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">{t.servicesTitle}</h2>
          <p className="text-slate-400 mb-16 max-w-2xl mx-auto">{t.servicesDesc}</p>
          <div className="flex flex-col gap-12 max-w-5xl mx-auto">
            <div className="bg-[#130924] p-8 md:p-12 rounded-3xl border border-purple-500/30 text-right">
              <h3 className="text-3xl font-bold text-slate-100 mb-4">{t.s1Title}</h3>
              <p className="text-slate-400 mb-6">{t.s1Desc}</p>
              <button className="text-purple-400 font-bold">{t.s1Btn}</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-[#130924] p-8 rounded-3xl border border-purple-500/10 text-right">
                <h3 className="text-2xl font-bold text-purple-300 mb-3">{t.s2Title}</h3>
                <p className="text-slate-400 text-sm mb-6">{t.s2Desc}</p>
              </div>
              <div className="bg-[#130924] p-8 rounded-3xl border border-purple-500/10 text-right">
                <h3 className="text-2xl font-bold text-slate-200 mb-3">{t.s3Title}</h3>
                <p className="text-slate-400 text-sm mb-6">{t.s3Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#090412] pt-12 pb-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center border-t border-purple-900/30 pt-8">
          <div className="text-slate-500 text-sm">© {new Date().getFullYear()} SalmanSaaS. {t.footerRights}</div>
          <div className="flex gap-6 text-sm">
            <a href="/general-privacy" className="text-slate-400 hover:text-purple-400">{t.footerPrivacy}</a>
            <a href="/specific-privacy" className="text-slate-400 hover:text-purple-400">{t.footerTerms}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;