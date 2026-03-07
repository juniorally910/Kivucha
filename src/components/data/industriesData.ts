export interface Industry {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  detailedContent: {
    overview: string;
    keyCapabilities: string[];
    benefits: string[];
  };
}

export const industriesData: Industry[] = [
  {
    id: "retail",
    title: "Retail",
    shortDescription: "Kivucha helps retail businesses navigate rapidly changing consumer preferences, digital transformation, and operational challenges. Our experts deliver practical solutions that drive growth and profitability.",
    fullDescription: "Navigate changing consumer preferences and digital transformation with expert retail advisory services.",
    detailedContent: {
      overview: "Our retail practice helps businesses adapt to evolving market dynamics, optimize operations, and capitalize on emerging opportunities. We bring deep expertise in omnichannel strategy, supply chain optimization, and customer experience enhancement.",
      keyCapabilities: [
        "Omnichannel strategy development",
        "Supply chain optimization",
        "Customer experience enhancement",
        "Digital transformation",
        "Store operations improvement",
        "Merchandising strategy"
      ],
      benefits: [
        "Enhanced customer experience",
        "Improved operational efficiency",
        "Increased profitability",
        "Digital commerce growth"
      ]
    }
  },
  {
    id: "industrials",
    title: "Industrials",
    shortDescription: "From manufacturing to distribution, Kivucha provides comprehensive advisory services to industrial companies seeking to improve performance, navigate market challenges, and drive sustainable growth.",
    fullDescription: "Comprehensive advisory for manufacturing and industrial companies seeking performance improvement.",
    detailedContent: {
      overview: "We help industrial companies optimize operations, manage complex transformations, and achieve sustainable competitive advantage. Our team brings hands-on experience in manufacturing, supply chain, and operational excellence.",
      keyCapabilities: [
        "Manufacturing optimization",
        "Supply chain management",
        "Operational excellence",
        "Working capital improvement",
        "Asset optimization",
        "Digital manufacturing"
      ],
      benefits: [
        "Enhanced operational efficiency",
        "Reduced operating costs",
        "Improved asset utilization",
        "Sustainable competitive advantage"
      ]
    }
  },
  {
    id: "consumer-products",
    title: "Consumer Products",
    shortDescription: "Kivucha partners with consumer products companies to navigate market disruption, optimize operations, and accelerate growth through innovation and strategic transformation.",
    fullDescription: "Partner with consumer products companies to navigate disruption and accelerate growth.",
    detailedContent: {
      overview: "Our consumer products team helps companies respond to changing consumer behaviors, manage brand portfolios, and drive operational excellence. We deliver practical solutions that generate measurable results.",
      keyCapabilities: [
        "Brand strategy and portfolio management",
        "Go-to-market strategy",
        "Innovation and product development",
        "Channel optimization",
        "Supply chain excellence",
        "Digital consumer engagement"
      ],
      benefits: [
        "Accelerated revenue growth",
        "Enhanced brand value",
        "Improved market share",
        "Operational excellence"
      ]
    }
  },
  {
    id: "aviation",
    title: "Aviation",
    shortDescription: "With deep expertise in aviation, Kivucha helps airlines, airports, and aerospace companies navigate industry challenges, optimize operations, and capitalize on growth opportunities.",
    fullDescription: "Deep aviation expertise helping airlines, airports, and aerospace companies optimize operations.",
    detailedContent: {
      overview: "Our aviation practice brings specialized knowledge of industry dynamics, regulatory requirements, and operational complexities. We help clients improve efficiency, manage crises, and position for long-term success.",
      keyCapabilities: [
        "Airline operations optimization",
        "Revenue management",
        "Fleet planning and optimization",
        "Airport operations improvement",
        "MRO efficiency",
        "Crisis management and restructuring"
      ],
      benefits: [
        "Operational efficiency improvement",
        "Enhanced revenue performance",
        "Cost reduction",
        "Strategic positioning"
      ]
    }
  },
  {
    id: "financial-services",
    title: "Financial Services",
    shortDescription: "Kivucha serves banks, insurance companies, and financial institutions with services spanning strategy, operations, risk management, regulatory compliance, and digital transformation.",
    fullDescription: "Comprehensive advisory for banks, insurance, and financial institutions.",
    detailedContent: {
      overview: "We help financial services firms navigate regulatory complexity, manage risk, optimize operations, and capitalize on digital opportunities. Our team combines industry expertise with practical implementation capabilities.",
      keyCapabilities: [
        "Regulatory compliance",
        "Risk management",
        "Digital banking transformation",
        "Operational efficiency",
        "Cost optimization",
        "Customer experience enhancement"
      ],
      benefits: [
        "Regulatory compliance assurance",
        "Enhanced risk management",
        "Improved operational efficiency",
        "Digital innovation"
      ]
    }
  },
  {
    id: "life-insurance",
    title: "Life Insurance",
    shortDescription: "Our life insurance practice helps carriers optimize operations, manage risk, ensure regulatory compliance, and adapt to changing market dynamics and customer expectations.",
    fullDescription: "Helping life insurance carriers optimize operations and manage complex transformations.",
    detailedContent: {
      overview: "Kivucha's life insurance experts bring deep knowledge of industry challenges including regulatory changes, digital disruption, and evolving customer expectations. We deliver practical solutions that drive sustainable improvements.",
      keyCapabilities: [
        "Product development and pricing",
        "Distribution optimization",
        "Claims management",
        "Underwriting excellence",
        "Regulatory compliance",
        "Digital transformation"
      ],
      benefits: [
        "Enhanced profitability",
        "Improved customer experience",
        "Operational efficiency",
        "Regulatory compliance"
      ]
    }
  },
  {
    id: "real-estate",
    title: "Real Estate",
    shortDescription: "Kivucha provides comprehensive advisory services to real estate investors, developers, and operators, helping them navigate market cycles, optimize assets, and maximize returns.",
    fullDescription: "Comprehensive advisory for real estate investors, developers, and operators.",
    detailedContent: {
      overview: "Our real estate practice serves the full spectrum of industry participants, from institutional investors to developers and property operators. We deliver strategic insights and operational improvements that enhance value.",
      keyCapabilities: [
        "Investment strategy and due diligence",
        "Asset management",
        "Development advisory",
        "Property operations optimization",
        "Portfolio strategy",
        "Distressed asset management"
      ],
      benefits: [
        "Maximized investment returns",
        "Enhanced asset value",
        "Risk mitigation",
        "Operational excellence"
      ]
    }
  },
  {
    id: "transportation-logistics",
    title: "Transportation & Logistics",
    shortDescription: "Kivucha helps transportation and logistics companies improve operational efficiency, navigate market disruption, and capitalize on emerging opportunities in an evolving industry.",
    fullDescription: "Helping transportation and logistics companies optimize operations and navigate disruption.",
    detailedContent: {
      overview: "We serve transportation and logistics providers across all modes, helping them optimize networks, improve service levels, and adapt to technological change. Our team brings deep operational expertise and industry knowledge.",
      keyCapabilities: [
        "Network optimization",
        "Operations improvement",
        "Technology implementation",
        "Supply chain integration",
        "Cost reduction",
        "Performance management"
      ],
      benefits: [
        "Improved operational efficiency",
        "Enhanced service levels",
        "Cost optimization",
        "Technology enablement"
      ]
    }
  }
];
