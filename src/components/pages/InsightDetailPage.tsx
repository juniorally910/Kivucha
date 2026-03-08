import { useParams, Link } from 'react-router';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';
import { insightsData } from '../data/insightsData';

export function InsightDetailPage() {
  const { id } = useParams();
  const insight = insightsData.find(item => item.id === Number(id));

  if (!insight) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl text-[#0a1f44] mb-4">Insight Not Found</h1>
          <Link to="/insights" className="text-[#d4af37] hover:text-[#b8941f]">
            Return to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="relative h-[500px] overflow-hidden">
        <img
          src={insight.image}
          alt={insight.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-2 bg-[#d4af37] text-white rounded mb-4">
                {insight.category}
              </span>
              <h1 className="text-5xl text-white mb-6">{insight.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{insight.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{insight.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{insight.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#b8941f] transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Insights
            </Link>

            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <div
                className="prose prose-lg max-w-none
                  prose-headings:text-[#0a1f44]
                  prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                  prose-ul:text-gray-700 prose-ul:my-4
                  prose-li:my-2
                  prose-strong:text-[#0a1f44]"
                dangerouslySetInnerHTML={{ __html: insight.content }}
              />
            </div>

            <div className="mt-12 bg-[#0a1f44] rounded-lg p-8 text-white">
              <h3 className="text-2xl mb-4">Want to Learn More?</h3>
              <p className="mb-6 text-white/90">
                Connect with our experts to discuss how these insights can be applied to your business challenges.
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-[#d4af37] text-white rounded-lg hover:bg-[#b8941f] transition-colors"
              >
                Contact Our Team
              </Link>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl text-[#0a1f44] mb-6">Related Insights</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {insightsData
                  .filter(item => item.id !== insight.id && item.category === insight.category)
                  .slice(0, 2)
                  .map(relatedInsight => (
                    <Link
                      key={relatedInsight.id}
                      to={`/insights/${relatedInsight.id}`}
                      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
                    >
                      <div className="h-48 overflow-hidden">
                        <img
                          src={relatedInsight.image}
                          alt={relatedInsight.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <span className="inline-block px-3 py-1 bg-[#d4af37] text-white text-sm rounded mb-3">
                          {relatedInsight.category}
                        </span>
                        <h4 className="text-xl text-[#0a1f44] mb-2 group-hover:text-[#d4af37] transition-colors">
                          {relatedInsight.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{relatedInsight.excerpt}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
