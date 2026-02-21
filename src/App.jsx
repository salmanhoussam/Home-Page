import React, { useState } from 'react';
import GeneralPrivacy from './GeneralPrivacy';
import SpecificPrivacy from './SpecificPrivacy';
import PrivacyTerms from './PrivacyTerms';
import { translations } from './translations';

function App() {
  const [lang, setLang] = useState('ar');
  const [emailInput, setEmailInput] = useState("");
  const t = translations[lang];
  const path = window.location.pathname;

  const handleEmailSend = () => {
    if(!emailInput) return alert(lang === 'ar' ? "يرجى إدخال الإيميل" : "Please enter email");
    const subject = encodeURIComponent("استفسار عن خدمات SalmanSaaS");
    const body = encodeURIComponent(`مرحباً سلمان،\n\nأرغب في الاستفسار عن المزيد من التفاصيل.\n\nبريدي: ${emailInput}`);
    window.location.href = `mailto:salman.houssam@gmail.com?subject=${subject}&body=${body}`;
  };

  if (path === '/general-privacy') return <GeneralPrivacy />;
  if (path === '/specific-privacy') return <SpecificPrivacy />;
  if (path === '/privacy-terms') return <PrivacyTerms />;
  
  const whatsappNumber = "96178727986";

  return (
    <div dir={t.dir} className="min-h-screen bg-[#090412] text-slate-300 font-sans overflow-x-hidden selection:bg-purple-500 selection:text-white pb-10">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-700/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Navbar */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-20">
        <div className="flex flex-col">
          <div className="text-2xl font-bold flex items-center gap-2 text-slate-100 uppercase tracking-tighter">
            <span className="text-purple-500 text-3xl">✦</span> SalmanSaaS
          </div>
          <button 
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="text-[10px] font-bold text-purple-400 mt-1 px-2 py-0.5 border border-purple-500/20 rounded-md hover:bg-purple-500/10 transition w-fit"
          >
            {lang === 'ar' ? 'English' : 'العربية'}
          </button>
        </div>
        <div className="flex gap-8 items-center text-sm font-medium">
          <a href="#services" className="hover:text-purple-400 transition hidden md:block">{t.navServices}</a>
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
              <input 
                type="email" 
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder={t.emailPlaceholder} 
                className="bg-transparent px-4 py-3 outline-none text-white w-full text-sm" 
              />
              <button onClick={handleEmailSend} className="text-purple-400 font-bold px-4 text-sm transition hover:text-white">{t.send}</button>
            </div>
            <a href={`https://wa.me/${whatsappNumber}?text=${t.whatsappText}`} target="_blank" rel="noreferrer" className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-4 rounded-xl font-bold text-lg text-center transition-all hover:scale-[1.02] border border-purple-400/30 shadow-[0_0_20px_rgba(147,51,234,0.3)]">
              {t.orderWhatsApp}
            </a>
          </div>
        </div>

        {/* --- الفخم Premium Dashboard --- */}
        <div className="md:w-1/2 relative w-full flex justify-center items-center perspective-1000 group">
          <div className="absolute -inset-4 bg-purple-500/10 blur-[100px] rounded-full opacity-50"></div>
          <div className="w-[100%] md:w-[115%] aspect-[4/3.2] bg-[#0d0718]/90 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col overflow-hidden relative z-10">
            
            <div className="h-14 bg-white/5 border-b border-white/5 flex items-center px-6 justify-between">
              <div className="flex gap-2">
                <button className="text-[10px] bg-purple-600 text-white px-3 py-1.5 rounded-full font-bold border border-purple-400/30">{t.dashBookings}</button>
                <button className="text-[10px] bg-white/5 text-slate-400 px-3 py-1.5 rounded-full border border-white/5">{t.dashMenu}</button>
                <button className="text-[10px] bg-white/5 text-slate-400 px-3 py-1.5 rounded-full border border-white/5">{t.dashStore}</button>
              </div>
              <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[9px] font-bold text-emerald-400 uppercase">{t.dashStatus}</span>
              </div>
            </div>

            <div className="flex-1 p-6 grid grid-cols-12 gap-4 min-h-0">
              <div className="col-span-8 bg-white/5 rounded-[2rem] border border-white/5 p-5 flex flex-col">
                <h3 className="text-sm font-bold text-white mb-4">{t.dashSalesTitle}</h3>
                <div className="flex-1 flex items-end justify-between gap-2">
                  {[40, 70, 90, 60, 100].map((h, i) => (
                    <div key={i} style={{height: `${h}%`}} className={`flex-1 rounded-t-lg ${i === 4 ? 'bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]' : 'bg-white/10'}`}></div>
                  ))}
                </div>
              </div>
              <div className="col-span-4 flex flex-col gap-4">
                <div className="flex-1 bg-white/5 rounded-[2rem] border border-white/5 p-4 flex flex-col items-center justify-center">
                  <span className="text-[10px] font-bold text-slate-400 mb-1">{t.dashUpcoming}</span>
                  <span className="text-2xl font-black text-white">14</span>
                </div>
                <div className="bg-purple-600/20 rounded-[2rem] border border-purple-500/20 p-4 text-center">
                   <p className="text-[9px] text-purple-300 font-bold uppercase tracking-widest">Active SaaS</p>
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#090412] pt-12 pb-6 border-t border-purple-900/30">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">© {new Date().getFullYear()} SalmanSaaS. {t.footerRights}</div>
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