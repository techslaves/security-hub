// NIS 2 Directive (EU 2022/2555) & CyberFundamentals (CyFun® 2025) Framework Data Store
// Sourced directly from Centre for Cybersecurity Belgium (CCB) CyFun® 2025 Conformity Assessment Scheme Excel Workbooks

const NIS2_DATA = {
  metadata: {
    title: "EU NIS 2 Directive & CyberFundamentals (CyFun® 2025)",
    directive: "Directive (EU) 2022/2555 of the European Parliament and of the Council",
    framework: "CyberFundamentals Framework version 2025 (CyFun® 2025)",
    authority: "Centre for Cybersecurity Belgium (CCB) / ENISA / European Commission",
    releaseDate: "2025-10-01 (Updated 2026-02-25)",
    penalties: {
      essential: "Fines up to €10,000,000 or 2% of total worldwide annual turnover, whichever is higher, plus management liability.",
      important: "Fines up to €7,000,000 or 1.4% of total worldwide annual turnover, whichever is higher."
    },
    reportingDeadlines: {
      earlyWarning: "Within 24 hours of becoming aware of a significant incident.",
      incidentNotification: "Within 72 hours with initial assessment, severity, and indicators of compromise.",
      finalReport: "Within 1 month with detailed description, root cause, and applied mitigations."
    }
  },
  assuranceLevels: [
    {
      id: "basic",
      name: "Basic Assurance",
      targetScore: 2.5,
      targetScoreText: "≥ 2.5 / 5.0",
      description: "Designed for small entities or lower-risk environments. Enforces core cyber hygiene, basic access controls, backups, and operating system patching.",
      exclusionsAllowed: "1 non-key measure may be excluded (N/A = 2.5 points in calculation)."
    },
    {
      id: "important",
      name: "Important Assurance",
      targetScore: 3.0,
      targetScoreText: "≥ 3.0 / 5.0",
      description: "Mandatory baseline for NIS 2 'Important Entities' (Annex II). Requires formally approved policies, comprehensive supply chain risk reviews, and vulnerability management.",
      exclusionsAllowed: "Up to 3 non-key measures may be excluded (N/A = 3.0 points in calculation)."
    },
    {
      id: "essential",
      name: "Essential Assurance",
      targetScore: 3.5,
      targetScoreText: "≥ 3.5 / 5.0 (Each Category ≥ 3.0)",
      description: "Mandatory standard for NIS 2 'Essential Entities' (Annex I - Energy, Health, Digital Infra, Cloud, B2B MSPs). Implements continuous monitoring, boundary segregation, independent audits, and redundancy.",
      exclusionsAllowed: "Up to 5 non-key measures may be excluded (N/A = 3.0 points in calculation)."
    }
  ],
  maturityLevels: [
    { level: 1, name: "Initial", desc: "No process documentation or not formally approved by management. Standard process does not exist." },
    { level: 2, name: "Repeatable", desc: "Formally approved process documentation exists but not reviewed in the previous 2 years. Ad-hoc process exists and is done informally." },
    { level: 3, name: "Defined", desc: "Formally approved process documentation exists, exceptions documented & approved (<5% of time). Formal process implemented (<10% exceptions)." },
    { level: 4, name: "Managed", desc: "Process documented, detailed metrics captured and reported against minimal target (<5% exceptions)." },
    { level: 5, name: "Optimizing", desc: "Process documented, metrics continuously improved, automated monitoring (<1% exceptions)." }
  ],
  sectors: [
    // Annex I - Sectors of High Criticality (Essential Entities)
    { id: "energy", name: "Energy (Electricity, Oil, Gas, District Heating, Hydrogen)", annex: "Annex I", defaultLevel: "essential", baseScore: 285, description: "Electricity suppliers, grid operators, oil/gas transmission, hydrogen production & storage." },
    { id: "transport", name: "Transport (Air, Rail, Water, Road / ITS)", annex: "Annex I", defaultLevel: "essential", baseScore: 255, description: "Commercial air carriers, airport operators, rail infrastructure, ports, road traffic management." },
    { id: "banking", name: "Banking & Financial Market Infrastructure", annex: "Annex I", defaultLevel: "essential", baseScore: 255, description: "Credit institutions, trading venues, central counterparties (DORA lex specialis)." },
    { id: "health", name: "Health (Healthcare Providers, Pharma R&D, Medical Devices)", annex: "Annex I", defaultLevel: "essential", baseScore: 217.5, description: "Hospitals, care facilities, reference labs, critical pharma and medical equipment manufacturing." },
    { id: "water", name: "Drinking Water & Waste Water", annex: "Annex I", defaultLevel: "essential", baseScore: 202.5, description: "Suppliers and distributors of water for human consumption, urban/industrial wastewater collectors." },
    { id: "digital_infra", name: "Digital Infrastructure (Cloud, Data Centres, DNS, TLD, CDN)", annex: "Annex I", defaultLevel: "essential", baseScore: 285, description: "Cloud computing service providers, data centers, DNS providers, TLD registries, IXPs, CDNs." },
    { id: "b2b_ict", name: "B2B ICT Service Management (MSPs & MSSPs)", annex: "Annex I", defaultLevel: "essential", baseScore: 285, description: "Managed service providers, managed security service providers, IT administration outsourcing." },
    { id: "public_admin", name: "Public Administration (Central and Regional Governments)", annex: "Annex I", defaultLevel: "essential", baseScore: 375, description: "Central and regional government administrative entities providing essential public services." },
    { id: "space", name: "Space (Ground-Based Infrastructure)", annex: "Annex I", defaultLevel: "essential", baseScore: 262.5, description: "Operators of ground-based infrastructure supporting space-based communications and observation." },

    // Annex II - Other Critical Sectors (Important Entities)
    { id: "postal", name: "Postal & Courier Services", annex: "Annex II", defaultLevel: "important", baseScore: 165, description: "Postal service providers and commercial express courier delivery operations." },
    { id: "waste_mgmt", name: "Waste Management Services", annex: "Annex II", defaultLevel: "basic", baseScore: 45, description: "Undertakings carrying out waste management as their principal economic activity." },
    { id: "chemicals", name: "Manufacture & Distribution of Chemicals", annex: "Annex II", defaultLevel: "important", baseScore: 180, description: "Industrial manufacture, production, and distribution of hazardous and standard chemical substances." },
    { id: "food", name: "Food Production, Processing & Distribution", annex: "Annex II", defaultLevel: "important", baseScore: 127.5, description: "Large-scale food processing companies and primary supply chain food distributors." },
    { id: "manufacturing", name: "Manufacturing (Electronics, Medical Tech, Vehicles, Machinery)", annex: "Annex II", defaultLevel: "important", baseScore: 172.5, description: "NACE C 26-30: Computer/optical products, electrical equipment, automotive, and machinery." },
    { id: "digital_providers", name: "Digital Providers (Online Marketplaces, Search Engines, Social)", annex: "Annex II", defaultLevel: "important", baseScore: 165, description: "E-commerce marketplaces, internet search engines, social media platforms." },
    { id: "research", name: "Research Organisations & Laboratories", annex: "Annex II", defaultLevel: "important", baseScore: 187.5, description: "Scientific research bodies and public/private non-educational laboratories." }
  ],
  functions: [
    {
      code: "GV",
      name: "GOVERN",
      color: "purple",
      desc: "Organisational context, risk management strategy, roles & responsibilities, policy oversight, and cybersecurity supply chain management.",
      controls: [
        {
          id: "GV.OC-01.1",
          subcategory: "GV.OC-01",
          category: "Organisational Context (GV.OC)",
          level: "important",
          isKey: false,
          req: "The organisation's mission shall be established, communicated and shall form the basis for information and cybersecurity risk management."
        },
        {
          id: "GV.OC-02.1",
          subcategory: "GV.OC-02",
          category: "Organisational Context (GV.OC)",
          level: "essential",
          isKey: false,
          req: "The organisation shall demonstrate it understands and considers the needs and expectations of both internal and external stakeholders regarding information and cybersecurity risk management."
        },
        {
          id: "GV.OC-03.1",
          subcategory: "GV.OC-03",
          category: "Organisational Context (GV.OC)",
          level: "basic",
          isKey: false,
          req: "Legal and regulatory requirements regarding information and cybersecurity shall be identified and implemented."
        },
        {
          id: "GV.OC-03.2",
          subcategory: "GV.OC-03",
          category: "Organisational Context (GV.OC)",
          level: "important",
          isKey: false,
          req: "Legal, regulatory, and contractual obligations related to information and cybersecurity shall be continuously managed to ensure they remain accurate, up to date, and effectively applied."
        },
        {
          id: "GV.OC-04.1",
          subcategory: "GV.OC-04",
          category: "Organisational Context (GV.OC)",
          level: "important",
          isKey: false,
          req: "The organisation shall identify, document, and communicate the critical objectives, capabilities, and services relied upon by external stakeholders, prioritise them based on criticality, and integrate this prioritisation into the risk assessment process."
        },
        {
          id: "GV.OC-04.2",
          subcategory: "GV.OC-04",
          category: "Organisational Context (GV.OC)",
          level: "important",
          isKey: false,
          req: "The organisation shall define and document cybersecurity requirements for essential operations, validate them through testing and audits, keep records of results and corrective actions, and regularly update requirements based on evolving risks."
        },
        {
          id: "GV.OC-04.3",
          subcategory: "GV.OC-04",
          category: "Organisational Context (GV.OC)",
          level: "essential",
          isKey: false,
          req: "Redundancy shall be implemented to meet availability requirements as defined by the organisation, legislation and/or regulations."
        },
        {
          id: "GV.OC-04.4",
          subcategory: "GV.OC-04",
          category: "Organisational Context (GV.OC)",
          level: "essential",
          isKey: false,
          req: "Recovery time and recovery point objectives for the resumption of essential ICT/OT system processes shall be defined and monitored."
        },
        {
          id: "GV.OC-05.1",
          subcategory: "GV.OC-05",
          category: "Organisational Context (GV.OC)",
          level: "important",
          isKey: false,
          req: "The organization shall identify, document, and communicate its role in the supply chain, including the external capabilities, services, and dependencies it relies on (upstream), as well as its interactions with downstream stakeholders."
        },
        {
          id: "GV.RM-01.1",
          subcategory: "GV.RM-01",
          category: "Risk Management Strategy (GV.RM)",
          level: "important",
          isKey: false,
          isManagement: true,
          req: "Information and cybersecurity objectives shall be coherently established throughout the organisation and approved by senior management."
        },
        {
          id: "GV.RM-02.1",
          subcategory: "GV.RM-02",
          category: "Risk Management Strategy (GV.RM)",
          level: "important",
          isKey: false,
          isManagement: true,
          req: "Risk appetite and risk tolerance statements shall be defined, documented, approved by senior management, communicated, and maintained."
        },
        {
          id: "GV.RM-03.1",
          subcategory: "GV.RM-03",
          category: "Risk Management Strategy (GV.RM)",
          level: "basic",
          isKey: false,
          req: "As part of the organisation-wide risk management strategy, a comprehensive strategy to manage information and cybersecurity risks shall be developed and updated when changes occur."
        },
        {
          id: "GV.RM-03.2",
          subcategory: "GV.RM-03",
          category: "Risk Management Strategy (GV.RM)",
          level: "important",
          isKey: false,
          isManagement: true,
          req: "Information and cybersecurity risks shall be documented, as part of the enterprise risk management processes, formally approved by senior management, and updated when changes occur."
        },
        {
          id: "GV.RM-04.1",
          subcategory: "GV.RM-04",
          category: "Risk Management Strategy (GV.RM)",
          level: "important",
          isKey: false,
          req: "A high-level plan or vision shall be formally established and clearly communicated to everyone involved on how to manage risks, including the different strategies the organisation can employ to deal with identified risks based on risk appetite or risk tolerance level."
        },
        {
          id: "GV.RM-05.1",
          subcategory: "GV.RM-05",
          category: "Risk Management Strategy (GV.RM)",
          level: "important",
          isKey: false,
          req: "To support the high-level risk management vision, the organisation shall establish clear lines of communication for cybersecurity risks, including those arising from suppliers and third parties."
        },
        {
          id: "GV.RR-01.1",
          subcategory: "GV.RR-01",
          category: "Roles, Responsibilities and Authorities (GV.RR)",
          level: "essential",
          isKey: false,
          req: "The organisation's top management shall be responsible and accountable for cybersecurity risk and shall foster a culture that is risk-aware, ethical, and continually improving."
        },
        {
          id: "GV.RR-02.1",
          subcategory: "GV.RR-02",
          category: "Roles, Responsibilities and Authorities (GV.RR)",
          level: "important",
          isKey: true,
          isManagement: true,
          req: "Information security and Cyber security roles, responsibilities and authorities for employees, suppliers, customers, and partners shall be documented, reviewed, authorised, kept up-to-date, communicated, and coordinated internally and externally."
        },
        {
          id: "GV.RR-02.2",
          subcategory: "GV.RR-02",
          category: "Roles, Responsibilities and Authorities (GV.RR)",
          level: "essential",
          isKey: false,
          isManagement: true,
          req: "The organisation shall appoint a senior-level executive information security officer."
        },
        {
          id: "GV.RR-03.1",
          subcategory: "GV.RR-03",
          category: "Roles, Responsibilities and Authorities (GV.RR)",
          level: "important",
          isKey: false,
          req: "Sufficient resources shall be allocated in line with the cybersecurity risk strategy, roles, responsibilities and policies."
        },
        {
          id: "GV.RR-03.2",
          subcategory: "GV.RR-03",
          category: "Roles, Responsibilities and Authorities (GV.RR)",
          level: "important",
          isKey: false,
          req: "The organisation shall assign roles and responsibilities for reviewing and updating response and recovery plans, ensuring they reflect changes in the risk environment and remain effective."
        },
        {
          id: "GV.RR-04.1",
          subcategory: "GV.RR-04",
          category: "Roles, Responsibilities and Authorities (GV.RR)",
          level: "basic",
          isKey: false,
          req: "Personnel with access to the organisation’s most critical information or technology shall be authenticated."
        },
        {
          id: "GV.RR-04.2",
          subcategory: "GV.RR-04",
          category: "Roles, Responsibilities and Authorities (GV.RR)",
          level: "important",
          isKey: false,
          req: "A cybersecurity process for human resources shall be developed and maintained applicable at recruitment, during employment and at termination of employment."
        },
        {
          id: "GV.PO-01.1",
          subcategory: "GV.PO-01",
          category: "Policy (GV.PO)",
          level: "basic",
          isKey: false,
          req: "Policies and procedures for managing information and cybersecurity shall be established, documented, reviewed, approved, updated when changes occur, communicated and enforced."
        },
        {
          id: "GV.PO-01.2",
          subcategory: "GV.PO-01",
          category: "Policy (GV.PO)",
          level: "important",
          isKey: false,
          req: "Organisational-wide information and cyber security policies and procedures shall include the use of cryptography and, where appropriate, encryption, reflect changes in requirements, threats, technology and organisational roles, and be approved by senior management, who oversee implementation."
        },
        {
          id: "GV.OV-02.1",
          subcategory: "GV.OV-02",
          category: "Oversight (GV.OV)",
          level: "essential",
          isKey: false,
          req: "The information and cybersecurity risk management strategy shall be reviewed and adjusted to ensure coverage of organisational requirements and risks."
        },
        {
          id: "GV.OV-03.1",
          subcategory: "GV.OV-03",
          category: "Oversight (GV.OV)",
          level: "essential",
          isKey: false,
          req: "The organisation's cybersecurity risk management performance shall be evaluated, reviewed and adjusted when necessary."
        },
        {
          id: "GV.SC-01.1",
          subcategory: "GV.SC-01",
          category: "Supply Chain Risk Management (GV.SC)",
          level: "essential",
          isKey: false,
          isManagement: true,
          req: "A cybersecurity supply chain risk management program, strategy, objectives, policies, and processes shall be documented, reviewed, updated when changes occur, and approved by organisational stakeholders."
        },
        {
          id: "GV.SC-02.1",
          subcategory: "GV.SC-02",
          category: "Supply Chain Risk Management (GV.SC)",
          level: "important",
          isKey: false,
          req: "Third-party providers shall notify any transfer, termination or transition of personnel with physical or logical access to business-critical system elements of the organisation."
        },
        {
          id: "GV.SC-03.1",
          subcategory: "GV.SC-03",
          category: "Supply Chain Risk Management (GV.SC)",
          level: "essential",
          isKey: false,
          req: "Information- and Cybersecurity supply chain risk management shall be integrated into information/cybersecurity and enterprise risk management, risk assessment, and improvement processes."
        },
        {
          id: "GV.SC-05.1",
          subcategory: "GV.SC-05",
          category: "Supply Chain Risk Management (GV.SC)",
          level: "important",
          isKey: false,
          req: "Requirements for addressing cybersecurity risks and the sharing of sensitive information in supply chains shall be established, prioritised, integrated into contracts and other types of formal agreements, and enforced."
        },
        {
          id: "GV.SC-05.2",
          subcategory: "GV.SC-05",
          category: "Supply Chain Risk Management (GV.SC)",
          level: "essential",
          isKey: true,
          req: "Contractual information/cybersecurity requirements for suppliers and external partners shall be implemented to ensure a verifiable flaw resolution process and to ensure that deficiencies identified during information/cybersecurity testing and evaluation are remedied."
        },
        {
          id: "GV.SC-05.3",
          subcategory: "GV.SC-05",
          category: "Supply Chain Risk Management (GV.SC)",
          level: "essential",
          isKey: true,
          req: "The organisation shall establish contractual requirements permitting the organisation to review the information/cybersecurity programmes implemented by suppliers and third-party partners."
        },
        {
          id: "GV.SC-06.1",
          subcategory: "GV.SC-06",
          category: "Supply Chain Risk Management (GV.SC)",
          level: "essential",
          isKey: false,
          req: "Planning and due diligence shall be carried out to reduce risks before entering into formal relationships with suppliers or other third parties."
        },
        {
          id: "GV.SC-07.1",
          subcategory: "GV.SC-07",
          category: "Supply Chain Risk Management (GV.SC)",
          level: "important",
          isKey: false,
          req: "The risks posed by a supplier, its products and services and other third parties shall be identified, documented, prioritised, mitigated and assessed at least annually and when changes occur during the relationship."
        },
        {
          id: "GV.SC-07.2",
          subcategory: "GV.SC-07",
          category: "Supply Chain Risk Management (GV.SC)",
          level: "essential",
          isKey: false,
          req: "A documented list of all critical suppliers, vendors and partners of the organisation that may be involved in a major incident shall be established, kept up-to-date and made available online and off-line with due regard to confidentiality and security."
        },
        {
          id: "GV.SC-07.3",
          subcategory: "GV.SC-07",
          category: "Supply Chain Risk Management (GV.SC)",
          level: "essential",
          isKey: false,
          req: "The organisation shall audit business-critical third-party service providers for security compliance."
        },
        {
          id: "GV.SC-07.4",
          subcategory: "GV.SC-07",
          category: "Supply Chain Risk Management (GV.SC)",
          level: "essential",
          isKey: false,
          req: "The organisation shall ensure conformity with information/cybersecurity contractual obligations by suppliers and third-party partners through regular reviews of independent audits, assessments, and third party evaluations."
        },
        {
          id: "GV.SC-08.1",
          subcategory: "GV.SC-08",
          category: "Supply Chain Risk Management (GV.SC)",
          level: "important",
          isKey: false,
          req: "The organisation shall identify and document key personnel from relevant suppliers and other third parties to include them in incident planning, response, and recovery activities."
        },
        {
          id: "GV.SC-09.1",
          subcategory: "GV.SC-09",
          category: "Supply Chain Risk Management (GV.SC)",
          level: "essential",
          isKey: false,
          req: "Supply chain security practices shall be integrated into information/cybersecurity and enterprise risk management programs, and their performance shall be monitored throughout the product and service life cycle."
        },
        {
          id: "GV.SC-10.1",
          subcategory: "GV.SC-10",
          category: "Supply Chain Risk Management (GV.SC)",
          level: "essential",
          isKey: false,
          req: "Cybersecurity supply chain risk management plans shall include actions and responsibilities for managing risks that may arise after a supplier relationship or service agreement has ended."
        }
      ]
    },
    {
      code: "ID",
      name: "IDENTIFY",
      color: "sky",
      desc: "Hardware & software asset inventories, data flow mapping, risk assessment methodologies, and vulnerability management.",
      controls: [
        {
          id: "ID.AM-01.1",
          subcategory: "ID.AM-01",
          category: "Asset Management (ID.AM)",
          level: "basic",
          isKey: false,
          req: "An inventory of physical and virtual infrastructure assets—such as hardware, network devices, and cloud-hosted environments—that support information processing shall be documented, reviewed, and updated as changes occur."
        },
        {
          id: "ID.AM-01.2",
          subcategory: "ID.AM-01",
          category: "Asset Management (ID.AM)",
          level: "important",
          isKey: false,
          req: "The inventory of enterprise assets associated with information and information processing facilities shall reflect changes in the organisation’s context and include all information necessary for effective accountability."
        },
        {
          id: "ID.AM-01.3",
          subcategory: "ID.AM-01",
          category: "Asset Management (ID.AM)",
          level: "important",
          isKey: false,
          req: "When unauthorised hardware is detected, it shall be quarantined for possible exception handling, removed, or replaced, and the inventory shall be updated accordingly."
        },
        {
          id: "ID.AM-01.4",
          subcategory: "ID.AM-01",
          category: "Asset Management (ID.AM)",
          level: "essential",
          isKey: false,
          req: "Mechanisms for detecting the presence of unauthorised hardware and firmware components within the organisation’s ICT/OT environment shall be identified."
        },
        {
          id: "ID.AM-02.1",
          subcategory: "ID.AM-02",
          category: "Asset Management (ID.AM)",
          level: "basic",
          isKey: false,
          req: "An inventory of software, digital services, and business systems used within the organisation shall be documented, reviewed, and updated as changes occur."
        },
        {
          id: "ID.AM-02.2",
          subcategory: "ID.AM-02",
          category: "Asset Management (ID.AM)",
          level: "important",
          isKey: false,
          req: "The inventory reflecting which software, services and systems are used in the organisation shall reflect changes in the organisation’s context and include all information necessary for effective accountability."
        },
        {
          id: "ID.AM-02.3",
          subcategory: "ID.AM-02",
          category: "Asset Management (ID.AM)",
          level: "important",
          isKey: false,
          req: "The people responsible and accountable for managing software platforms and applications within the organisation shall be formally identified."
        },
        {
          id: "ID.AM-02.4",
          subcategory: "ID.AM-02",
          category: "Asset Management (ID.AM)",
          level: "important",
          isKey: false,
          req: "When unauthorised software is detected, it shall be quarantined for possible exception handling, removed, or replaced, and the inventory shall be updated accordingly."
        },
        {
          id: "ID.AM-02.5",
          subcategory: "ID.AM-02",
          category: "Asset Management (ID.AM)",
          level: "essential",
          isKey: false,
          req: "Mechanisms for detecting the presence of unauthorised software within the organisation’s ICT/OT environment shall be identified."
        },
        {
          id: "ID.AM-03.2",
          subcategory: "ID.AM-03",
          category: "Asset Management (ID.AM)",
          level: "important",
          isKey: false,
          req: "The organisation's network communication and internal data flows shall be mapped, documented, authorised, and updated when changes occur."
        },
        {
          id: "ID.AM-03.3",
          subcategory: "ID.AM-03",
          category: "Asset Management (ID.AM)",
          level: "essential",
          isKey: true,
          req: "The organisation's network communication and external data flows shall be mapped, documented, authorised, and updated when changes occur."
        },
        {
          id: "ID.AM-04.1",
          subcategory: "ID.AM-04",
          category: "Asset Management (ID.AM)",
          level: "important",
          isKey: false,
          req: "Organisations shall keep a clear and up-to-date list of all external services it uses, including how they connect to their systems. These services shall be reviewed and approved before use, and the list shall be updated whenever changes happen."
        },
        {
          id: "ID.AM-04.2",
          subcategory: "ID.AM-04",
          category: "Asset Management (ID.AM)",
          level: "essential",
          isKey: false,
          req: "The organisation shall map, document and authorise the flow of information to/from external systems and update the flow when changes occur."
        },
        {
          id: "ID.AM-05.1",
          subcategory: "ID.AM-05",
          category: "Asset Management (ID.AM)",
          level: "basic",
          isKey: false,
          req: "The organisation’s assets shall be prioritised based on classification, criticality, and business value."
        },
        {
          id: "ID.AM-07.1",
          subcategory: "ID.AM-07",
          category: "Asset Management (ID.AM)",
          level: "basic",
          isKey: false,
          req: "Data that the organisation stores and uses shall be identified."
        },
        {
          id: "ID.AM-07.2",
          subcategory: "ID.AM-07",
          category: "Asset Management (ID.AM)",
          level: "important",
          isKey: false,
          req: "Inventories of data and associated metadata shall be maintained for designated data types."
        },
        {
          id: "ID.AM-08.2",
          subcategory: "ID.AM-08",
          category: "Asset Management (ID.AM)",
          level: "basic",
          isKey: true,
          req: "Patches and security updates for operating systems and critical system components shall be installed."
        },
        {
          id: "ID.AM-08.3",
          subcategory: "ID.AM-08",
          category: "Asset Management (ID.AM)",
          level: "important",
          isKey: false,
          req: "The organisation shall enforce accountability for all its business-critical assets throughout the system lifecycle, including removal, transfers, and disposal."
        },
        {
          id: "ID.AM-08.4",
          subcategory: "ID.AM-08",
          category: "Asset Management (ID.AM)",
          level: "important",
          isKey: false,
          req: "The organisation shall ensure that the necessary measures are taken to deal with loss, misuse, damage, or theft of assets."
        },
        {
          id: "ID.AM-08.5",
          subcategory: "ID.AM-08",
          category: "Asset Management (ID.AM)",
          level: "essential",
          isKey: false,
          req: "The organisation shall ensure that disposal actions are approved, tracked, documented, and verified."
        },
        {
          id: "ID.AM-08.6",
          subcategory: "ID.AM-08",
          category: "Asset Management (ID.AM)",
          level: "important",
          isKey: false,
          req: "The organisation shall plan, perform and document preventive maintenance and repairs on its critical system components according to approved processes and tools."
        },
        {
          id: "ID.AM-08.7",
          subcategory: "ID.AM-08",
          category: "Asset Management (ID.AM)",
          level: "essential",
          isKey: true,
          req: "The organisation shall prevent unauthorised removal of maintenance equipment which contains critical system information of the organisation."
        },
        {
          id: "ID.AM-08.8",
          subcategory: "ID.AM-08",
          category: "Asset Management (ID.AM)",
          level: "important",
          isKey: false,
          req: "The organisation shall pre-approve, monitor and enforce maintenance tools for use on its critical systems."
        },
        {
          id: "ID.AM-08.9",
          subcategory: "ID.AM-08",
          category: "Asset Management (ID.AM)",
          level: "essential",
          isKey: true,
          req: "Maintenance tools and portable storage devices shall be inspected as they enter the facility and shall be protected by anti-malware solutions that scan them for malicious code before they are used on the organisation's systems."
        },
        {
          id: "ID.AM-08.10",
          subcategory: "ID.AM-08",
          category: "Asset Management (ID.AM)",
          level: "essential",
          isKey: true,
          req: "The organisation shall verify security controls following maintenance or repairs/patching, and take action as appropriate."
        },
        {
          id: "ID.AM-08.11",
          subcategory: "ID.AM-08",
          category: "Asset Management (ID.AM)",
          level: "important",
          isKey: false,
          req: "Remote maintenance and diagnostic activities of organisational assets shall be pre-approved and the performance logged."
        },
        {
          id: "ID.AM-08.12",
          subcategory: "ID.AM-08",
          category: "Asset Management (ID.AM)",
          level: "important",
          isKey: false,
          req: "Setting up non-local maintenance and diagnostic sessions over remote network connections shall require strong authenticators and these connections shall be terminated when non-local maintenance is completed."
        },
        {
          id: "ID.AM-08.13",
          subcategory: "ID.AM-08",
          category: "Asset Management (ID.AM)",
          level: "essential",
          isKey: false,
          req: "The organisation shall require remote maintenance diagnostic services to be performed from a system that implements security features similar to the security features implemented on the equivalent organisation's critical system."
        },
        {
          id: "ID.RA-01.1",
          subcategory: "ID.RA-01",
          category: "Risk Assessment (ID.RA)",
          level: "basic",
          isKey: false,
          req: "Threats and vulnerabilities shall be identified in all relevant assets, including software, network and system architectures, and facilities that house critical computing assets."
        },
        {
          id: "ID.RA-01.2",
          subcategory: "ID.RA-01",
          category: "Risk Assessment (ID.RA)",
          level: "important",
          isKey: false,
          req: "A process shall be established to continuously monitor, identify, and document vulnerabilities of the organisation's business critical systems."
        },
        {
          id: "ID.RA-01.3",
          subcategory: "ID.RA-01",
          category: "Risk Assessment (ID.RA)",
          level: "important",
          isKey: false,
          req: "The organisation shall establish and maintain a documented process that enables continuous review, analysis and remediation of vulnerabilities and makes information sharing possible, where applicable."
        },
        {
          id: "ID.RA-01.4",
          subcategory: "ID.RA-01",
          category: "Risk Assessment (ID.RA)",
          level: "essential",
          isKey: false,
          req: "To ensure that organisation's operations are not adversely affected by the testing process, performance/load testing and penetration testing on the organisation’s systems shall be carried out with care."
        },
        {
          id: "ID.RA-01.5",
          subcategory: "ID.RA-01",
          category: "Risk Assessment (ID.RA)",
          level: "important",
          isKey: false,
          req: "Vulnerability scanning shall not adversely impact system functions."
        },
        {
          id: "ID.RA-01.6",
          subcategory: "ID.RA-01",
          category: "Risk Assessment (ID.RA)",
          level: "important",
          isKey: false,
          req: "Vulnerabilities shall be identified and managed in all relevant assets, including software, network and system architectures, and facilities."
        },
        {
          id: "ID.RA-02.1",
          subcategory: "ID.RA-02",
          category: "Risk Assessment (ID.RA)",
          level: "important",
          isKey: false,
          req: "A threat and vulnerability awareness programme that includes a cross-organisation information-sharing capability shall be implemented."
        },
        {
          id: "ID.RA-02.2",
          subcategory: "ID.RA-02",
          category: "Risk Assessment (ID.RA)",
          level: "essential",
          isKey: false,
          req: "Automated mechanisms shall be implemented to disseminate security alerts and advisories to relevant organisation stakeholders."
        },
        {
          id: "ID.RA-03.1",
          subcategory: "ID.RA-03",
          category: "Risk Assessment (ID.RA)",
          level: "important",
          isKey: false,
          req: "Threats shall be identified and assessed in relation to all relevant assets, including software, network and system architectures, and facilities."
        },
        {
          id: "ID.RA-05.1",
          subcategory: "ID.RA-05",
          category: "Risk Assessment (ID.RA)",
          level: "basic",
          isKey: false,
          req: "The organisation shall conduct risk assessments in which risk is determined by threats, vulnerabilities and the impact on business processes and assets."
        },
        {
          id: "ID.RA-05.2",
          subcategory: "ID.RA-05",
          category: "Risk Assessment (ID.RA)",
          level: "important",
          isKey: false,
          isManagement: true,
          req: "The organisation shall conduct and document risk assessments in which risk is determined by threats, vulnerabilities, impact on business processes and assets, and likelihood of their occurrence."
        },
        {
          id: "ID.RA-05.3",
          subcategory: "ID.RA-05",
          category: "Risk Assessment (ID.RA)",
          level: "essential",
          isKey: false,
          isManagement: true,
          req: "Risk assessment results shall be disseminated to relevant stakeholders."
        },
        {
          id: "ID.RA-06.1",
          subcategory: "ID.RA-06",
          category: "Risk Assessment (ID.RA)",
          level: "important",
          isKey: false,
          isManagement: true,
          req: "Risk responses shall be identified, prioritised, planned, tracked and communicated."
        },
        {
          id: "ID.RA-08.1",
          subcategory: "ID.RA-08",
          category: "Risk Assessment (ID.RA)",
          level: "important",
          isKey: true,
          req: "The organisation shall establish and implement a vulnerability management plan to identify, analyse, assess, mitigate and communicate all types of vulnerabilities including in the form of a Coordinated Vulnerability Disclosure (CVD) according to applicable legal modalities."
        },
        {
          id: "ID.RA-08.2",
          subcategory: "ID.RA-08",
          category: "Risk Assessment (ID.RA)",
          level: "essential",
          isKey: false,
          req: "The organisation shall implement automated mechanisms for disseminating and tracking remedial measures related to vulnerability information that automatically handles vulnerability data collection, disseminates information, tracks remedial measures, includes reporting and accountability, and enables continuous monitoring."
        },
        {
          id: "ID.IM-02.1",
          subcategory: "ID.IM-02",
          category: "Improvement (ID.IM)",
          level: "important",
          isKey: false,
          req: "Security tests and exercises, including those conducted with suppliers and relevant third parties, shall be used to identify areas for improvement."
        },
        {
          id: "ID.IM-03.1",
          subcategory: "ID.IM-03",
          category: "Improvement (ID.IM)",
          level: "basic",
          isKey: false,
          req: "The organisation shall conduct post-incident evaluations to analyse lessons learned from incident response and recovery, and consequently improve processes / procedures / technologies to enhance its cyber resilience."
        },
        {
          id: "ID.IM-03.2",
          subcategory: "ID.IM-03",
          category: "Improvement (ID.IM)",
          level: "important",
          isKey: false,
          req: "The organisation shall incorporate lessons learned from incident handling activities into updated or new incident handling processes and/or procedures that are framed by appropriate training after review, approval and testing."
        },
        {
          id: "ID.IM-03.3",
          subcategory: "ID.IM-03",
          category: "Improvement (ID.IM)",
          level: "important",
          isKey: false,
          req: "The organisation shall identify improvements derived from the monitoring, measurements, assessments, and lessons learned and consequently translate this into improved processes / procedures / technologies to enhance its cyber resilience (continuous improvement)."
        },
        {
          id: "ID.IM-03.4",
          subcategory: "ID.IM-03",
          category: "Improvement (ID.IM)",
          level: "important",
          isKey: false,
          req: "The organisation shall collaborate and share information about its critical system's related security incidents and mitigation measures with designated partners."
        },
        {
          id: "ID.IM-03.5",
          subcategory: "ID.IM-03",
          category: "Improvement (ID.IM)",
          level: "important",
          isKey: false,
          req: "Communication of effectiveness of protection technologies shall be shared with relevant stakeholders."
        },
        {
          id: "ID.IM-03.6",
          subcategory: "ID.IM-03",
          category: "Improvement (ID.IM)",
          level: "important",
          isKey: false,
          req: "The organisation shall implement, where feasible, automated mechanisms to facilitate the process of information sharing and collaboration."
        },
        {
          id: "ID.IM-03.7",
          subcategory: "ID.IM-03",
          category: "Improvement (ID.IM)",
          level: "essential",
          isKey: false,
          req: "The organisation shall implement independent teams to assess its processes, best practices, and technology solutions to safeguard critical systems and assets."
        },
        {
          id: "ID.IM-03.8",
          subcategory: "ID.IM-03",
          category: "Improvement (ID.IM)",
          level: "essential",
          isKey: false,
          req: "The organisation shall ensure that the security plan for its critical systems facilitates the review, testing, and continual improvement of the security protection processes."
        },
        {
          id: "ID.IM-03.9",
          subcategory: "ID.IM-03",
          category: "Improvement (ID.IM)",
          level: "essential",
          isKey: false,
          isManagement: true,
          req: "The organisation shall conduct specialised assessments including in-depth monitoring, vulnerability scanning, malicious user testing, insider threat assessment, performance/load testing, and verification and validation testing on the organisation's critical systems."
        },
        {
          id: "ID.IM-04.1",
          subcategory: "ID.IM-04",
          category: "Improvement (ID.IM)",
          level: "important",
          isKey: false,
          isManagement: true,
          req: "Contingency and continuity plans shall be established, communicated, maintained, tested, validated, and improved."
        },
        {
          id: "ID.IM-04.2",
          subcategory: "ID.IM-04",
          category: "Improvement (ID.IM)",
          level: "essential",
          isKey: false,
          isManagement: true,
          req: "The organisation shall coordinate the development and testing of Incident Response Plans and other cybersecurity plans that affect operations with stakeholders to ensure that these plans align with overall organisational goals and enhance resilience."
        }
      ]
    },
    {
      code: "PR",
      name: "PROTECT",
      color: "emerald",
      desc: "Identity & access management, least privilege, data protection, backups, platform hardening, secure software development, and network boundaries.",
      controls: [
        {
          id: "PR.AA-01.1",
          subcategory: "PR.AA-01",
          category: "Identity & Access Control (PR.AA)",
          level: "basic",
          isKey: true,
          req: "Identities and credentials for authorised users, services, and hardware shall be managed."
        },
        {
          id: "PR.AA-01.2",
          subcategory: "PR.AA-01",
          category: "Identity & Access Control (PR.AA)",
          level: "important",
          isKey: false,
          req: "Identities and credentials for authorised users, services and hardware shall be managed through automated mechanisms whenever feasible."
        },
        {
          id: "PR.AA-01.3",
          subcategory: "PR.AA-01",
          category: "Identity & Access Control (PR.AA)",
          level: "essential",
          isKey: false,
          req: "System credentials shall be deactivated after a specified period of inactivity unless it would compromise the safe operation of (critical) processes."
        },
        {
          id: "PR.AA-01.4",
          subcategory: "PR.AA-01",
          category: "Identity & Access Control (PR.AA)",
          level: "essential",
          isKey: false,
          req: "For transactions within the organisation's critical systems, the organisation shall implement Multi Factor Authentication (MFA), cryptographic certificates, identity tokens, cryptographic keys and other credentials as appropriate and where feasible."
        },
        {
          id: "PR.AA-01.5",
          subcategory: "PR.AA-01",
          category: "Identity & Access Control (PR.AA)",
          level: "essential",
          isKey: false,
          req: "The organisation’s critical systems shall be monitored for atypical use of system credentials. Credentials associated with significant risk shall be disabled."
        },
        {
          id: "PR.AA-02.1",
          subcategory: "PR.AA-02",
          category: "Identity & Access Control (PR.AA)",
          level: "important",
          isKey: false,
          req: "The organisation shall implement documented procedures for verifying the identity of individuals before issuing credentials that provide access to the organisation's systems."
        },
        {
          id: "PR.AA-02.2",
          subcategory: "PR.AA-02",
          category: "Identity & Access Control (PR.AA)",
          level: "essential",
          isKey: false,
          req: "The organisation shall ensure that unique credentials are used for each authenticated user, device, and process interacting with the organisation's critical systems. These credentials shall be verified, and the unique identifiers shall be captured during system interactions. Exceptions may be made for emergency access (\"break-glass\" procedures), provided such access is strictly controlled, logged, and reviewed."
        },
        {
          id: "PR.AA-03.1",
          subcategory: "PR.AA-03",
          category: "Identity & Access Control (PR.AA)",
          level: "basic",
          isKey: false,
          req: "All wireless access points used by the organisation, including those providing guest access, shall be securely configured, managed, and monitored to prevent unauthorised access and ensure network integrity."
        },
        {
          id: "PR.AA-03.2",
          subcategory: "PR.AA-03",
          category: "Identity & Access Control (PR.AA)",
          level: "basic",
          isKey: true,
          req: "Multi-Factor Authentication (MFA) shall be required to access the organisation's networks remotely."
        },
        {
          id: "PR.AA-03.3",
          subcategory: "PR.AA-03",
          category: "Identity & Access Control (PR.AA)",
          level: "important",
          isKey: true,
          req: "The organisation shall define, document, and implement usage restrictions, connection requirements, and authorisation procedures for remote access to its critical systems. These controls shall ensure that only approved users can connect, using secure methods, with access limited to what is necessary for their role."
        },
        {
          id: "PR.AA-03.4",
          subcategory: "PR.AA-03",
          category: "Identity & Access Control (PR.AA)",
          level: "essential",
          isKey: false,
          req: "Remote access to the organisation’s critical systems shall be monitored and cryptographic mechanisms shall be implemented where determined necessary."
        },
        {
          id: "PR.AA-03.5",
          subcategory: "PR.AA-03",
          category: "Identity & Access Control (PR.AA)",
          level: "essential",
          isKey: false,
          req: "The security for connections with external systems shall be verified and framed by documented agreements."
        },
        {
          id: "PR.AA-04.1",
          subcategory: "PR.AA-04",
          category: "Identity & Access Control (PR.AA)",
          level: "essential",
          isKey: false,
          req: "Identity assertions shall be protected, conveyed, and verified."
        },
        {
          id: "PR.AA-05.1",
          subcategory: "PR.AA-05",
          category: "Identity & Access Control (PR.AA)",
          level: "basic",
          isKey: true,
          req: "Access permissions, rights, and authorisations shall be defined, managed, enforced and reviewed."
        },
        {
          id: "PR.AA-05.2",
          subcategory: "PR.AA-05",
          category: "Identity & Access Control (PR.AA)",
          level: "basic",
          isKey: true,
          req: "It shall be determined who needs access to the organisation's business-critical information and technology and the means to gain access."
        },
        {
          id: "PR.AA-05.3",
          subcategory: "PR.AA-05",
          category: "Identity & Access Control (PR.AA)",
          level: "basic",
          isKey: true,
          req: "Access rights, privileges and authorisations must be restricted to the systems and specific information needed to perform the tasks (the principle of Least Privilege)."
        },
        {
          id: "PR.AA-05.4",
          subcategory: "PR.AA-05",
          category: "Identity & Access Control (PR.AA)",
          level: "basic",
          isKey: true,
          req: "No-one shall have administrative privileges for routine day-to-day tasks."
        },
        {
          id: "PR.AA-05.5",
          subcategory: "PR.AA-05",
          category: "Identity & Access Control (PR.AA)",
          level: "important",
          isKey: false,
          req: "Where technically, operationally, and economically feasible—without compromising system integrity, safety, or compliance—automated mechanisms shall be implemented to manage user accounts on critical ICT and OT systems. Feasibility shall be determined based on system capabilities, integration potential, risk assessment, and business impact."
        },
        {
          id: "PR.AA-05.6",
          subcategory: "PR.AA-05",
          category: "Identity & Access Control (PR.AA)",
          level: "important",
          isKey: false,
          req: "Separation of duties (SoD) shall be ensured in the management of access rights."
        },
        {
          id: "PR.AA-05.7",
          subcategory: "PR.AA-05",
          category: "Identity & Access Control (PR.AA)",
          level: "important",
          isKey: false,
          req: "Privileged users shall be managed and monitored."
        },
        {
          id: "PR.AA-05.8",
          subcategory: "PR.AA-05",
          category: "Identity & Access Control (PR.AA)",
          level: "essential",
          isKey: false,
          req: "Account usage restrictions for specific time periods and locations shall be taken into account in the organisation's security access policy and applied accordingly."
        },
        {
          id: "PR.AA-05.9",
          subcategory: "PR.AA-05",
          category: "Identity & Access Control (PR.AA)",
          level: "essential",
          isKey: false,
          req: "Privileged users shall be managed, monitored and audited."
        },
        {
          id: "PR.AA-06.1",
          subcategory: "PR.AA-06",
          category: "Identity & Access Control (PR.AA)",
          level: "basic",
          isKey: false,
          req: "Physical access to all organisational assets, including critical zones, shall be managed, monitored, and enforced based on risk."
        },
        {
          id: "PR.AA-06.2",
          subcategory: "PR.AA-06",
          category: "Identity & Access Control (PR.AA)",
          level: "important",
          isKey: false,
          req: "Physical access controls shall include specific procedures for emergency situations, ensuring continued protection of critical and non-critical assets during such events."
        },
        {
          id: "PR.AA-06.3",
          subcategory: "PR.AA-06",
          category: "Identity & Access Control (PR.AA)",
          level: "essential",
          isKey: false,
          req: "Critical zones shall have additional physical access controls beyond those applied to general facilities."
        },
        {
          id: "PR.AA-06.4",
          subcategory: "PR.AA-06",
          category: "Identity & Access Control (PR.AA)",
          level: "essential",
          isKey: false,
          req: "Assets located within critical zones shall be physically protected against unauthorised access, damage, or interference."
        },
        {
          id: "PR.AT-01.1",
          subcategory: "PR.AT-01",
          category: "Awareness & Training (PR.AT)",
          level: "basic",
          isKey: false,
          req: "The organisation shall establish and maintain a cybersecurity awareness and training programme to ensure that all personnel understand how to perform their tasks securely and responsibly."
        },
        {
          id: "PR.AT-01.2",
          subcategory: "PR.AT-01",
          category: "Awareness & Training (PR.AT)",
          level: "important",
          isKey: false,
          req: "The organisation shall include insider threat awareness and reporting in its cybersecurity training to help personnel recognise and respond to potential internal risks."
        },
        {
          id: "PR.AT-01.3",
          subcategory: "PR.AT-01",
          category: "Awareness & Training (PR.AT)",
          level: "important",
          isKey: false,
          req: "Personnel shall receive training to understand their specific roles, responsibilities, and priorities during a cybersecurity or information security incident, including the steps they need to follow to respond effectively."
        },
        {
          id: "PR.AT-01.4",
          subcategory: "PR.AT-01",
          category: "Awareness & Training (PR.AT)",
          level: "essential",
          isKey: false,
          req: "The organisation shall evaluate whether its cybersecurity awareness training is effective in improving knowledge, behaviour, and readiness across the organisation."
        },
        {
          id: "PR.AT-02.1",
          subcategory: "PR.AT-02",
          category: "Awareness & Training (PR.AT)",
          level: "important",
          isKey: false,
          req: "Members of management bodies shall be able to demonstrate that they have completed training that gives them a solid understanding of information and cybersecurity and risk management so that they can assess information and cyber security risks and their consequences and propose the necessary risk mitigation, considering their roles, responsibilities and authorities."
        },
        {
          id: "PR.AT-02.2",
          subcategory: "PR.AT-02",
          category: "Awareness & Training (PR.AT)",
          level: "important",
          isKey: false,
          req: "Individuals in specialised roles shall be provided with awareness and training before privileges are granted, so that they possess the knowledge and skills to perform relevant tasks with cybersecurity risks in mind."
        },
        {
          id: "PR.AT-02.3",
          subcategory: "PR.AT-02",
          category: "Awareness & Training (PR.AT)",
          level: "important",
          isKey: false,
          req: "Privileged users shall be qualified before privileges are granted, and these users shall be able to demonstrate the understanding of their roles, responsibilities, and authorities."
        },
        {
          id: "PR.DS-01.1",
          subcategory: "PR.DS-01",
          category: "Data Security (PR.DS)",
          level: "important",
          isKey: false,
          req: "The organisation shall implement software, firmware, and information integrity checks to detect unauthorised changes to its critical system components during storage, transport, start-up and when determined necessary."
        },
        {
          id: "PR.DS-01.2",
          subcategory: "PR.DS-01",
          category: "Data Security (PR.DS)",
          level: "essential",
          isKey: false,
          req: "The organisation shall implement automated tools where feasible to provide notification upon discovering discrepancies during integrity verification."
        },
        {
          id: "PR.DS-01.3",
          subcategory: "PR.DS-01",
          category: "Data Security (PR.DS)",
          level: "essential",
          isKey: false,
          req: "The organisation shall define and implement automated responses to detected integrity violations, using predefined safeguards that are proportionate to the severity and impact of the violation."
        },
        {
          id: "PR.DS-01.4",
          subcategory: "PR.DS-01",
          category: "Data Security (PR.DS)",
          level: "important",
          isKey: false,
          req: "The organisation shall define and enforce clear policies and practical safeguards to manage and restrict the use of portable storage media, in order to reduce the risk of data leakage, unauthorised access, and malware introduction."
        },
        {
          id: "PR.DS-01.5",
          subcategory: "PR.DS-01",
          category: "Data Security (PR.DS)",
          level: "important",
          isKey: false,
          req: "The organisation shall only allow the use of removable media when absolutely necessary, and shall put technical measures in place to block automatic execution of files from these devices."
        },
        {
          id: "PR.DS-01.6",
          subcategory: "PR.DS-01",
          category: "Data Security (PR.DS)",
          level: "essential",
          isKey: false,
          req: "The organisation shall protect the confidentiality of its critical assets while at rest."
        },
        {
          id: "PR.DS-01.9",
          subcategory: "PR.DS-01",
          category: "Data Security (PR.DS)",
          level: "basic",
          isKey: false,
          req: "Enterprise assets shall be disposed of safely."
        },
        {
          id: "PR.DS-02.1",
          subcategory: "PR.DS-02",
          category: "Data Security (PR.DS)",
          level: "essential",
          isKey: true,
          req: "Portable storage devices containing system data shall be controlled and protected while in transit and in storage."
        },
        {
          id: "PR.DS-02.2",
          subcategory: "PR.DS-02",
          category: "Data Security (PR.DS)",
          level: "essential",
          isKey: false,
          req: "The organisation shall protect its critical and sensitive information while in transit."
        },
        {
          id: "PR.DS-10.1",
          subcategory: "PR.DS-10",
          category: "Data Security (PR.DS)",
          level: "essential",
          isKey: false,
          req: "The organisation’s critical systems shall be protected against denial-of-service attacks or at least the effect of such attacks shall be limited."
        },
        {
          id: "PR.DS-11.1",
          subcategory: "PR.DS-11",
          category: "Data Security (PR.DS)",
          level: "basic",
          isKey: true,
          req: "Backups for the organisation's business critical data shall be performed and stored on a different system from the device on which the original data resides."
        },
        {
          id: "PR.DS-11.2",
          subcategory: "PR.DS-11",
          category: "Data Security (PR.DS)",
          level: "important",
          isKey: false,
          req: "The reliability and integrity of backups shall be verified and tested regularly."
        },
        {
          id: "PR.DS-11.3",
          subcategory: "PR.DS-11",
          category: "Data Security (PR.DS)",
          level: "important",
          isKey: false,
          req: "The organisation shall maintain secure backups of business-critical data in a separate storage location to ensure data availability in case of system failure or data loss. Backup storage shall apply equivalent security controls as the primary environment."
        },
        {
          id: "PR.DS-11.4",
          subcategory: "PR.DS-11",
          category: "Data Security (PR.DS)",
          level: "essential",
          isKey: false,
          req: "The organisation shall regularly verify the integrity and recoverability of backups through coordinated testing with all relevant continuity and incident response functions. Backup testing shall be integrated into broader resilience planning, including business continuity, disaster recovery, and cyber incident response."
        },
        {
          id: "PR.DS-11.5",
          subcategory: "PR.DS-11",
          category: "Data Security (PR.DS)",
          level: "essential",
          isKey: false,
          req: "Backups of critical systems (such as operating systems, configurations, and applications) shall be kept separate from backups of critical information (such as business data, documents, and databases) to support faster and more reliable recovery."
        },
        {
          id: "PR.PS-01.1",
          subcategory: "PR.PS-01",
          category: "Platform Security (PR.PS)",
          level: "important",
          isKey: true,
          req: "The organisation shall develop, document, and maintain a baseline configuration for its business-critical systems."
        },
        {
          id: "PR.PS-01.2",
          subcategory: "PR.PS-01",
          category: "Platform Security (PR.PS)",
          level: "essential",
          isKey: false,
          req: "The organisation shall configure its business-critical systems to operate with only the essential functions needed for the intended purpose. This includes reviewing and updating baseline configurations to disable any non-essential capabilities."
        },
        {
          id: "PR.PS-01.3",
          subcategory: "PR.PS-01",
          category: "Platform Security (PR.PS)",
          level: "essential",
          isKey: false,
          req: "The organisation shall identify and disable specific functions, ports, protocols, and services within its critical systems that are not required for business operations."
        },
        {
          id: "PR.PS-01.4",
          subcategory: "PR.PS-01",
          category: "Platform Security (PR.PS)",
          level: "essential",
          isKey: false,
          req: "The organisation shall implement technical safeguards to enforce a policy of ‘deny-all’ and ‘permit-by-exception’ so that only authorised software programmes are executed."
        },
        {
          id: "PR.PS-01.5",
          subcategory: "PR.PS-01",
          category: "Platform Security (PR.PS)",
          level: "essential",
          isKey: false,
          req: "Unauthorised configuration changes to organisation's systems shall be monitored and addressed with the appropriate mitigation actions."
        },
        {
          id: "PR.PS-02.1",
          subcategory: "PR.PS-02",
          category: "Platform Security (PR.PS)",
          level: "important",
          isKey: false,
          req: "The organisation shall enforce restrictions on software usage and installation, and ensure that software is maintained, replaced, or removed based on its associated risk."
        },
        {
          id: "PR.PS-03.1",
          subcategory: "PR.PS-03",
          category: "Platform Security (PR.PS)",
          level: "important",
          isKey: false,
          req: "Hardware used in business-critical environments shall be maintained, replaced, or removed based on its associated security and operational risk."
        },
        {
          id: "PR.PS-04.1",
          subcategory: "PR.PS-04",
          category: "Platform Security (PR.PS)",
          level: "basic",
          isKey: true,
          isManagement: true,
          req: "Logs shall be maintained, documented, and monitored."
        },
        {
          id: "PR.PS-04.2",
          subcategory: "PR.PS-04",
          category: "Platform Security (PR.PS)",
          level: "important",
          isKey: false,
          req: "The organisation shall ensure that logbook records contain an authoritative time source or internal clock time stamp that is compared and synchronised with an authoritative time source."
        },
        {
          id: "PR.PS-04.3",
          subcategory: "PR.PS-04",
          category: "Platform Security (PR.PS)",
          level: "important",
          isKey: false,
          req: "Audit data from the organisation's critical systems shall be moved to an alternative system."
        },
        {
          id: "PR.PS-04.4",
          subcategory: "PR.PS-04",
          category: "Platform Security (PR.PS)",
          level: "essential",
          isKey: false,
          req: "The organisation shall ensure that audit processing failures on the organisation's systems generate alerts and trigger defined responses."
        },
        {
          id: "PR.PS-04.5",
          subcategory: "PR.PS-04",
          category: "Platform Security (PR.PS)",
          level: "essential",
          isKey: false,
          req: "The organisation shall ensure that authorised personnel can extend or enhance audit logging and monitoring capabilities when needed to support investigations or incident response."
        },
        {
          id: "PR.PS-05.1",
          subcategory: "PR.PS-05",
          category: "Platform Security (PR.PS)",
          level: "basic",
          isKey: false,
          req: "Web and e-mail filters shall be installed and used."
        },
        {
          id: "PR.PS-05.2",
          subcategory: "PR.PS-05",
          category: "Platform Security (PR.PS)",
          level: "important",
          isKey: false,
          req: "Installation and execution of unauthorised software shall be prevented."
        },
        {
          id: "PR.PS-06.1",
          subcategory: "PR.PS-06",
          category: "Platform Security (PR.PS)",
          level: "important",
          isKey: false,
          req: "Security shall be considered throughout the lifecycle of systems and applications, whether developed internally or acquired externally."
        },
        {
          id: "PR.PS-06.2",
          subcategory: "PR.PS-06",
          category: "Platform Security (PR.PS)",
          level: "important",
          isKey: false,
          req: "Changes and exceptions shall be tested and validated before being implemented into operational systems."
        },
        {
          id: "PR.PS-06.3",
          subcategory: "PR.PS-06",
          category: "Platform Security (PR.PS)",
          level: "essential",
          isKey: false,
          req: "Secure software development practices shall be integrated into all phases of the software development lifecycle, and their effectiveness shall be regularly monitored and improved."
        },
        {
          id: "PR.PS-06.4",
          subcategory: "PR.PS-06",
          category: "Platform Security (PR.PS)",
          level: "essential",
          isKey: false,
          req: "For planned changes to the organisation's critical systems, a security impact analysis shall be performed in a separate test environment before implementation in an operational environment."
        },
        {
          id: "PR.IR-01.1",
          subcategory: "PR.IR-01",
          category: "Infrastructure Resilience (PR.IR)",
          level: "basic",
          isKey: true,
          req: "Firewalls shall be installed, configured, and actively maintained on all networks used by the organisation to protect against unauthorised access and cyber threats."
        },
        {
          id: "PR.IR-01.2",
          subcategory: "PR.IR-01",
          category: "Infrastructure Resilience (PR.IR)",
          level: "basic",
          isKey: true,
          req: "To safeguard critical systems, organisations shall implement network segmentation and segregation aligned with trust boundaries and asset criticality, thereby limiting threat propagation and enforcing strict access control."
        },
        {
          id: "PR.IR-01.3",
          subcategory: "PR.IR-01",
          category: "Infrastructure Resilience (PR.IR)",
          level: "important",
          isKey: true,
          req: "To ensure operational stability and security, the organisation shall, without exception, identify, document, and control connections between components of its critical systems."
        },
        {
          id: "PR.IR-01.4",
          subcategory: "PR.IR-01",
          category: "Infrastructure Resilience (PR.IR)",
          level: "important",
          isKey: true,
          req: "The organisation shall implement appropriate boundary protection measures to monitor and control communications at external and key internal boundaries of its critical systems, across both IT and OT environments, to ensure secure and reliable operations."
        },
        {
          id: "PR.IR-01.5",
          subcategory: "PR.IR-01",
          category: "Infrastructure Resilience (PR.IR)",
          level: "essential",
          isKey: false,
          req: "The organisation shall implement, where feasible, authenticated proxy servers or firewalls with URL filtering and threat intelligence capabilities for defined communications traffic between its critical systems and external networks."
        },
        {
          id: "PR.IR-01.6",
          subcategory: "PR.IR-01",
          category: "Infrastructure Resilience (PR.IR)",
          level: "essential",
          isKey: false,
          req: "The organisation shall ensure that its critical systems are designed to fail securely and remain protected in the event of an operational failure of a border protection device."
        },
        {
          id: "PR.IR-01.7",
          subcategory: "PR.IR-01",
          category: "Infrastructure Resilience (PR.IR)",
          level: "essential",
          isKey: false,
          req: "The organisation shall ensure that development and test environments are strictly separated from the production environment, particularly in ICS/OT systems where any crossover could compromise safety, endanger health, or disrupt essential operations."
        },
        {
          id: "PR.IR-01.8",
          subcategory: "PR.IR-01",
          category: "Infrastructure Resilience (PR.IR)",
          level: "essential",
          isKey: false,
          req: "The organisation shall define, monitor, and control the flow of information and data within and between its critical systems to ensure that only authorised and secure exchanges occur, regardless of network boundaries or system architecture."
        },
        {
          id: "PR.IR-01.9",
          subcategory: "PR.IR-01",
          category: "Infrastructure Resilience (PR.IR)",
          level: "essential",
          isKey: false,
          req: "The organisation shall manage interfaces with external telecommunications services as part of its broader network security policy, by defining how traffic is controlled, ensuring the confidentiality and integrity of transmitted information, and reviewing and documenting any exceptions to established rules."
        },
        {
          id: "PR.IR-02.1",
          subcategory: "PR.IR-02",
          category: "Infrastructure Resilience (PR.IR)",
          level: "important",
          isKey: false,
          req: "The organisation shall define, implement and maintain policies and procedures related to emergency and safety systems, fire protection systems and environmental controls for its critical systems."
        },
        {
          id: "PR.IR-02.2",
          subcategory: "PR.IR-02",
          category: "Infrastructure Resilience (PR.IR)",
          level: "essential",
          isKey: false,
          req: "The organisation shall implement fire detection devices that activate and notify key personnel automatically in the event of a fire."
        },
        {
          id: "PR.IR-03.1",
          subcategory: "PR.IR-03",
          category: "Infrastructure Resilience (PR.IR)",
          level: "essential",
          isKey: false,
          req: "The organisation shall implement mechanisms to ensure that critical systems and services remain operational or can be quickly restored during both normal operations and adverse conditions."
        },
        {
          id: "PR.IR-04.1",
          subcategory: "PR.IR-04",
          category: "Infrastructure Resilience (PR.IR)",
          level: "important",
          isKey: false,
          isManagement: true,
          req: "Adequate resource capacity planning shall ensure that availability of organisation's critical system information processing, networking, telecommunications, and data storage is maintained."
        }
      ]
    },
    {
      code: "DE",
      name: "DETECT",
      color: "amber",
      desc: "Continuous network and boundary monitoring, anti-malware tools, unauthorized connection discovery, and multi-source event correlation.",
      controls: [
        {
          id: "DE.CM-01.1",
          subcategory: "DE.CM-01",
          category: "Continuous Monitoring (DE.CM)",
          level: "basic",
          isKey: false,
          req: "Firewalls shall be installed and operated at the network boundaries, including endpoint firewalls."
        },
        {
          id: "DE.CM-01.2",
          subcategory: "DE.CM-01",
          category: "Continuous Monitoring (DE.CM)",
          level: "basic",
          isKey: true,
          req: "Anti-virus, -spyware, and other -malware programs shall be installed and updated."
        },
        {
          id: "DE.CM-01.3",
          subcategory: "DE.CM-01",
          category: "Continuous Monitoring (DE.CM)",
          level: "important",
          isKey: true,
          req: "The organisation shall monitor and identify unauthorised use of its business-critical systems through the detection of unauthorised local connections, network connections and remote connections."
        },
        {
          id: "DE.CM-01.4",
          subcategory: "DE.CM-01",
          category: "Continuous Monitoring (DE.CM)",
          level: "essential",
          isKey: false,
          req: "The organisation shall continuously monitor its network to spot signs of cyber threats or unusual activity, using clearly defined rules for what counts as a potential security incident."
        },
        {
          id: "DE.CM-02.1",
          subcategory: "DE.CM-02",
          category: "Continuous Monitoring (DE.CM)",
          level: "important",
          isKey: false,
          req: "The physical environment shall be monitored to find potentially adverse events."
        },
        {
          id: "DE.CM-02.2",
          subcategory: "DE.CM-02",
          category: "Continuous Monitoring (DE.CM)",
          level: "essential",
          isKey: false,
          req: "Physical access to the organisation's critical systems and devices, in addition to physical access monitoring to the facility, shall be supplemented by physical intrusion alarms, surveillance equipment, and independent monitoring teams."
        },
        {
          id: "DE.CM-03.1",
          subcategory: "DE.CM-03",
          category: "Continuous Monitoring (DE.CM)",
          level: "basic",
          isKey: false,
          req: "End point and network protection tools to monitor end-user behaviour for dangerous activity shall be implemented."
        },
        {
          id: "DE.CM-03.2",
          subcategory: "DE.CM-03",
          category: "Continuous Monitoring (DE.CM)",
          level: "important",
          isKey: false,
          req: "End point and network protection tools that monitor end-user behaviour for dangerous activity shall be managed."
        },
        {
          id: "DE.CM-06.1",
          subcategory: "DE.CM-06",
          category: "Continuous Monitoring (DE.CM)",
          level: "important",
          isKey: false,
          req: "External service provider activities and services shall be secured and monitored to find potentially adverse events."
        },
        {
          id: "DE.CM-06.2",
          subcategory: "DE.CM-06",
          category: "Continuous Monitoring (DE.CM)",
          level: "important",
          isKey: false,
          req: "External service providers' conformance with personnel security policies and procedures and contract security requirements shall be monitored relative to their cybersecurity risks."
        },
        {
          id: "DE.CM-09.1",
          subcategory: "DE.CM-09",
          category: "Continuous Monitoring (DE.CM)",
          level: "important",
          isKey: false,
          req: "The organisation shall monitor computing hardware, software, runtime environments, and their data to detect potentially adverse events."
        },
        {
          id: "DE.CM-09.2",
          subcategory: "DE.CM-09",
          category: "Continuous Monitoring (DE.CM)",
          level: "essential",
          isKey: false,
          req: "The organisation shall implement hardware integrity checks to detect unauthorised tampering of critical system hardware. Controls shall be proportionate to the organisation’s risk profile and operational capacity."
        },
        {
          id: "DE.CM-09.3",
          subcategory: "DE.CM-09",
          category: "Continuous Monitoring (DE.CM)",
          level: "essential",
          isKey: false,
          req: "The organisation's incident response plan shall include measures to detect unauthorised tampering with the hardware of critical systems."
        },
        {
          id: "DE.CM-09.4",
          subcategory: "DE.CM-09",
          category: "Continuous Monitoring (DE.CM)",
          level: "essential",
          isKey: false,
          req: "The organisation shall establish a system to accurately distinguish between legitimate alerts and false positives, ensuring effective detection and removal of malicious code."
        },
        {
          id: "DE.AE-02.1",
          subcategory: "DE.AE-02",
          category: "Adverse Event Analysis (DE.AE)",
          level: "important",
          isKey: false,
          req: "Cybersecurity and information security events shall be reviewed and analysed to identify potential attack targets and methods, in accordance with applicable laws, regulations, standards, and policies."
        },
        {
          id: "DE.AE-02.2",
          subcategory: "DE.AE-02",
          category: "Adverse Event Analysis (DE.AE)",
          level: "essential",
          isKey: false,
          req: "The organisation shall implement automated mechanisms where feasible to review and analyse detected events."
        },
        {
          id: "DE.AE-03.1",
          subcategory: "DE.AE-03",
          category: "Adverse Event Analysis (DE.AE)",
          level: "basic",
          isKey: true,
          req: "The logging functionality of protection and detection tools shall be enabled. Logs shall be backed up and retained for a predefined period, and regularly reviewed to identify unusual or potentially harmful activity."
        },
        {
          id: "DE.AE-03.2",
          subcategory: "DE.AE-03",
          category: "Adverse Event Analysis (DE.AE)",
          level: "important",
          isKey: false,
          req: "The organisation shall ensure that event data from critical systems is collected and correlated using information from multiple relevant sources."
        },
        {
          id: "DE.AE-03.3",
          subcategory: "DE.AE-03",
          category: "Adverse Event Analysis (DE.AE)",
          level: "essential",
          isKey: false,
          req: "The organisation shall combine event analysis with information from vulnerability scans, system performance data, monitoring of critical systems, and facility monitoring, where feasible."
        },
        {
          id: "DE.AE-04.1",
          subcategory: "DE.AE-04",
          category: "Adverse Event Analysis (DE.AE)",
          level: "essential",
          isKey: false,
          isManagement: true,
          req: "The organisation shall assess the negative impacts of detected events on its operations, assets, and individuals, and shall link these impacts to the results of its risk assessments."
        },
        {
          id: "DE.AE-06.1",
          subcategory: "DE.AE-06",
          category: "Adverse Event Analysis (DE.AE)",
          level: "important",
          isKey: false,
          req: "Information about adverse events shall be promptly delivered to authorised personnel and systems to enable timely detection, investigation, and response."
        },
        {
          id: "DE.AE-08.1",
          subcategory: "DE.AE-08",
          category: "Adverse Event Analysis (DE.AE)",
          level: "important",
          isKey: false,
          req: "Incidents shall be reported when adverse events meet defined and documented incident criteria."
        }
      ]
    },
    {
      code: "RS",
      name: "RESPOND",
      color: "rose",
      desc: "Incident response plan execution, containment of adverse events, root cause forensics, and regulatory incident reporting to authorities (CSIRT).",
      controls: [
        {
          id: "RS.MA-01.1",
          subcategory: "RS.MA-01",
          category: "Incident Management (RS.MA)",
          level: "basic",
          isKey: false,
          req: "An incident response plan, including defined roles, responsibilities, and authorities, shall be executed during or after a cybersecurity event affecting the organisation's critical systems."
        },
        {
          id: "RS.MA-01.2",
          subcategory: "RS.MA-01",
          category: "Incident Management (RS.MA)",
          level: "important",
          isKey: false,
          req: "The organisation shall coordinate information/cybersecurity incident response actions with all predefined stakeholders."
        },
        {
          id: "RS.MA-02.1",
          subcategory: "RS.MA-02",
          category: "Incident Management (RS.MA)",
          level: "important",
          isKey: false,
          req: "Information/cybersecurity incident reports shall be triaged and validated in accordance with the organisation’s incident response procedures."
        },
        {
          id: "RS.MA-02.2",
          subcategory: "RS.MA-02",
          category: "Incident Management (RS.MA)",
          level: "essential",
          isKey: false,
          req: "Automated tools shall be used to support the investigation and impact assessment of validated cybersecurity incidents."
        },
        {
          id: "RS.MA-03.1",
          subcategory: "RS.MA-03",
          category: "Incident Management (RS.MA)",
          level: "important",
          isKey: false,
          req: "Information/cybersecurity incidents shall be categorised, prioritised and escalated as specified in the incident response plan."
        },
        {
          id: "RS.MA-05.1",
          subcategory: "RS.MA-05",
          category: "Incident Management (RS.MA)",
          level: "important",
          isKey: false,
          req: "Clear criteria shall be defined and applied to determine when incident recovery processes need to be initiated."
        },
        {
          id: "RS.AN-03.1",
          subcategory: "RS.AN-03",
          category: "Incident Analysis (RS.AN)",
          level: "essential",
          isKey: false,
          req: "Each incident shall be analysed to determine what occurred and to identify its root cause."
        },
        {
          id: "RS.AN-06.1",
          subcategory: "RS.AN-06",
          category: "Incident Analysis (RS.AN)",
          level: "essential",
          isKey: false,
          req: "Actions performed during an investigation shall be recorded, and the records' integrity and provenance shall be preserved."
        },
        {
          id: "RS.AN-07.1",
          subcategory: "RS.AN-07",
          category: "Incident Analysis (RS.AN)",
          level: "essential",
          isKey: false,
          req: "Incident data and metadata shall be collected and protected to ensure their accuracy, authenticity, and traceability."
        },
        {
          id: "RS.AN-08.1",
          subcategory: "RS.AN-08",
          category: "Incident Analysis (RS.AN)",
          level: "essential",
          isKey: false,
          req: "An incident’s magnitude shall be estimated and validated."
        },
        {
          id: "RS.CO-02.1",
          subcategory: "RS.CO-02",
          category: "Reporting & Communication (RS.CO)",
          level: "basic",
          isKey: false,
          req: "Information about cybersecurity incidents shall be communicated to employees in a way that is clear and easy to understand."
        },
        {
          id: "RS.CO-02.2",
          subcategory: "RS.CO-02",
          category: "Reporting & Communication (RS.CO)",
          level: "important",
          isKey: true,
          req: "Cybersecurity incidents shall be shared with relevant external stakeholders within the timeframes defined in the Incident Response Plan, including reporting significant incidents to authorities as required by law."
        },
        {
          id: "RS.MI-01.1",
          subcategory: "RS.MI-01",
          category: "Incident Mitigation (RS.MI)",
          level: "important",
          isKey: false,
          req: "Cybersecurity incidents shall be contained and eliminated. Any decision to accept and retain certain cybersecurity risks shall be formally documented."
        },
        {
          id: "RS.MI-01.2",
          subcategory: "RS.MI-01",
          category: "Incident Mitigation (RS.MI)",
          level: "important",
          isKey: true,
          req: "The organisation shall detect unauthorised access or data leakage and take appropriate mitigation actions, including monitoring of critical systems at external boundaries and key internal points."
        }
      ]
    },
    {
      code: "RC",
      name: "RECOVER",
      color: "teal",
      desc: "Incident recovery plan execution, system restoration, asset integrity verification, and crisis communications.",
      controls: [
        {
          id: "RC.RP-01.1",
          subcategory: "RC.RP-01",
          category: "Recovery Plan Execution (RC.RP)",
          level: "basic",
          isKey: false,
          req: "A recovery process for disasters and information/cybersecurity incidents shall be developed and executed."
        },
        {
          id: "RC.RP-02.1",
          subcategory: "RC.RP-02",
          category: "Recovery Plan Execution (RC.RP)",
          level: "essential",
          isKey: false,
          req: "The organisation's essential functions and services shall be continued with little or no loss of operational continuity, and continuity shall be maintained until full system recovery."
        },
        {
          id: "RC.RP-05.1",
          subcategory: "RC.RP-05",
          category: "Recovery Plan Execution (RC.RP)",
          level: "important",
          isKey: false,
          req: "The integrity of restored systems and assets shall be verified before they are returned to service. Systems and services shall be fully restored, and normal operations shall be confirmed."
        },
        {
          id: "RC.RP-06.1",
          subcategory: "RC.RP-06",
          category: "Recovery Plan Execution (RC.RP)",
          level: "important",
          isKey: false,
          req: "The end of incident recovery shall be formally declared based on predefined criteria, and all incident-related documentation shall be completed and reviewed."
        },
        {
          id: "RC.CO-03.1",
          subcategory: "RC.CO-03",
          category: "Recovery Communication (RC.CO)",
          level: "important",
          isKey: false,
          isManagement: true,
          req: "Recovery activities and progress in restoring operational capabilities shall be communicated to designated internal and external stakeholders in accordance with established communication procedures."
        },
        {
          id: "RC.CO-04.1",
          subcategory: "RC.CO-04",
          category: "Recovery Communication (RC.CO)",
          level: "important",
          isKey: false,
          req: "Public updates on incident recovery shall be shared using approved communication methods and messaging, in accordance with established procedures."
        },
        {
          id: "RC.CO-04.2",
          subcategory: "RC.CO-04",
          category: "Recovery Communication (RC.CO)",
          level: "essential",
          isKey: false,
          req: "The organisation shall assign a Public Relations Officer (PRO) to manage public communications during information/cybersecurity incident recovery, ensuring that public updates are shared while maintaining the confidentiality, integrity, and accuracy of the information."
        },
        {
          id: "RC.CO-04.3",
          subcategory: "RC.CO-04",
          category: "Recovery Communication (RC.CO)",
          level: "essential",
          isKey: false,
          req: "The organisation shall implement a crisis communication strategy to mitigate negative impacts during a crisis and help restore its reputation afterward."
        }
      ]
    }
  ]
};

if (typeof module !== "undefined") {
  module.exports = NIS2_DATA;
}
