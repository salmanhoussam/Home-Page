import React from 'react';
import GeneralPrivacy from './GeneralPrivacy';
import SpecificPrivacy from './SpecificPrivacy';

function App() {
  // 1. قراءة مسار الرابط للتوجيه بين الصفحات
  const path = window.location.pathname;

  // 2. توجيه لصفحة الخصوصية العامة
  if (path === '/general-privacy') {
    return <GeneralPrivacy />;
  }

  // 3. توجيه لصفحة الشروط الخاصة
  if (path === '/specific-privacy') {
    return <SpecificPrivacy />;
  }

  // 4. المتغيرات الأساسية (رقم الواتساب)
  const whatsappNumber = "961xxxxxxxx"; // ضع رقمك الحقيقي هنا

  // 5. واجهة الصفحة الرئيسية
  return (
    <div dir="rtl" className="min-h-screen bg-[#090412] text-slate-300 font-sans overflow-x-hidden selection:bg-purple-500 selection:text-white pb-10">
      
      {/* تأثيرات إضاءة خلفية (Glow) */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-700/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/2 left-0 w-80 h-80 bg-slate-400/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* شريط التنقل (Navbar) */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-20">
        <div className="text-2xl font-bold flex items-center gap-2 text-slate-100">
          <span className="text-purple-500 text-3xl">✦</span> SalmanSaaS
        </div>
        <div className="flex gap-8 items-center text-sm font-medium">
          <a href="#services" className="hover:text-purple-400 transition hidden md:block text-slate-300">الخدمات</a>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="px-5 py-2.5 border border-purple-500/40 text-purple-400 rounded-xl hover:bg-purple-500/10 transition shadow-[0_0_15px_rgba(168,85,247,0.1)]">
            تواصل معنا
          </a>
        </div>
      </nav>

      {/* القسم الرئيسي (Hero Section) */}
      <header className="container mx-auto px-6 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center justify-between relative z-10">
        
        {/* النصف الأيمن: النصوص والأزرار */}
        <div className="md:w-1/2 mt-12 md:mt-0">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight text-white">
            ارتقِ بأعمالك للمستقبل. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-slate-200">
              بأنظمة ذكية وسريعة.
            </span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
            أنظمة سحابية متطورة لإدارة الحجوزات، القوائم الإلكترونية، والمتاجر. صُممت باللون الفضي والبنفسجي لتعكس فخامة علامتك التجارية.
          </p>

          <div className="flex flex-col gap-4 max-w-md">
            <div className="bg-white/5 p-1.5 rounded-xl flex items-center w-full border border-slate-700/50 focus-within:border-purple-500/50 transition-colors backdrop-blur-md">
              <input 
                type="email" 
                placeholder="أدخل بريدك الإلكتروني ليصلك جديدنا..." 
                className="bg-transparent px-4 py-3 outline-none text-white w-full placeholder-slate-500 text-sm"
              />
              <button className="text-slate-400 hover:text-purple-400 px-4 text-sm transition">→</button>
            </div>
            
            <a 
              href={`https://wa.me/${whatsappNumber}?text=مرحباً، أريد الاستفسار عن خدمات SalmanSaaS`}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-6 py-4 rounded-xl font-bold text-lg text-center flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(147,51,234,0.3)] border border-purple-400/30"
            >
              للطلب عبر واتساب
            </a>
          </div>
        </div>

        {/* النصف الأيسر: الموك اب الرئيسي */}
        <div className="md:w-1/2 relative w-full flex justify-center items-center perspective-1000">
          <div className="w-[100%] md:w-[110%] aspect-[4/3] bg-gradient-to-br from-[#1c122e] to-[#0f071a] rounded-3xl border border-purple-500/20 shadow-[0_20px_50px_rgba(147,51,234,0.1)] flex flex-col overflow-hidden transform md:rotate-y-[-10deg] md:rotate-x-[5deg] transition-transform hover:rotate-y-0 hover:rotate-x-0 duration-500">
            
            {/* شريط العنوان المحدث (أزرار بدلاً من النقاط) */}
            <div className="h-12 bg-[#090412]/80 border-b border-purple-500/10 flex items-center px-4 justify-between backdrop-blur-md">
              <div className="flex gap-2">
                <a href="#booking" className="text-[10px] md:text-xs bg-purple-600 hover:bg-purple-500 text-white px-2 md:px-3 py-1.5 rounded-md transition font-bold shadow-[0_0_10px_rgba(168,85,247,0.4)]">الحجوزات</a>
                <a href="#menu" className="text-[10px] md:text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-2 md:px-3 py-1.5 rounded-md transition font-medium">المنيو</a>
                <a href="#ecommerce" className="text-[10px] md:text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-2 md:px-3 py-1.5 rounded-md transition font-medium">المتجر</a>
              </div>
              <div className="text-xs text-slate-400 font-medium tracking-wide hidden md:block">لوحة تحكم SalmanSaaS</div>
            </div>

            {/* محتوى اللوحة الداخلي */}
            <div className="flex-1 p-6 flex flex-col gap-6">
               <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 mb-1">المبيعات والحجوزات</h3>
                    <p className="text-xs text-purple-400">أداء ممتاز هذا الأسبوع</p>
                  </div>
                  <div className="bg-purple-500/20 border border-purple-500/50 text-purple-300 text-xs font-bold px-4 py-1.5 rounded-full">
                    متصل
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
                  {/* غراف المبيعات */}
                  <div className="bg-[#140a24] rounded-2xl border border-purple-500/10 p-5 flex flex-col shadow-inner">
                     <span className="text-sm font-bold text-slate-300 mb-4">نمو الإيرادات</span>
                     <div className="flex items-end justify-between h-full gap-2 pt-2">
                        <div className="w-full bg-slate-700 h-[30%] rounded-t-md"></div>
                        <div className="w-full bg-slate-600 h-[50%] rounded-t-md"></div>
                        <div className="w-full bg-purple-900/50 h-[40%] rounded-t-md"></div>
                        <div className="w-full bg-purple-600 h-[75%] rounded-t-md relative">
                            <div className="absolute -top-1 left-0 right-0 h-1 bg-purple-400 rounded-t-md"></div>
                        </div>
                        <div className="w-full bg-gradient-to-t from-purple-600 to-purple-400 h-[100%] rounded-t-md relative">
                            <div className="absolute -top-6 left-0 right-0 text-center text-xs text-white font-bold">120</div>
                        </div>
                     </div>
                  </div>

                  {/* الكالندر */}
                  <div className="bg-[#140a24] rounded-2xl border border-purple-500/10 p-5 flex flex-col">
                     <span className="text-sm font-bold text-slate-300 mb-4">المواعيد القادمة</span>
                     <div className="grid grid-cols-7 gap-y-2 gap-x-1 text-center text-xs font-medium flex-1">
                        <span className="text-slate-600">28</span><span>1</span><span>2</span>
                        <span className="bg-slate-700 text-white rounded-lg py-0.5">3</span>
                        <span>4</span><span>5</span>
                        <span className="bg-purple-500 text-white rounded-lg font-bold py-0.5 shadow-[0_0_10px_rgba(168,85,247,0.5)]">6</span>
                        <span>7</span><span>8</span>
                        <span className="border border-purple-500/50 text-purple-400 rounded-lg py-0.5">9</span>
                        <span>10</span><span>11</span><span className="text-slate-600">...</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* قسم الخدمات */}
      <section className="py-20 bg-[#0e071c] relative border-t border-purple-900/30" id="services">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">تطبيقات مصممة للتميز</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">نقدم لك حلولاً سحابية متكاملة مصممة لتسهيل إدارة أعمالك وزيادة تفاعل عملائك.</p>
          </div>

          <div className="flex flex-col gap-12 max-w-5xl mx-auto">
            
            {/* 1. نظام الحجز (الرئيسي لشركة ميتا) */}
            <div id="booking" className="bg-[#130924] p-8 md:p-12 rounded-3xl border border-purple-500/30 hover:border-purple-400 transition-all flex flex-col md:flex-row items-center gap-8 shadow-[0_0_20px_rgba(147,51,234,0.1)] relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-purple-400"></div>
               <div className="flex-1 text-center md:text-right">
                  <div className="w-16 h-16 bg-purple-900/50 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/30 mx-auto md:mx-0">
                     <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-100 mb-4">نظام الحجز الذكي المربوط بواتساب</h3>
                  <p className="text-slate-400 text-base leading-relaxed mb-6">
                    نظام متكامل لحجز المواعيد عبر الإنترنت وربطها مباشرة مع منصة واتساب للأعمال (WhatsApp Business API). مزود بلوحة تحكم شاملة لتنظيم الأوقات، إدارة العملاء، وإرسال تنبيهات تلقائية.
                  </p>
                  <button className="text-purple-400 font-bold hover:text-purple-300 bg-purple-500/10 px-6 py-3 rounded-xl transition">اطلب النظام الآن ←</button>
               </div>
            </div>

            {/* شبكة للخدمتين التاليتين (المنيو والمتجر) مع الموك اب */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* 2. المنيو التفاعلي (مع موك اب الهاتف) */}
                <div id="menu" className="bg-[#130924] p-8 rounded-3xl border border-purple-500/10 hover:border-purple-500/30 transition-all flex flex-col md:flex-row items-center gap-8 shadow-lg h-full">
                <div className="flex-1 text-center md:text-right">
                    <h3 className="text-2xl font-bold text-purple-300 mb-3">المنيو الذكي</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        حركات سلسة وتصميم جذاب يشبه التطبيقات الأصلية.
                    </p>
                </div>
                
                {/* موك اب الهاتف */}
                <div className="w-40 h-[300px] bg-[#090412] rounded-[2rem] border-4 border-slate-700 relative overflow-hidden flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform rotate-3 hover:rotate-0 transition-transform flex-shrink-0">
                    <div className="w-16 h-4 bg-slate-700 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-10"></div>
                    <div className="p-4 mt-6 flex-1 flex flex-col">
                        <div className="w-full h-24 bg-gradient-to-tr from-purple-900/40 to-[#1a1025] rounded-2xl mb-4 flex items-center justify-center border border-purple-500/20">
                            <div className="w-12 h-12 rounded-full bg-slate-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] border-4 border-[#090412]"></div>
                        </div>
                        <div className="space-y-2">
                        <div className="h-8 bg-slate-800/50 rounded-xl flex items-center px-2"><div className="w-6 h-6 bg-slate-700 rounded-md"></div><div className="flex-1 px-2"><div className="w-full h-1 bg-slate-600 rounded-full"></div></div></div>
                        <div className="h-8 bg-slate-800/50 rounded-xl flex items-center px-2"><div className="w-6 h-6 bg-slate-700 rounded-md"></div><div className="flex-1 px-2"><div className="w-full h-1 bg-slate-600 rounded-full"></div></div></div>
                        </div>
                    </div>
                </div>
                </div>

                {/* 3. المتجر الإلكتروني (مع موك اب المتصفح) */}
                <div id="ecommerce" className="bg-[#130924] p-8 rounded-3xl border border-purple-500/10 hover:border-purple-500/30 transition-all flex flex-col items-center gap-6 shadow-lg h-full justify-center">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-200 mb-3">المتجر الإلكتروني</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        منصة بيع متكاملة مع عربة تسوق، وبوابات دفع.
                    </p>
                </div>
                
                {/* موك اب المتصفح */}
                <div className="w-full max-w-[280px] bg-[#090412] rounded-xl border border-slate-700 overflow-hidden shadow-xl transform -rotate-2 hover:rotate-0 transition-transform">
                    <div className="h-5 bg-slate-800 flex items-center px-2 gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
                    </div>
                    <div className="p-3">
                        <div className="flex justify-between items-center mb-3">
                            <div className="w-10 h-2 bg-purple-400 rounded"></div>
                            <div className="w-3 h-3 bg-slate-700 rounded-sm"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="bg-[#140a24] p-2 rounded-lg border border-purple-500/10">
                            <div className="h-12 bg-slate-800 rounded-md mb-2"></div>
                            <div className="h-1 w-3/4 bg-slate-400 rounded-full mb-1"></div>
                            <div className="h-4 w-full bg-purple-600 rounded-md text-[6px] text-center text-white flex items-center justify-center">أضف للسلة</div>
                            </div>
                            <div className="bg-[#140a24] p-2 rounded-lg border border-purple-500/10">
                            <div className="h-12 bg-slate-800 rounded-md mb-2"></div>
                            <div className="h-1 w-full bg-slate-400 rounded-full mb-1"></div>
                            <div className="h-4 w-full bg-slate-700 rounded-md"></div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            </div>
          </div>
        </div>
      </section>

      {/* شريط التقنيات */}
      <section className="bg-[#05020a] py-8 border-y border-purple-900/50">
         <div className="container mx-auto px-6 text-center">
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 text-slate-300">
               <span className="font-bold text-xl tracking-wider">React</span>
               <span className="font-bold text-xl tracking-wider">Tailwind</span>
               <span className="font-bold text-xl tracking-wider">Supabase</span>
               <span className="font-bold text-xl tracking-wider">Railway</span>
               <span className="font-bold text-xl tracking-wider">Cloudflare</span>
            </div>
         </div>
      </section>

      {/* الفوتر (Footer) - إلزامي لمراجعة ميتا */}
      <footer className="bg-[#090412] pt-12 pb-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-purple-900/30 pt-8">
            
            <div className="text-slate-500 text-sm text-center md:text-right">
              © {new Date().getFullYear()} SalmanSaaS. جميع الحقوق محفوظة.
            </div>
            
            {/* روابط السياسات المطلوبة */}
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <a href="/general-privacy" className="text-slate-400 hover:text-purple-400 transition">الخصوصية العامة</a>
              <span className="text-slate-700">|</span>
              <a href="/specific-privacy" className="text-slate-400 hover:text-purple-400 transition">الخصوصية الخاصة (شروط الاستخدام)</a>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;