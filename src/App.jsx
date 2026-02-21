import React, { useState } from 'react';
import GeneralPrivacy from './GeneralPrivacy';
import SpecificPrivacy from './SpecificPrivacy';
import PrivacyTerms from './PrivacyTerms';
import { translations } from './translations'; 

function App() {
  // 1. الحالات (States)
  const [lang, setLang] = useState('ar'); 
  const [activeService, setActiveService] = useState("bookings");
  const [emailInput, setEmailInput] = useState("");
  
  const t = translations[lang]; 
  const path = window.location.pathname;

  // 2. دوال المنطق (Helper Functions)
  const scrollToService = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleEmailSend = () => {
    if (!emailInput) {
      alert(lang === 'ar' ? "يرجى إدخال بريدك الإلكتروني أولاً" : "Please enter your email first");
      return;
    }
    const subject = encodeURIComponent("استفسار عن خدمات SalmanSaaS");
    const body = encodeURIComponent(`مرحباً سلمان،\n\nأرغب في الاستفسار عن المزيد من التفاصيل.\n\nبريدي: ${emailInput}`);
    window.location.href = `mailto:salman.houssam@gmail.com?subject=${subject}&body=${body}`;
  };

  // 3. التوجيه (Routing)
  if (path === '/general-privacy') return <GeneralPrivacy />;
  if (path === '/specific-privacy') return <SpecificPrivacy />;
  if (path === '/privacy-terms') return <PrivacyTerms />;

  const whatsappNumber = "96178727986";

  return (
    <div dir={t.dir} className="min-h-screen bg-[#090412] text-slate-300 font-sans overflow-x-hidden selection:bg-purple-500 selection:text-white pb-10">
      
      {/* تأثيرات الإضاءة */}
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
            {lang === 'ar' ? 'Switch to English' : 'تحويل للعربية'}
          </button>
        </div>
        <div className="flex gap-8 items-center text-sm font-medium">
          <a href="#services" className="hover:text-purple-400 transition hidden md:block">{t.navServices}</a>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="px-5 py-2.5 border border-purple-500/40 text-purple-400 rounded-xl hover:bg-purple-500/10 transition shadow-[0_0_15px_rgba(168,85,247,0.1)] font-bold">
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
            <div className="bg-white/5 p-1.5 rounded-xl flex items-center w-full border border-slate-700/50 focus-within:border-purple-500/50 transition-colors backdrop-blur-md">
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
            
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${t.whatsappText}`}
              target="_blank" rel="noreferrer"
              className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-4 rounded-xl font-bold text-lg text-center flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(147,51,234,0.3)] border border-purple-400/30"
            >
              {t.orderWhatsApp}
            </a>
          </div>
        </div>

        {/* Dashboard Section */}
        <div className="md:w-1/2 relative w-full flex justify-center items-center perspective-1000 group">
          <div className="absolute -inset-4 bg-purple-500/10 blur-[100px] rounded-full opacity-50"></div>
          <div className="w-[100%] md:w-[115%] aspect-[4/3.2] bg-[#0d0718]/90 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col overflow-hidden relative z-10">
            
            {/* شريط الأزرار التفاعلي */}
            <div className="h-14 bg-white/5 border-b border-white/5 flex items-center px-6 justify-between">
              <div className="flex gap-2">
                <button 
                  onClick={() => { setActiveService("bookings"); scrollToService("bookings-section"); }}
                  className={`text-[10px] px-3 py-1.5 rounded-full font-bold border transition-all
                  ${activeService === "bookings" ? "bg-purple-600 text-white border-purple-400/30 shadow-[0_0_10px_rgba(168,85,247,0.4)]" : "bg-white/5 text-slate-400 border-white/5 hover:text-white"}`}
                >
                  {t.dashBookings}
                </button>

                <button 
                  onClick={() => { setActiveService("menu"); scrollToService("menu-section"); }}
                  className={`text-[10px] px-3 py-1.5 rounded-full font-bold border transition-all
                  ${activeService === "menu" ? "bg-purple-600 text-white border-purple-400/30 shadow-[0_0_10px_rgba(168,85,247,0.4)]" : "bg-white/5 text-slate-400 border-white/5 hover:text-white"}`}
                >
                  {t.dashMenu}
                </button>

                <button 
                  onClick={() => { setActiveService("store"); scrollToService("store-section"); }}
                  className={`text-[10px] px-3 py-1.5 rounded-full font-bold border transition-all
                  ${activeService === "store" ? "bg-purple-600 text-white border-purple-400/30 shadow-[0_0_10px_rgba(168,85,247,0.4)]" : "bg-white/5 text-slate-400 border-white/5 hover:text-white"}`}
                >
                  {t.dashStore}
                </button>
              </div>
              <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-tighter">{t.dashStatus}</span>
              </div>
            </div>

            {/* محتوى الداشبورد المصغر */}
            <div className="flex-1 p-6 grid grid-cols-12 gap-4 min-h-0">
              <div className="col-span-12 bg-white/5 rounded-[2rem] border border-white/5 p-5 flex flex-col">
                <h3 className="text-sm font-bold text-white mb-4">{activeService === "bookings" ? t.dashSalesTitle : activeService === "menu" ? t.dashMenu : t.dashStore}</h3>
                <div className="flex-1 flex items-end justify-between gap-2">
                  {[40, 70, 90, 65, 100].map((h, i) => (
                    <div key={i} style={{height: `${h}%`}} className={`flex-1 rounded-t-lg transition-all duration-700 ${i === 4 ? 'bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]' : 'bg-white/10'}`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- الأقسام الجديدة --- */}

      {/* 1. قسم الحجوزات (Calendar) */}
      <section id="bookings-section" className="py-24 border-t border-purple-900/30 bg-[#0c0618]/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-10 text-center tracking-tight">
            {t.service1Title}
          </h2>
          <div className="bg-[#0e071c] p-8 rounded-[2.5rem] border border-purple-500/20 max-w-4xl mx-auto shadow-2xl backdrop-blur-sm">
            <div className="grid grid-cols-7 gap-3 text-center text-xs font-bold text-purple-400 mb-6 uppercase tracking-widest">
              {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => <div key={d}>{d}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-3">
              {[...Array(30)].map((_, i) => (
                <div key={i} className="aspect-square rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-purple-600/30 hover:border-purple-500/50 transition-all cursor-pointer group">
                  <span className="text-slate-300 group-hover:text-white font-bold text-sm">{i+1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. قسم المنيو (Menu Items) */}
      <section id="menu-section" className="py-24 border-t border-purple-900/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-6 tracking-tight">{t.service2Title}</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">{t.service2Desc}</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1,2,3].map(i => (
              <div key={i} className="bg-[#130924] p-8 rounded-[2rem] border border-purple-500/10 hover:border-purple-500/40 transition-all group">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl mb-6 mx-auto flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">✦</div>
                <h3 className="text-white font-bold text-xl mb-3">Item {i}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Delicious premium selection crafted with the finest ingredients.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. قسم المتجر (Store Products) */}
      <section id="store-section" className="py-24 border-t border-purple-900/30 bg-[#0c0618]/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-6 tracking-tight">{t.service3Title}</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">{t.service3Desc}</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1,2,3].map(i => (
              <div key={i} className="bg-[#130924] p-8 rounded-[2rem] border border-purple-500/10 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all">
                <div className="aspect-video bg-slate-900 rounded-2xl mb-6 border border-white/5"></div>
                <h3 className="text-white font-bold text-xl mb-2">Product {i}</h3>
                <p className="text-slate-500 text-sm mb-6">Premium SaaS tool for your business needs.</p>
                <button className="w-full bg-purple-600 hover:bg-purple-500 py-3 rounded-xl text-white font-bold transition-all shadow-lg">Buy Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#090412] pt-12 pb-8 border-t border-purple-900/30">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SalmanSaaS. {t.footerRights}
          </div>
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
            <a href="/general-privacy" className="hover:text-purple-400 transition">{t.footerPrivacy}</a>
            <a href="/specific-privacy" className="hover:text-purple-400 transition">{t.footerTerms}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;