import { Mail, Phone, MapPin, Send, Clock, CheckCircle, AlertCircle, ChevronRight, ExternalLink } from 'lucide-react';
import { useState, useRef } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const SUBJECTS = [
  'Corporate Transaction',
  'Corporate Finance',
  'Private Equity',
  'Tax Advisory',
  'Risk & Advisory',
  'Crypto Advisory',
  'Valuation Services',
  'General Inquiry',
];

export function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors]       = useState<FormErrors>({});
  const [touched, setTouched]     = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const formRef                   = useRef<HTMLDivElement>(null);

  /* ── Validation ── */
  const validate = (data: FormData): FormErrors => {
    const e: FormErrors = {};
    if (!data.name.trim())                              e.name    = 'Full name is required.';
    if (!data.email.trim())                             e.email   = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Enter a valid email address.';
    if (data.phone && !/^[+\d\s\-()]{7,}$/.test(data.phone)) e.phone = 'Enter a valid phone number.';
    if (!data.subject)                                  e.subject = 'Please select a subject.';
    if (!data.message.trim())                           e.message = 'Message cannot be empty.';
    else if (data.message.trim().length < 10)           e.message = 'Message must be at least 10 characters.';
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const updated = { ...formData, [e.target.name]: e.target.value };
    setFormData(updated);
    if (touched[e.target.name as keyof FormData]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setTouched(t => ({ ...t, [e.target.name]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, phone: true, subject: true, message: true };
    setTouched(allTouched);
    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      // Scroll to first error
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1600);
  };

  const fieldClass = (field: keyof FormData) => {
    const base = `w-full px-4 py-3 bg-white border-2 rounded-none text-[#0B3C5D] placeholder-gray-400 outline-none transition-all duration-200 text-sm font-light`;
    if (touched[field] && errors[field])  return `${base} border-red-400 focus:border-red-500 bg-red-50/30`;
    if (touched[field] && !errors[field] && formData[field]) return `${base} border-[#C9A227] focus:border-[#C9A227]`;
    return `${base} border-gray-200 focus:border-[#0B3C5D]`;
  };

  return (
    <div className="font-['Cormorant_Garamond',Georgia,serif]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .contact-root * { font-family: 'DM Sans', sans-serif; }
        .contact-root h1, .contact-root h2, .contact-root h3, .contact-root .display {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1);    opacity: .6; }
          100% { transform: scale(1.45); opacity: 0;  }
        }
        @keyframes checkBounce {
          0%   { transform: scale(0) rotate(-10deg); }
          60%  { transform: scale(1.15) rotate(3deg); }
          100% { transform: scale(1) rotate(0); }
        }

        .fade-up       { animation: fadeUp .55s ease both; }
        .fade-up-2     { animation: fadeUp .55s .1s ease both; }
        .fade-up-3     { animation: fadeUp .55s .2s ease both; }
        .fade-up-4     { animation: fadeUp .55s .3s ease both; }

        .line-accent {
          display: block; height: 2px; background: #C9A227;
          transform-origin: left;
          animation: lineGrow .6s .2s ease both;
        }
        .pulse-dot::after {
          content: ''; position: absolute; inset: 0; border-radius: 50%;
          border: 2px solid #C9A227;
          animation: pulse-ring 1.8s ease-out infinite;
        }
        .check-bounce { animation: checkBounce .5s .1s ease both; }

        .info-card:hover .info-icon { transform: scale(1.08); background: #0B3C5D; }
        .info-card:hover .info-icon svg { color: #C9A227; }

        .submit-btn { position: relative; overflow: hidden; }
        .submit-btn::after {
          content: ''; position: absolute; inset: 0;
          background: rgba(255,255,255,.12);
          transform: translateX(-100%);
          transition: transform .35s ease;
        }
        .submit-btn:hover::after { transform: translateX(0); }
      `}</style>

      <section className="contact-root bg-[#F7F5F0] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* ── Section header ── */}
          <div className="mb-16 fade-up">
            <p className="text-[#C9A227] text-xs tracking-[.25em] uppercase mb-3 font-medium" style={{fontFamily:'DM Sans,sans-serif'}}>Reach Out</p>
            <h2 className="text-4xl lg:text-5xl text-[#0B3C5D] leading-tight mb-4" style={{fontFamily:'Cormorant Garamond,Georgia,serif', fontWeight:400}}>
              We're here<br /><em>to help you</em>
            </h2>
            <span className="line-accent w-16 inline-block" />
          </div>

          <div className="grid lg:grid-cols-5 gap-0 shadow-2xl">

            {/* ════════════════ LEFT PANEL ════════════════ */}
            <div className="lg:col-span-2 bg-[#0B3C5D] text-white p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">

              {/* Background decoration */}
              <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full border border-white/8 pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9A227] to-transparent" />

              <div>
                <h3 className="text-2xl lg:text-3xl mb-2 fade-up-2" style={{fontFamily:'Cormorant Garamond,Georgia,serif', fontWeight:400}}>
                  Contact Information
                </h3>
                <p className="text-white/50 text-sm mb-10 fade-up-2" style={{fontFamily:'DM Sans,sans-serif'}}>
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                <div className="space-y-8 fade-up-3">

                  {/* Address */}
                  <div className="info-card flex items-start gap-4 group cursor-default">
                    <div className="info-icon w-11 h-11 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <MapPin className="w-5 h-5 text-[#C9A227] transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-widest mb-1" style={{fontFamily:'DM Sans,sans-serif'}}>Office</p>
                      <a
                        href="https://maps.google.com/?q=Kigali+Heights,+KG+9+Ave,+Kigali,+Rwanda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/90 hover:text-[#C9A227] transition-colors leading-relaxed flex items-start gap-1.5 group/link"
                        style={{fontFamily:'DM Sans,sans-serif'}}
                      >
                        <span>
                          KG 9 Ave, Kigali Heights<br />
                          Floor 4, Suite 401<br />
                          Kigali, Rwanda
                        </span>
                        <ExternalLink className="w-3 h-3 mt-0.5 flex-shrink-0 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="info-card flex items-start gap-4 group cursor-default">
                    <div className="info-icon w-11 h-11 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 relative pulse-dot">
                      <Phone className="w-5 h-5 text-[#C9A227] transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-widest mb-1" style={{fontFamily:'DM Sans,sans-serif'}}>Telephone</p>
                      <a href="tel:+250788000000" className="text-sm text-white/90 hover:text-[#C9A227] transition-colors" style={{fontFamily:'DM Sans,sans-serif'}}>
                        +250 788 000 000
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="info-card flex items-start gap-4 group cursor-default">
                    <div className="info-icon w-11 h-11 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <Mail className="w-5 h-5 text-[#C9A227] transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-widest mb-1" style={{fontFamily:'DM Sans,sans-serif'}}>Email</p>
                      <a href="mailto:info@kivucha.com" className="text-sm text-white/90 hover:text-[#C9A227] transition-colors" style={{fontFamily:'DM Sans,sans-serif'}}>
                        info@kivucha.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business hours */}
              <div className="mt-12 fade-up-4 border-t border-white/10 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-[#C9A227]" />
                  <p className="text-xs text-white/40 uppercase tracking-widest" style={{fontFamily:'DM Sans,sans-serif'}}>Business Hours</p>
                </div>
                <div className="space-y-2 text-sm" style={{fontFamily:'DM Sans,sans-serif'}}>
                  {[
                    { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
                    { day: 'Saturday',        hours: '10:00 AM – 2:00 PM' },
                    { day: 'Sunday',          hours: 'Closed' },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between items-center">
                      <span className="text-white/60">{day}</span>
                      <span className={hours === 'Closed' ? 'text-red-400/80' : 'text-[#C9A227]'}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ════════════════ RIGHT PANEL — FORM ════════════════ */}
            <div ref={formRef} className="lg:col-span-3 bg-white p-10 lg:p-12 relative">

              {/* Gold top bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9A227] to-transparent" />

              {submitted ? (
                /* ── Success state ── */
                <div className="h-full flex flex-col items-center justify-center text-center py-16 px-4">
                  <div className="check-bounce w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl text-[#0B3C5D] mb-3" style={{fontFamily:'Cormorant Garamond,Georgia,serif', fontWeight:400}}>
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 text-sm max-w-sm mb-8" style={{fontFamily:'DM Sans,sans-serif'}}>
                    Thank you for reaching out. A member of our team will be in touch with you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name:'', email:'', phone:'', subject:'', message:'' }); setTouched({}); setErrors({}); }}
                    className="flex items-center gap-2 text-sm text-[#0B3C5D] border-b border-[#C9A227] pb-0.5 hover:text-[#C9A227] transition-colors"
                    style={{fontFamily:'DM Sans,sans-serif'}}
                  >
                    Send another message <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                /* ── Form ── */
                <>
                  <h3 className="text-2xl lg:text-3xl text-[#0B3C5D] mb-1 fade-up" style={{fontFamily:'Cormorant Garamond,Georgia,serif', fontWeight:400}}>
                    Send us a Message
                  </h3>
                  <p className="text-gray-400 text-xs tracking-wide mb-8 fade-up-2" style={{fontFamily:'DM Sans,sans-serif'}}>
                    Fields marked <span className="text-red-400">*</span> are required
                  </p>

                  {/* Global error banner */}
                  {Object.keys(errors).length > 0 && Object.keys(touched).length > 0 && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 px-4 py-3 mb-6 text-sm text-red-600 fade-up" style={{fontFamily:'DM Sans,sans-serif'}}>
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Please fix the highlighted fields before submitting.</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">

                    {/* Name + Email row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="fade-up-2">
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2" style={{fontFamily:'DM Sans,sans-serif'}}>
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text" name="name" value={formData.name}
                          onChange={handleChange} onBlur={handleBlur}
                          placeholder="Jane Doe"
                          className={fieldClass('name')}
                          style={{fontFamily:'DM Sans,sans-serif'}}
                        />
                        {touched.name && errors.name && (
                          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1" style={{fontFamily:'DM Sans,sans-serif'}}>
                            <AlertCircle className="w-3 h-3" /> {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="fade-up-2">
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2" style={{fontFamily:'DM Sans,sans-serif'}}>
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email" name="email" value={formData.email}
                          onChange={handleChange} onBlur={handleBlur}
                          placeholder="jane@company.com"
                          className={fieldClass('email')}
                          style={{fontFamily:'DM Sans,sans-serif'}}
                        />
                        {touched.email && errors.email && (
                          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1" style={{fontFamily:'DM Sans,sans-serif'}}>
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Phone + Subject row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="fade-up-3">
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2" style={{fontFamily:'DM Sans,sans-serif'}}>
                          Phone Number
                        </label>
                        <input
                          type="tel" name="phone" value={formData.phone}
                          onChange={handleChange} onBlur={handleBlur}
                          placeholder="+250 7XX XXX XXX"
                          className={fieldClass('phone')}
                          style={{fontFamily:'DM Sans,sans-serif'}}
                        />
                        {touched.phone && errors.phone && (
                          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1" style={{fontFamily:'DM Sans,sans-serif'}}>
                            <AlertCircle className="w-3 h-3" /> {errors.phone}
                          </p>
                        )}
                      </div>

                      <div className="fade-up-3">
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2" style={{fontFamily:'DM Sans,sans-serif'}}>
                          Subject <span className="text-red-400">*</span>
                        </label>
                        <select aria-label='name'
                          name="subject" value={formData.subject}
                          onChange={handleChange} onBlur={handleBlur}
                          className={fieldClass('subject')}
                          style={{fontFamily:'DM Sans,sans-serif'}}
                        >
                          <option value="">Select a subject</option>
                          {SUBJECTS.map((subject) => (
                            <option key={subject} value={subject}>{subject}</option>
                          ))}
                        </select>
                        {touched.subject && errors.subject && (
                          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1" style={{fontFamily:'DM Sans,sans-serif'}}>
                            <AlertCircle className="w-3 h-3" /> {errors.subject}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="fade-up-4">
                      <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2" style={{fontFamily:'DM Sans,sans-serif'}}>
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="message" value={formData.message}
                        onChange={handleChange} onBlur={handleBlur}
                        rows={5} placeholder="Describe your inquiry or project…"
                        className={`${fieldClass('message')} resize-none`}
                        style={{fontFamily:'DM Sans,sans-serif'}}
                      />
                      <div className="flex justify-between items-start mt-1.5">
                        <div>
                          {touched.message && errors.message && (
                            <p className="text-xs text-red-500 flex items-center gap-1" style={{fontFamily:'DM Sans,sans-serif'}}>
                              <AlertCircle className="w-3 h-3" /> {errors.message}
                            </p>
                          )}
                        </div>
                        <span className={`text-xs ${formData.message.length > 500 ? 'text-red-400' : 'text-gray-300'}`} style={{fontFamily:'DM Sans,sans-serif'}}>
                          {formData.message.length}/500
                        </span>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="pt-2 fade-up-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="submit-btn w-full bg-[#0B3C5D] text-white py-4 text-sm uppercase tracking-[.15em] hover:bg-[#0a3252] disabled:opacity-70 transition-colors duration-200 flex items-center justify-center gap-3"
                        style={{fontFamily:'DM Sans,sans-serif'}}
                      >
                        {loading ? (
                          <>
                            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                            </svg>
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </button>
                      <p className="text-center text-xs text-gray-400 mt-3" style={{fontFamily:'DM Sans,sans-serif'}}>
                        We respect your privacy. Your information will never be shared.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}