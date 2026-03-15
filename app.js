// Vendor Environmental Data Quality Assessment - Main Application

const state = {
  view: 'welcome',
  vendors: loadVendors(),
  currentVendorId: null,
  activeTab: 'eud',
  comparisonIds: [],
  showDesignImpact: {},
};

function getCurrentVendor() {
  return state.vendors.find(v => v.id === state.currentVendorId) || null;
}

function updateAnswer(questionId, answerIndex) {
  const vendor = getCurrentVendor();
  if (!vendor) return;
  vendor.answers[questionId] = answerIndex;
  vendor.updatedAt = new Date().toISOString();
  saveVendors(state.vendors);
  render();
}

function createVendor(name) {
  const vendor = { id: generateId(), name, answers: {}, notes: {}, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
  state.vendors.push(vendor);
  state.currentVendorId = vendor.id;
  state.activeTab = 'eud';
  state.view = 'assessment';
  saveVendors(state.vendors);
  render();
}

function deleteVendor(id) {
  if (!confirm('Delete this vendor evaluation? This cannot be undone.')) return;
  state.vendors = state.vendors.filter(v => v.id !== id);
  if (state.currentVendorId === id) { state.currentVendorId = null; state.view = 'welcome'; }
  saveVendors(state.vendors);
  render();
}

// ── Render Engine ──

function render() {
  const app = document.getElementById('app');
  app.innerHTML = renderHeader() + renderMain();
  attachEvents();
}

function renderHeader() {
  return `
  <header class="bg-go-primary text-white no-print">
    <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <div>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M7 12l3-6 4 10 3-7"/></svg>
        </div>
        <div>
          <h1 class="text-lg font-bold leading-tight">Vendor Environmental Data Quality Assessment</h1>
          <p class="text-xs text-emerald-200">Evaluating vendor carbon data methodology, accuracy and coverage</p>
        </div>
      </div>
      <nav class="flex gap-2 text-sm">
        <button onclick="navigate('welcome')" class="px-3 py-1 rounded hover:bg-go-dark ${state.view==='welcome'?'bg-go-dark':''}">Home</button>
        ${state.currentVendorId ? `<button onclick="navigate('assessment')" class="px-3 py-1 rounded hover:bg-go-dark ${state.view==='assessment'?'bg-go-dark':''}">Assessment</button>` : ''}
        ${state.currentVendorId ? `<button onclick="navigate('results')" class="px-3 py-1 rounded hover:bg-go-dark ${state.view==='results'?'bg-go-dark':''}">Results</button>` : ''}
        ${state.vendors.length >= 2 ? `<button onclick="navigate('comparison')" class="px-3 py-1 rounded hover:bg-go-dark ${state.view==='comparison'?'bg-go-dark':''}">Compare</button>` : ''}
      </nav>
    </div>
  </header>`;
}

function renderMain() {
  switch(state.view) {
    case 'welcome': return renderWelcome();
    case 'assessment': return renderAssessment();
    case 'results': return renderResults();
    case 'comparison': return renderComparison();
    default: return renderWelcome();
  }
}

function navigate(view) { state.view = view; render(); window.scrollTo(0,0); }

// ── Welcome View ──

function renderWelcome() {
  const vendors = state.vendors;
  return `
  <div class="max-w-5xl mx-auto px-4 py-8">
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
      <h2 class="text-2xl font-bold text-go-dark mb-4">Why This Tool Exists</h2>
      <p class="text-gray-700 mb-4">This tool helps organisations evaluate the quality of environmental data provided by technology vendors. But this is <strong>not simply about collecting data for sustainability reports</strong>.</p>
      <div class="bg-blue-50 border-l-4 border-go-primary p-4 mb-4">
        <p class="text-go-dark font-semibold mb-2">This is about enabling better design decisions</p>
        <p class="text-gray-700 text-sm">The quality of vendor environmental data directly affects your ability to make informed decisions about digital services. When vendors provide accurate, granular emissions data, your digital teams can:</p>
      </div>
      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <div class="flex gap-3 p-3 bg-gray-50 rounded">
          <span class="text-go-green text-xl mt-0.5">&#9679;</span>
          <div><strong class="text-sm">Choose lower-carbon hardware</strong><p class="text-xs text-gray-600">Compare actual product lifecycle assessments rather than relying on guesswork when specifying laptops, servers, or networking equipment.</p></div>
        </div>
        <div class="flex gap-3 p-3 bg-gray-50 rounded">
          <span class="text-go-green text-xl mt-0.5">&#9679;</span>
          <div><strong class="text-sm">Optimise infrastructure</strong><p class="text-xs text-gray-600">Understand the real energy and carbon costs of different server configurations and utilisation levels to right-size deployments.</p></div>
        </div>
        <div class="flex gap-3 p-3 bg-gray-50 rounded">
          <span class="text-go-green text-xl mt-0.5">&#9679;</span>
          <div><strong class="text-sm">Select cloud services consciously</strong><p class="text-xs text-gray-600">Evaluate cloud providers based on genuine carbon intensity data rather than marketing claims, choosing regions and services with lower environmental impact.</p></div>
        </div>
        <div class="flex gap-3 p-3 bg-gray-50 rounded">
          <span class="text-go-green text-xl mt-0.5">&#9679;</span>
          <div><strong class="text-sm">Design for longevity</strong><p class="text-xs text-gray-600">Understand how hardware refresh cycles, repairability, and end-of-life decisions affect total carbon impact over the service lifetime.</p></div>
        </div>
        <div class="flex gap-3 p-3 bg-gray-50 rounded">
          <span class="text-go-green text-xl mt-0.5">&#9679;</span>
          <div><strong class="text-sm">Set meaningful targets</strong><p class="text-xs text-gray-600">Ground carbon reduction targets in actual baselines rather than estimated ones, making progress measurable and accountability real.</p></div>
        </div>
        <div class="flex gap-3 p-3 bg-gray-50 rounded">
          <span class="text-go-green text-xl mt-0.5">&#9679;</span>
          <div><strong class="text-sm">Drive vendor improvement</strong><p class="text-xs text-gray-600">By systematically assessing data quality, organisations can influence vendors to improve their environmental reporting — raising the bar across the whole supply chain.</p></div>
        </div>
      </div>
      <p class="text-sm text-gray-600">The scoring matrix helps you understand not just <em>what</em> data a vendor provides, but <em>how reliable and useful</em> that data is for making these decisions. A vendor scoring Grade A provides data you can confidently use for product-level carbon comparisons. A vendor scoring Grade D provides data only suitable for rough estimates.</p>
    </div>

    <div class="grid md:grid-cols-2 gap-6 mb-8">
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-bold text-go-dark mb-3">Start New Evaluation</h3>
        <p class="text-sm text-gray-600 mb-4">Begin assessing a new vendor's environmental data quality across end-user devices, core infrastructure, and cloud services.</p>
        <div class="flex gap-2">
          <input type="text" id="new-vendor-name" placeholder="Enter vendor name..." class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-go-primary" />
          <button onclick="handleNewVendor()" class="bg-go-primary text-white px-4 py-2 rounded text-sm font-semibold hover:bg-go-dark">Start</button>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-bold text-go-dark mb-3">Import Evaluation</h3>
        <p class="text-sm text-gray-600 mb-4">Load a previously exported vendor evaluation from a JSON file to continue working on it or compare with others.</p>
        <button onclick="handleImport()" class="bg-go-primary text-white px-4 py-2 rounded text-sm font-semibold hover:bg-go-dark">Import JSON File</button>
      </div>
    </div>

    ${vendors.length > 0 ? `
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 class="text-lg font-bold text-go-dark mb-4">Saved Evaluations</h3>
      <div class="space-y-3">
        ${vendors.map(v => {
          const overall = calculateOverallScore(v.answers);
          const grade = getGrade(overall.percentage);
          return `
          <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div class="flex items-center gap-4">
              <span class="inline-block w-10 h-10 rounded-full ${grade.cssClass} flex items-center justify-center font-bold text-lg">${grade.grade}</span>
              <div>
                <h4 class="font-semibold text-go-dark">${escHtml(v.name)}</h4>
                <p class="text-xs text-gray-500">${overall.answered}/${overall.total} questions answered &middot; ${overall.percentage}% &middot; Last updated: ${new Date(v.updatedAt).toLocaleDateString('en-GB')}</p>
              </div>
            </div>
            <div class="flex gap-2">
              <button onclick="openVendor('${v.id}')" class="bg-go-primary text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-go-dark">Open</button>
              <button onclick="exportVendor(state.vendors.find(x=>x.id==='${v.id}'))" class="border border-gray-300 text-gray-700 px-3 py-1.5 rounded text-xs hover:bg-gray-100">Export</button>
              <button onclick="deleteVendor('${v.id}')" class="border border-go-red text-go-red px-3 py-1.5 rounded text-xs hover:bg-red-50">Delete</button>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>` : ''}
  </div>`;
}

// ── Assessment View ──

function renderAssessment() {
  const vendor = getCurrentVendor();
  if (!vendor) { state.view = 'welcome'; return renderWelcome(); }
  const tabs = [
    { id: 'eud', label: 'End User Devices', icon: '&#128187;' },
    { id: 'infrastructure', label: 'Core Infrastructure', icon: '&#9881;' },
    { id: 'cloud', label: 'Cloud & SaaS', icon: '&#9729;' }
  ];
  const cat = ALL_CATEGORIES[state.activeTab];
  const catScore = calculateCategoryScore(vendor.answers, state.activeTab);
  const grade = getGrade(catScore.percentage);

  return `
  <div class="max-w-6xl mx-auto px-4 py-6">
    <div class="flex items-center justify-between mb-4">
      <div>
        <h2 class="text-xl font-bold text-go-dark">${escHtml(vendor.name)}</h2>
        <p class="text-sm text-gray-500">${catScore.answered}/${catScore.total} questions answered in this category</p>
      </div>
      <div class="flex gap-2 no-print">
        <button onclick="navigate('results')" class="bg-go-primary text-white px-4 py-2 rounded text-sm font-semibold hover:bg-go-dark">View Results</button>
        <button onclick="exportVendor(getCurrentVendor())" class="border border-gray-300 px-4 py-2 rounded text-sm hover:bg-gray-100">Export</button>
      </div>
    </div>

    <!-- Tab Navigation -->
    <div class="flex border-b border-gray-200 mb-6 no-print">
      ${tabs.map(t => {
        const ts = calculateCategoryScore(vendor.answers, t.id);
        const tg = getGrade(ts.percentage);
        return `<button onclick="switchTab('${t.id}')" class="px-5 py-3 text-sm ${state.activeTab===t.id ? 'tab-active' : 'tab-inactive'} flex items-center gap-2">
          <span>${t.icon}</span> ${t.label}
          ${ts.answered > 0 ? `<span class="ml-1 text-xs px-1.5 py-0.5 rounded-full ${tg.cssClass}">${ts.percentage}%</span>` : ''}
        </button>`;
      }).join('')}
    </div>

    <!-- Score Summary Bar -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6 flex items-center gap-6">
      <div class="flex items-center gap-3">
        <span class="inline-flex items-center justify-center w-12 h-12 rounded-full ${grade.cssClass} font-bold text-xl">${grade.grade}</span>
        <div>
          <p class="font-semibold text-sm">${grade.label}</p>
          <p class="text-xs text-gray-500">${catScore.percentage}% data quality score</p>
        </div>
      </div>
      <div class="flex-1">
        <div class="w-full bg-gray-200 rounded-full h-3">
          <div class="h-3 rounded-full progress-bar" style="width:${catScore.percentage}%;background-color:${grade.color}"></div>
        </div>
      </div>
      <p class="text-xs text-gray-500 max-w-xs">${grade.description.split('.')[0]}.</p>
    </div>

    <!-- Category Description -->
    <div class="mb-6 p-4 bg-blue-50 border-l-4 border-go-primary rounded-r">
      <p class="text-sm font-semibold text-go-dark">${cat.name}: ${cat.description}</p>
    </div>

    <!-- Questions -->
    ${cat.sections.map(section => renderSection(section, vendor)).join('')}
  </div>`;
}

function renderSection(section, vendor) {
  const sScore = calculateSectionScore(vendor.answers, section);
  const sGrade = getGrade(sScore.percentage);
  return `
  <div class="mb-8">
    <div class="section-header bg-white pl-4 pr-4 py-3 rounded-r-lg shadow-sm mb-4 flex items-center justify-between">
      <div>
        <h3 class="font-bold text-go-dark">${section.name}</h3>
        <p class="text-xs text-gray-600 mt-1">${section.description}</p>
      </div>
      <div class="text-right flex-shrink-0 ml-4">
        <span class="inline-block px-2 py-1 rounded text-xs font-bold ${sGrade.cssClass}">${sScore.percentage}%</span>
        <p class="text-xs text-gray-500 mt-1">${sScore.answered}/${sScore.total} answered</p>
      </div>
    </div>
    <div class="space-y-4">
      ${section.questions.map((q, idx) => renderQuestion(q, vendor, idx)).join('')}
    </div>
  </div>`;
}

function renderQuestion(q, vendor, idx) {
  const selectedIdx = vendor.answers[q.id];
  const wt = getWeightLabel(q.weight);
  const showImpact = state.showDesignImpact[q.id];

  return `
  <div class="question-card bg-white rounded-lg shadow-sm border border-gray-200 p-5">
    <div class="flex items-start justify-between mb-3">
      <div class="flex-1">
        ${q.category ? `<span class="text-xs font-semibold text-go-accent uppercase tracking-wide">${q.category}</span>` : ''}
        <h4 class="font-semibold text-sm text-gray-900 mt-1">${q.question}</h4>
        ${q.explanation ? `<p class="text-xs text-gray-500 mt-1">${q.explanation}</p>` : ''}
      </div>
      <div class="flex items-center gap-2 ml-4 flex-shrink-0">
        <span class="text-xs px-2 py-0.5 rounded-full font-semibold" style="background:${wt.color}20;color:${wt.color}">${wt.label}</span>
      </div>
    </div>

    <button onclick="toggleDesignImpact('${q.id}')" class="text-xs text-go-accent hover:underline mb-3 no-print flex items-center gap-1">
      <span>${showImpact ? '&#9660;' : '&#9654;'}</span> Why this matters for design decisions
    </button>
    ${showImpact ? `<div class="bg-blue-50 border border-blue-100 rounded p-3 mb-3 text-xs text-gray-700">${q.designImpact}</div>` : ''}

    <div class="space-y-2">
      ${q.responses.map((r, rIdx) => {
        const isSelected = selectedIdx === rIdx;
        return `
        <label class="flex items-start gap-3 p-2.5 rounded border cursor-pointer transition-all ${isSelected ? 'radio-selected border-go-primary' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'}" onclick="handleAnswer('${q.id}', ${rIdx})">
          <input type="radio" name="${q.id}" ${isSelected ? 'checked' : ''} class="mt-1 accent-go-primary" />
          <span class="text-sm flex-1">${r.text}</span>
        </label>`;
      }).join('')}
    </div>
  </div>`;
}

// ── Results View ──

function renderResults() {
  const vendor = getCurrentVendor();
  if (!vendor) { state.view = 'welcome'; return renderWelcome(); }
  const overall = calculateOverallScore(vendor.answers);
  const oGrade = getGrade(overall.percentage);

  return `
  <div class="max-w-5xl mx-auto px-4 py-8">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold text-go-dark">Results: ${escHtml(vendor.name)}</h2>
      <div class="flex gap-2 no-print">
        <button onclick="navigate('assessment')" class="border border-gray-300 px-4 py-2 rounded text-sm hover:bg-gray-100">Back to Assessment</button>
        <button onclick="window.print()" class="bg-go-primary text-white px-4 py-2 rounded text-sm font-semibold hover:bg-go-dark">Print Report</button>
        <button onclick="exportVendor(getCurrentVendor())" class="border border-gray-300 px-4 py-2 rounded text-sm hover:bg-gray-100">Export JSON</button>
      </div>
    </div>

    <!-- Overall Score -->
    <div class="bg-white rounded-lg shadow-sm border-2 p-6 mb-8" style="border-color:${oGrade.color}">
      <div class="flex items-center gap-6">
        <div class="text-center">
          <div class="w-24 h-24 rounded-full ${oGrade.cssClass} flex items-center justify-center text-4xl font-bold">${oGrade.grade}</div>
          <p class="text-sm font-semibold mt-2">${overall.percentage}%</p>
        </div>
        <div class="flex-1">
          <h3 class="text-xl font-bold text-go-dark">Overall Data Quality: ${oGrade.label}</h3>
          <p class="text-sm text-gray-700 mt-2">${oGrade.description}</p>
          <p class="text-xs text-gray-500 mt-2">${overall.answered} of ${overall.total} questions answered across all categories</p>
          ${Object.values(overall.categories).some(c => c.answered === 0) ? `<p class="text-xs text-gray-500 mt-1 italic">Categories with no responses are excluded from the overall score.</p>` : ''}
        </div>
      </div>
    </div>

    <!-- What This Means for Design Decisions -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
      <h3 class="font-bold text-go-dark mb-3">What This Score Means for Your Digital Teams</h3>
      ${renderDesignImplication(oGrade, overall)}
    </div>

    <!-- Category Breakdown -->
    ${renderCategoryBreakdown(overall)}

    <!-- Detailed Scoring Matrix -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
      <h3 class="font-bold text-go-dark mb-4">Detailed Scoring Matrix</h3>
      ${Object.entries(overall.categories).filter(([, c]) => c.answered > 0).map(([catId, catScore]) => {
        const cat = ALL_CATEGORIES[catId];
        return `
        <div class="mb-6 print-break">
          <h4 class="font-semibold text-sm text-go-dark mb-2 border-b pb-1">${cat.name}</h4>
          <table class="w-full text-xs">
            <thead><tr class="text-left text-gray-500 border-b">
              <th class="py-1.5 pr-2 w-6">#</th><th class="py-1.5 pr-2">Question</th><th class="py-1.5 w-16 text-center">Weight</th><th class="py-1.5 w-16 text-center">Score</th><th class="py-1.5 w-16 text-center">Quality</th>
            </tr></thead>
            <tbody>
              ${cat.sections.flatMap(s => s.questions).map((q, i) => {
                const ans = vendor.answers[q.id];
                const maxS = getMaxScore(q);
                const score = ans !== undefined ? q.responses[ans].score : null;
                const pct = score !== null ? Math.round((score/maxS)*100) : null;
                const g = pct !== null ? getGrade(pct) : null;
                const wl = getWeightLabel(q.weight);
                return `<tr class="border-b border-gray-100 ${ans === undefined ? 'opacity-50' : ''}">
                  <td class="py-1.5 pr-2 text-gray-400">${i+1}</td>
                  <td class="py-1.5 pr-2">${q.question.length > 80 ? q.question.substr(0,80)+'...' : q.question}</td>
                  <td class="py-1.5 text-center"><span class="px-1 rounded" style="background:${wl.color}15;color:${wl.color}">${wl.label}</span></td>
                  <td class="py-1.5 text-center font-mono">${score !== null ? score+'/'+maxS : '—'}</td>
                  <td class="py-1.5 text-center">${g ? `<span class="px-1.5 py-0.5 rounded font-semibold ${g.cssClass}" style="font-size:10px">${pct}%</span>` : '<span class="text-gray-400">—</span>'}</td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

function renderCategoryBreakdown(overall) {
  const answeredCats = Object.entries(overall.categories).filter(([, c]) => c.answered > 0);
  const skippedCats = Object.entries(overall.categories).filter(([, c]) => c.answered === 0);
  const gridCols = answeredCats.length === 1 ? 'md:grid-cols-1 max-w-md' : answeredCats.length === 2 ? 'md:grid-cols-2 max-w-2xl' : 'md:grid-cols-3';

  let html = '<div class="grid ' + gridCols + ' gap-6 mb-8">';
  for (const [catId, catScore] of answeredCats) {
    const catInfo = ALL_CATEGORIES[catId];
    const cGrade = getGrade(catScore.percentage);
    html += '<div class="bg-white rounded-lg shadow-sm border border-gray-200 p-5">';
    html += '<div class="flex items-center gap-3 mb-3">';
    html += '<span class="w-10 h-10 rounded-full ' + cGrade.cssClass + ' flex items-center justify-center font-bold text-lg">' + cGrade.grade + '</span>';
    html += '<div><h4 class="font-semibold text-sm">' + catInfo.name + '</h4>';
    html += '<p class="text-xs text-gray-500">' + catScore.percentage + '% &middot; ' + cGrade.label + '</p></div></div>';
    html += '<div class="w-full bg-gray-200 rounded-full h-2.5 mb-3">';
    html += '<div class="h-2.5 rounded-full" style="width:' + catScore.percentage + '%;background:' + cGrade.color + '"></div></div>';
    html += '<div class="space-y-2">';
    for (const s of catScore.sections) {
      const sg = getGrade(s.percentage);
      html += '<div class="flex items-center justify-between text-xs">';
      html += '<span class="text-gray-600 truncate flex-1">' + s.name + '</span>';
      html += '<span class="px-1.5 py-0.5 rounded font-semibold ml-2" style="background:' + sg.color + '15;color:' + sg.color + '">' + s.percentage + '%</span>';
      html += '</div>';
    }
    html += '</div>';
    html += '<p class="text-xs text-gray-400 mt-3">' + catScore.answered + '/' + catScore.total + ' answered</p>';
    html += '</div>';
  }
  html += '</div>';

  if (skippedCats.length > 0) {
    const names = skippedCats.map(([catId]) => ALL_CATEGORIES[catId].name).join(', ');
    const plural = skippedCats.length > 1;
    html += '<div class="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8 text-sm text-gray-500">';
    html += '<strong>Not assessed:</strong> ' + names + ' — no responses were provided for ' + (plural ? 'these categories' : 'this category') + ', so ' + (plural ? 'they are' : 'it is') + ' excluded from the overall score.</div>';
  }
  return html;
}

function renderDesignImplication(grade, overall) {
  const implications = {
    A: `<ul class="text-sm space-y-2 text-gray-700">
      <li>&#10003; <strong>Product-level comparisons</strong> — Your teams can confidently compare the carbon footprint of specific products and configurations.</li>
      <li>&#10003; <strong>Accurate baselines</strong> — Carbon baselines can be set with high confidence for tracking reduction progress.</li>
      <li>&#10003; <strong>SBTi-compatible</strong> — Data quality supports Science Based Targets Initiative reporting requirements.</li>
      <li>&#10003; <strong>Procurement integration</strong> — Carbon data can be weighted meaningfully in procurement scoring.</li>
    </ul>`,
    B: `<ul class="text-sm space-y-2 text-gray-700">
      <li>&#10003; <strong>Category-level decisions</strong> — Teams can compare product categories but may lack precision for specific configurations.</li>
      <li>&#10003; <strong>Reasonable baselines</strong> — Baselines require some supplementary estimates but are directionally sound.</li>
      <li>&#9888; <strong>Gap awareness</strong> — Some data gaps exist; teams should note where estimates fill in for measured data.</li>
      <li>&#10003; <strong>Improvement leverage</strong> — Engage the vendor on specific gaps to move toward Grade A.</li>
    </ul>`,
    C: `<ul class="text-sm space-y-2 text-gray-700">
      <li>&#9888; <strong>Directional only</strong> — Data can indicate whether one option is broadly better than another, but not by how much.</li>
      <li>&#9888; <strong>Significant estimation</strong> — Many figures rely on averages or estimates rather than product-specific data.</li>
      <li>&#10060; <strong>Limited procurement value</strong> — Carbon data should not carry significant weight in procurement scoring at this quality level.</li>
      <li>&#9655; <strong>Action needed</strong> — Engage the vendor with specific data improvement requirements.</li>
    </ul>`,
    D: `<ul class="text-sm space-y-2 text-gray-700">
      <li>&#10060; <strong>Not suitable for design decisions</strong> — Data quality is too low for product or service-level carbon comparisons.</li>
      <li>&#10060; <strong>Reporting only</strong> — Data may be useful for high-level Scope 3 estimates but not for actionable decisions.</li>
      <li>&#9655; <strong>Vendor engagement critical</strong> — Significant improvement in data provision is needed before this data has practical value.</li>
    </ul>`,
    E: `<ul class="text-sm space-y-2 text-gray-700">
      <li>&#10060; <strong>No decision value</strong> — Insufficient data to support any meaningful environmental assessment.</li>
      <li>&#9655; <strong>Fundamental gaps</strong> — The vendor needs to establish basic carbon reporting capabilities.</li>
      <li>&#9655; <strong>Consider alternatives</strong> — Evaluate whether other vendors can provide better environmental data for equivalent products/services.</li>
    </ul>`
  };
  return implications[grade.grade] || implications.E;
}

// ── Comparison View ──

function renderComparison() {
  if (state.vendors.length < 2) return `<div class="max-w-5xl mx-auto px-4 py-8"><p class="text-gray-500">You need at least two vendor evaluations to compare.</p></div>`;
  const selected = state.comparisonIds.length >= 2 ? state.comparisonIds : [state.vendors[0].id, state.vendors[1].id];

  return `
  <div class="max-w-6xl mx-auto px-4 py-8">
    <h2 class="text-2xl font-bold text-go-dark mb-6">Vendor Comparison</h2>
    <div class="flex gap-4 mb-6 no-print">
      ${[0,1].map(i => `
        <select onchange="handleComparisonSelect(${i}, this.value)" class="border border-gray-300 rounded px-3 py-2 text-sm flex-1">
          ${state.vendors.map(v => `<option value="${v.id}" ${selected[i]===v.id?'selected':''}>${escHtml(v.name)}</option>`).join('')}
        </select>
      `).join('')}
    </div>
    ${renderComparisonTable(selected)}
  </div>`;
}

function renderComparisonTable(ids) {
  const vendors = ids.map(id => state.vendors.find(v => v.id === id)).filter(Boolean);
  if (vendors.length < 2) return '';
  const scores = vendors.map(v => calculateOverallScore(v.answers));
  const grades = scores.map(s => getGrade(s.percentage));

  let html = `
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
    <table class="w-full">
      <thead><tr class="border-b">
        <th class="text-left py-3 text-sm text-gray-500">Metric</th>
        ${vendors.map((v, i) => `<th class="text-center py-3"><span class="font-bold text-go-dark">${escHtml(v.name)}</span></th>`).join('')}
      </tr></thead>
      <tbody>
        <tr class="border-b">
          <td class="py-3 text-sm font-semibold">Overall Grade</td>
          ${scores.map((s, i) => `<td class="py-3 text-center"><span class="inline-flex items-center justify-center w-12 h-12 rounded-full ${grades[i].cssClass} font-bold text-xl">${grades[i].grade}</span><br><span class="text-xs">${s.percentage}% — ${grades[i].label}</span></td>`).join('')}
        </tr>`;

  for (const catId of Object.keys(ALL_CATEGORIES)) {
    const catInfo = ALL_CATEGORIES[catId];
    const catScores = vendors.map(v => calculateCategoryScore(v.answers, catId));
    const catGrades = catScores.map(s => getGrade(s.percentage));
    html += `
        <tr class="border-b bg-gray-50">
          <td class="py-3 text-sm font-semibold">${catInfo.name}</td>
          ${catScores.map((s, i) => `<td class="py-3 text-center">
            ${s.answered > 0 ? `<div class="flex items-center justify-center gap-2">
              <span class="w-8 h-8 rounded-full ${catGrades[i].cssClass} flex items-center justify-center font-bold text-sm">${catGrades[i].grade}</span>
              <span class="text-sm">${s.percentage}%</span>
            </div>` : '<span class="text-xs text-gray-400">Not assessed</span>'}
          </td>`).join('')}
        </tr>`;

    for (const section of catInfo.sections) {
      const sScores = vendors.map(v => calculateSectionScore(v.answers, section));
      const sGrades = sScores.map(s => getGrade(s.percentage));
      html += `
        <tr class="border-b border-gray-100">
          <td class="py-2 text-xs text-gray-600 pl-6">${section.name}</td>
          ${sScores.map((s, i) => {
            const better = sScores[0].percentage !== sScores[1].percentage && s.percentage === Math.max(sScores[0].percentage, sScores[1].percentage);
            return `<td class="py-2 text-center text-xs ${better ? 'font-bold' : ''}">
              <span class="px-2 py-0.5 rounded" style="background:${sGrades[i].color}15;color:${sGrades[i].color}">${s.percentage}%</span>
            </td>`;
          }).join('')}
        </tr>`;
    }
  }

  html += `
        <tr class="border-t-2">
          <td class="py-3 text-sm font-semibold">Questions Answered</td>
          ${scores.map(s => `<td class="py-3 text-center text-sm">${s.answered} / ${s.total}</td>`).join('')}
        </tr>
      </tbody>
    </table>
  </div>`;
  return html;
}

// ── Event Handlers ──

function handleNewVendor() {
  const input = document.getElementById('new-vendor-name');
  const name = input ? input.value.trim() : '';
  if (!name) { alert('Please enter a vendor name.'); return; }
  createVendor(name);
}

function openVendor(id) {
  state.currentVendorId = id;
  state.view = 'assessment';
  state.activeTab = 'eud';
  render();
}

function switchTab(tabId) {
  state.activeTab = tabId;
  render();
  window.scrollTo(0, 0);
}

function handleAnswer(questionId, answerIndex) {
  updateAnswer(questionId, answerIndex);
}

function toggleDesignImpact(questionId) {
  state.showDesignImpact[questionId] = !state.showDesignImpact[questionId];
  render();
}

function handleImport() {
  importVendorFile((vendor) => {
    state.vendors.push(vendor);
    saveVendors(state.vendors);
    state.currentVendorId = vendor.id;
    state.view = 'assessment';
    render();
  });
}

function handleComparisonSelect(index, vendorId) {
  if (!state.comparisonIds.length) {
    state.comparisonIds = [state.vendors[0].id, state.vendors[1].id];
  }
  state.comparisonIds[index] = vendorId;
  render();
}

function attachEvents() {
  const input = document.getElementById('new-vendor-name');
  if (input) {
    input.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleNewVendor(); });
  }
}

function escHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ── Initialize ──
render();
