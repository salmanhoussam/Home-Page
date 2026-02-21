import React from 'react';

function SpecificPrivacy() {
  return (
    <div dir="ltr" className="min-h-screen bg-[#090412] text-slate-300 font-sans p-8 md:p-20">
      <div className="max-w-4xl mx-auto bg-[#130924] p-10 rounded-3xl border border-purple-500/20 shadow-2xl relative">
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/5 blur-3xl rounded-full"></div>

        <a href="/" className="text-purple-400 hover:text-purple-300 text-sm font-bold mb-10 inline-block">
          ← Back to Home
        </a>
        
        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <h2 className="text-xl text-purple-400 mb-8 font-arabic" dir="rtl">شروط الخدمة</h2>
        <p className="text-xs text-slate-500 mb-12 uppercase tracking-widest">Salman AI Service | 2026 Terms</p>

        <div className="space-y-8 text-slate-400 leading-relaxed">
          <section className="border-l-2 border-slate-500/30 pl-6">
            <h3 className="text-xl font-bold text-slate-100 mb-3">1. Scope of AI Service</h3>
            <p>Our AI systems are strictly purpose-built for commercial tasks (Bookings, Order Inquiries, and Support). **SalmanSaaS prohibits the use of our API for general-purpose AI chatting** or human-mimicry outside of the designated business scope, ensuring full compliance with Meta’s 2026 AI Policies.</p>
          </section>

          <section className="border-l-2 border-slate-500/30 pl-6">
            <h3 className="text-xl font-bold text-slate-100 mb-3">2. Explicit Opt-in Policy</h3>
            <p>We operate on a strict **Explicit Consent** basis. Users will only receive notifications or marketing messages via WhatsApp after a clear Opt-in action. Users can opt-out at any time by messaging <b>"STOP"</b>.</p>
          </section>

          <section className="border-l-2 border-slate-500/30 pl-6">
            <h3 className="text-xl font-bold text-slate-100 mb-3">3. Legal Jurisdiction</h3>
            <p>These terms are governed by the **laws of the Lebanese Republic**, aligned with international digital commerce standards. Any dispute shall be settled under the jurisdiction of Lebanese courts.</p>
          </section>

          <section className="p-6 bg-slate-100/5 rounded-2xl border border-slate-500/20">
            <h3 className="text-xl font-bold text-slate-100 mb-3 text-center italic">"Empowering Business with Ethical AI"</h3>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SpecificPrivacy;