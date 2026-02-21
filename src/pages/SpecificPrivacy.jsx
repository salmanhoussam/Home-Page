import React from 'react';

function SpecificPrivacy() {
  return (
    <div dir="ltr" className="min-h-screen bg-[#090412] text-slate-300 font-sans p-6 md:p-20 selection:bg-purple-500 selection:text-white">
      
      {/* زر العودة */}
      <div className="max-w-4xl mx-auto mb-10">
        <a href="/" className="group text-purple-400 hover:text-purple-300 text-sm font-bold flex items-center gap-2 transition-all">
          <span className="transition-transform group-hover:-translate-x-1">←</span> Back to SalmanSaaS
        </a>
      </div>

      <div className="max-w-4xl mx-auto bg-[#130924] p-8 md:p-16 rounded-[2.5rem] border border-purple-500/20 shadow-2xl relative overflow-hidden">
        
        {/* تأثير الإضاءة البنفسجي */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/5 blur-[100px] rounded-full pointer-events-none"></div>

        <header className="border-b border-purple-500/10 pb-8 mb-10 text-center md:text-left">
          <h1 className="text-4xl font-black text-white mb-4 tracking-tight">Terms of Service & Data Privacy</h1>
          <p className="text-purple-400 text-sm font-medium">How we manage multi-client data isolation and messaging.</p>
        </header>

        <div className="space-y-12">
          
          {/* 1. نظام عزل البيانات (Multi-Tenant Isolation) */}
          <section className="bg-white/5 p-6 md:p-8 rounded-3xl border border-slate-800">
            <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
               <span className="p-2 bg-purple-500/20 rounded-lg">🛡️</span> Data Isolation Policy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed">
              <div className="p-4 bg-[#090412]/50 rounded-2xl border border-purple-500/10">
                <h3 className="text-purple-400 font-bold mb-2">For Businesses (Our Clients)</h3>
                <p>Each business operates in a strictly isolated environment. Clients can only see and manage their own customers, bookings, and data. There is <b>no cross-communication</b> or data sharing between different business accounts.</p>
              </div>
              <div className="p-4 bg-[#090412]/50 rounded-2xl border border-purple-500/10">
                <h3 className="text-purple-400 font-bold mb-2">For Customers (End Users)</h3>
                <p>End users can only see their own booking history within the specific business they are interacting with. User data is private and <b>never visible</b> to other customers of the same or different businesses.</p>
              </div>
            </div>
          </section>

          {/* 2. سياسة رسائل الواتساب (WhatsApp Messaging Privacy) */}
          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
               <span className="p-2 bg-purple-500/20 rounded-lg">💬</span> WhatsApp Messaging Privacy
            </h2>
            <div className="space-y-4 text-slate-400">
              <p>Our service uses <b>WhatsApp Business API</b> to communicate with users. By messaging our WhatsApp number, you agree that:</p>
              <ul className="space-y-3">
                {[
                  "You initiate communication with us through a message or button click.",
                  "We may send automated responses including buttons, lists, and order confirmations.",
                  "We may store chat data to process and manage your specific bookings.",
                  "We do not send spam or promotional messages without your explicit consent.",
                  'You can opt out anytime by sending the word "STOP".'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-purple-500 mt-1">✔</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 3. توضيح شركة ميتا */}
          <div className="p-4 bg-slate-400/5 rounded-xl border border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              This service is powered by the official <b>Meta Platforms, Inc.</b> API. 
              We strictly follow the WhatsApp Business Commerce Policy.
            </p>
          </div>

        </div>

        <footer className="mt-16 pt-8 border-t border-purple-500/10 text-center">
          <p className="text-xs text-slate-500 uppercase tracking-widest">Version 1.2 | Last updated: 2026</p>
        </footer>
      </div>
    </div>
  );
}

export default SpecificPrivacy;