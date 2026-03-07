import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { expertiseData } from "../data/expertiseData";
import heroimage from '../../assets/about.webp'

export function ExpertisePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${heroimage})` }}
      >
        <div className="absolute inset-0 bg-[#0B3C5D] opacity-85"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold mb-4">OUR EXPERTISE</h1>
          <p className="text-xl mb-6 max-w-2xl">
            Lean, fast-paced, integrated.
          </p>
          <p className="text-lg mb-8 max-w-2xl">
            We're here when you need us most, and we'll get you to the next level.
          </p>
          <button className="bg-[#C9A227] hover:bg-[#b89120] text-white px-6 py-3 rounded flex items-center gap-2 transition-colors">
            <ChevronRight className="w-5 h-5" />
            TALK TO US TO LEARN MORE
          </button>
        </div>
      </div>

      {/* Expertise Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseData.map((expertise) => (
            <div
              key={expertise.id}
              className="border-t-4 border-[#C9A227] bg-white hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B3C5D] mb-4">
                  {expertise.title}
                </h3>
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                  {expertise.shortDescription}
                </p>
                <Link
                  to={`/expertise/${expertise.id}`}
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