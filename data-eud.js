// End User Devices - Questions extracted from vendor emissions assessment framework
// Each response score uses the spreadsheet's 0,1,3,5,7,10 scale
// Weight (1-10) reflects importance for enabling design decisions

const EUD_QUESTIONS = {
  id: 'eud',
  name: 'End User Devices',
  description: 'Laptops, desktops, monitors, tablets, phones and peripherals',
  sections: [
    {
      name: 'Scope 2 — Energy & Power Data',
      description: 'How accurately can the vendor tell you the energy consumption of the specific devices they are proposing? Better power data means your teams can model operational carbon with confidence.',
      questions: [
        {
          id: 'eud-s2-1',
          category: 'Power Metrics',
          question: 'Is the rated power and estimated in-life power data provided specific to the proposed configuration of the device, or does it represent an average for similar models?',
          explanation: 'Evaluates the specificity of power data provided. Specific configuration data ensures more accurate power usage estimates.',
          designImpact: 'Without configuration-specific power data, your team cannot accurately compare the operational carbon cost of choosing one device over another. Generic averages can be 30-50% off from real-world consumption.',
          weight: 9,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'We do not provide specific power data for the proposed configuration.', score: 1 },
            { text: 'Power data is a broad average across multiple models, not specific to this configuration or model type.', score: 3 },
            { text: 'Power data is closely aligned with the proposed configuration, with some supporting detail.', score: 5 },
            { text: 'Power data is exact and fully specific to the proposed configuration, supported by detailed documentation.', score: 7 }
          ]
        },
        {
          id: 'eud-s2-2',
          question: 'What methodology or process was followed to calculate the rated and estimated in-life power figures?',
          explanation: 'Assesses the thoroughness and credibility of the methodology used for power calculations.',
          designImpact: 'Credible methodology means you can trust the power figures when comparing products. Without it, you are relying on unverified claims.',
          weight: 8,
          responses: [
            { text: 'We do not specify a methodology or process for calculating power figures.', score: 1 },
            { text: 'A basic methodology is provided, but it lacks detailed explanation or standardisation.', score: 3 },
            { text: 'We use recognised industry standards to calculate power figures, with partial documentation.', score: 5 },
            { text: 'Our methodology is auditable, fully standardised, comprehensively documented, and backed by detailed evidence.', score: 7 }
          ]
        },
        {
          id: 'eud-s2-3',
          question: 'What assumptions have been made regarding typical operating conditions to estimate power usage (e.g., user working patterns)?',
          explanation: 'Checks transparency in the assumptions for power usage estimates, revealing potential biases.',
          designImpact: 'Operating condition assumptions drive huge variance. A device tested at idle will show very different energy use than one tested under typical enterprise workloads.',
          weight: 7,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'We have not provided assumptions regarding operating conditions.', score: 1 },
            { text: 'General assumptions are used, but they are not specified in detail.', score: 3 },
            { text: 'Some assumptions regarding typical operating conditions are provided, with moderate detail.', score: 5 },
            { text: 'Detailed assumptions about operating conditions are fully outlined and supported by relevant data.', score: 7 }
          ]
        },
        {
          id: 'eud-s2-4',
          question: 'Has the power data been independently verified or audited by a third party? If so, by whom and under what standards?',
          explanation: 'Verifies the credibility of the power data through third-party audits or certifications.',
          designImpact: 'Third-party verification transforms vendor claims into trustworthy data you can use with confidence in carbon baselines.',
          weight: 8,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No independent verification or audit has been conducted on the power data.', score: 1 },
            { text: 'Limited mention of third-party review is included, but details are not provided.', score: 3 },
            { text: 'Third-party verification is referenced, but supporting documentation is limited.', score: 5 },
            { text: 'The power data is fully verified by a recognised third party, with comprehensive supporting documentation.', score: 7 }
          ]
        },
        {
          id: 'eud-s2-5',
          question: 'Is the hardware supplied with power management features?',
          explanation: 'Ensures that power-saving technologies are included in the data.',
          designImpact: 'Power management features can reduce device energy consumption by 30-60%. Knowing what is available helps your teams specify lower-carbon configurations.',
          weight: 6,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'We do not have or include power management features for this device.', score: 1 },
            { text: 'Basic power management features are mentioned, without supporting details. These are not included in the provided power metrics.', score: 3 },
            { text: 'Most power management features are documented with clear descriptions.', score: 5 },
            { text: 'All relevant power management features are fully documented and supported by data.', score: 7 }
          ]
        },
        {
          id: 'eud-s2-6',
          question: 'Are power management features enabled by default (e.g., sleep mode), and are these documented in the power data?',
          explanation: 'Confirms whether energy-saving defaults are active out of the box.',
          designImpact: 'Default-on power management means carbon savings are realised immediately at deployment without requiring additional configuration by IT teams.',
          weight: 5,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No', score: 1 },
            { text: 'Yes', score: 3 }
          ]
        },
        {
          id: 'eud-s2-7',
          question: 'Are the power consumption measurements compliant with any industry standards (e.g., ENERGY STAR, IEC 62301)?',
          explanation: 'Confirms compliance with recognised measurement standards.',
          designImpact: 'Standards compliance ensures power data is measured consistently, enabling fair comparison between vendors and products.',
          weight: 7,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'We do not indicate compliance with any industry standards.', score: 1 },
            { text: 'Basic compliance with standards is mentioned, but supporting evidence is not provided.', score: 3 },
            { text: 'Full compliance with multiple industry standards and/or comprehensive supporting evidence is provided.', score: 5 }
          ]
        },
        {
          id: 'eud-s2-8',
          question: 'Is the source of the power consumption data clearly stated? (e.g., manufacturer tests, independent labs, real-world historic data).',
          explanation: 'Ensures data source transparency and reliability, and that lab-reported power figures are validated with real-world data.',
          designImpact: 'Knowing whether power data comes from lab tests or real-world measurements helps you assess how closely it will match your actual deployments.',
          weight: 6,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No', score: 1 },
            { text: 'Yes', score: 3 }
          ]
        }
      ]
    },
    {
      name: 'Scope 3 — Embodied Carbon',
      description: 'For end-user devices, embodied carbon (manufacturing, materials, transport) typically represents 70-80% of total lifecycle emissions. The quality of this data fundamentally determines whether you can make meaningful procurement choices.',
      questions: [
        {
          id: 'eud-s3-1',
          category: 'General Data Transparency and Methodology',
          question: 'Are the Scope 3 emissions figures based on the exact device configuration being proposed, or an average across a product line?',
          explanation: 'Ensures specificity in reported data, allowing for greater accuracy in understanding true environmental impact.',
          designImpact: 'Configuration-specific data lets your team compare the actual carbon cost of adding more RAM, a larger screen, or a different processor — enabling genuinely lower-carbon specifications.',
          weight: 10,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No specific emissions figures are available for the proposed configuration.', score: 1 },
            { text: 'Emissions figures are broad averages across multiple products.', score: 3 },
            { text: 'Emissions figures are specific to the product line, though not down to the individual configuration.', score: 5 },
            { text: 'Emissions figures are exact and specific to the proposed device configuration, with supporting evidence.', score: 7 }
          ]
        },
        {
          id: 'eud-s3-2',
          question: 'What methodology was used to calculate the embodied carbon emissions for manufacturing, transport, and end-of-life stages?',
          explanation: 'Assesses the reliability and comprehensiveness of the carbon emissions approach.',
          designImpact: 'The methodology determines whether embodied carbon figures are grounded in actual product analysis or rough estimates. This is the foundation of all lifecycle carbon calculations.',
          weight: 10,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'We have not provided a methodology for calculating embodied carbon emissions.', score: 1 },
            { text: 'No clear methodology is used or referenced in the data provided.', score: 3 },
            { text: 'A general methodology is used but does not align with recognised standards.', score: 5 },
            { text: 'The methodology aligns with a recognised standard (e.g., ISO 14067) but lacks in-depth reporting.', score: 7 },
            { text: 'A comprehensive methodology using recognised standards is applied, fully detailed and externally verified.', score: 10 }
          ]
        },
        {
          id: 'eud-s3-3',
          question: 'Please confirm the methodology used to calculate embodied carbon.',
          explanation: 'Assess the methodology used at a basic level.',
          designImpact: 'Different LCA methodologies have different strengths. Process-based LCAs give product-level precision; economic models give broader system views. Understanding which is used tells you what the data can and cannot tell you.',
          weight: 8,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Process-Based LCAs (Product-Level Assessment) — such as PLCA, PEF, EPD (ISO 14025), ISO 14067, Circular Footprint Formula', score: 1 },
            { text: 'Economic & Hybrid LCAs (Broader System-Level) — such as EIO-LCA, Hybrid LCA, Material Flow Analysis', score: 3 },
            { text: 'Data-Driven & AI-Based LCA Approaches — such as Digital Twin-Based LCA, PAIA (MIT)', score: 5 },
            { text: 'Corporate & Supply Chain Carbon Accounting — such as GHG Protocol, PAS 2050, Pathfinder Framework (WBCSD)', score: 7 },
            { text: 'Multiple methodologies using a combined approach.', score: 10 }
          ]
        },
        {
          id: 'eud-s3-4',
          question: 'Does the methodology specify whether primary or secondary data was used for different lifecycle phases (e.g., material acquisition, manufacturing)?',
          explanation: 'Reveals potential weaknesses or strengths in data quality, ensuring transparency in lifecycle analysis.',
          designImpact: 'Primary data (direct measurements) is far more accurate than secondary data (databases/estimates). Knowing the mix tells you how much to trust the figures.',
          weight: 7,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No differentiation between primary and secondary data is provided.', score: 1 },
            { text: 'Data types are mentioned, but specific lifecycle phases are not identified.', score: 3 },
            { text: 'Data types for most lifecycle phases are specified, but detail is limited.', score: 5 },
            { text: 'Primary and secondary data usage is fully specified for each phase, with comprehensive evidence.', score: 7 }
          ]
        },
        {
          id: 'eud-s3-5',
          question: 'What data collection techniques were used for gathering the lifecycle data (e.g., direct measurements, supplier questionnaires, estimates)?',
          explanation: 'Clarifies the rigour of data collection practices.',
          designImpact: 'Direct measurements and supplier engagement produce more reliable data than desk-based estimates. This directly affects whether carbon comparisons between products are meaningful.',
          weight: 7,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No data collection techniques are described.', score: 1 },
            { text: 'Basic descriptions of data collection techniques are provided, without specifics.', score: 3 },
            { text: 'Data collection techniques are mentioned but lack detail on specific methods.', score: 5 },
            { text: 'A comprehensive explanation of data collection techniques is provided, including direct measurements and supplier engagement, supported by examples.', score: 7 }
          ]
        },
        {
          id: 'eud-s3-6',
          question: 'How often are your emissions factors and data points updated?',
          explanation: 'Verifies the relevance of the data to current standards and practices.',
          designImpact: 'Outdated emissions factors can misrepresent current manufacturing processes. Regular updates mean the data reflects actual improvements (or deterioration) in the supply chain.',
          weight: 6,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'We do not review emission factors once published.', score: 1 },
            { text: 'A mix of up-to-date and data older than 2-years is used, with moderate reliability.', score: 3 },
            { text: 'Most data is recent, with some verification on updates.', score: 5 },
            { text: 'Emissions factors are updated every time the product is changed.', score: 7 }
          ]
        },
        {
          id: 'eud-s3-7',
          question: 'Are there clearly defined boundaries for the LCA (e.g., cradle-to-gate, cradle-to-grave), and are any lifecycle phases excluded?',
          explanation: 'Ensures transparency and scope completeness of the LCA.',
          designImpact: 'If the LCA only covers cradle-to-gate (missing use-phase and end-of-life), you could be missing 20-40% of total lifecycle emissions, leading to incomplete design decisions.',
          weight: 9,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No boundaries or exclusions are defined in the LCA.', score: 1 },
            { text: 'Basic boundaries are defined, but exclusions are unclear.', score: 3 },
            { text: 'Clear boundaries are provided, with most exclusions specified.', score: 5 },
            { text: 'Detailed boundaries are outlined, with all exclusions fully specified and justified.', score: 7 }
          ]
        },
        {
          id: 'eud-s3-8',
          question: 'Do you contractually mandate your vendors to supply carbon emissions data with their product/service?',
          explanation: 'Ensures data source transparency and reliability through contractual obligation.',
          designImpact: 'Contractual obligations on suppliers drive better data quality through the supply chain and signal a mature approach to carbon accounting.',
          weight: 6,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No vendors are contractually obliged to provide carbon data.', score: 1 },
            { text: 'Strategic vendors are contractually obliged to provide carbon data.', score: 3 },
            { text: 'All vendors are contractually obliged to provide carbon data.', score: 5 }
          ]
        },
        {
          id: 'eud-s3-9',
          question: 'Were any data gaps identified during the LCA, and what methods were used to fill these gaps?',
          explanation: 'Assesses the completeness of the methodology and data. Covers use of proxy data, exclusions (such as software) and key assumptions.',
          designImpact: 'Transparent data gaps let you assess exactly where uncertainty lies. Hidden gaps mean you might be making decisions based on incomplete pictures.',
          weight: 8,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'We have not identified or disclosed any data gaps or exclusions in the LCA.', score: 1 },
            { text: 'Data gaps are identified in general terms, but not specified as excluded in the LCA.', score: 3 },
            { text: 'Within the LCA some data gaps are noted, with basic explanations of methods used.', score: 5 },
            { text: 'The LCA includes a comprehensive identification and explanation of data gaps, with robust methods for addressing them, supported by evidence.', score: 7 }
          ]
        },
        {
          id: 'eud-s3-10',
          category: 'Specific Lifecycle Stages',
          question: 'Does the Scope 3 data include emissions from all tiers of the supply chain, including subcontractors and raw material suppliers?',
          explanation: 'Evaluates the depth of the supply chain coverage.',
          designImpact: 'Tier 1-only supply chain data can miss 40-60% of manufacturing emissions. Deep supply chain visibility is essential for accurate product carbon footprints.',
          weight: 8,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Supply chain emissions are not included beyond Tier 1.', score: 1 },
            { text: 'Emissions data includes Tier 1 and some Tier 2 suppliers.', score: 3 },
            { text: 'Emissions data includes detailed Tier 1 & Tier 2 coverage, with some inclusion of key Tier 3 suppliers.', score: 5 },
            { text: 'Emissions data comprehensively covers all relevant supply chain tiers, supported by detailed evidence.', score: 7 }
          ]
        },
        {
          id: 'eud-s3-11',
          question: 'What data sources were used for the carbon calculations (e.g., supplier data, industry averages, specific lifecycle assessments)?',
          explanation: 'Checks the accuracy and credibility of input data sources.',
          designImpact: 'Supplier-specific data is far more accurate than industry averages. The proportion of primary vs proxy data directly indicates how much you can trust product comparisons.',
          weight: 8,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Data sources are unclear or generic, based on proxies.', score: 1 },
            { text: 'Industry averages are used, supported by supplier specific data where available (less than 30% is supplier specific).', score: 3 },
            { text: 'Specific supplier data is used (60% or more) with some lifecycle assessments.', score: 5 },
            { text: 'Verified supplier data and specific lifecycle assessments are used comprehensively, with supporting evidence.', score: 7 }
          ]
        },
        {
          id: 'eud-s3-12',
          question: 'When supplier specific data is used, has this data been validated or qualified to assess coverage and data quality?',
          explanation: 'Checks the accuracy and credibility of input data sources.',
          designImpact: 'Unvalidated supplier data may be inaccurate or incomplete. Validation ensures the data you are using for decisions has been quality-checked.',
          weight: 7,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No', score: 1 },
            { text: 'Yes', score: 3 }
          ]
        },
        {
          id: 'eud-s3-13',
          question: 'Are the emissions from transport based on actual logistics data specific to the supply chain of the proposed devices, or are they estimated using industry averages?',
          explanation: 'Confirms the accuracy of transport emissions data.',
          designImpact: 'Transport can represent 5-15% of product carbon. Actual logistics data enables decisions about local vs global sourcing and shipping mode choices.',
          weight: 5,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Emissions from transport are based on industry averages, without specific logistics data.', score: 1 },
            { text: 'Mostly actual logistics data is used, with detailed information.', score: 3 },
            { text: 'Comprehensive transport emissions data is based on actual logistics, fully supported by evidence.', score: 5 }
          ]
        },
        {
          id: 'eud-s3-14',
          question: 'Do you verify the proportion of renewable energy used during manufacturing with your energy provider(s)?',
          explanation: 'Confirms renewable energy use and its substantiation.',
          designImpact: 'Verified renewable energy in manufacturing can significantly reduce embodied carbon. Unverified claims may overstate carbon reductions.',
          weight: 6,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Renewable energy use in manufacturing is not reported.', score: 1 },
            { text: 'Minimal renewable energy use is reported or tracked, with no verification.', score: 3 },
            { text: 'A significant portion of renewable energy use is reported, with verification.', score: 5 },
            { text: 'Renewable energy provision is fully verified at source with energy providers and is supported by evidence.', score: 7 }
          ]
        },
        {
          id: 'eud-s3-15',
          category: 'Circular Economy and Sustainability Practices',
          question: 'Is the percentage of recycled materials used in the manufacturing process detailed, and how was this percentage determined?',
          explanation: 'Verifies the product\'s alignment with circular economy principles.',
          designImpact: 'Recycled content directly reduces embodied carbon from raw material extraction. Detailed data lets your teams factor circularity into procurement scoring.',
          weight: 6,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'We do not report on recycled materials used in manufacturing.', score: 1 },
            { text: 'Minimal recycled content is reported without details on determination.', score: 3 },
            { text: 'Recycled content is mentioned, with basic details on how the percentage is determined.', score: 5 },
            { text: 'Significant recycled content is reported, with some verification on determination.', score: 7 },
            { text: 'High recycled content is reported, with full verification and supporting evidence on determination methods. This includes full end-of-life treatment data.', score: 10 }
          ]
        },
        {
          id: 'eud-s3-16',
          question: 'Is the product designed to support extended use and repairability to minimise lifecycle emissions?',
          explanation: 'Assesses sustainability features related to product design.',
          designImpact: 'Extending device lifetime from 4 to 6 years can reduce annualised embodied carbon by 33%. Repairability data directly informs refresh cycle decisions.',
          weight: 7,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'The product is not designed with features for extended use or repairability.', score: 1 },
            { text: 'Basic design elements are included, with minimal support for extended use.', score: 3 },
            { text: 'Moderate design focus on repairability and extended use is provided.', score: 5 },
            { text: 'Clear design features support extended use and repairability.', score: 7 },
            { text: 'The product is comprehensively designed for a long lifecycle, with easy repairability, supported by detailed documentation.', score: 10 }
          ]
        },
        {
          id: 'eud-s3-17',
          question: 'How much of the product\'s materials can be recycled at the end of its life, and what process was used to assess this?',
          explanation: 'Checks the product\'s end-of-life sustainability potential.',
          designImpact: 'End-of-life recyclability affects the circular economy impact. Knowing recyclability rates helps your teams design responsible disposal processes.',
          weight: 6,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'End-of-life recyclability details are not provided.', score: 1 },
            { text: 'Minimal recyclability is reported, without an assessment method.', score: 3 },
            { text: 'Moderate recyclability is reported, with a basic assessment process.', score: 5 },
            { text: 'Significant recyclability is reported, with a partially detailed assessment process.', score: 7 },
            { text: 'High recyclability is reported, with a fully detailed assessment process and supporting evidence.', score: 10 }
          ]
        },
        {
          id: 'eud-s3-18',
          category: 'Broader Environmental and ESG Factors',
          question: 'Is water usage during manufacturing and its associated environmental impact measured and presented?',
          explanation: 'Evaluates the consideration of additional environmental impacts.',
          designImpact: 'Semiconductor manufacturing is water-intensive. Water usage data gives a more complete picture of environmental impact beyond carbon alone.',
          weight: 5,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Water usage impact is not included.', score: 1 },
            { text: 'Basic reporting of water usage is provided, with limited environmental impact detail.', score: 3 },
            { text: 'Detailed reporting of water usage and partial environmental impact is provided.', score: 5 },
            { text: 'Comprehensive reporting of water usage impact, with detailed environmental impact included.', score: 7 }
          ]
        },
        {
          id: 'eud-s3-19',
          question: 'Are waste management practices during the manufacturing process detailed, and how do they contribute to overall environmental impact?',
          explanation: 'Assesses the impact of waste management on total environmental impact.',
          designImpact: 'Manufacturing waste practices indicate overall environmental maturity and can reveal hidden environmental costs of production.',
          weight: 4,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Waste management practices are not reported in the manufacturing process.', score: 1 },
            { text: 'Basic waste management practices are mentioned, with minimal impact detail.', score: 3 },
            { text: 'Moderate detail is provided on waste management practices and their impact.', score: 5 },
            { text: 'Detailed waste management practices and good environmental reporting are provided.', score: 7 },
            { text: 'Comprehensive waste management practices are fully documented, with a complete analysis of their impact.', score: 10 }
          ]
        },
        {
          id: 'eud-s3-20',
          question: 'Are the social and environmental impacts of raw material extraction (e.g., mining practices) assessed and disclosed?',
          explanation: 'Checks the data\'s alignment with broader ESG criteria.',
          designImpact: 'Raw material extraction impacts (conflict minerals, rare earth mining) are increasingly important for responsible procurement beyond carbon alone.',
          weight: 4,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No assessment or disclosure on raw material extraction impacts is provided.', score: 1 },
            { text: 'Basic assessment is conducted, with minimal disclosure.', score: 3 },
            { text: 'Moderate assessment is provided, with some disclosure.', score: 5 },
            { text: 'Detailed assessment is provided, with good disclosure of impacts.', score: 7 },
            { text: 'Comprehensive assessment is conducted, with full disclosure on social and environmental impacts, supported by evidence.', score: 10 }
          ]
        }
      ]
    }
  ]
};
