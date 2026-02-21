import React from 'react';

function GeneralPrivacy() {
  return (
    <div dir="ltr" className="min-h-screen bg-[#090412] text-slate-300 font-sans p-8 md:p-20">
      <div className="max-w-4xl mx-auto bg-[#130924] p-10 rounded-3xl border border-purple-500/20 shadow-2xl relative">
        {/* Aesthetic Silver Glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-slate-400/5 blur-3xl rounded-full"></div>
        
        <a href="/" className="text-purple-400 hover:text-purple-300 text-sm font-bold mb-10 inline-block transition-all hover:translate-x-1">
          ← Back to SalmanSaaS
        </a>
        
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <h2 className="text-xl text-purple-400 mb-8 font-arabic" dir="rtl">سياسة الخصوصية</h2>
        <p className="text-xs text-slate-500 mb-12 uppercase tracking-widest">Last Updated: February 2026 | Compliance: GDPR & Meta API Standards</p>

        <div className="space-y-8 text-slate-400 leading-relaxed">
          <section className="border-l-2 border-purple-500/30 pl-6">
            <h3 className="text-xl font-bold text-slate-100 mb-3">1. Data Collection & Usage</h3>
            <p>We collect essential data to provide our AI-driven services, including phone numbers, names (via WhatsApp), and booking details. This data is used exclusively for business operations and technical support.</p>
          </section>

          <section className="border-l-2 border-purple-500/30 pl-6">
            <h3 className="text-xl font-bold text-slate-100 mb-3">2. International Standards (GDPR Compliance)</h3>
            <p>While operating within the Lebanese legal framework, we voluntarily adhere to the **General Data Protection Regulation (GDPR)**. This ensures our clients worldwide receive the highest level of data security and transparency.</p>
          </section>

          <section className="border-l-2 border-purple-500/30 pl-6">
            <h3 className="text-xl font-bold text-slate-100 mb-3">3. WhatsApp & Meta Integration</h3>
            <p>All communication is processed through the official **WhatsApp Business API**. Data is subject to Meta’s infrastructure policies. We utilize encrypted **Supabase** and **Railway** environments to safeguard your interactions.</p>
          </section>

          <section className="p-6 bg-purple-500/10 rounded-2xl border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-3">4. Your Rights: Access & Deletion</h3>
            <p className="mb-4">Users have the absolute right to request a copy of their data or its permanent deletion. To execute your "Right to be Forgotten":</p>
            <ul className="list-disc list-inside space-y-2 text-purple-300">
              <li>Email us at: <b>support@salmansaas.com</b></li>
              <li>Send "Delete my data" via our official WhatsApp bot.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default GeneralPrivacy;