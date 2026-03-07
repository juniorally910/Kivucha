import { PageHero } from '../PageHero';
import { Link } from 'react-router';
import { Calendar } from 'lucide-react';
import { insightsData } from '../data/insightsData';

export function InsightsPage() {
  return (
    <div>
      <PageHero
        title="Insights"
        subtitle="Thought leadership and industry perspectives to help you stay ahead"
        imageSrc="https://images.unsplash.com/photo-1758691736545-5c33b6255dca?w=1200&q=80"
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-[#0a1f44] mb-4">Latest Insights</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Stay informed with our latest research, analysis, and commentary on trends shaping
                the business landscape. Our insights are designed to help you make better decisions
                and stay ahead of the curve.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insightsData.map((insight) => (
                <Link
                  key={insight.id}
                  to={`/insights/${insight.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-[#d4af37] text-white text-sm rounded">
                        {insight.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{insight.date}</span>
                    </div>
                    <h3 className="text-xl text-[#0a1f44] mb-3 group-hover:text-[#d4af37] transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{insight.excerpt}</p>
                    <span className="text-[#d4af37] group-hover:text-[#b8941f] transition-colors flex items-center gap-2">
                      Read More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
