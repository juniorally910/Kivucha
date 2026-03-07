import { Globe, TrendingUp, Shield, FileText, ChevronRight } from "lucide-react";

export function TradeAndTariffsPage() {
  const services = [
    {
      icon: Globe,
      title: "International Trade Compliance",
      description: "Navigate complex international trade regulations and ensure compliance across all your global operations."
    },
    {
      icon: TrendingUp,
      title: "Tariff Strategy & Optimization",
      description: "Develop strategies to minimize tariff exposure and optimize your supply chain for cost efficiency."
    },
    {
      icon: Shield,
      title: "Trade Risk Assessment",
      description: "Identify and mitigate risks related to trade policies, sanctions, and regulatory changes."
    },
    {
      icon: FileText,
      title: "Customs & Documentation",
      description: "Streamline customs processes and ensure proper documentation for international shipments."
    }
  ];

  const insights = [
    {
      title: "Understanding Recent Tariff Changes",
      date: "March 5, 2026",
      description: "Analysis of recent tariff adjustments and their impact on global supply chains."
    },
    {
      title: "Supply Chain Diversification Strategies",
      date: "February 28, 2026",
      description: "How companies are adapting their supply chains to minimize trade risk exposure."
    },
    {
      title: "Trade Compliance Best Practices",
      date: "February 20, 2026",
      description: "Essential compliance practices for companies engaged in international trade."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1760566050127-d8c22131df32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwdHJhZGUlMjBzaGlwcGluZyUyMGNvbnRhaW5lcnN8ZW58MXx8fHwxNzcyODA5NzA0fDA&ixlib=rb-4.1.0&q=80&w=1080)` }}
      >
        <div className="absolute inset-0 bg-[#0B3C5D] opacity-85"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold mb-4">TRADE & TARIFFS</h1>
          <p className="text-xl mb-6 max-w-2xl">
            Navigate the complexities of international trade.
          </p>
          <p className="text-lg mb-8 max-w-2xl">
            Expert guidance on tariffs, trade compliance, and global supply chain optimization.
          </p>
          <button className="bg-[#C9A227] hover:bg-[#b89120] text-white px-6 py-3 rounded flex items-center gap-2 transition-colors">
            <ChevronRight className="w-5 h-5" />
            CONSULT WITH OUR EXPERTS
          </button>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0B3C5D] mb-6">
            Trade & Tariff Advisory Services
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            In today's global economy, understanding and managing trade regulations, tariffs, and customs requirements is critical to business success. Kivucha provides comprehensive trade and tariff advisory services to help companies navigate complex international trade environments, minimize costs, and ensure compliance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border-t-4 border-[#C9A227] p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[#0B3C5D] rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[#C9A227]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B3C5D] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Key Considerations Section */}
      <div className="bg-[#F5F7FA] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B3C5D] mb-8">
            Key Trade Considerations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[#0B3C5D] mb-3">
                Regulatory Compliance
              </h3>
              <p className="text-gray-700 text-sm">
                Stay compliant with evolving trade regulations across multiple jurisdictions and avoid costly penalties.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[#0B3C5D] mb-3">
                Cost Optimization
              </h3>
              <p className="text-gray-700 text-sm">
                Minimize tariff costs through strategic sourcing, trade agreements, and duty optimization programs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[#0B3C5D] mb-3">
                Supply Chain Flexibility
              </h3>
              <p className="text-gray-700 text-sm">
                Build resilient supply chains that can adapt to changing trade policies and tariff structures.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[#0B3C5D] mb-3">
                Documentation & Reporting
              </h3>
              <p className="text-gray-700 text-sm">
                Maintain proper documentation and reporting to support customs declarations and compliance audits.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[#0B3C5D] mb-3">
                Trade Agreements
              </h3>
              <p className="text-gray-700 text-sm">
                Leverage free trade agreements and preferential trade programs to reduce duties and expand markets.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[#0B3C5D] mb-3">
                Sanctions Screening
              </h3>
              <p className="text-gray-700 text-sm">
                Screen transactions and parties against sanctions lists to ensure compliance with export controls.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Insights */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-[#0B3C5D] mb-8">
          Latest Trade Insights
        </h2>
        <div className="space-y-6">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="bg-white border-l-4 border-[#C9A227] p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0B3C5D] mb-2">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{insight.date}</p>
                  <p className="text-gray-700">{insight.description}</p>
                </div>
                <button className="text-[#C9A227] hover:text-[#b89120] font-semibold flex items-center gap-2 whitespace-nowrap">
                  Read More
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#0B3C5D] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Trade & Tariff Guidance?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Our experts can help you navigate complex trade regulations, optimize tariff costs, and ensure compliance across your global operations.
          </p>
          <button className="bg-[#C9A227] hover:bg-[#b89120] text-white px-8 py-3 rounded transition-colors font-semibold">
            Contact Our Trade Experts
          </button>
        </div>
      </div>
    </div>
  );
}
