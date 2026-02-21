import React from 'react';

function GeneralPrivacy() {
  return (
    <div dir="ltr" className="min-h-screen bg-[#090412] text-slate-300 font-sans p-6 md:p-20 selection:bg-purple-500 selection:text-white">
      
      {/* زر العودة للموقع الرئيسي */}
      <div className="max-w-4xl mx-auto mb-10">
        <a href="/" className="group text-purple-400 hover:text-purple-300 text-sm font-bold flex items-center gap-2 transition-all">
          <span className="transition-transform group-hover:-translate-x-1">←</span> Back to SalmanSaaS
        </a>
      </div>

      {/* حاوية السياسة */}
      <div className="max-w-4xl mx-auto bg-[#130924] p-8 md:p-16 rounded-[2.5rem] border border-purple-500/20 shadow-2xl relative overflow-hidden">
        
        {/* لمسة جمالية فضية في الزاوية */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-400/5 blur-[100px] rounded-full pointer-events-none"></div>

        <header className="border-b border-purple-500/10 pb-8 mb-10 text-center md:text-left">
          <h1 className="text-4xl font-black text-white mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-purple-400 text-sm font-medium">We respect your privacy and are committed to protecting your personal data.</p>
        </header>

        <div className="space-y-10 leading-relaxed text-slate-400">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-3">
              <span className="text-purple-500">1.</span> Information We Collect
            </h2>
            <p className="mb-4">We may collect the following information when you use our services:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-slate-800"><span className="text-purple-500">✦</span> Name and phone number</li>
              <li className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-slate-800"><span className="text-purple-500">✦</span> Appointment details</li>
              <li className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-slate-800"><span className="text-purple-500">✦</span> Messages sent through WhatsApp</li>
              <li className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-slate-800"><span className="text-purple-500">✦</span> Basic device and browser data</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-3">
              <span className="text-purple-500">2.</span> How We Use Your Information
            </h2>
            <p className="mb-4">We use your data only to:</p>
            <div className="space-y-2 mb-6">
              {['Manage bookings and appointments', 'Send confirmations and reminders', 'Improve service experience', 'Provide customer support'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  {item}
                </div>
              ))}
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 p-4 rounded-2xl text-purple-300 text-sm font-bold">
              🚫 We do NOT sell or share your data with third parties for marketing.
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-3">
              <span className="text-purple-500">3.</span> WhatsApp Communication
            </h2>
            <p>By contacting us via WhatsApp, you agree to receive messages related to your appointment or inquiry. We use <b>WhatsApp Business API</b> provided by Meta Platforms Inc.</p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-3">
              <span className="text-purple-500">4.</span> Data Storage
            </h2>
            <p>Your data is securely stored using encrypted cloud databases (such as <b>Supabase</b> or similar). We keep your data only as long as needed for service purposes.</p>
          </section>

          {/* Section 5 */}
          <section className="bg-slate-400/5 p-6 rounded-2xl border border-slate-700/50">
            <h2 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-3">
              <span className="text-purple-500">5.</span> User Rights
            </h2>
            <p className="mb-4 text-sm">You can request to view, modify, or delete your data at any time.</p>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <span className="text-white font-bold">Contact us:</span>
              <a href="mailto:support@salmansaas.com" className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg transition text-sm">
                support@salmansaas.com
              </a>
            </div>
          </section>

        </div>

        <footer className="mt-16 pt-8 border-t border-purple-500/10 text-center">
          <p className="text-xs text-slate-500 uppercase tracking-widest">Last updated: February 2026</p>
        </footer>
      </div>
    </div>
  );
}

export default GeneralPrivacy;