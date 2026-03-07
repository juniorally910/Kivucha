import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { industriesData } from "../data/industriesData";
import hero from '../../assets/care3.webp'

export function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-[#0B3C5D] opacity-85"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold mb-4">OUR INDUSTRIES</h1>
          <p className="text-xl mb-6 max-w-2xl">
            Deep industry expertise across key sectors.
          </p>
          <p className="text-lg mb-8 max-w-2xl">
            We bring specialized knowledge and proven solutions to the industries we serve.
          </p>
          <Link to="/#contact">
          <button className="bg-[#C9A227] hover:bg-[#b89120] text-white px-6 py-3 rounded flex items-center gap-2 transition-colors">
            <ChevronRight className="w-5 h-5" />
            TALK TO US TO LEARN MORE
          </button>
          </Link>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.map((industry) => (
            <div
              key={industry.id}
              className="border-t-4 border-[#C9A227] bg-white hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B3C5D] mb-4">
                  {industry.title}
                </h3>
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                  {industry.shortDescription}
                </p>
                <Link
                  to={`/industries/${industry.id}`}
                  className="inline-flex items-center gap-2 text-[#C9A227] hover:text-[#b89120] transition-colors font-semibold"
                >
                  <ChevronRight className="w-5 h-5" />
                  LEARN MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
