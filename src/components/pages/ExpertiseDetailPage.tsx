import { useParams, Link, Navigate } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { expertiseData } from "../data/expertiseData";
import image from '../../assets/care3.webp'

export function ExpertiseDetailPage() {
  const { id } = useParams();
  
  const expertise = expertiseData.find((item) => item.id === id);

  if (!expertise) {
    return <Navigate to="/expertise" replace />;
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Small Hero Section */}
      <div
        className="relative h-[250px] bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: `url(${image})` 
        }}
      >
        <div className="absolute inset-0 bg-[#0B3C5D] opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-white mt-10">
          <Link
            to="/expertise"
            className="inline-flex items-center gap-2 text-[#C9A227] hover:text-white mb-4 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to All Expertise
          </Link>
          <h1 className="text-4xl font-bold mb-3">{expertise.title}</h1>
          <p className="text-lg text-gray-200 max-w-3xl">
            {expertise.fullDescription}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-[#0B3C5D] mb-6">
                Overview
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {expertise.detailedContent.overview}
              </p>
            </section>

            {/* Key Services */}
            <section className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-[#0B3C5D] mb-6">
                Key Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {expertise.detailedContent.keyServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-[#F5F7FA] p-4 rounded border-l-4 border-[#C9A227]"
                  >
                    <ChevronRight className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-1" />
                    <span className="text-gray-800">{service}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-[#0B3C5D] mb-6">
                Why Choose Kivucha
              </h2>
              <div className="space-y-4">
                {expertise.detailedContent.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-[#F5F7FA] p-6 rounded"
                  >
                    <div className="w-8 h-8 bg-[#C9A227] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-800 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-[#0B3C5D] text-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-200 mb-6">
                Contact our team to learn how Kivucha can help you achieve your goals.
              </p>
              <Link to="/#contact">
              <button className="bg-[#C9A227] hover:bg-[#b89120] text-white px-6 py-3 rounded transition-colors font-semibold">
                Contact Our Experts
              </button>
              </Link>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-6">
              <h3 className="text-xl font-bold text-[#0B3C5D] mb-4">
                Related Expertise
              </h3>
              <div className="space-y-3">
                {expertiseData
                  .filter((item) => item.id !== expertise.id)
                  .slice(0, 5)
                  .map((relatedExpertise) => (
                    <Link
                      key={relatedExpertise.id}
                      to={`/expertise/${relatedExpertise.id}`}
                      className="block text-[#C9A227] hover:text-[#b89120] border-b border-gray-200 pb-3 transition-colors"
                    >
                      {relatedExpertise.title}
                    </Link>
                  ))}
              </div>
              <Link
                to="/expertise"
                className="block text-center mt-6 text-[#0B3C5D] hover:text-[#C9A227] font-semibold transition-colors"
              >
                View All Expertise →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}