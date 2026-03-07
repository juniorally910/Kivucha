export interface Expertise {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  detailedContent: {
    overview: string;
    keyServices: string[];
    benefits: string[];
  };
}

export const expertiseData: Expertise[] = [
  {
    id: "corporate-transactions",
    title: "Corporate Transactions",
    shortDescription: "Kivucha provides comprehensive deal and M&A solutions that offer rapid insights and optimize value. Our functional, operational, and industry experts achieve differentiated outcomes throughout the transaction lifecycle.",
    fullDescription: "Providing rapid deal insights and value optimization through M&A and transaction advisory services.",
    detailedContent: {
      overview: "Our Corporate Transactions team provides comprehensive M&A and deal advisory services. We deliver rapid insights and optimize value throughout the transaction lifecycle, helping clients navigate complex deals with confidence.",
      keyServices: [
        "M&A advisory and execution",
        "Due diligence services",
        "Post-merger integration",
        "Carve-out and separation",
        "Transaction structuring",
        "Deal valuation and modeling"
      ],
      benefits: [
        "Rapid deal insights and analysis",
        "Value optimization strategies",
        "Differentiated outcomes",
        "End-to-end transaction support"
      ]
    }
  },
  {
    id: "corporate-performance",
    title: "Corporate Performance",
    shortDescription: "Clients trust Kivucha to drive significant results with practical approaches that generate sustainable impact. We don't just provide advice; we roll up our sleeves and deliver on our commitments.",
    fullDescription: "Drive significant results with practical approaches that generate sustainable business impact through hands-on performance improvement.",
    detailedContent: {
      overview: "Kivucha helps organizations harness operational excellence to improve efficiency, reduce costs, accelerate growth, and engage stakeholders. Our teams are experts in performance improvement, transformation, and delivery.",
      keyServices: [
        "Operational efficiency improvement",
        "Cost reduction initiatives",
        "Business transformation",
        "Process optimization",
        "Performance metrics and KPIs",
        "Change management"
      ],
      benefits: [
        "Hands-on implementation approach",
        "Sustainable impact delivery",
        "Proven methodologies",
        "Measurable results and ROI"
      ]
    }
  },
  {
    id: "corporate-finance",
    title: "Corporate Finance",
    shortDescription: "Our Corporate Finance team has extensive experience achieving impactful results for our clients including lenders, entrepreneurs, financial investors of all sizes, and market-leading corporations operating businesses across all industries.",
    fullDescription: "Extensive experience delivering impactful financial results for lenders, investors, and corporations across all industries.",
    detailedContent: {
      overview: "Kivucha's Corporate Finance team has extensive experience achieving impactful results for our clients including lenders, entrepreneurs, financial investors of all sizes, and market-leading corporations operating businesses across diverse industries.",
      keyServices: [
        "Financial restructuring",
        "Capital raising and advisory",
        "M&A transaction support",
        "Financial due diligence",
        "Business valuations",
        "Financial modeling and analysis"
      ],
      benefits: [
        "Extensive transaction experience",
        "Cross-industry expertise",
        "Strategic financial guidance",
        "Value creation focus"
      ]
    }
  },
  {
    id: "private-equity-services",
    title: "Private Equity Services",
    shortDescription: "Maximize every transaction's value. Avoid post-transaction surprises. Kivucha partners with private equity firms to deliver comprehensive advisory services throughout the investment lifecycle.",
    fullDescription: "Maximize transaction value and avoid post-transaction surprises with comprehensive PE advisory services.",
    detailedContent: {
      overview: "We partner with private equity firms throughout the investment lifecycle, from deal sourcing to exit, maximizing value at every stage. Our team brings deep operational and financial expertise to every engagement.",
      keyServices: [
        "Buy-side due diligence",
        "Operational due diligence",
        "Portfolio company support",
        "Value creation planning",
        "Exit preparation",
        "Investment thesis validation"
      ],
      benefits: [
        "Transaction value maximization",
        "Risk identification and mitigation",
        "Portfolio performance improvement",
        "Successful exit execution"
      ]
    }
  },
  {
    id: "taxes",
    title: "Taxes",
    shortDescription: "We don't just talk strategy and solutions, we implement them. Maximizing your tax benefits while mitigating risk to keep you compliant and well positioned in an ever-changing regulatory environment.",
    fullDescription: "Implement tax strategies that maximize benefits while mitigating risk in an ever-changing regulatory environment.",
    detailedContent: {
      overview: "Our tax professionals provide strategic tax planning and implementation services that maximize benefits while ensuring compliance and mitigating risk. We stay ahead of regulatory changes to keep you well-positioned.",
      keyServices: [
        "Tax strategy and planning",
        "Tax compliance services",
        "International tax advisory",
        "Transfer pricing",
        "Tax controversy and disputes",
        "Tax due diligence"
      ],
      benefits: [
        "Tax benefit maximization",
        "Risk mitigation strategies",
        "Regulatory compliance assurance",
        "Strategic tax positioning"
      ]
    }
  },
  {
    id: "global-valuation-services",
    title: "Global Valuation Services",
    shortDescription: "Our valuation professionals provide independent, objective valuations for financial reporting, tax, transaction, and litigation purposes. Kivucha delivers defensible valuations backed by deep industry knowledge.",
    fullDescription: "Independent, objective valuations for financial reporting, tax, transaction, and litigation purposes.",
    detailedContent: {
      overview: "We provide comprehensive valuation services backed by deep industry knowledge and technical expertise, delivering defensible valuations for critical business decisions across all sectors and geographies.",
      keyServices: [
        "Business valuations",
        "Intangible asset valuation",
        "Financial reporting valuations",
        "Purchase price allocations",
        "Litigation support valuations",
        "Fairness opinions"
      ],
      benefits: [
        "Independent, objective analysis",
        "Technical expertise and rigor",
        "Defensible valuations",
        "Multi-purpose applicability"
      ]
    }
  },
  {
    id: "risk-advisory",
    title: "Risk and Advisory",
    shortDescription: "Risk permeates every industry and every aspect of business. We help organizations successfully execute business strategy and maximize growth while minimizing risk and navigating regulatory issues.",
    fullDescription: "Execute business strategy and maximize growth while minimizing risk and navigating regulatory requirements.",
    detailedContent: {
      overview: "Kivucha's risk and advisory team helps organizations identify, assess, and mitigate risks while ensuring regulatory compliance across all business operations. We provide practical solutions for complex risk challenges.",
      keyServices: [
        "Regulatory compliance",
        "Risk assessment and management",
        "Internal controls design",
        "Compliance program development",
        "Regulatory strategy",
        "Enterprise risk management"
      ],
      benefits: [
        "Comprehensive risk management",
        "Regulatory compliance expertise",
        "Business continuity assurance",
        "Strategic risk navigation"
      ]
    }
  },
  {
    id: "crypto-advisory",
    title: "Crypto Advisory",
    shortDescription: "Kivucha Crypto is a leading crypto advisory unit. We provide tailored services led by experts in the industry with real world experience, combining operational, management, financial and regulatory expertise.",
    fullDescription: "Leading crypto advisory services providing comprehensive solutions for blockchain and cryptocurrency businesses.",
    detailedContent: {
      overview: "Kivucha Crypto provides tailored services led by experts in the industry with real world experience. We combine operational, management, financial, and regulatory expertise to help clients navigate the complex crypto landscape.",
      keyServices: [
        "Crypto asset management and advisory",
        "Blockchain technology implementation",
        "Regulatory compliance and guidance",
        "Digital asset valuation",
        "Crypto forensics and investigations",
        "Token economics design"
      ],
      benefits: [
        "Expert guidance from industry veterans",
        "Comprehensive understanding of crypto markets",
        "Proven track record in digital asset advisory",
        "Regulatory navigation expertise"
      ]
    }
  }
];

export const expertiseCategories = {
  column1: [
    "legal",
    "corporate-transactions",
    "environmental-technical-sustainability",
    "performance-improvement",
    "aam-infra",
    "corporate-finance"
  ],
  column2: [
    "private-equity-services",
    "global-restructuring-turnaround",
    "tax",
    "disputes-investigations",
    "global-valuation-services",
    "regulatory-risk-advisory",
    "aam-crypto-advisory"
  ]
};