// Core Infrastructure Hardware - Servers, Storage, Networking
// Questions extracted from vendor emissions assessment framework

const INFRA_QUESTIONS = {
  id: 'infrastructure',
  name: 'Core Infrastructure',
  description: 'Servers, storage arrays, networking equipment and data centre hardware',
  sections: [
    {
      name: 'Scope 2 — Energy & Power Data',
      description: 'Infrastructure runs 24/7, making use-phase energy the dominant factor for operational carbon. Accurate power data at the right granularity is essential for right-sizing, consolidation decisions, and setting meaningful PUE-adjusted baselines.',
      questions: [
        {
          id: 'infra-s2-1',
          category: 'Power Metrics',
          question: 'Is the rated power and estimated in-life power data provided specific to the proposed configuration of the device, or does it represent an average for similar models?',
          explanation: 'Evaluates the specificity of power data provided. Specific configuration data ensures more accurate power usage estimates.',
          designImpact: 'Server configurations vary enormously in power draw. A 2U server with 2 CPUs and 512GB RAM has very different power characteristics to one with 4 CPUs and 2TB RAM. Generic averages are useless for capacity planning.',
          weight: 10,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'We do not provide specific power data for the proposed configuration.', score: 1 },
            { text: 'Power data is a broad average across multiple models, not specific to this configuration or model type.', score: 3 },
            { text: 'Power data is closely aligned with the proposed configuration, with some supporting detail.', score: 5 },
            { text: 'Power data is exact and fully specific to the proposed configuration, supported by detailed documentation.', score: 7 }
          ]
        },
        {
          id: 'infra-s2-2',
          question: 'What methodology or process was followed to calculate the rated and estimated in-life power figures?',
          explanation: 'Assesses the thoroughness and credibility of the methodology used for power calculations.',
          designImpact: 'Standardised methodologies (like SPECpower) enable fair comparison between vendors. Without them, you are comparing apples to oranges.',
          weight: 8,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'We do not specify a methodology or process for calculating power figures.', score: 1 },
            { text: 'A basic methodology is provided, but it lacks detailed explanation or standardisation.', score: 3 },
            { text: 'We use recognised industry standards to calculate power figures, with partial documentation.', score: 5 },
            { text: 'Our methodology is auditable, fully standardised, comprehensively documented, and backed by detailed evidence.', score: 7 }
          ]
        },
        {
          id: 'infra-s2-3',
          question: 'What assumptions have been made regarding typical operating conditions to estimate power usage (e.g., cooling power allocation)?',
          explanation: 'Checks transparency in the assumptions for power usage estimates, revealing potential biases.',
          designImpact: 'Server power at idle can be 40-60% of peak. Cooling allocation assumptions can add 30-100% overhead. Without transparency here, your carbon models could be wildly inaccurate.',
          weight: 8,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'We have not provided assumptions regarding operating conditions.', score: 1 },
            { text: 'General assumptions are used, but they are not specified in detail.', score: 3 },
            { text: 'Detailed assumptions about operating conditions are fully outlined and supported by relevant data.', score: 5 }
          ]
        },
        {
          id: 'infra-s2-4',
          question: 'Has the power data been independently verified or audited by a third party? If so, by whom and under what standards?',
          explanation: 'Verifies the credibility of the power data through third-party audits or certifications.',
          designImpact: 'Independent verification of server power data ensures your capacity planning and carbon calculations are based on trustworthy figures.',
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
          id: 'infra-s2-5',
          question: 'Is the hardware supplied with power management features?',
          explanation: 'Ensures that power-saving technologies are included in the data.',
          designImpact: 'Features like dynamic frequency scaling, power capping, and intelligent cooling can reduce server energy by 10-30%. Knowing what is available helps optimise infrastructure carbon.',
          weight: 7,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'We do not have or include power management features for this device.', score: 1 },
            { text: 'Basic power management features are mentioned, without supporting details.', score: 3 },
            { text: 'Most power management features are documented with clear descriptions.', score: 5 },
            { text: 'All relevant power management features are fully documented and supported by data.', score: 7 }
          ]
        },
        {
          id: 'infra-s2-6',
          question: 'Are power management features enabled by default (e.g., sleep mode, automatic power scaling), and are these documented in the power data?',
          explanation: 'Confirms whether energy-saving defaults are active out of the box.',
          designImpact: 'Default-enabled power management on servers reduces the risk that energy savings are lost due to missed configuration steps during deployment.',
          weight: 5,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No', score: 1 },
            { text: 'Yes', score: 3 }
          ]
        },
        {
          id: 'infra-s2-7',
          question: 'Are the power consumption measurements compliant with any industry standards (e.g., ENERGY STAR, IEC 62301, ISO 30134, ISO/IEC 21836, TCO Certified, ETSI ES 203 228, ITU-T L.1310, EU Code of Conduct for Energy Efficiency in Data Centres)?',
          explanation: 'Confirms compliance with recognised measurement standards.',
          designImpact: 'Data centre-specific standards like ISO 30134 and the EU Code of Conduct provide frameworks for consistent, comparable energy measurement across infrastructure vendors.',
          weight: 7,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'We do not indicate compliance with any industry standards.', score: 1 },
            { text: 'Basic compliance with standards is mentioned, but supporting evidence is not provided.', score: 3 },
            { text: 'Full compliance with multiple industry standards and/or comprehensive supporting evidence is provided.', score: 5 }
          ]
        },
        {
          id: 'infra-s2-8',
          question: 'Is the source of the power consumption data clearly stated? (e.g., manufacturer tests, independent labs, real-world historic data).',
          explanation: 'Ensures data source transparency and reliability.',
          designImpact: 'Lab-measured power can differ significantly from production workload consumption. Real-world validated data gives much more reliable baselines for your infrastructure carbon planning.',
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
      description: 'While use-phase energy dominates for servers running 24/7, embodied carbon from manufacturing still represents a significant portion of total lifecycle emissions — especially as grids decarbonise and hardware refresh cycles shorten.',
      questions: [
        {
          id: 'infra-s3-1',
          category: 'General Data Transparency and Methodology',
          question: 'Are the Scope 3 emissions figures based on the exact device configuration being proposed, or an average across a product line?',
          explanation: 'Ensures specificity in reported data, allowing for greater accuracy in understanding true environmental impact.',
          designImpact: 'A server with high-spec GPUs has dramatically different embodied carbon to a basic compute node. Configuration-specific data enables informed choices about what to deploy where.',
          weight: 9,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No specific emissions figures are available for the proposed configuration.', score: 1 },
            { text: 'Emissions figures are broad averages across multiple products.', score: 3 },
            { text: 'Emissions figures are specific to the product line, though not down to the individual configuration.', score: 5 },
            { text: 'Emissions figures are exact and specific to the proposed device configuration, with supporting evidence.', score: 7 }
          ]
        },
        {
          id: 'infra-s3-2',
          question: 'What methodology was used to calculate the embodied carbon emissions for manufacturing, transport, and end-of-life stages?',
          explanation: 'Assesses the reliability and comprehensiveness of the carbon emissions approach.',
          designImpact: 'For infrastructure that may run for 5-7 years, accurate embodied carbon data is essential for understanding the true total cost of ownership in carbon terms.',
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
          id: 'infra-s3-3',
          question: 'Please confirm the methodology used to calculate embodied carbon.',
          explanation: 'Assess the methodology used at a basic level.',
          designImpact: 'Understanding which LCA approach is used helps assess the reliability and granularity of embodied carbon figures for infrastructure.',
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
          id: 'infra-s3-4',
          question: 'Does the methodology specify whether primary or secondary data was used for different lifecycle phases?',
          explanation: 'Reveals potential weaknesses or strengths in data quality.',
          designImpact: 'For high-value infrastructure purchases, knowing the data quality behind each lifecycle phase helps you assess confidence in the carbon figures.',
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
          id: 'infra-s3-5',
          question: 'What data collection techniques were used for gathering the lifecycle data?',
          explanation: 'Clarifies the rigour of data collection practices.',
          designImpact: 'Direct measurements from manufacturing lines produce far more accurate embodied carbon figures than database lookups and estimates.',
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
          id: 'infra-s3-6',
          question: 'How often are your emissions factors and data points updated?',
          explanation: 'Verifies the relevance of the data to current standards and practices.',
          designImpact: 'Infrastructure hardware evolves rapidly. Updated emissions data reflects improvements in manufacturing efficiency and changes in supply chain carbon.',
          weight: 6,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'We do not review emission factors once published.', score: 1 },
            { text: 'A mix of up-to-date and data older than 2-years is used.', score: 3 },
            { text: 'Most data is recent, with some verification on updates.', score: 5 },
            { text: 'Emissions factors are updated every time the product is changed.', score: 7 }
          ]
        },
        {
          id: 'infra-s3-7',
          question: 'Are there clearly defined boundaries for the LCA (e.g., cradle-to-gate, cradle-to-grave), and are any lifecycle phases excluded?',
          explanation: 'Ensures transparency and scope completeness of the LCA.',
          designImpact: 'For infrastructure with long operational lifetimes, missing lifecycle phases can create significant blind spots in total carbon accounting.',
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
          id: 'infra-s3-8',
          question: 'Do you contractually mandate your vendors to supply carbon emissions data with their product/service?',
          explanation: 'Ensures data source transparency and reliability through contractual obligation.',
          designImpact: 'Supply chain transparency for infrastructure is crucial given the complexity of server manufacturing involving hundreds of components from dozens of suppliers.',
          weight: 6,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No vendors are contractually obliged to provide carbon data.', score: 1 },
            { text: 'Strategic vendors are contractually obliged to provide carbon data.', score: 3 },
            { text: 'All vendors are contractually obliged to provide carbon data.', score: 5 }
          ]
        },
        {
          id: 'infra-s3-9',
          question: 'Were any data gaps identified during the LCA, and what methods were used to fill these gaps?',
          explanation: 'Assesses the completeness of the methodology and data.',
          designImpact: 'Infrastructure LCAs often have gaps around specialised components (GPUs, custom ASICs). Knowing where gaps exist helps quantify uncertainty.',
          weight: 8,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'We have not identified or disclosed any data gaps or exclusions in the LCA.', score: 1 },
            { text: 'Data gaps are identified in general terms, but not specified as excluded.', score: 3 },
            { text: 'Within the LCA some data gaps are noted, with basic explanations of methods used.', score: 5 },
            { text: 'The LCA includes a comprehensive identification and explanation of data gaps, with robust methods for addressing them.', score: 7 }
          ]
        },
        {
          id: 'infra-s3-10',
          category: 'Specific Lifecycle Stages',
          question: 'Does the Scope 3 data include emissions from all tiers of the supply chain?',
          explanation: 'Evaluates the depth of the supply chain coverage.',
          designImpact: 'Server supply chains are deep and complex. Tier 1-only data misses semiconductor fabrication, rare earth mining, and component manufacturing emissions.',
          weight: 8,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Supply chain emissions are not included beyond Tier 1.', score: 1 },
            { text: 'Emissions data includes Tier 1 and some Tier 2 suppliers.', score: 3 },
            { text: 'Emissions data includes detailed Tier 1 & Tier 2 coverage, with some key Tier 3 suppliers.', score: 5 },
            { text: 'Emissions data comprehensively covers all relevant supply chain tiers, supported by detailed evidence.', score: 7 }
          ]
        },
        {
          id: 'infra-s3-11',
          question: 'What data sources were used for the carbon calculations?',
          explanation: 'Checks the accuracy and credibility of input data sources.',
          designImpact: 'The proportion of verified supplier data vs industry averages directly determines how much confidence you can place in infrastructure carbon comparisons.',
          weight: 8,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Data sources are unclear or generic, based on proxies.', score: 1 },
            { text: 'Industry averages are used, with less than 30% supplier specific data.', score: 3 },
            { text: 'Specific supplier data is used (60% or more) with some lifecycle assessments.', score: 5 },
            { text: 'Verified supplier data and specific lifecycle assessments are used comprehensively.', score: 7 }
          ]
        },
        {
          id: 'infra-s3-12',
          question: 'When supplier specific data is used, has this data been validated or qualified?',
          explanation: 'Checks the accuracy and credibility of input data sources.',
          designImpact: 'Validated supplier data is far more reliable for infrastructure procurement decisions than self-reported, unchecked figures.',
          weight: 7,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No', score: 1 },
            { text: 'Yes', score: 3 }
          ]
        },
        {
          id: 'infra-s3-13',
          question: 'Are the emissions from transport based on actual logistics data or industry averages?',
          explanation: 'Confirms the accuracy of transport emissions data.',
          designImpact: 'Heavy infrastructure equipment has significant transport emissions. Actual logistics data helps evaluate the carbon cost of different delivery options.',
          weight: 5,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Based on industry averages, without specific logistics data.', score: 1 },
            { text: 'Mostly actual logistics data is used, with detailed information.', score: 3 },
            { text: 'Comprehensive transport emissions data based on actual logistics, fully supported by evidence.', score: 5 }
          ]
        },
        {
          id: 'infra-s3-14',
          question: 'Do you verify the proportion of renewable energy used during manufacturing?',
          explanation: 'Confirms renewable energy use and its substantiation.',
          designImpact: 'Verified renewable energy in server manufacturing reduces embodied carbon. This data helps compare vendors on their actual manufacturing sustainability.',
          weight: 6,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Renewable energy use in manufacturing is not reported.', score: 1 },
            { text: 'Minimal renewable energy use is reported, with no verification.', score: 3 },
            { text: 'A significant portion of renewable energy use is reported, with verification.', score: 5 },
            { text: 'Renewable energy provision is fully verified at source with energy providers.', score: 7 }
          ]
        },
        {
          id: 'infra-s3-15',
          category: 'Circular Economy and Sustainability',
          question: 'Is the percentage of recycled materials used in the manufacturing process detailed?',
          explanation: 'Verifies the product\'s alignment with circular economy principles.',
          designImpact: 'Recycled content in server manufacturing directly reduces embodied carbon and supports circular economy objectives.',
          weight: 6,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'We do not report on recycled materials used in manufacturing.', score: 1 },
            { text: 'Minimal recycled content is reported without details.', score: 3 },
            { text: 'Recycled content is mentioned, with basic details on determination.', score: 5 },
            { text: 'Significant recycled content reported, with some verification.', score: 7 },
            { text: 'High recycled content reported, with full verification and end-of-life treatment data.', score: 10 }
          ]
        },
        {
          id: 'infra-s3-16',
          question: 'Is the product designed to support extended use and repairability?',
          explanation: 'Assesses sustainability features related to product design.',
          designImpact: 'Server hardware that can be upgraded (RAM, storage, NICs) extends useful life and defers the embodied carbon of replacement. This is critical for infrastructure refresh planning.',
          weight: 7,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Not designed for extended use or repairability.', score: 1 },
            { text: 'Basic design elements for extended use.', score: 3 },
            { text: 'Moderate design focus on repairability and extended use.', score: 5 },
            { text: 'Clear design features support extended use and repairability.', score: 7 },
            { text: 'Comprehensively designed for long lifecycle, with easy repairability and detailed documentation.', score: 10 }
          ]
        },
        {
          id: 'infra-s3-17',
          question: 'How much of the product\'s materials can be recycled at end of life?',
          explanation: 'Checks end-of-life sustainability potential.',
          designImpact: 'Infrastructure end-of-life recyclability informs your ITAD (IT Asset Disposition) strategy and helps calculate circular economy benefits.',
          weight: 6,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'End-of-life recyclability details are not provided.', score: 1 },
            { text: 'Minimal recyclability reported, without assessment method.', score: 3 },
            { text: 'Moderate recyclability reported, with basic assessment.', score: 5 },
            { text: 'Significant recyclability reported, with partially detailed assessment.', score: 7 },
            { text: 'High recyclability reported, with fully detailed assessment and evidence.', score: 10 }
          ]
        },
        {
          id: 'infra-s3-18',
          category: 'Broader Environmental Factors',
          question: 'Is water usage during manufacturing measured and presented?',
          explanation: 'Evaluates consideration of additional environmental impacts.',
          designImpact: 'Water usage in semiconductor and circuit board manufacturing is significant. This data broadens environmental assessment beyond carbon alone.',
          weight: 5,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Water usage impact is not included.', score: 1 },
            { text: 'Basic reporting of water usage, with limited detail.', score: 3 },
            { text: 'Detailed reporting of water usage and partial environmental impact.', score: 5 },
            { text: 'Comprehensive reporting of water usage with detailed environmental impact.', score: 7 }
          ]
        },
        {
          id: 'infra-s3-19',
          question: 'Are waste management practices during manufacturing detailed?',
          explanation: 'Assesses the impact of waste management on total environmental impact.',
          designImpact: 'Manufacturing waste practices for infrastructure equipment indicate the vendor\'s overall environmental maturity.',
          weight: 4,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Waste management practices are not reported.', score: 1 },
            { text: 'Basic waste management practices mentioned, with minimal detail.', score: 3 },
            { text: 'Moderate detail on waste management practices and their impact.', score: 5 },
            { text: 'Detailed waste management practices and good environmental reporting.', score: 7 },
            { text: 'Comprehensive waste management fully documented, with complete impact analysis.', score: 10 }
          ]
        },
        {
          id: 'infra-s3-20',
          question: 'Are the social and environmental impacts of raw material extraction assessed and disclosed?',
          explanation: 'Checks data alignment with broader ESG criteria.',
          designImpact: 'Infrastructure hardware uses significant quantities of rare earth elements and precious metals. ESG disclosure helps with responsible procurement.',
          weight: 4,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No assessment or disclosure provided.', score: 1 },
            { text: 'Basic assessment with minimal disclosure.', score: 3 },
            { text: 'Moderate assessment with some disclosure.', score: 5 },
            { text: 'Detailed assessment with good disclosure.', score: 7 },
            { text: 'Comprehensive assessment with full disclosure, supported by evidence.', score: 10 }
          ]
        }
      ]
    }
  ]
};
