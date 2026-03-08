import { Link } from 'react-router';
import { Briefcase, TrendingUp, Users, Star, Globe, BookOpen, Heart, Lightbulb, ChevronRight, Award } from "lucide-react";
import hero from '../../assets/about.webp';

const values = [
  {
    icon: Star,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in everything we do — from client engagements to internal operations. Mediocrity has no place at Kivucha."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We challenge conventional thinking and embrace new ideas. Our people are encouraged to bring creative solutions to complex problems."
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Trust is the foundation of every relationship we build. We act with transparency, honesty, and accountability at all times."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Great outcomes are achieved together. We foster a culture where diverse perspectives are valued and every voice is heard."
  },
  {
    icon: Globe,
    title: "African Market Insight",
    description: "Our work spans industries and borders across the African continent. We bring a pan-African perspective to every challenge, informed by deep local market knowledge.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "The world evolves — so do we. We invest in the ongoing development of our people through mentorship, training, and real-world exposure."
  },
];

const benefits = [
  {
    category: "Growth & Development",
    items: [
      "Structured mentorship from senior leaders",
      "Access to global training programmes",
      "Cross-functional project exposure",
      "Sponsored professional certifications (CFA, CPA, ASA)",
    ]
  },
  {
    category: "Work & Wellbeing",
    items: [
      "Flexible and hybrid working arrangements",
      "Comprehensive health and wellness benefits",
      "Generous annual leave and sabbatical policy",
      "Mental health support and resources",
    ]
  },
  {
    category: "Rewards & Recognition",
    items: [
      "Competitive, performance-based compensation",
      "Annual bonuses tied to individual and firm success",
      "Peer and leadership recognition programmes",
      "Long-term career progression pathways",
    ]
  },
];

const profiles = [
  {
    name: "Analysts & Associates",
    icon: TrendingUp,
    description: "Early-career professionals who bring sharp analytical thinking and fresh perspectives. You will work directly on live transactions, valuations, and client engagements from day one.",
    traits: ["Quantitative aptitude", "Intellectual curiosity", "Attention to detail", "Drive to learn"]
  },
  {
    name: "Managers & Directors",
    icon: Briefcase,
    description: "Experienced professionals who lead workstreams, manage client relationships, and mentor junior talent. You bring proven expertise and the ability to navigate complexity.",
    traits: ["Client relationship skills", "Leadership presence", "Deep technical knowledge", "Strategic thinking"]
  },
  {
    name: "Senior Leadership",
    icon: Award,
    description: "Seasoned executives who shape firm strategy, build market presence, and drive growth across practices and geographies. You are builders and thought leaders.",
    traits: ["Business development", "Visionary thinking", "Executive presence", "Cross-sector expertise"]
  },
];

const hiringSteps = [
  { step: "01", title: "Apply", description: "Send us your CV and a brief note on why Kivucha is the right fit for you." },
  { step: "02", title: "Connect", description: "An initial conversation with our talent team to understand your background and aspirations." },
  { step: "03", title: "Interview", description: "In-depth discussions with practice leaders and peers — technical, behavioural, and cultural." },
  { step: "04", title: "Join", description: "Receive your offer and begin your journey as part of the Kivucha family." },
];

export function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .careers-page { font-family: 'DM Sans', sans-serif; }
        .careers-page h1, .careers-page h2, .careers-page .display {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up-1 { animation: fadeUp .6s .05s ease both; }
        .fade-up-2 { animation: fadeUp .6s .15s ease both; }
        .fade-up-3 { animation: fadeUp .6s .25s ease both; }

        .value-card:hover .value-icon {
          background: #0B3C5D;
          transform: scale(1.08);
        }
        .value-card:hover .value-icon svg {
          color: #C9A227;
        }
        .profile-card:hover {
          border-color: #C9A227;
          box-shadow: 0 8px 40px rgba(11,60,93,0.10);
        }
        .benefit-item::before {
          content: '';
          display: inline-block;
          width: 6px; height: 6px;
          background: #C9A227;
          border-radius: 50%;
          margin-right: 10px;
          flex-shrink: 0;
          margin-top: 7px;
        }
      `}</style>

      <div className="careers-page">

        {/* ── Hero ── */}
        <div
          className="relative h-[480px] bg-cover bg-center flex items-end"
          style={{ backgroundImage: `url(${hero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D] via-[#0B3C5D]/70 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6 pb-16 text-white w-full">
            <p className="text-[#C9A227] text-xs tracking-[.3em] uppercase mb-3 fade-up-1" style={{fontFamily:'DM Sans,sans-serif'}}>
              Join Our Team
            </p>
            <h1 className="text-5xl lg:text-6xl font-light mb-4 fade-up-2" style={{fontWeight:400}}>
              Build Something<br /><em>That Matters</em>
            </h1>
            <p className="text-white/70 text-lg max-w-xl fade-up-3" style={{fontFamily:'DM Sans,sans-serif'}}>
              At Kivucha, careers are built on meaningful work, exceptional colleagues, and a shared commitment to excellence.
            </p>
          </div>
        </div>

        {/* ── Intro Statement ── */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[#C9A227] text-xs tracking-[.25em] uppercase mb-4" style={{fontFamily:'DM Sans,sans-serif'}}>Our People Philosophy</p>
                <h2 className="text-4xl lg:text-5xl text-[#0B3C5D] mb-6 leading-tight" style={{fontWeight:400}}>
                  We invest in people<br /><em>as much as results</em>
                </h2>
                <div className="w-12 h-0.5 bg-[#C9A227] mb-8" />
                <p className="text-gray-600 leading-relaxed mb-5" style={{fontFamily:'DM Sans,sans-serif'}}>
                  Kivucha's greatest asset has always been its people. We are a firm built on intellectual rigour, personal integrity, and a genuine commitment to the growth of everyone who walks through our doors.
                </p>
                <p className="text-gray-600 leading-relaxed" style={{fontFamily:'DM Sans,sans-serif'}}>
                  We do not just hire talent — we develop leaders. Whether you are at the start of your career or a seasoned executive, Kivucha offers an environment where ambition is matched with opportunity, and where your contributions directly shape the firm's future.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "200+", label: "Clients Across Africa" },
                  { number: "72+",  label: "Years of Excellence" },
                  { number: "10+",  label: "African Countries Served" },
                  { number: "8",    label: "Practice Areas" },
                ].map(({ number, label }) => (
                  <div key={label} className="bg-[#F7F5F0] p-8 text-center">
                    <div className="text-4xl font-light text-[#0B3C5D] mb-2" style={{fontFamily:'Cormorant Garamond,Georgia,serif'}}>{number}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest" style={{fontFamily:'DM Sans,sans-serif'}}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Core Values ── */}
        <div className="bg-[#F7F5F0] py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[#C9A227] text-xs tracking-[.25em] uppercase mb-3" style={{fontFamily:'DM Sans,sans-serif'}}>What Drives Us</p>
              <h2 className="text-4xl text-[#0B3C5D]" style={{fontWeight:400}}>Our Core Values</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map(({ icon: Icon, title, description }) => (
                <div key={title} className="value-card bg-white p-8 transition-all duration-300">
                  <div className="value-icon w-12 h-12 rounded-full bg-[#F7F5F0] flex items-center justify-center mb-5 transition-all duration-300">
                    <Icon className="w-5 h-5 text-[#0B3C5D] transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0B3C5D] mb-3" style={{fontFamily:'DM Sans,sans-serif'}}>{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed" style={{fontFamily:'DM Sans,sans-serif'}}>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Who We Look For ── */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[#C9A227] text-xs tracking-[.25em] uppercase mb-3" style={{fontFamily:'DM Sans,sans-serif'}}>Career Levels</p>
              <h2 className="text-4xl text-[#0B3C5D]" style={{fontWeight:400}}>Who We Look For</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {profiles.map(({ icon: Icon, name, description, traits }) => (
                <div key={name} className="profile-card border border-gray-200 p-8 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#0B3C5D] rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <h3 className="text-xl text-[#0B3C5D] mb-4" style={{fontFamily:'Cormorant Garamond,Georgia,serif', fontWeight:600}}>{name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6" style={{fontFamily:'DM Sans,sans-serif'}}>{description}</p>
                  <div className="space-y-2">
                    {traits.map(t => (
                      <div key={t} className="flex items-center gap-2 text-sm text-gray-600" style={{fontFamily:'DM Sans,sans-serif'}}>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227] flex-shrink-0" />
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Benefits ── */}
        <div className="bg-[#0B3C5D] py-20 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/5 pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[#C9A227] text-xs tracking-[.25em] uppercase mb-3" style={{fontFamily:'DM Sans,sans-serif'}}>What We Offer</p>
              <h2 className="text-4xl text-white" style={{fontWeight:400, fontFamily:'Cormorant Garamond,Georgia,serif'}}>Life at Kivucha</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map(({ category, items }) => (
                <div key={category} className="bg-white/5 border border-white/10 p-8">
                  <h3 className="text-[#C9A227] text-sm uppercase tracking-widest mb-6" style={{fontFamily:'DM Sans,sans-serif'}}>{category}</h3>
                  <ul className="space-y-3">
                    {items.map(item => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/75" style={{fontFamily:'DM Sans,sans-serif'}}>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227] flex-shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Hiring Process ── */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[#C9A227] text-xs tracking-[.25em] uppercase mb-3" style={{fontFamily:'DM Sans,sans-serif'}}>How It Works</p>
              <h2 className="text-4xl text-[#0B3C5D]" style={{fontWeight:400}}>Our Hiring Process</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-0">
              {hiringSteps.map(({ step, title, description }, i) => (
                <div key={step} className="relative">
                  {/* Connector line */}
                  {i < hiringSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gray-200 z-0" />
                  )}
                  <div className="relative z-10 flex flex-col items-center text-center px-6">
                    <div className="w-16 h-16 rounded-full bg-[#F7F5F0] border-2 border-[#C9A227] flex items-center justify-center mb-4">
                      <span className="text-xl font-light text-[#0B3C5D]" style={{fontFamily:'Cormorant Garamond,Georgia,serif'}}>{step}</span>
                    </div>
                    <h3 className="font-semibold text-[#0B3C5D] mb-2" style={{fontFamily:'DM Sans,sans-serif'}}>{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed" style={{fontFamily:'DM Sans,sans-serif'}}>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Speculative Applications CTA ── */}
        <div className="bg-[#F7F5F0] py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-[#C9A227] text-xs tracking-[.25em] uppercase mb-4" style={{fontFamily:'DM Sans,sans-serif'}}>Stay Connected</p>
            <h2 className="text-4xl lg:text-5xl text-[#0B3C5D] mb-6 leading-tight" style={{fontWeight:400, fontFamily:'Cormorant Garamond,Georgia,serif'}}>
              Don't see a role<br /><em>that fits yet?</em>
            </h2>
            <div className="w-12 h-0.5 bg-[#C9A227] mx-auto mb-8" />
            <p className="text-gray-600 leading-relaxed mb-10 max-w-xl mx-auto" style={{fontFamily:'DM Sans,sans-serif'}}>
              We are always interested in meeting exceptional people. Send us your profile and we will reach out when the right opportunity arises.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-[#0B3C5D] hover:bg-[#C9A227] text-white px-10 py-4 transition-colors duration-200 font-semibold text-sm uppercase tracking-widest"
              style={{fontFamily:'DM Sans,sans-serif'}}
            >
              Get In Touch
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}