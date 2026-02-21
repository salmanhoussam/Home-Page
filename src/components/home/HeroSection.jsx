import React, { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';

const HeroSection = () => {
  const { t, lang } = useTranslation();
  
  // حالة التحكم بالخدمة المعروضة (حجوزات، منيو، متجر)
  const [activeService, setActiveService] = useState("bookings");
  const [emailInput, setEmailInput] = useState("");
  
  const whatsappNumber = "96178727986";

  const handleEmailSend = () => {
    if (!emailInput) {
      alert(lang === 'ar' ? "يرجى إدخال بريدك الإلكتروني" : "Please enter your email");
      return;
    }
    window.location.href = `mailto:salman.houssam@gmail.com?subject=Inquiry&body=Email: ${emailInput}`;
  };

  // دالة لتحديد الصورة التي ستظهر بناءً على الزر المضغوط
  const getActiveImage = () => {
    switch(activeService) {
      case 'menu': return '/menu-mockup.png'; // صورة المنيو (يجب رفعها لاحقاً)
      case 'store': return '/store-mockup.png'; // صورة المتجر (يجب رفعها لاحقاً)
      case 'bookings':
      default: return '/booking-mockup.png'; // صورة الحجوزات التي صممناها
    }
  };

  return (
    <header className="container mx-auto px-6 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center justify-between relative z-10">
      
      {/* 1. قسم النصوص والدعوة للإجراء */}
      <div className="md:w-1/2 mt-12 md:mt-0">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight text-white">
          {t.heroTitle1} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-slate-200">
            {t.heroTitle2}
          </span>
        </h1>
        
        <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
          {t.heroSubDesc || "أنظمة سحابية متطورة لإدارة الحجوزات والقوائم الإلكترونية، صممت لتعكس فخامة علامتك التجارية."}
        </p>

        <div className="flex flex-col gap-4 max-w-md">
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

      {/* 2. قسم العرض التفاعلي (الصندوق الأحمر في صورتك) */}
      <div className="md:w-1/2 relative w-full flex justify-center items-center perspective-1000">
        <div className="w-[100%] md:w-[115%] aspect-[4/3.2] bg-[#0d0718]/90 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col overflow-hidden relative z-10 group">
          
          {/* شريط الأزرار العلوي للتبديل بين المنتجات */}
          <div className="h-14 bg-white/5 border-b border-white/5 flex items-center px-6 justify-between">
            <div className="flex gap-2">
              {['bookings', 'menu', 'store'].map((service) => (
                <button
                  key={service}
                  onClick={() => setActiveService(service)}
                  className={`text-[10px] px-3 py-1.5 rounded-full font-bold border transition-all duration-300 ${
                    activeService === service 
                    ? "bg-purple-600 text-white border-purple-400/30 shadow-[0_0_10px_rgba(168,85,247,0.4)]" 
                    : "bg-white/5 text-slate-400 border-white/5 hover:text-white"
                  }`}
                >
                  {t[`dash${service.charAt(0).toUpperCase() + service.slice(1)}`]}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-tighter">
                {t.dashStatus || 'Online'}
              </span>
            </div>
          </div>
          
          {/* مساحة عرض الصورة الديناميكية */}
          <div className="flex-1 p-4 flex flex-col justify-center items-center bg-black/20 relative overflow-hidden">
             {/* تأثير التوهج خلف الصورة */}
             <div className="absolute inset-0 bg-purple-600/10 blur-[80px] rounded-full pointer-events-none"></div>
             
             {/* الصورة تتغير حسب الزر المختار */}
             <img 
               key={activeService} // key هنا يجعل الصورة تومض بسلاسة عند التبديل
               src={getActiveImage()} 
               alt={`${activeService} preview`}
               className="w-full h-full object-contain max-h-[300px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] animate-fade-in transition-all duration-500 hover:scale-[1.02]"
               onError={(e) => {
                 // إذا لم يجد الصورة (مثلاً صور المنيو والمتجر التي لم تصممها بعد)
                 e.target.src = 'https://via.placeholder.com/800x600/130924/a855f7?text=Coming+Soon...';
               }}
             />
          </div>

        </div>
      </div>
    </header>
  );
};

export default HeroSection;