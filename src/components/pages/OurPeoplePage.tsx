import { Mail, Linkedin } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  title: string;
  expertise: string;
  bio: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    title: "Managing Director, Corporate Finance",
    expertise: "M&A, Corporate Restructuring",
    bio: "Sarah brings over 20 years of experience in corporate finance and M&A advisory, having led numerous high-profile transactions across multiple industries.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  },
  {
    id: "2",
    name: "Michael Chen",
    title: "Partner, Private Equity Services",
    expertise: "Private Equity, Valuations",
    bio: "Michael specializes in private equity transactions and valuations, with extensive experience supporting PE firms throughout the investment lifecycle.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    title: "Managing Director, Tax Services",
    expertise: "International Tax, Tax Strategy",
    bio: "Emily leads our tax practice with deep expertise in international tax planning and compliance for multinational corporations.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  },
  {
    id: "4",
    name: "David Thompson",
    title: "Partner, Corporate Performance",
    expertise: "Operational Excellence, Turnaround",
    bio: "David specializes in operational improvement and turnaround situations, helping companies achieve sustainable performance enhancement.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  },
  {
    id: "5",
    name: "Jennifer Kim",
    title: "Managing Director, Risk & Advisory",
    expertise: "Risk Management, Compliance",
    bio: "Jennifer leads our risk advisory practice, helping organizations navigate complex regulatory environments and manage enterprise risk.",
    imageUrl: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  },
  {
    id: "6",
    name: "Robert Martinez",
    title: "Partner, Crypto Advisory",
    expertise: "Digital Assets, Blockchain",
    bio: "Robert leads our crypto advisory practice with extensive experience in digital assets, blockchain technology, and crypto regulatory compliance.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  }
];

export function OurPeoplePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBvZmZpY2V8ZW58MXx8fHwxNzcyNzIyMjAyfDA&ixlib=rb-4.1.0&q=80&w=1080)` }}
      >
        <div className="absolute inset-0 bg-[#0B3C5D] opacity-85"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold mb-4">OUR PEOPLE</h1>
          <p className="text-xl mb-6 max-w-2xl">
            Meet the experts driving excellence at Kivucha.
          </p>
          <p className="text-lg mb-8 max-w-2xl">
            Our team brings deep expertise, diverse perspectives, and unwavering commitment to client success.
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#0B3C5D] mb-4">
            Leadership Team
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our leadership team combines industry expertise with practical experience to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${member.imageUrl})` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B3C5D] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#C9A227] font-semibold mb-2">
                  {member.title}
                </p>
                <p className="text-sm text-gray-600 mb-3 font-medium">
                  {member.expertise}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="flex gap-3">
                  <button  aria-label="mail" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0B3C5D] text-white hover:bg-[#C9A227] transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button aria-label="linkedin" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0B3C5D] text-white hover:bg-[#C9A227] transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-16 bg-[#0B3C5D] text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            We're always looking for talented professionals to join Kivucha. Explore career opportunities and become part of our exceptional team.
          </p>
          <a
            href="/careers"
            className="inline-block bg-[#C9A227] hover:bg-[#b89120] text-white px-8 py-3 rounded transition-colors font-semibold"
          >
            View Career Opportunities
          </a>
        </div>
      </div>
    </div>
  );
}
