'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { GYM_CONFIG } from '@/lib/config';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interestedIn: 'Membership',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus('error');
      setErrorMessage('Please provide your name and phone number.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        interestedIn: 'Membership',
        message: '',
      });
    }, 800);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#152026] border-t border-white/10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-sky-400 font-semibold">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl sm:text-5xl font-medium sm:font-semibold text-white uppercase tracking-tight font-sans">
            SUBMIT AN <span className="text-gradient-red">ENQUIRY</span>
          </h2>
          <p className="text-sm text-slate-300 font-light">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/14 shadow-2xl bg-[#1f2d35]"
        >
          {status === 'success' ? (
            <div className="text-center py-12 space-y-4">
              <div className="h-16 w-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold font-display text-white uppercase">ENQUIRY SUBMITTED!</h3>
              <p className="text-sm text-slate-200 max-w-md mx-auto">
                Thank you for reaching out to {GYM_CONFIG.name}. Our staff will contact you shortly.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 px-6 py-2.5 bg-white/10 text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-white/20 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                    FULL NAME <span className="text-sky-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/12 text-white placeholder:text-slate-400 focus:outline-none focus:border-sky-400 text-sm font-sans transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                    PHONE NUMBER <span className="text-sky-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your contact number"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/12 text-white placeholder:text-slate-400 focus:outline-none focus:border-sky-400 text-sm font-sans transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/12 text-white placeholder:text-slate-400 focus:outline-none focus:border-sky-400 text-sm font-sans transition-colors"
                  />
                </div>

                {/* Interested In Select */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                    INTERESTED IN
                  </label>
                  <select
                    value={formData.interestedIn}
                    onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#18242a] border border-white/12 text-white focus:outline-none focus:border-sky-400 text-sm font-sans transition-colors"
                  >
                    <option value="Membership">Monthly Membership ({GYM_CONFIG.currencySymbol}{GYM_CONFIG.monthlyMembership})</option>
                    <option value="Personal Training">Personal Coaching</option>
                    <option value="Free Trial">Day Trial Access</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  MESSAGE / NOTES
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your fitness goals..."
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/12 text-white placeholder:text-slate-400 focus:outline-none focus:border-sky-400 text-sm font-sans transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 bg-sky-400 text-slate-950 font-medium sm:font-semibold text-sm uppercase tracking-wider rounded-full shadow-glow-md hover:bg-sky-300 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 font-sans"
              >
                <Send className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                <span>{status === 'submitting' ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
