// Cloud & SaaS Services - Questions extracted from vendor emissions assessment framework
// Cloud scoring uses R1-R5 where R1 = 0 (unknown), R2-R5 = increasing quality

const CLOUD_QUESTIONS = {
  id: 'cloud',
  name: 'Cloud & SaaS',
  description: 'Cloud infrastructure, hosted services, SaaS platforms and managed services',
  sections: [
    {
      name: 'Overall Approach & Methodology',
      description: 'The foundation of cloud carbon accounting. How a provider calculates and reports emissions determines whether you can trust and use their data for design decisions about which services to use and how to optimise them.',
      questions: [
        {
          id: 'cloud-oa-1',
          category: 'Overall Approach',
          question: 'Can you provide direct emissions reporting capability specific to our usage of your service(s)?',
          explanation: 'Assesses whether the provider can give you usage-specific rather than generic emissions data.',
          designImpact: 'Customer-specific emissions reporting is the foundation for all cloud carbon optimisation. Without it, you cannot measure the impact of architecture decisions.',
          weight: 10,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No tailored emissions reporting is available; refer to general ESG or sustainability reports.', score: 2 },
            { text: 'Limited usage-based reporting, primarily aggregated data.', score: 4 },
            { text: 'Partially tailored reporting: blend of customer-specific usage and broader averages.', score: 7 },
            { text: 'Fully tailored emissions reporting available for specific customer usage, broken down by service type with location-based data.', score: 10 }
          ]
        },
        {
          id: 'cloud-oa-2',
          question: 'What approach do you use for emissions reporting? Is it usage-based, spend-based, or industry averages?',
          explanation: 'Determines the fundamental accuracy of the emissions calculation method.',
          designImpact: 'Usage-based calculations directly reflect your architecture choices. Spend-based methods cannot differentiate between efficient and inefficient service usage.',
          weight: 10,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'High-level industry averages only, no usage or spend-based data.', score: 2 },
            { text: 'Primarily spend-based estimates with limited usage-specific data.', score: 4 },
            { text: 'Mix of usage-based and spend-based estimates.', score: 7 },
            { text: 'Consistently usage-based calculation using customer-specific data.', score: 10 }
          ]
        },
        {
          id: 'cloud-oa-3',
          question: 'Does your emissions calculation approach align with the GHG Protocol?',
          explanation: 'Checks alignment with the most widely recognised carbon accounting standard.',
          designImpact: 'GHG Protocol alignment ensures emissions data is compatible with organisational reporting frameworks and comparable across providers.',
          weight: 8,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Minimal or no alignment with GHG Protocol.', score: 2 },
            { text: 'Partial alignment with major deviations. Market-based metrics only using global estimates.', score: 4 },
            { text: 'Generally follows GHG Protocol with minor deviations. Market-based metrics only.', score: 7 },
            { text: 'Fully aligned with GHG Protocol, verified by third party.', score: 10 }
          ]
        },
        {
          id: 'cloud-oa-4',
          question: 'Is your calculation methodology published?',
          explanation: 'Assesses the transparency of the provider\'s carbon accounting approach.',
          designImpact: 'Published methodology allows independent review and builds trust in the emissions data used for design decisions.',
          weight: 7,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Not published or accessible.', score: 2 },
            { text: 'Limited publication, mostly internal.', score: 4 },
            { text: 'Published with moderate detail.', score: 7 },
            { text: 'Publicly accessible, fully detailed methodology.', score: 10 }
          ]
        },
        {
          id: 'cloud-oa-5',
          question: 'Has the methodology been externally verified by an official body?',
          explanation: 'Third-party verification validates the credibility of the calculation approach.',
          designImpact: 'External verification transforms provider claims into auditable, trustworthy data suitable for carbon reporting and design decision-making.',
          weight: 8,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No verification conducted.', score: 2 },
            { text: 'Internal verification only.', score: 4 },
            { text: 'Partial verification by recognised body.', score: 7 },
            { text: 'Full third-party verification by recognised body.', score: 10 }
          ]
        },
        {
          id: 'cloud-oa-6',
          question: 'Does the methodology use peer-reviewed academic sources or open standards (e.g., GSF), and government guidelines (e.g., ADEME PCR)?',
          explanation: 'Assesses the scientific rigour behind the calculation methodology.',
          designImpact: 'Peer-reviewed sources provide the most reliable emissions factors. Open standards like the Green Software Foundation ensure consistency.',
          weight: 6,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No peer-reviewed sources used.', score: 2 },
            { text: 'Limited peer-reviewed sources, mainly industry standards.', score: 4 },
            { text: 'Combination of peer-reviewed and industry sources.', score: 7 },
            { text: 'Primarily uses peer-reviewed sources.', score: 10 }
          ]
        },
        {
          id: 'cloud-oa-7',
          question: 'Are assumptions made in the methodology explicitly stated and justified?',
          explanation: 'Transparency of assumptions reveals potential biases in the data.',
          designImpact: 'Hidden assumptions can significantly skew emissions figures. Transparent assumptions let your teams adjust calculations for organisation-specific contexts.',
          weight: 7,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Assumptions not documented or justified.', score: 2 },
            { text: 'Limited assumptions provided without justification.', score: 4 },
            { text: 'Basic assumptions documented, minimal justification.', score: 7 },
            { text: 'Fully documented and justified assumptions, available for review.', score: 10 }
          ]
        },
        {
          id: 'cloud-oa-8',
          question: 'Is Scope 1 data included in calculations?',
          explanation: 'Assesses inclusion of direct emissions from provider operations.',
          designImpact: 'Scope 1 (generators, refrigerants) can be significant for data centres. Excluding it understates the true carbon intensity of cloud services.',
          weight: 6,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No Scope 1 data included.', score: 2 },
            { text: 'Partial Scope 1 data included at regional or facility level, certain sources omitted.', score: 5 },
            { text: 'Comprehensive Scope 1 data included, with site-specific detail.', score: 10 }
          ]
        },
        {
          id: 'cloud-oa-9',
          question: 'Is Scope 2 data included in calculations?',
          explanation: 'Assesses inclusion of purchased electricity emissions.',
          designImpact: 'Scope 2 (purchased electricity) is typically the largest component of cloud service emissions. Both location and market-based reporting are needed for complete understanding.',
          weight: 9,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No Scope 2 data included.', score: 2 },
            { text: 'Minimal Scope 2 data, lacks detailed factors.', score: 4 },
            { text: 'Scope 2 data with location or market-based options, but not both.', score: 7 },
            { text: 'Comprehensive Scope 2 data with both location and market-based factors.', score: 10 }
          ]
        },
        {
          id: 'cloud-oa-10',
          question: 'Is Scope 3 data included in calculations?',
          explanation: 'Assesses inclusion of supply chain and indirect emissions.',
          designImpact: 'Scope 3 includes the embodied carbon of hardware, which is often overlooked in cloud carbon reporting but represents a significant share of total emissions.',
          weight: 8,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No Scope 3 data included.', score: 2 },
            { text: 'Minimal Scope 3 data, only a few minor categories.', score: 4 },
            { text: 'Basic Scope 3 data with limited categories.', score: 7 },
            { text: 'Scope 3 data included for major categories.', score: 10 }
          ]
        },
        {
          id: 'cloud-oa-11',
          question: 'Does the methodology incorporate impact factors other than CO2e such as water usage?',
          explanation: 'Assesses whether environmental reporting goes beyond carbon.',
          designImpact: 'Water-cooled data centres in water-stressed regions have significant environmental impact beyond carbon. Broader metrics support more holistic design decisions.',
          weight: 5,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No water usage included.', score: 2 },
            { text: 'Basic water usage data without detailed integration.', score: 4 },
            { text: 'Water usage included with regional averages.', score: 7 },
            { text: 'Full integration of water usage metrics by location and process.', score: 10 }
          ]
        },
        {
          id: 'cloud-oa-12',
          question: 'Is there a transparent audit trail for data inputs and calculation processes, including a documented change log?',
          explanation: 'Assesses data governance and accountability.',
          designImpact: 'An audit trail ensures emissions data can be verified and that changes are tracked. Essential for governance and reporting requirements.',
          weight: 6,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No audit trail or change log.', score: 2 },
            { text: 'Internal change log only.', score: 4 },
            { text: 'Partial audit trail with summarised change log.', score: 7 },
            { text: 'Comprehensive audit trail with detailed change log accessible to clients.', score: 10 }
          ]
        },
        {
          id: 'cloud-oa-13',
          question: 'Is there a defined methodology review process responding to market, research, or regulation changes?',
          explanation: 'Assesses whether the methodology evolves with best practice.',
          designImpact: 'A regularly reviewed methodology means emissions data improves over time and reflects the latest science and regulatory requirements.',
          weight: 5,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No formal review process.', score: 2 },
            { text: 'Infrequent review without formal updates.', score: 4 },
            { text: 'Annual review process.', score: 7 },
            { text: 'Frequent review with updates for market/regulation changes and accessible review log.', score: 10 }
          ]
        },
        {
          id: 'cloud-oa-14',
          question: 'How are emissions allocated in shared or multi-tenant environments?',
          explanation: 'Assesses the allocation methodology for shared infrastructure.',
          designImpact: 'Allocation methodology is THE hardest problem in cloud carbon accounting. Usage-based allocation gives meaningful per-service data; fixed allocation does not reflect your actual impact.',
          weight: 10,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Allocated at a high level without clear principles.', score: 2 },
            { text: 'Based on fixed capacity, minimal usage-based adjustments.', score: 4 },
            { text: 'Proportional to usage but lacks full transparency.', score: 7 },
            { text: 'Based on actual usage, with transparent and documented methodology.', score: 10 }
          ]
        },
        {
          id: 'cloud-oa-15',
          question: 'Does your reporting tool provide forecasting capabilities for projected emissions based on anticipated usage?',
          explanation: 'Assesses forward-looking emissions planning capability.',
          designImpact: 'Forecasting enables your teams to model the carbon impact of scaling decisions before committing, supporting proactive rather than reactive sustainability.',
          weight: 5,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No forecasting capabilities.', score: 2 },
            { text: 'Limited forecasting with minimal scalability.', score: 4 },
            { text: 'Basic forecasting based on projected usage.', score: 7 },
            { text: 'Forecasting available with usage scenarios.', score: 10 }
          ]
        }
      ]
    },
    {
      name: 'Provider Scope 1 — Direct Emissions',
      description: 'Scope 1 covers the provider\'s direct emissions from on-site fuel combustion (generators), refrigerant leaks, and company vehicles. While typically smaller than Scope 2, these emissions reflect operational practices that vary significantly between providers and facilities.',
      questions: [
        {
          id: 'cloud-s1-1',
          category: 'Provider Scope 1',
          question: 'What is your emissions factor data source for Scope 1 emissions (e.g., from diesel used in generators)?',
          explanation: 'Assesses the quality of Scope 1 emission factor sources.',
          designImpact: 'Actual fuel usage data vs estimates can differ significantly, especially for providers relying heavily on diesel backup power.',
          weight: 6,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Not included.', score: 2 },
            { text: 'Manually estimated using government averages.', score: 5 },
            { text: 'Direct from fuel provider based on estimate.', score: 7 },
            { text: 'Direct from fuel provider based on actual usage.', score: 10 }
          ]
        },
        {
          id: 'cloud-s1-2',
          question: 'What approach was used to measure Scope 1 emissions (e.g., on-site fuel combustion, refrigerants)?',
          explanation: 'Assesses measurement rigour for direct emissions.',
          designImpact: 'Direct measurement of all sources with third-party verification provides the most reliable Scope 1 data for your cloud carbon calculations.',
          weight: 6,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Estimates based on industry standards without specific site measurements.', score: 2 },
            { text: 'Combination of direct measurement and estimates.', score: 5 },
            { text: 'Direct measurement of all major sources.', score: 7 },
            { text: 'Direct measurement of all on-site sources, verified by third party.', score: 10 }
          ]
        },
        {
          id: 'cloud-s1-3',
          question: 'Does the Scope 1 data include backup power usage and routine testing (e.g., diesel generator testing)?',
          explanation: 'Assesses completeness of Scope 1 reporting.',
          designImpact: 'Generator testing can be a significant source of emissions, especially for UK data centres with frequent testing requirements.',
          weight: 5,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No inclusion of backup power or testing data.', score: 2 },
            { text: 'Basic reporting of backup power, without testing data.', score: 5 },
            { text: 'Backup power included with some routine testing data.', score: 7 },
            { text: 'All backup power usage including routine testing fully included with detailed reporting.', score: 10 }
          ]
        },
        {
          id: 'cloud-s1-4',
          question: 'Are refrigerant-related emissions included, and how are they tracked?',
          explanation: 'Assesses tracking of high-GWP refrigerant emissions.',
          designImpact: 'Refrigerants used in cooling systems can have global warming potential thousands of times greater than CO2. Proper tracking reveals this often-hidden emissions source.',
          weight: 6,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Refrigerants not explicitly included.', score: 2 },
            { text: 'Basic inclusion with general estimates.', score: 4 },
            { text: 'All refrigerants tracked, leak rates estimated using industry standards.', score: 7 },
            { text: 'Comprehensive tracking by type, with leak checks, recovery data, and third-party verification.', score: 10 }
          ]
        },
        {
          id: 'cloud-s1-5',
          question: 'How is fuel combustion from owned or controlled sources measured and reported?',
          explanation: 'Assesses measurement approach for fuel-related emissions.',
          designImpact: 'Direct measurement with independent verification provides the most accurate picture of on-site fuel emissions.',
          weight: 5,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Basic assumptions without clear measurement.', score: 2 },
            { text: 'Combination of measurement and industry-standard estimates.', score: 5 },
            { text: 'Direct measurement of primary fuel sources, estimates for minor sources.', score: 7 },
            { text: 'Direct measurement of all fuel combustion with independent verification.', score: 10 }
          ]
        },
        {
          id: 'cloud-s1-6',
          question: 'How frequently are Scope 1 emissions data updated, and what verification processes are in place?',
          explanation: 'Assesses data currency and quality assurance.',
          designImpact: 'Frequent updates with external verification ensure your carbon reporting reflects current operational reality, not historical estimates.',
          weight: 5,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Infrequent updates without verification.', score: 2 },
            { text: 'Annual updates with internal verification.', score: 5 },
            { text: 'Annual updates with partial third-party verification.', score: 7 },
            { text: 'Quarterly updates with third-party verification.', score: 10 }
          ]
        },
        {
          id: 'cloud-s1-7',
          question: 'Are Scope 1 emissions reported at a facility or regional level?',
          explanation: 'Assesses the granularity of Scope 1 reporting.',
          designImpact: 'Facility-level reporting lets your teams understand the carbon impact of using services hosted in specific data centres, enabling location-aware design.',
          weight: 7,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'High-level aggregated reporting only.', score: 2 },
            { text: 'Generalised regional reporting without facility breakdown.', score: 4 },
            { text: 'Regional-level with facility data available on request.', score: 7 },
            { text: 'Facility-level reporting with high granularity.', score: 10 }
          ]
        },
        {
          id: 'cloud-s1-8',
          question: 'Are all assumptions made in calculating Scope 1 emissions documented?',
          explanation: 'Assesses transparency of Scope 1 calculations.',
          designImpact: 'Documented assumptions allow your teams to assess confidence levels and adjust calculations for specific contexts.',
          weight: 5,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No documented assumptions.', score: 2 },
            { text: 'Basic assumptions applied without documentation.', score: 4 },
            { text: 'Key assumptions documented with internal justification.', score: 7 },
            { text: 'All assumptions comprehensively documented, justified, and available for review.', score: 10 }
          ]
        }
      ]
    },
    {
      name: 'Provider Scope 2 — Energy & Power',
      description: 'Scope 2 emissions from purchased electricity are typically the largest component of cloud service carbon. The granularity and accuracy of power measurement, PUE inclusion, and carbon intensity factors directly determine whether you can make meaningful decisions about service and region selection.',
      questions: [
        {
          id: 'cloud-s2-1',
          category: 'Provider Scope 2',
          question: 'How is power usage reported?',
          explanation: 'Assesses the basis for power usage reporting.',
          designImpact: 'Power allocated from actual data hall usage gives much more accurate per-service carbon than data centre-wide allocation or industry estimates.',
          weight: 9,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Not included.', score: 2 },
            { text: 'Data sheet estimate or industry average.', score: 4 },
            { text: 'Allocated from data centre usage.', score: 7 },
            { text: 'Allocated from data hall power usage.', score: 10 }
          ]
        },
        {
          id: 'cloud-s2-2',
          question: 'How often is power usage reported?',
          explanation: 'Assesses the frequency of power data updates.',
          designImpact: 'More frequent power reporting enables faster feedback loops for optimisation decisions. Weekly data lets teams identify and respond to wasteful patterns.',
          weight: 7,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Manual ad-hoc update.', score: 2 },
            { text: 'Quarterly or less.', score: 4 },
            { text: 'Monthly.', score: 7 },
            { text: 'Weekly.', score: 10 }
          ]
        },
        {
          id: 'cloud-s2-3',
          question: 'Is reported power usage calculated at the specific data centre location?',
          explanation: 'Assesses location specificity of power reporting.',
          designImpact: 'Location-specific power data is essential for accurate carbon calculations, as grid carbon intensity varies dramatically between UK regions and internationally.',
          weight: 8,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No.', score: 2 },
            { text: 'Yes.', score: 10 }
          ]
        },
        {
          id: 'cloud-s2-4',
          question: 'Do power usage metrics include data centre specific operational PUE (Power Usage Effectiveness) overhead?',
          explanation: 'Assesses whether cooling and facility overhead is included.',
          designImpact: 'PUE adds 20-80% overhead to IT power consumption. Without it, your carbon calculations significantly understate actual energy usage and emissions.',
          weight: 9,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No, not included.', score: 2 },
            { text: 'No, assumptions are made.', score: 4 },
            { text: 'No, known averages are used.', score: 6 },
            { text: 'Yes.', score: 10 }
          ]
        },
        {
          id: 'cloud-s2-5',
          question: 'How frequently are PUE metrics reviewed and updated?',
          explanation: 'Assesses the currency of PUE data.',
          designImpact: 'PUE varies seasonally and with load. Regularly updated PUE means more accurate carbon calculations throughout the year.',
          weight: 6,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Design only.', score: 2 },
            { text: 'Manual ad-hoc update.', score: 4 },
            { text: 'Annually.', score: 7 },
            { text: 'Quarterly.', score: 10 }
          ]
        },
        {
          id: 'cloud-s2-6',
          question: 'At what level of localisation are the carbon intensity metrics?',
          explanation: 'Assesses the geographic precision of carbon intensity factors.',
          designImpact: 'Grid carbon intensity varies enormously. UK regional grid data vs global averages can differ by 3-5x. Location-specific metrics are critical for region selection decisions.',
          weight: 9,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Global average.', score: 2 },
            { text: 'Country.', score: 5 },
            { text: 'Regional average.', score: 7 },
            { text: 'Actual location, based on grid region.', score: 10 }
          ]
        },
        {
          id: 'cloud-s2-7',
          question: 'How frequently are carbon intensity metrics updated?',
          explanation: 'Assesses the currency of carbon intensity data.',
          designImpact: 'Grid carbon intensity changes hourly with renewable generation. More frequent updates enable carbon-aware workload scheduling.',
          weight: 7,
          responses: [
            { text: 'Manual process.', score: 2 },
            { text: 'Annually.', score: 4 },
            { text: 'Quarterly.', score: 6 },
            { text: 'Monthly.', score: 8 },
            { text: 'Weekly.', score: 10 }
          ]
        },
        {
          id: 'cloud-s2-8',
          question: 'How frequently are your data sources for emissions factors and carbon intensity reviewed for relevance and accuracy?',
          explanation: 'Assesses the quality assurance of underlying data.',
          designImpact: 'Regular review of data sources ensures emissions calculations reflect current grid conditions and best available science.',
          weight: 5,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Ad-hoc.', score: 2 },
            { text: 'Annually.', score: 5 },
            { text: 'Semi-annually.', score: 7 },
            { text: 'Quarterly.', score: 10 }
          ]
        }
      ]
    },
    {
      name: 'Provider Scope 3 — Embodied Carbon & Supply Chain',
      description: 'Cloud Scope 3 includes the embodied carbon of all underlying hardware, supply chain emissions, and end-of-life treatment. This is often the least transparent area of cloud carbon reporting but represents a significant share of total emissions.',
      questions: [
        {
          id: 'cloud-s3-1',
          category: 'Provider Scope 3',
          question: 'What is your approach to reporting Scope 3 emissions for hardware and software associated with the service(s)?',
          explanation: 'Assesses the fundamental approach to cloud Scope 3 reporting.',
          designImpact: 'Product-level reporting based on primary data enables meaningful comparison between services. Spend-based estimates cannot distinguish between hardware-heavy and lightweight services.',
          weight: 9,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Basic estimates without clear methodology or verification.', score: 2 },
            { text: 'Spend-based estimation using general emissions factors.', score: 4 },
            { text: 'Category-level reporting using reputable industry averages.', score: 6 },
            { text: 'Product-level reporting based on mix of primary and secondary data.', score: 10 }
          ]
        },
        {
          id: 'cloud-s3-2',
          question: 'Are the Scope 3 emissions figures based on the exact infrastructure being used, or an average?',
          explanation: 'Ensures specificity in reported data.',
          designImpact: 'Service-specific Scope 3 data lets your teams understand the full lifecycle carbon of choosing one cloud service configuration over another.',
          weight: 8,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Broad average across multiple products.', score: 2 },
            { text: 'Specific to product line, not individual configuration.', score: 5 },
            { text: 'Specific to device type, close to proposed configuration.', score: 7 },
            { text: 'Exact and specific to proposed configuration, with evidence.', score: 10 }
          ]
        },
        {
          id: 'cloud-s3-3',
          question: 'If your services rely on third-party cloud providers, how do you calculate and report emissions associated with their infrastructure?',
          explanation: 'Assesses transparency of embedded third-party cloud emissions.',
          designImpact: 'Many SaaS providers run on AWS/Azure/GCP. Understanding how they report these nested emissions reveals whether you are getting accurate or estimated data.',
          weight: 8,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No calculation or reporting of cloud provider emissions.', score: 2 },
            { text: 'Basic data from provider\'s sustainability reports.', score: 4 },
            { text: 'Native reporting tools from cloud provider used.', score: 7 },
            { text: 'Detailed third-party calculations based on usage, verified independently.', score: 10 }
          ]
        },
        {
          id: 'cloud-s3-4',
          question: 'Please confirm the methodology used to calculate embodied carbon.',
          explanation: 'Assesses the specific LCA methodology approach.',
          designImpact: 'The LCA approach determines data granularity and reliability for the hardware underlying cloud services.',
          weight: 7,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Process-Based LCAs — PLCA, PEF, EPD (ISO 14025), ISO 14067', score: 3 },
            { text: 'Economic & Hybrid LCAs — EIO-LCA, Hybrid LCA, Material Flow Analysis', score: 5 },
            { text: 'Data-Driven & AI-Based — Digital Twin LCA, PAIA (MIT)', score: 7 },
            { text: 'Corporate & Supply Chain — GHG Protocol, PAS 2050, Pathfinder Framework', score: 9 }
          ]
        },
        {
          id: 'cloud-s3-5',
          question: 'Does Scope 3 reporting include emissions data from supply chain partners for hardware production?',
          explanation: 'Assesses supply chain transparency for cloud hardware.',
          designImpact: 'Supply chain emissions for data centre hardware (servers, storage, networking) can be substantial. Inclusion indicates a mature approach to carbon accounting.',
          weight: 7,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No supply chain emissions data.', score: 2 },
            { text: 'Limited supply chain data, major suppliers only.', score: 4 },
            { text: 'Basic supply chain data without regional specifics.', score: 7 },
            { text: 'Primary suppliers included with some regional breakdown.', score: 10 }
          ]
        },
        {
          id: 'cloud-s3-6',
          question: 'Is Scope 3 data disaggregated by activity type (e.g., employee travel, waste management, third-party services)?',
          explanation: 'Assesses the granularity of Scope 3 reporting.',
          designImpact: 'Disaggregated data lets your teams understand which activities drive the most emissions, enabling targeted reduction efforts.',
          weight: 5,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No disaggregation; aggregated data only.', score: 2 },
            { text: 'Limited disaggregation with generalised types.', score: 4 },
            { text: 'Basic disaggregation for high-impact activities.', score: 7 },
            { text: 'Disaggregated by major activities with moderate detail.', score: 10 }
          ]
        },
        {
          id: 'cloud-s3-7',
          question: 'Does Scope 3 reporting include emissions from end-of-life treatment of IT assets?',
          explanation: 'Assesses inclusion of hardware disposal emissions.',
          designImpact: 'End-of-life treatment of data centre hardware generates emissions from recycling, disposal, and transport. Including it gives a more complete lifecycle picture.',
          weight: 5,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No end-of-life emissions data.', score: 2 },
            { text: 'Limited data, high-level disposal estimates only.', score: 4 },
            { text: 'General end-of-life data with minimal calculations.', score: 7 },
            { text: 'Basic end-of-life data with limited recycling/disposal detail.', score: 10 }
          ]
        },
        {
          id: 'cloud-s3-8',
          question: 'Do Scope 3 reports include carbon removal, sequestration, or offsetting efforts, and how are these validated?',
          explanation: 'Assesses transparency of offsetting claims.',
          designImpact: 'Offsets are contentious. Understanding what offsets are claimed and how they are validated helps your teams assess the net carbon position of services.',
          weight: 5,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No inclusion of carbon removal or offsetting.', score: 2 },
            { text: 'Limited offsetting details with basic internal validation.', score: 4 },
            { text: 'Offsetting data provided without external validation.', score: 7 },
            { text: 'Some data on offsetting with partial validation by external standards.', score: 10 }
          ]
        },
        {
          id: 'cloud-s3-9',
          question: 'Does the methodology specify whether primary or secondary data was used for different lifecycle phases?',
          explanation: 'Reveals data quality across lifecycle phases.',
          designImpact: 'Primary vs secondary data classification helps assess the reliability of each component of the emissions calculation.',
          weight: 6,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No specification between primary or secondary data.', score: 2 },
            { text: 'General mention of data types, not phase-specific.', score: 4 },
            { text: 'Specifies data type for most phases, lacks detail.', score: 7 },
            { text: 'Clearly differentiates primary and secondary data with examples.', score: 10 }
          ]
        },
        {
          id: 'cloud-s3-10',
          question: 'What data collection techniques were used for gathering lifecycle data?',
          explanation: 'Clarifies the rigour of data collection.',
          designImpact: 'Direct measurements and supplier engagement produce more accurate lifecycle data than desk-based estimates or generic databases.',
          weight: 6,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No techniques described.', score: 2 },
            { text: 'Basic description without detail.', score: 4 },
            { text: 'Techniques mentioned but lacking specifics.', score: 7 },
            { text: 'Detailed description with examples.', score: 10 }
          ]
        },
        {
          id: 'cloud-s3-11',
          question: 'How often are emissions factors and data points updated?',
          explanation: 'Verifies data currency.',
          designImpact: 'Cloud infrastructure changes rapidly. Outdated emissions factors may not reflect current hardware efficiency improvements.',
          weight: 6,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Relies on outdated data without updates.', score: 2 },
            { text: 'Data mostly outdated with some recent updates.', score: 4 },
            { text: 'Mix of up-to-date and older data.', score: 7 },
            { text: 'Most data is recent with verification of updates.', score: 10 }
          ]
        },
        {
          id: 'cloud-s3-12',
          question: 'Was a sensitivity or uncertainty analysis performed on the emissions results?',
          explanation: 'Assesses whether variability in results is understood.',
          designImpact: 'Understanding uncertainty ranges helps your teams make more informed decisions about the confidence level of carbon comparisons.',
          weight: 6,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No sensitivity or uncertainty analysis.', score: 2 },
            { text: 'Basic analysis with minimal detail.', score: 4 },
            { text: 'Some analysis but lacks comprehensive detail.', score: 7 },
            { text: 'Detailed analysis covering key variability aspects.', score: 10 }
          ]
        },
        {
          id: 'cloud-s3-13',
          question: 'What assumptions were made regarding product lifespan, usage scenarios, and regional energy mixes?',
          explanation: 'Helps evaluate potential biases or oversimplifications.',
          designImpact: 'Assumptions about server lifespan (3 vs 5 years) and energy mix dramatically change amortised carbon. Transparent assumptions enable organisation-specific adjustments.',
          weight: 7,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No assumptions provided.', score: 2 },
            { text: 'General assumptions with little detail.', score: 4 },
            { text: 'Some assumptions, moderately detailed.', score: 7 },
            { text: 'Clear assumptions with supporting context.', score: 10 }
          ]
        },
        {
          id: 'cloud-s3-14',
          question: 'Are there clearly defined boundaries for the LCA, and are any lifecycle phases excluded?',
          explanation: 'Ensures transparency and scope completeness.',
          designImpact: 'Missing lifecycle phases mean missing emissions. Clear boundaries let your teams understand exactly what is and is not included.',
          weight: 8,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No boundaries or exclusions defined.', score: 2 },
            { text: 'Basic boundaries, exclusions unclear.', score: 4 },
            { text: 'Clear boundaries, most exclusions specified.', score: 7 },
            { text: 'Detailed boundaries with all exclusions specified and justified.', score: 10 }
          ]
        },
        {
          id: 'cloud-s3-15',
          question: 'Were any data gaps identified during the LCA, and what methods were used to fill them?',
          explanation: 'Assesses methodology and data completeness.',
          designImpact: 'Transparent gap identification builds trust and helps assess the confidence level of the overall emissions figure.',
          weight: 7,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No mention of data gaps or methods.', score: 2 },
            { text: 'General identification with limited solutions.', score: 4 },
            { text: 'Some gaps noted with basic methods.', score: 7 },
            { text: 'Detailed explanation of gaps and solutions using reliable proxy data.', score: 10 }
          ]
        },
        {
          id: 'cloud-s3-16',
          question: 'Does Scope 3 data include emissions from all tiers of the supply chain?',
          explanation: 'Evaluates supply chain depth.',
          designImpact: 'Data centre hardware supply chains are complex. Coverage beyond Tier 1 is essential for understanding the true embodied carbon of cloud infrastructure.',
          weight: 7,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No supply chain emissions beyond Tier 1.', score: 2 },
            { text: 'Basic Tier 1 suppliers only.', score: 4 },
            { text: 'Tier 1 and partial Tier 2 included.', score: 7 },
            { text: 'Most supply chain tiers up to Tier 3.', score: 10 }
          ]
        },
        {
          id: 'cloud-s3-17',
          question: 'What data sources were used for carbon calculations?',
          explanation: 'Checks accuracy and credibility of data sources.',
          designImpact: 'Specific supplier data with lifecycle assessments provides far more reliable figures than generic industry averages.',
          weight: 7,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Unclear or generic data sources.', score: 2 },
            { text: 'Basic industry averages with minimal supplier data.', score: 4 },
            { text: 'Mix of supplier data and industry averages.', score: 7 },
            { text: 'Detailed specific supplier data with lifecycle assessments.', score: 10 }
          ]
        },
        {
          id: 'cloud-s3-18',
          question: 'Is the percentage of recycled materials in manufacturing detailed?',
          explanation: 'Assesses circular economy alignment.',
          designImpact: 'Recycled content in cloud infrastructure hardware reduces embodied carbon and demonstrates provider commitment to circularity.',
          weight: 4,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No mention of recycled materials.', score: 2 },
            { text: 'Minimal recycled content reported without detail.', score: 4 },
            { text: 'Recycled content mentioned with basic determination.', score: 7 },
            { text: 'Significant recycled content reported with verification.', score: 10 }
          ]
        },
        {
          id: 'cloud-s3-19',
          question: 'Does the data include carbon offsetting practices, and are these offsets certified?',
          explanation: 'Verifies the credibility of offsetting claims.',
          designImpact: 'Certified offsets (Gold Standard, VCS) provide more credible climate claims. Understanding what is offset vs genuinely reduced is key.',
          weight: 5,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No carbon offsetting details provided.', score: 2 },
            { text: 'Basic mention without certification.', score: 4 },
            { text: 'Offsetting details with limited certification.', score: 7 },
            { text: 'Certified offsetting practices reported.', score: 10 }
          ]
        },
        {
          id: 'cloud-s3-20',
          question: 'Are emissions figures location-specific, reflecting differences in energy mix or transport routes?',
          explanation: 'Ensures regional variations are captured.',
          designImpact: 'A service hosted in France (nuclear-heavy grid) has very different Scope 2 emissions to one in Poland (coal-heavy). Location-specific data is essential for region selection.',
          weight: 8,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Global averages without location-specific data.', score: 2 },
            { text: 'Basic location-specific data with limited detail.', score: 4 },
            { text: 'Partial location-specific data for key regions.', score: 7 },
            { text: 'Most emissions figures are location-specific.', score: 10 }
          ]
        },
        {
          id: 'cloud-s3-21',
          question: 'Are transport emissions based on actual logistics data or industry averages?',
          explanation: 'Confirms accuracy of transport emissions.',
          designImpact: 'For hardware-intensive cloud services, transport of equipment to data centres can be a measurable emissions source.',
          weight: 4,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Industry averages without actual logistics data.', score: 2 },
            { text: 'Basic estimated data with limited specifics.', score: 4 },
            { text: 'Mix of actual logistics data and estimates.', score: 7 },
            { text: 'Mostly actual logistics data with good detail.', score: 10 }
          ]
        },
        {
          id: 'cloud-s3-22',
          question: 'Is water usage during manufacturing measured and presented?',
          explanation: 'Evaluates broader environmental impact consideration.',
          designImpact: 'Data centre cooling water usage is a growing concern, especially in water-stressed regions. This data supports broader environmental design decisions.',
          weight: 5,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Water usage impact is not included.', score: 2 },
            { text: 'Basic reporting with limited detail.', score: 4 },
            { text: 'Detailed reporting with partial environmental impact.', score: 7 },
            { text: 'Comprehensive reporting with detailed environmental impact.', score: 10 }
          ]
        },
        {
          id: 'cloud-s3-23',
          question: 'Are waste management practices during manufacturing detailed?',
          explanation: 'Assesses waste management impact on emissions.',
          designImpact: 'Waste management practices in data centre hardware manufacturing indicate the provider\'s overall environmental maturity.',
          weight: 4,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No waste management details.', score: 2 },
            { text: 'Basic practices mentioned with minimal detail.', score: 4 },
            { text: 'Moderate detail on practices and emissions impact.', score: 7 },
            { text: 'Detailed practices with good emissions reporting.', score: 10 }
          ]
        }
      ]
    },
    {
      name: 'Reporting Capability',
      description: 'Even the best data is useless if it cannot be accessed, exported, and integrated into your decision-making processes. Reporting capability determines whether emissions data can practically inform day-to-day design and operational choices.',
      questions: [
        {
          id: 'cloud-rc-1',
          category: 'Reporting Capability',
          question: 'How is the reporting data made available and in what formats?',
          explanation: 'Assesses accessibility and usability of emissions data.',
          designImpact: 'An accessible, customisable interface with visualisation tools empowers your teams to explore data and identify optimisation opportunities independently.',
          weight: 7,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Limited accessibility, no customisation.', score: 2 },
            { text: 'Accessible but challenging for non-experts.', score: 4 },
            { text: 'Basic interface with limited usability.', score: 6 },
            { text: 'Accessible and user-friendly with customisation options.', score: 10 }
          ]
        },
        {
          id: 'cloud-rc-2',
          question: 'What level of data granularity is provided (account, service/product, location level)?',
          explanation: 'Assesses the detail level of emissions reporting.',
          designImpact: 'Service-level granularity enables per-application carbon tracking. Account-level only cannot distinguish between efficient and wasteful services.',
          weight: 9,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'General provider-wide level only.', score: 2 },
            { text: 'Limited to region or product level only.', score: 4 },
            { text: 'Product and account level only.', score: 7 },
            { text: 'Regional, account, and product levels with service-specific breakdowns.', score: 10 }
          ]
        },
        {
          id: 'cloud-rc-3',
          question: 'Is data export functionality available (e.g., CSV, API access)?',
          explanation: 'Assesses interoperability with external systems.',
          designImpact: 'API access enables automated integration into your sustainability dashboards and CI/CD pipelines. Manual PDF reports cannot support operational decision-making.',
          weight: 8,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No export functionality.', score: 2 },
            { text: 'Limited export options with restricted compatibility.', score: 4 },
            { text: 'Basic export in CSV with basic API access.', score: 7 },
            { text: 'Standard export options in CSV and API.', score: 10 }
          ]
        },
        {
          id: 'cloud-rc-4',
          question: 'How frequently is emissions data calculated and available?',
          explanation: 'Assesses timeliness of emissions reporting.',
          designImpact: 'Monthly or more frequent data enables rapid feedback on the carbon impact of architecture and infrastructure changes.',
          weight: 7,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Infrequent or ad-hoc updates.', score: 2 },
            { text: 'Annual updates.', score: 4 },
            { text: 'Quarterly updates.', score: 7 },
            { text: 'Monthly updates.', score: 10 }
          ]
        },
        {
          id: 'cloud-rc-5',
          question: 'How often is the emissions data calculated/enriched?',
          explanation: 'Assesses ongoing data quality improvement.',
          designImpact: 'Regular enrichment with updated factors means your carbon data becomes more accurate over time, improving the quality of design decisions.',
          weight: 5,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No enrichment applied; static data.', score: 2 },
            { text: 'Minimal enrichment, occasional updates.', score: 4 },
            { text: 'Annual updates to factors and metrics.', score: 7 },
            { text: 'Quarterly enrichment with updated metrics.', score: 10 }
          ]
        },
        {
          id: 'cloud-rc-6',
          question: 'Does the methodology account for new instance types or services as they are launched?',
          explanation: 'Assesses adaptability to new services.',
          designImpact: 'New cloud services often offer improved efficiency. If the methodology does not include them, your teams cannot benefit from selecting lower-carbon options.',
          weight: 6,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'No updates for new services.', score: 2 },
            { text: 'Occasional updates for major services only.', score: 4 },
            { text: 'Annual updates to include new services.', score: 7 },
            { text: 'Frequently updated with new services as introduced.', score: 10 }
          ]
        },
        {
          id: 'cloud-rc-7',
          question: 'Are reported metrics at a product line-item level?',
          explanation: 'Assesses product-level detail in reporting.',
          designImpact: 'Line-item metrics let your teams see the carbon cost of each specific service, enabling optimisation at the most granular level.',
          weight: 7,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Generalised reporting without product specificity.', score: 2 },
            { text: 'Aggregated at high level by product type.', score: 4 },
            { text: 'Basic product category without line-item details.', score: 6 },
            { text: 'Product category level with some line-item data.', score: 10 }
          ]
        },
        {
          id: 'cloud-rc-8',
          question: 'Are reported metrics product-specific or averaged by location?',
          explanation: 'Assesses whether metrics reflect specific products and locations.',
          designImpact: 'Product-specific data with regional factors gives the most accurate picture for comparing services across different deployment locations.',
          weight: 7,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'General location-based averages only.', score: 2 },
            { text: 'Averaged across locations without product detail.', score: 4 },
            { text: 'Product-level without location specificity.', score: 7 },
            { text: 'Product-specific with regional averages.', score: 10 }
          ]
        },
        {
          id: 'cloud-rc-9',
          question: 'Are all products and services included in reported metrics?',
          explanation: 'Assesses completeness of service coverage.',
          designImpact: 'Incomplete coverage means some services have no carbon data at all, creating blind spots in your overall cloud carbon footprint.',
          weight: 7,
          responses: [
            { text: 'Unknown or no response.', score: 0 },
            { text: 'Minimal product coverage.', score: 2 },
            { text: 'Limited to select services.', score: 4 },
            { text: 'Core product categories only.', score: 7 },
            { text: 'Most products included with annual review.', score: 10 }
          ]
        }
      ]
    }
  ]
};
