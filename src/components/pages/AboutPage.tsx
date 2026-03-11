import { useState } from "react";
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Scale, 
  Landmark, 
  ShoppingBag, 
  Shield,
  Plane 
} from "lucide-react";

export function AboutPage() {
  const [activeTimeline, setActiveTimeline] = useState<number | null>(null);

  const statistics = [
    { number: "200+",  label: "Clients Across",   sublabel: "Africa"           },
    { number: "72+",   label: "Years of",         sublabel: "Excellence"       },
    { number: "50+",   label: "Expert",           sublabel: "Professionals"    },
    { number: "8",     label: "Core",             sublabel: "Expertise Areas"  },
    { number: "10+",   label: "African Countries",sublabel: "Served"           },
      ];

  const industries = [
    { icon: Building2, label: "Retail" },
    { icon: TrendingUp, label: "Financial Services" },
    { icon: Users, label: "Consumer Products" },
    { icon: Scale, label: "Legal & Regulatory" },
    { icon: Landmark, label: "Real Estate" },
    { icon: ShoppingBag, label: "Industrials" },
    { icon: Shield, label: "Insurance" },
    { icon: Plane, label: "Aviation" },
  ];

  const timeline = [
    {
      year: "1973 - 1980",
      title: "The Journey Begins",
      description: "Kivucha was founded by Anthony Nubaha and Stanislas Nyamucenshera with a vision to revolutionize investment and consulting services. Starting as a boutique advisory firm, they quickly established themselves as trusted partners for businesses seeking strategic financial guidance and operational excellence.",
      image: "https://images.unsplash.com/photo-1572809596417-eea1f4c375d6?..."
    },
    {
      year: "1981 - 1990",
      title: "Expansion and Growth",
      description: "Under the leadership of Anthony Nubaha and Stanislas Nyamucenshera, Kivucha expanded its service offerings to include corporate finance, M&A advisory, and valuation services. The team grew to include industry specialists across retail, financial services, and manufacturing sectors, opening a second office and establishing international partnerships.",
      image: "https://images.unsplash.com/photo-1758876202877-30b2c505ad9d?..."
    },
    {
      year: "1991 - 2000",
      title: "Building Expertise",
      description: "Launched specialized practices in private equity, tax advisory, and risk management. Kivucha successfully advised on over $50 billion in transactions and earned recognition as a leading mid-market advisory firm. Their reputation for delivering measurable results attracted Fortune 500 clients.",
      image: "https://images.unsplash.com/photo-1734503937317-3b88a42ac50c?..."
    },
    {
      year: "2001 - 2015",
      title: "Innovation and Digital Transformation",
      description: "Pioneered crypto and digital asset advisory services, positioning Kivucha at the forefront of emerging financial technologies. The firm invested heavily in data analytics capabilities and developed proprietary valuation methodologies for complex financial instruments and digital assets.",
      image: "https://images.unsplash.com/photo-1760246964044-1384f71665b9?..."
    },
    {
      year: "2016 - Present",
      title: "Pan-African Leadership",
      description: "Today, Kivucha stands as a leading investment and consulting firm across Africa. With a growing presence in over 10 African countries and a team of dedicated professionals, the legacy built by Anthony Nubaha and Stanislas Nyamucenshera continues to deliver transformative results for clients across the continent.",
      image: "https://images.unsplash.com/photo-1594098882270-66ce9399b040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBtZWV0aW5nJTIwZGlzY3Vzc2lvbnxlbnwxfHx8fDE3NzI5NTk2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#0B3C5D] py-20">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold mb-4">ABOUT KIVUCHA</h1>
          <p className="text-xl max-w-3xl">
            Building lasting partnerships through strategic expertise, innovation, and unwavering commitment to client success.
          </p>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className="h-[400px] rounded-lg bg-cover bg-center shadow-xl order-2 lg:order-1"
              style={{ backgroundImage: `url(https://images.unsplash.com/photo-1758519289200-384c7ef2d163?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMGJ1c2luZXNzbWFuJTIwdGFsa2luZyUyMHNlcmlvdXMlMjBidXNpbmVzc3xlbnwwfHwwfHx8MA%3D%3D)` }}
            />
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-[#0B3C5D] mb-6 border-l-4 border-[#C9A227] pl-4">
                WHO WE ARE
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Kivucha Investment and Consulting Company is a trusted pan-African advisory 
                firm recognised for providing practical solutions to businesses, investors, 
                and government entities across Africa. We deliver advisory, business performance improvement, 
                and turnaround management services that help African organisations act decisively, adapt quickly, and accelerate results.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Young and experienced professionals seek Kivucha as an employer of choice, consistently ranking us in the market as a top-tier, globally led diversified advisory firm's leadership, benefits, compensation, learning, and work-life balance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How We Help Section */}
      <div className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0B3C5D] mb-6 border-l-4 border-[#C9A227] pl-4">
                HOW WE HELP
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                We do not give you good you good advice you need to know; we deliver the actionable advice you want to hear.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                <span className="font-bold text-[#0B3C5D]">Leadership. Action. Results.</span> It can matter. It's our ethos. We mobilize the right talent, apply quickly, and implement solutions. Complex problems demand specialized, operational leverage tailored to respond swiftly to changing economic and business environments. We offer vast commitments that span the full lifecycle of a company, from strategic planning to operational turnarounds for distressed businesses and shareholders.
              </p>
            </div>
            <div
              className="h-[400px] rounded-lg bg-cover bg-center shadow-xl"
              style={{ backgroundImage: `url(https://plus.unsplash.com/premium_photo-1681398556150-7fa0d1e72703?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWZyaWNhbiUyMGJ1c2luZXNzJTIwcHJvZmVzc2lvbmFscyUyMG1lZXRpbmd8ZW58MHx8MHx8fDA%3D)` }}
            />
          </div>
        </div>
      </div>

      {/* Who We Serve - Statistics Section */}
      <div className="relative py-16 bg-[#0B3C5D] text-white">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-[#1a5a85] to-[#0B3C5D]"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">WHO WE SERVE</h2>
          
          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
              >
                <div className="text-4xl font-bold text-[#C9A227] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold">{stat.label}</div>
                <div className="text-xs text-gray-300">{stat.sublabel}</div>
              </div>
            ))}
          </div>

          {/* Industry Icons */}
          <div className="bg-[#1a5a85] rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 p-4 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <div className="w-12 h-12 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-[#C9A227]" />
                    </div>
                    <div className="text-xs text-center font-semibold">
                      {industry.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B3C5D] mb-4 text-center">
            A TIMELINE OF KIVUCHA'S HISTORY
          </h2>
          <p className="text-gray-700 text-center mb-4 max-w-4xl mx-auto">
            From humble beginnings to global recognition, our journey reflects unwavering commitment to client success, innovative thinking, cutting-edge methodologies, best-in-class operating performance, and enduring stakeholder value. We pride ourselves on our ability to deliver practical solutions to our clients' unique challenges and deliver business outcomes.
          </p>
          <p className="text-[#C9A227] text-center mb-12 font-semibold">
            Discover some of the key milestones in Kivucha's journey that have shaped us past in forming our unique identity.
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#C9A227] hidden lg:block"></div>

            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isActive = activeTimeline === index;

              return (
                <div
                  key={index}
                  className="relative mb-16 lg:mb-24"
                  onMouseEnter={() => setActiveTimeline(index)}
                  onMouseLeave={() => setActiveTimeline(null)}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block z-10">
                    <div
                      className={`w-6 h-6 rounded-full border-4 border-[#C9A227] transition-all ${
                        isActive ? "bg-[#C9A227] scale-125" : "bg-white"
                      }`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                      isLeft ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`${
                        isLeft ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:col-start-2"
                      }`}
                    >
                      <div
                        className={`rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all transform ${
                          isActive ? "scale-105" : ""
                        }`}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div
                      className={`${
                        isLeft
                          ? "lg:pl-12 lg:col-start-2 lg:row-start-1"
                          : "lg:pr-12"
                      }`}
                    >
                      <div
                        className={`inline-block bg-[#C9A227] text-white px-4 py-2 rounded font-bold mb-3 ${
                          isLeft ? "lg:float-left" : "lg:float-right"
                        }`}
                      >
                        {item.year}
                      </div>
                      <div className="clear-both">
                        <h3 className="text-2xl font-bold text-[#0B3C5D] mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0B3C5D] mb-4">
            Ready to Partner with Kivucha?
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Let's discuss how our expertise can help transform your business and achieve your strategic goals.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/#contact"
              className="bg-[#C9A227] hover:bg-[#b89120] text-white px-8 py-3 rounded transition-colors font-semibold"
            >
              Contact Us
            </a>
            <a
              href="/people"
              className="bg-[#0B3C5D] hover:bg-[#1a5a85] text-white px-8 py-3 rounded transition-colors font-semibold"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
