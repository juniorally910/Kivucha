import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { 
  ChevronRight, 
  TrendingUp, 
  Target, 
  Shield, 
  Bitcoin,
  Award,
  ArrowRight,
  Briefcase
} from "lucide-react";
import { expertiseData } from "../data/expertiseData";
import { industriesData } from "../data/industriesData";
import { insightsData } from "../data/insightsData";
import { ContactPage } from "../ContactPage";

const heroImages = [
  "https://images.unsplash.com/photo-1713937118847-3e1970b61cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBza3lsaW5lfGVufDF8fHx8MTc3Mjg3NzMyNnww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1761233138997-44d9b002a08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBtYXJrZXQlMjB0cmFkaW5nJTIwZmxvb3J8ZW58MXx8fHwxNzcyODc3MzI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1758520144427-ddb02ac74e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBidXNpbmVzcyUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NzI4NzczMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
];

/** Scrolls to #contact smoothly, works from any page via navigation */
function ContactLink({
  to = "/#contact",
  className,
  children,
}: {
  to?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If already on home page, just scroll — don't navigate
    if (location.pathname === "/") {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
    // Otherwise let <Link to="/#contact"> navigate to home, then the
    // useEffect below will handle the scroll after mount.
  };

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

export function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const location = useLocation();

  // After navigating to /#contact from another page, scroll once mounted
  useEffect(() => {
    if (location.hash === "#contact") {
      // Small delay lets the page render fully before scrolling
      const t = setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(t);
    }
  }, [location]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const whyKivuchaCards = [
    {
      icon: TrendingUp,
      title: "Strategic Financial Expertise",
      description: "Deep knowledge in corporate finance, M&A, and financial restructuring."
    },
    {
      icon: Target,
      title: "Industry-Focused Consulting",
      description: "Specialized expertise across retail, financial services, real estate, and more."
    },
    {
      icon: Award,
      title: "Global Valuation Services",
      description: "Independent, defensible valuations backed by technical expertise."
    },
    {
      icon: Bitcoin,
      title: "Innovative Crypto Advisory",
      description: "Leading-edge guidance in digital assets and blockchain technology."
    },
    {
      icon: Shield,
      title: "Risk and Advisory Excellence",
      description: "Comprehensive risk management and regulatory compliance solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <div className="relative h-screen">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-[#0B3C5D] opacity-80" />

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white">
            <h1 className="text-2xl sm:text-4xl lg:text-4xl font-bold mb-6 max-w-4xl leading-tight">
              Empowering Businesses Through Strategic Investment and Advisory
            </h1>
            <p className="text-lg sm:text-xl lg:text-xl mb-8 max-w-3xl text-gray-200">
              Kivucha delivers comprehensive investment and consulting solutions that drive sustainable growth and maximize value for clients across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/expertise"
                className="bg-[#C9A227] hover:bg-[#b89120] text-white px-6 py-3 sm:px-8 sm:py-4 rounded flex items-center justify-center sm:justify-start gap-2 transition-colors font-semibold text-base sm:text-lg"
              >
                Explore Our Expertise
                <ChevronRight className="w-5 h-5" />
              </Link>
              {/* ↓ scrolls to #contact on home page */}
              <ContactLink className="bg-transparent border-2 border-white hover:bg-white hover:text-[#0B3C5D] text-white px-6 py-3 sm:px-8 sm:py-4 rounded transition-colors font-semibold text-base sm:text-lg text-center sm:text-left">
                Contact Us
              </ContactLink>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              aria-label={`Slide ${index + 1}`}
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentImageIndex ? "bg-[#C9A227]" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── Who We Are ── */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#0B3C5D] mb-6">Who We Are</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Kivucha Investment and Consulting Company is a trusted partner for businesses seeking strategic advisory, financial expertise, and innovative solutions. Our mission is to empower organizations through data-driven insights, operational excellence, and sustainable value creation.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We combine deep industry knowledge with proven methodologies to deliver differentiated outcomes. Our team of experts brings decades of experience across corporate finance, private equity, tax, valuation, risk advisory, and emerging technologies like cryptocurrency.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#C9A227] hover:text-[#b89120] transition-colors font-semibold text-lg"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div
              className="h-[500px] rounded-lg bg-cover bg-center shadow-xl"
              style={{ backgroundImage: `url(https://images.unsplash.com/photo-1769839271827-e7e287319dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzI3ODgzMTl8MA&ixlib=rb-4.1.0&q=80&w=1080)` }}
            />
          </div>
        </div>
      </div>

      {/* ── Why Kivucha ── */}
      <div className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Why Choose Kivucha</h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              We deliver results that matter through specialized expertise and unwavering commitment to client success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyKivuchaCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow border-t-4 border-[#C9A227]"
                >
                  <div className="w-16 h-16 bg-[#0B3C5D] rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-[#C9A227]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B3C5D] mb-3">{card.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Expertise Highlights ── */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Our Expertise</h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Comprehensive advisory services designed to drive sustainable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {expertiseData.slice(0, 4).map((expertise) => (
              <Link
                key={expertise.id}
                to={`/expertise/${expertise.id}`}
                className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-[#C9A227] transition-all"
              >
                <h3 className="text-lg font-bold text-[#0B3C5D] mb-3 group-hover:text-[#C9A227] transition-colors">
                  {expertise.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{expertise.fullDescription}</p>
                <div className="flex items-center gap-2 text-[#C9A227] font-semibold text-sm">
                  Learn More
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/expertise"
              className="inline-flex items-center gap-2 bg-[#0B3C5D] hover:bg-[#C9A227] text-white px-8 py-3 rounded transition-colors font-semibold"
            >
              View All Expertise <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Industries ── */}
      <div className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Industries We Serve</h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Deep industry expertise delivering specialized solutions across key sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {industriesData.slice(0, 4).map((industry) => (
              <Link
                key={industry.id}
                to={`/industries/${industry.id}`}
                className="group bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-40 bg-gradient-to-br from-[#0B3C5D] to-[#1a5a85] flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{industry.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">{industry.fullDescription}</p>
                  <div className="flex items-center gap-2 text-[#C9A227] font-semibold text-sm">
                    Explore
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 bg-[#0B3C5D] hover:bg-[#C9A227] text-white px-8 py-3 rounded transition-colors font-semibold"
            >
              View All Industries <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Insights ── */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Latest Insights</h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Stay informed with thought leadership and industry perspectives from our experts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {insightsData.slice(0, 3).map((insight) => (
              <Link
                key={insight.id}
                to={`/insights/${insight.id}`}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${insight.image})` }} />
                <div className="p-6">
                  <div className="inline-block bg-[#C9A227] text-white text-xs font-semibold px-3 py-1 rounded mb-3">
                    {insight.category}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B3C5D] mb-2 group-hover:text-[#C9A227] transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{insight.excerpt}</p>
                  <div className="flex items-center gap-2 text-[#C9A227] font-semibold text-sm">
                    Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 bg-[#0B3C5D] hover:bg-[#C9A227] text-white px-8 py-3 rounded transition-colors font-semibold"
            >
              View All Insights <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Careers CTA ── */}
      <div
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1759428935131-cee6cd331234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwYWR2aXNvcnklMjBjb25zdWx0aW5nfGVufDF8fHx8MTc3Mjg3NzMyN3ww&ixlib=rb-4.1.0&q=80&w=1080)` }}
      >
        <div className="absolute inset-0 bg-[#0B3C5D] opacity-90" />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <Briefcase className="w-16 h-16 text-[#C9A227] mx-auto mb-6" />
          <h2 className="text-5xl font-bold mb-6">Build Your Career with Kivucha</h2>
          <p className="text-xl mb-8 text-gray-200">
            Join a team of exceptional professionals working on challenging, high-impact projects. We offer unparalleled opportunities for growth, learning, and professional development.
          </p>
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#b89120] text-white px-8 py-4 rounded transition-colors font-semibold text-lg"
          >
            Explore Career Opportunities <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* ── Transform CTA banner ── */}
      <div className="py-20 bg-[#0B3C5D] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Partner with Kivucha to unlock new opportunities, optimize performance, and drive sustainable growth. Our team is ready to help you achieve your strategic objectives.
          </p>
          {/* ↓ scrolls to #contact below */}
          <ContactLink className="inline-block bg-[#C9A227] hover:bg-[#b89120] text-white px-10 py-4 rounded transition-colors font-semibold text-lg cursor-pointer">
            Contact Us Today
          </ContactLink>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          CONTACT SECTION — anchor target
      ════════════════════════════════════════════ */}
      <div id="contact" className="scroll-mt-20">
        <ContactPage />
      </div>

    </div>
  );
}