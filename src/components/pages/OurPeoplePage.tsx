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
    name: "Amani Uwimana",
    title: "Managing Director, Corporate Finance",
    expertise: "M&A, Corporate Restructuring",
    bio: "Amani brings over 20 years of experience in corporate finance and M&A advisory, having led numerous high-profile transactions across East Africa and beyond.",
    imageUrl: "https://images.unsplash.com/photo-1668752600261-e56e7f3780b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc2lvbmFsJTIwbWFuJTIwaGVhZHNob3R8ZW58MXx8fHwxNzcyOTU5MjAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "2",
    name: "Kwame Nkunda",
    title: "Partner, Private Equity Services",
    expertise: "Private Equity, Valuations",
    bio: "Kwame specializes in private equity transactions and valuations, with extensive experience supporting PE firms throughout the investment lifecycle across African markets.",
    imageUrl: "https://images.unsplash.com/photo-1645736593932-2c877741fd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWFuJTIwYnVzaW5lc3MlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzI5NTkyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "3",
    name: "Nia Kalisa",
    title: "Managing Director, Tax Services",
    expertise: "International Tax, Tax Strategy",
    bio: "Nia leads our tax practice with deep expertise in international tax planning and compliance for multinational corporations operating in Africa.",
    imageUrl: "https://images.unsplash.com/photo-1668752741330-8adc5cef7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzI5NTkyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "4",
    name: "Jabari Mugisha",
    title: "Partner, Corporate Performance",
    expertise: "Operational Excellence, Turnaround",
    bio: "Jabari specializes in operational improvement and turnaround situations, helping African companies achieve sustainable performance enhancement and growth.",
    imageUrl: "https://images.unsplash.com/flagged/photo-1555497742-77cf45746c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3NtYW4lMjBmYWNlJTIwY2xvc2V1cHxlbnwxfHx8fDE3NzI5NTkyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "5",
    name: "Zuri Mutesi",
    title: "Managing Director, Risk & Advisory",
    expertise: "Risk Management, Compliance",
    bio: "Zuri leads our risk advisory practice, helping organizations navigate complex regulatory environments and manage enterprise risk across the African continent.",
    imageUrl: "https://images.unsplash.com/photo-1559154352-06e29e1e11aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZXhlY3V0aXZlJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzI5NTkyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "6",
    name: "Kevine Nande",
    title: "Partner, Crypto Advisory",
    expertise: "Digital Assets, Blockchain",
    bio: "Kofi leads our crypto advisory practice with extensive experience in digital assets, blockchain technology, and crypto regulatory compliance in emerging markets.",
    imageUrl: "https://images.unsplash.com/photo-1746104718762-fb421954cc1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3N3b21hbiUyMGZhY2UlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzI5NTkyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
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