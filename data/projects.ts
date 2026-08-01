export type ProjectCategory = "AI/Data" | "Mobile" | "Networking" | "Databases"

export interface Project {
  slug: string
  title: string
  summary: string
  techStack: string[]
  category: ProjectCategory
  githubUrl: string
  demoUrl?: string
  highlights: string[]
  caseStudy: {
    problem: string
    solution: string
    features: string[]
    results: string
    learned: string
  }
}

export const categories: ProjectCategory[] = [
  "AI/Data",
  "Mobile",
  "Networking",
  "Databases",
]

export const projects: Project[] = [
  {
    slug: "union-shop-ecommerce",
    title: "Advanced Supply Chain Demand Forecasting",
    summary:
      "Advanced supply chain forecasting solution using predictive analytics to improve demand planning, inventory management, and operational decision-making.",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter Notebook"],
    category: "Machine Learning",
    githubUrl: "https://github.com/ibnoucheikhalae/union_shop",
    highlights: ["Demand forecasting", "Inventory optimization", "Predictive modelling"],
    caseStudy: {
      problem:
        "Inaccurate demand forecasting can lead to stock shortages, excess inventory, and inefficient supply chain operations. Traditional forecasting methods often struggle to capture changing demand patterns, making planning less reliable.",
      solution:
        "Built a machine learning forecasting solution that analysed historical supply chain data to predict future demand. The model supports more accurate inventory planning, reduces the risk of stock shortages and overstocking, and provides actionable insights for operational decision-making.",
     features: [
        "Demand forecasting using historical supply chain data",
        "Predictive modelling for inventory planning",
        "Trend and seasonality analysis",
        "Forecast performance evaluation and accuracy metrics",
        "Interactive visualisations for operational insights"
      ],
      results:
        "Delivered a forecasting solution capable of generating data-driven demand predictions from historical supply chain data. The project demonstrated practical application of machine learning, predictive analytics, and business decision-making principles.",
      learned:
  "Strengthened my understanding of demand forecasting and predictive modelling while learning how feature selection, model evaluation, and data quality directly influence forecasting performance. The project also reinforced the importance of translating technical results into actionable business insights.",
    },
  },
  {
    slug: "festival-network-infrastructure",
    title: "Festival Network Infrastructure",
    summary:
      "Secure network architecture for a 35K-attendee festival with VLAN segmentation and real-time monitoring.",
    techStack: ["Cisco"],
    category: "Networking",
    githubUrl: "https://github.com",
    highlights: [
      "VLAN segmentation",
      "Network monitoring",
      "35K-attendee scale",
    ],
    caseStudy: {
      problem:
        "A large-scale music festival with 35,000 attendees needed a robust, secure network infrastructure that could handle massive concurrent connections across multiple zones while isolating critical systems like ticketing and emergency services.",
      solution:
        "Designed a comprehensive network architecture using Cisco equipment with VLAN segmentation to isolate traffic between public Wi-Fi, staff operations, POS terminals, and emergency services. Implemented real-time monitoring dashboards for proactive issue detection.",
      features: [
        "VLAN segmentation separating public, staff, POS, and emergency traffic",
        "Redundant uplinks with failover for critical services",
        "Real-time network monitoring and alerting system",
        "Scalable architecture supporting 35,000+ concurrent devices",
        "Security policies including MAC filtering and rate limiting",
      ],
      results:
        "The network design was validated through simulation and met all performance benchmarks for throughput, latency, and failover scenarios at the projected 35K-attendee load.",
      learned:
        "Gained hands-on experience with enterprise-grade network design, VLAN trunking, and the complexities of provisioning infrastructure for large temporary events. Understood the critical importance of redundancy in high-stakes environments.",
    },
  },
  {
    slug: "carcare-hub-database",
    title: "CarCare Hub Database",
    summary:
      "Fully normalised relational database with 15 tables designed for managing a car service business end-to-end.",
    techStack: ["PostgreSQL", "SQL"],
    category: "Databases",
    githubUrl: "https://github.com",
    highlights: [
      "15-table normalised schema",
      "Complex queries",
      "Business logic",
    ],
    caseStudy: {
      problem:
        "A car service business needed a structured data management system to replace manual record-keeping for customers, vehicles, appointments, services, invoicing, and inventory tracking across multiple workshop locations.",
      solution:
        "Designed and implemented a fully normalised relational database in PostgreSQL with 15 interconnected tables. The schema covers the entire business workflow from customer registration through service delivery to invoicing and parts inventory.",
      features: [
        "15-table normalised schema up to 3NF",
        "Complex queries for reporting: revenue, popular services, technician workload",
        "Stored procedures for common business operations",
        "Referential integrity with cascading constraints",
        "Index optimisation for frequently queried fields",
      ],
      results:
        "Produced a production-ready database schema with comprehensive documentation, sample data, and a suite of analytical queries demonstrating real business value from the data model.",
      learned:
        "Strengthened my skills in database normalisation theory, writing performant SQL queries, and thinking about data modelling from a business requirements perspective rather than just technical correctness.",
    },
  },
  {
    slug: "coastal-change-ai-analysis",
    title: "Coastal Change AI Analysis",
    summary:
      "Analysed coastal environmental data using AI models and visualisations to generate sustainability insights.",
    techStack: ["Java", "AI"],
    category: "AI/Data",
    githubUrl: "https://github.com",
    highlights: [
      "Environmental insights",
      "Data visualisation",
      "AI modelling",
    ],
    caseStudy: {
      problem:
        "Coastal regions face accelerating environmental changes due to climate factors, but raw satellite and sensor data is difficult to interpret without analytical tools. Researchers needed a way to identify patterns and forecast changes in coastal geography.",
      solution:
        "Developed a Java-based analysis platform that processes coastal environmental datasets using AI classification and regression models. The system generates visualisations that reveal erosion patterns, vegetation changes, and sea-level impacts over time.",
      features: [
        "Data pipeline ingesting multi-source environmental datasets",
        "AI classification models for land-use change detection",
        "Regression analysis for erosion rate forecasting",
        "Interactive data visualisations and trend charts",
        "Report generation for sustainability planning teams",
      ],
      results:
        "The analysis identified measurable erosion trends and vegetation shifts that aligned with published environmental studies, validating the model's accuracy and practical utility for sustainability planning.",
      learned:
        "Learned to work with messy real-world environmental data, handle missing values and temporal alignment challenges, and translate AI model outputs into actionable insights for non-technical stakeholders.",
    },
  },
]
