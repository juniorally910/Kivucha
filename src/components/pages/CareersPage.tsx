import { MapPin, Clock, Briefcase, ChevronRight } from "lucide-react";
import hero from '../../assets/about.webp'
interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

const jobOpenings: JobOpening[] = [
  {
    id: "1",
    title: "Senior M&A Analyst",
    department: "Corporate Transactions",
    location: "New York, NY",
    type: "Full-time",
    description: "Support M&A transactions including due diligence, financial modeling, and client presentations. Requires 3+ years of investment banking or M&A advisory experience."
  },
  {
    id: "2",
    title: "Tax Manager",
    department: "Tax Services",
    location: "Chicago, IL",
    type: "Full-time",
    description: "Lead tax planning and compliance engagements for corporate clients. CPA required with 5+ years of public accounting or corporate tax experience."
  },
  {
    id: "3",
    title: "Performance Improvement Consultant",
    department: "Corporate Performance",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Drive operational improvements for client organizations. Requires strong analytical skills and experience in process optimization or management consulting."
  },
  {
    id: "4",
    title: "Crypto Advisory Specialist",
    department: "Crypto Advisory",
    location: "Remote",
    type: "Full-time",
    description: "Provide advisory services to crypto and blockchain clients. Deep understanding of digital assets, DeFi, and crypto regulatory landscape required."
  },
  {
    id: "5",
    title: "Valuation Associate",
    department: "Global Valuation Services",
    location: "Boston, MA",
    type: "Full-time",
    description: "Perform business valuations for transaction, tax, and financial reporting purposes. CFA or ASA designation preferred."
  },
  {
    id: "6",
    title: "Risk Advisory Manager",
    department: "Risk & Advisory",
    location: "Washington, DC",
    type: "Full-time",
    description: "Lead risk assessment and compliance projects for financial services clients. Experience in regulatory compliance and enterprise risk management required."
  }
];

export function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-[#0B3C5D] opacity-85"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold mb-4">CAREERS AT KIVUCHA</h1>
          <p className="text-xl mb-6 max-w-2xl">
            Build your career with industry-leading professionals.
          </p>
          <p className="text-lg mb-8 max-w-2xl">
            Join a team that values excellence, innovation, and professional growth.
          </p>
        </div>
      </div>

      {/* Why Kivucha Section */}
      <div className="bg-[#F5F7FA] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B3C5D] mb-8 text-center">
            Why Choose Kivucha
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#C9A227] rounded-full flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0B3C5D] mb-3">
                Challenging Work
              </h3>
              <p className="text-gray-700">
                Work on complex, high-impact projects for leading organizations across diverse industries.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#C9A227] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B3C5D] mb-3">
                Career Growth
              </h3>
              <p className="text-gray-700">
                Accelerate your career with mentorship, training, and opportunities for advancement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#C9A227] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B3C5D] mb-3">
                Collaborative Culture
              </h3>
              <p className="text-gray-700">
                Join a supportive team of exceptional professionals who value collaboration and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Job Openings */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-[#0B3C5D] mb-8">
          Current Opportunities
        </h2>
        <div className="space-y-4">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0B3C5D] mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    {job.description}
                  </p>
                </div>
                <button className="bg-[#C9A227] hover:bg-[#b89120] text-white px-6 py-3 rounded transition-colors font-semibold whitespace-nowrap flex items-center gap-2">
                  Apply Now
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Process */}
      <div className="bg-[#0B3C5D] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Hiring Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A227] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Apply</h3>
              <p className="text-gray-200 text-sm">
                Submit your application and resume for the position that interests you.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A227] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Screen</h3>
              <p className="text-gray-200 text-sm">
                Our team reviews your application and conducts an initial phone screen.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A227] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Interview</h3>
              <p className="text-gray-200 text-sm">
                Meet with team members and leadership to discuss your experience and fit.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A227] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Offer</h3>
              <p className="text-gray-200 text-sm">
                Receive an offer and join the Kivucha team!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
