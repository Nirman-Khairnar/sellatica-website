export const siteMeta = {
  brand: "Sellatica",
  url: "https://www.sellatica.in",
  email: "hello@sellatica.in",
  location: "Gujarat, India",
  tagline: "Turn operational chaos into predictable execution",
  description:
    "Sellatica builds custom AI systems for mid-market businesses by integrating fragmented tools into one reliable operating workflow.",
};

export const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/results" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export const trustPillars = [
  "Discovery call is the first engagement step",
  "Integrates with your existing workflows",
  "Response within 24 hours for inbound requests",
];

export const servicePillars = [
  {
    id: "assessment",
    phase: "01",
    title: "Operational Assessment and Architecture",
    summary:
      "Map your current systems, data handoffs, and failure points, then define the integration architecture.",
    deliverables: [
      "Current-state workflow map",
      "System dependency map",
      "Priority queue of high-impact automation opportunities",
      "Implementation blueprint and sequencing plan",
    ],
  },
  {
    id: "build",
    phase: "02",
    title: "System Build and Workflow Integration",
    summary:
      "Design and implement custom automation layers that connect CRM, spreadsheets, inboxes, and reporting environments.",
    deliverables: [
      "Custom integration workflows",
      "Data normalization and routing logic",
      "Human-in-the-loop checkpoints",
      "Operational dashboards for visibility",
    ],
  },
  {
    id: "adoption",
    phase: "03",
    title: "Deployment and Team Enablement",
    summary:
      "Roll out in phases with process training so adoption is stable and measurable from week one.",
    deliverables: [
      "Role-based deployment plan",
      "Runbooks and SOPs for operators",
      "Change-management support",
      "Monitoring and alerting baseline",
    ],
  },
  {
    id: "optimization",
    phase: "04",
    title: "Continuous Optimization and Scale",
    summary:
      "Improve reliability and throughput with recurring reviews, incident analysis, and workflow tuning.",
    deliverables: [
      "Performance review cadence",
      "Workflow refinement backlog",
      "New use-case expansion plan",
      "Governance for quality and compliance",
    ],
  },
];

export const solutionPatterns = [
  {
    industry: "Legal and Advisory Firms",
    challenge:
      "Matter updates, billing data, and team handoffs are spread across disconnected systems.",
    outcome:
      "Unified operations view for partners and operations leads with consistent handoff workflows.",
    focus: ["Matter lifecycle visibility", "Revenue leak detection", "Faster internal handoffs"],
  },
  {
    industry: "Real Estate and Deal Teams",
    challenge:
      "Lead qualification, follow-up timing, and broker collaboration rely on manual coordination.",
    outcome:
      "Structured lead routing and response workflows with clear ownership at each stage.",
    focus: ["Lead triage automation", "Response workflow discipline", "Deal-stage tracking"],
  },
  {
    industry: "Logistics and Operations",
    challenge:
      "Quote requests, documentation, and dispatch updates create repeated operational friction.",
    outcome:
      "Orchestrated workflows that reduce documentation churn and improve dispatch readiness.",
    focus: ["Quote workflow automation", "Document control checkpoints", "Exception alerting"],
  },
  {
    industry: "Service and Marketing Teams",
    challenge:
      "Content, delivery, and reporting execution bottleneck around manual cross-team dependencies.",
    outcome:
      "Integrated production systems with predictable status tracking and approval flow.",
    focus: ["Production queue visibility", "Approval workflow automation", "Unified reporting"],
  },
];

export const processPhases = [
  {
    name: "Discovery",
    timeline: "Week 1 to Week 2",
    description:
      "We define scope around operational bottlenecks, data quality, and business-critical workflows.",
  },
  {
    name: "Build",
    timeline: "Week 3 onward",
    description:
      "We implement integrations in priority order and release usable modules in phases.",
  },
  {
    name: "Launch",
    timeline: "After validation",
    description:
      "We train teams, harden failure paths, and move to production with monitoring in place.",
  },
  {
    name: "Optimize",
    timeline: "Ongoing cadence",
    description:
      "We review signals, tune workflow logic, and improve reliability against your operating goals.",
  },
];

export const aeoFAQs = [
  {
    question: "What does Sellatica actually build?",
    answer:
      "Sellatica builds custom AI-enabled operating systems that connect fragmented business tools into one coordinated workflow for mid-market teams.",
  },
  {
    question: "Who is Sellatica a good fit for?",
    answer:
      "Sellatica is best for operations-heavy mid-market businesses with established workflows that are slowed down by disconnected systems and manual reporting.",
  },
  {
    question: "Do we need to replace our existing software stack?",
    answer:
      "No. Sellatica typically integrates with existing systems first and only recommends replacement when a tool blocks reliability or scale.",
  },
  {
    question: "How does engagement start?",
    answer:
      "Every engagement starts with a discovery call. We review your workflows, constraints, and target outcomes before proposing a build sequence.",
  },
  {
    question: "How quickly do you respond to inbound requests?",
    answer:
      "Sellatica responds within 24 hours to inbound business inquiries submitted through the contact form or email.",
  },
];
