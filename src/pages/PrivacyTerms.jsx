import React from 'react';

function PrivacyTerms() {
  return (
    <div dir="ltr" className="min-h-screen bg-[#090412] text-slate-300 font-sans p-6 md:p-20 selection:bg-purple-500 selection:text-white">
      
      {/* زر العودة */}
      <div className="max-w-4xl mx-auto mb-10">
        <a href="/" className="group text-purple-400 hover:text-purple-300 text-sm font-bold flex items-center gap-2 transition-all">
          <span className="transition-transform group-hover:-translate-x-1">←</span> Back to SalmanSaaS
        </a>
      </div>

      <div className="max-w-4xl mx-auto bg-[#130924] p-8 md:p-16 rounded-[2.5rem] border border-purple-500/20 shadow-2xl relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 blur-[100px] rounded-full pointer-events-none"></div>

        <header className="border-b border-purple-500/10 pb-8 mb-10">
          <h1 className="text-4xl font-black text-white mb-4 tracking-tight">Terms of Use & Service Rules</h1>
          <p className="text-purple-400 text-sm font-medium">Clear rules to ensure a smooth and secure booking experience.</p>
        </header>

        <div className="space-y-12">
          
          {/* 1. القواعد الجديدة (Service Rules & Disclaimers) */}
          <section className="bg-white/5 p-6 md:p-8 rounded-3xl border border-slate-800">
            <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
               <span className="p-2 bg-purple-500/20 rounded-lg text-xl">📋</span> Service Rules
            </h2>
            <div className="grid grid-cols-1 gap-4 text-sm leading-relaxed text-slate-400">
              <div className="flex gap-4 items-start p-4 bg-[#090412]/50 rounded-xl border border-purple-500/10">
                <span className="text-purple-500 font-bold">01.</span>
                <p><b>Data Accuracy:</b> You must provide accurate and truthful information when booking. SalmanSaaS is not responsible for errors caused by incorrect user input.</p>
              </div>
              <div className="flex gap-4 items-start p-4 bg-[#090412]/50 rounded-xl border border-purple-500/10">
                <span className="text-purple-500 font-bold">02.</span>
                <p><b>Availability:</b> You understand that all appointment times depend on real-time availability and are subject to confirmation by the merchant.</p>
              </div>
              <div className="flex gap-4 items-start p-4 bg-[#090412]/50 rounded-xl border border-purple-500/10">
                <span className="text-purple-500 font-bold">03.</span>
                <p><b>Limitation of Liability:</b> We are not responsible for delays, cancellations, or service interruptions that are outside our direct control.</p>
              </div>
              <div className="flex gap-4 items-start p-4 bg-red-500/5 rounded-xl border border-red-500/20">
                <span className="text-red-500 font-bold">04.</span>
                <p className="text-slate-300"><b>Zero Tolerance:</b> Any abuse of the system, fraudulent activity, or spamming will result in an immediate and permanent block of your access.</p>
              </div>
            </div>
          </section>

          {/* 2. نظام عزل البيانات (Multi-Tenant Architecture) */}
          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
               <span className="p-2 bg-purple-500/20 rounded-lg text-xl">🛡️</span> Data Isolation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="p-5 border border-slate-800 rounded-2xl">
                <h3 className="text-purple-400 font-bold mb-2">Merchant Data</h3>
                <p>Each business operates in a strictly isolated environment. No cross-access to other clients' data.</p>
              </div>
              <div className="p-5 border border-slate-800 rounded-2xl">
                <h3 className="text-purple-400 font-bold mb-2">Customer Data</h3>
                <p>Users only see their own history. Personal info is never shared between businesses.</p>
              </div>
            </div>
          </section>

          {/* 3. الواتساب */}
          <section className="bg-purple-500/5 p-8 rounded-3xl border border-purple-500/10">
            <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
               <span className="p-2 bg-purple-500/20 rounded-lg text-xl">💬</span> WhatsApp Messaging
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><span>•</span> Communication is initiated by you.</li>
              <li className="flex gap-2"><span>•</span> We use automated buttons and list responses.</li>
              <li className="flex gap-2"><span>•</span> You can opt-out at any time by sending <b>"STOP"</b>.</li>
            </ul>
          </section>

          <div className="pt-8 border-t border-purple-500/10 text-center">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest">
               SalmanSaaS © 2026 | Powered by Meta Platforms, Inc. API
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PrivacyTerms;