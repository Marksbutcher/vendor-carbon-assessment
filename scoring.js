// Scoring engine for vendor evaluation

const ALL_CATEGORIES = { eud: EUD_QUESTIONS, infrastructure: INFRA_QUESTIONS, cloud: CLOUD_QUESTIONS };

function getAllQuestions(category) {
  const cat = ALL_CATEGORIES[category];
  if (!cat) return [];
  return cat.sections.flatMap(s => s.questions);
}

function getMaxScore(question) {
  return Math.max(...question.responses.map(r => r.score));
}

function calculateSectionScore(answers, section) {
  let weightedScore = 0, maxWeightedScore = 0, answered = 0;
  for (const q of section.questions) {
    const ansIdx = answers[q.id];
    const maxS = getMaxScore(q);
    maxWeightedScore += q.weight * maxS;
    if (ansIdx !== undefined && ansIdx !== null) {
      weightedScore += q.weight * q.responses[ansIdx].score;
      answered++;
    }
  }
  return {
    score: weightedScore,
    maxScore: maxWeightedScore,
    percentage: maxWeightedScore > 0 ? Math.round((weightedScore / maxWeightedScore) * 100) : 0,
    answered,
    total: section.questions.length
  };
}

function calculateCategoryScore(answers, categoryId) {
  const cat = ALL_CATEGORIES[categoryId];
  if (!cat) return { score: 0, maxScore: 0, percentage: 0, answered: 0, total: 0, sections: [] };
  let totalWeighted = 0, totalMax = 0, totalAnswered = 0, totalQuestions = 0;
  const sections = cat.sections.map(s => {
    const sc = calculateSectionScore(answers, s);
    totalWeighted += sc.score;
    totalMax += sc.maxScore;
    totalAnswered += sc.answered;
    totalQuestions += sc.total;
    return { name: s.name, ...sc };
  });
  return {
    score: totalWeighted,
    maxScore: totalMax,
    percentage: totalMax > 0 ? Math.round((totalWeighted / totalMax) * 100) : 0,
    answered: totalAnswered,
    total: totalQuestions,
    sections
  };
}

function calculateOverallScore(answers) {
  const categories = {};
  let totalWeighted = 0, totalMax = 0, totalAnswered = 0, totalQuestions = 0;
  for (const catId of Object.keys(ALL_CATEGORIES)) {
    const sc = calculateCategoryScore(answers, catId);
    categories[catId] = sc;
    totalWeighted += sc.score;
    totalMax += sc.maxScore;
    totalAnswered += sc.answered;
    totalQuestions += sc.total;
  }
  return {
    percentage: totalMax > 0 ? Math.round((totalWeighted / totalMax) * 100) : 0,
    answered: totalAnswered,
    total: totalQuestions,
    categories
  };
}

function getGrade(percentage) {
  if (percentage >= 80) return {
    grade: 'A', label: 'LCA-Grade Data', cssClass: 'grade-a',
    color: '#22883E',
    description: 'Data quality supports accurate lifecycle carbon analysis. Your teams can make precise, evidence-based choices between specific products and configurations, and set accurate carbon baselines aligned with Science Based Targets.'
  };
  if (percentage >= 60) return {
    grade: 'B', label: 'Good Quality', cssClass: 'grade-b',
    color: '#1A8A7D',
    description: 'Data supports meaningful comparisons between product categories. Minor gaps may require supplementary estimates, but a solid foundation exists for sustainable design decisions and directional carbon reduction targets.'
  };
  if (percentage >= 40) return {
    grade: 'C', label: 'Moderate Quality', cssClass: 'grade-c',
    color: '#E6A817',
    description: 'Data provides directional guidance. Your teams can identify broadly lower-carbon options, but precision is limited. Suitable for category-level decisions, not product-specific comparisons. Vendor engagement recommended to improve data provision.'
  };
  if (percentage >= 20) return {
    grade: 'D', label: 'Basic Quality', cssClass: 'grade-d',
    color: '#D47A00',
    description: 'Data relies heavily on estimates and industry averages. Limited usefulness for specific design decisions. Primarily suitable for high-level reporting. Significant vendor engagement needed to improve data quality.'
  };
  return {
    grade: 'E', label: 'Insufficient', cssClass: 'grade-e',
    color: '#C93B2C',
    description: 'Data quality is too low to support informed design or procurement decisions. Vendor engagement is essential to establish basic carbon reporting capabilities before data can be used for any meaningful purpose.'
  };
}

function getWeightLabel(weight) {
  if (weight >= 9) return { label: 'Critical', color: '#C93B2C' };
  if (weight >= 7) return { label: 'High', color: '#D47A00' };
  if (weight >= 5) return { label: 'Medium', color: '#E6A817' };
  return { label: 'Supporting', color: '#5A6B70' };
}

// Storage
function saveVendors(vendors) {
  try { localStorage.setItem('vendor-env-evaluations', JSON.stringify(vendors)); } catch(e) { console.warn('Save failed', e); }
}

function loadVendors() {
  try {
    const data = localStorage.getItem('vendor-env-evaluations');
    return data ? JSON.parse(data) : [];
  } catch(e) { return []; }
}

function exportVendor(vendor) {
  const blob = new Blob([JSON.stringify(vendor, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `vendor-evaluation-${vendor.name.replace(/[^a-z0-9]/gi, '-').toLowerCase()}-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importVendorFile(callback) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const vendor = JSON.parse(ev.target.result);
        if (vendor && vendor.name && vendor.answers) {
          vendor.id = 'v-' + Date.now();
          vendor.importedAt = new Date().toISOString();
          callback(vendor);
        } else {
          alert('Invalid vendor evaluation file.');
        }
      } catch(err) { alert('Could not parse file: ' + err.message); }
    };
    reader.readAsText(file);
  };
  input.click();
}

function generateId() { return 'v-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6); }
