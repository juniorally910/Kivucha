import { PageHero } from '../PageHero';
import { Calendar, ExternalLink, FileText } from 'lucide-react';

const mediaItems = [
  {
    date: 'March 7, 2026',
    type: 'Press Release',
    title: 'Kivucha Announces Strategic Partnership for AI-Driven Business Solutions',
    excerpt: 'New collaboration brings cutting-edge artificial intelligence capabilities to enterprise clients, enabling data-driven decision making and operational excellence.',
    image: 'https://images.unsplash.com/photo-1763110305836-17790330be78?w=800&q=80'
  },
  {
    date: 'March 2, 2026',
    type: 'Industry Recognition',
    title: 'Kivucha Named Top Consulting Firm for Corporate Transformation',
    excerpt: 'Independent industry analysis recognizes Kivucha for outstanding client service and innovative approach to digital transformation across multiple sectors.',
    image: 'https://images.unsplash.com/photo-1769738360873-3ba6cac0b308?w=800&q=80'
  },
  {
    date: 'February 28, 2026',
    type: 'News',
    title: 'Global Expansion: Opening New Regional Office in Asia-Pacific',
    excerpt: 'Strategic expansion continues with establishment of regional hub in Singapore to better serve growing client base across the Asia-Pacific region.',
    image: 'https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?w=800&q=80'
  },
  {
    date: 'February 20, 2026',
    type: 'Thought Leadership',
    title: 'CEO Featured in Global Finance Magazine: The Future of Corporate Advisory',
    excerpt: 'Kivucha CEO shares insights on emerging trends in corporate finance and the evolving role of strategic advisors in the digital age.',
    image: 'https://images.unsplash.com/photo-1772588627373-729b0f47e5bb?w=800&q=80'
  },
  {
    date: 'February 15, 2026',
    type: 'Press Release',
    title: 'Kivucha Launches New Crypto Advisory Practice',
    excerpt: 'Responding to growing client demand, new practice area provides comprehensive guidance on blockchain technology, digital assets, and cryptocurrency strategy.',
    image: 'https://images.unsplash.com/photo-1758691736545-5c33b6255dca?w=800&q=80'
  },
  {
    date: 'February 8, 2026',
    type: 'Award',
    title: 'Excellence in Client Service Award for M&A Advisory',
    excerpt: 'Industry association honors Kivucha for exceptional merger and acquisition advisory services, recognizing successful completion of complex cross-border transactions.',
    image: 'https://images.unsplash.com/photo-1770681381576-f1fdceb2ea01?w=800&q=80'
  }
];

const mediaCategories = [
  { name: 'Press Releases', count: 24 },
  { name: 'News Coverage', count: 18 },
  { name: 'Awards & Recognition', count: 12 },
  { name: 'Thought Leadership', count: 15 }
];

export function MediaPage() {
  return (
    <div>
      <PageHero
        title="Media"
        subtitle="Latest news, press releases, and media coverage"
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl text-[#0a1f44] mb-8">Recent Media</h2>
                <div className="space-y-8">
                  {mediaItems.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                      <div className="md:flex">
                        <div className="md:w-1/3 h-48 md:h-auto">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex items-center gap-2 text-[#d4af37] text-sm">
                              <Calendar className="w-4 h-4" />
                              <span>{item.date}</span>
                            </div>
                            <span className="px-3 py-1 bg-[#0a1f44] text-white text-xs rounded">
                              {item.type}
                            </span>
                          </div>
                          <h3 className="text-xl text-[#0a1f44] mb-3 group-hover:text-[#d4af37] transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 mb-4">{item.excerpt}</p>
                          <button className="text-[#d4af37] hover:text-[#b8941f] transition-colors flex items-center gap-2">
                            Read Full Article <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                  <h3 className="text-xl text-[#0a1f44] mb-6">Media Categories</h3>
                  <div className="space-y-4 mb-8">
                    {mediaCategories.map((category, index) => (
                      <button
                        key={index}
                        className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors text-left"
                      >
                        <span className="text-gray-700">{category.name}</span>
                        <span className="px-2 py-1 bg-[#d4af37] text-white text-sm rounded">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="text-lg text-[#0a1f44] mb-4">Media Inquiries</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      For press inquiries, interview requests, or media partnerships, please contact our communications team.
                    </p>
                    <button className="w-full px-4 py-3 bg-[#d4af37] text-white rounded-lg hover:bg-[#b8941f] transition-colors flex items-center justify-center gap-2">
                      <FileText className="w-5 h-5" />
                      Contact Media Team
                    </button>
                  </div>

                  <div className="border-t mt-6 pt-6">
                    <h4 className="text-lg text-[#0a1f44] mb-4">Download Resources</h4>
                    <div className="space-y-3">
                      <button className="w-full text-left text-[#d4af37] hover:text-[#b8941f] transition-colors flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Company Fact Sheet
                      </button>
                      <button className="w-full text-left text-[#d4af37] hover:text-[#b8941f] transition-colors flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Leadership Bios
                      </button>
                      <button className="w-full text-left text-[#d4af37] hover:text-[#b8941f] transition-colors flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Logo & Brand Assets
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
