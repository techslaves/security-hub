// Security Hub: OWASP Top 10 for LLM Applications 2025 & EU NIS 2 CyFun® 2025
// Light Color Theme Edition

document.addEventListener("DOMContentLoaded", () => {
  // --- VIEW SWITCHING ELEMENTS ---
  const btnSwitchOwasp = document.getElementById("btn-switch-owasp");
  const btnSwitchNis2 = document.getElementById("btn-switch-nis2");
  const viewOwasp = document.getElementById("view-owasp");
  const viewNis2 = document.getElementById("view-nis2");

  const brandIconBox = document.getElementById("brand-icon-box");
  const brandIconSvg = document.getElementById("brand-icon-svg");
  const brandTitle = document.getElementById("brand-title");
  const brandSubtitle = document.getElementById("brand-subtitle");
  const externalLinkBtn = document.getElementById("external-link-btn");
  const externalLinkLabel = document.getElementById("external-link-label");
  const ambientCyan = document.getElementById("ambient-cyan");
  const ambientBlue = document.getElementById("ambient-blue");
  const ambientAmber = document.getElementById("ambient-amber");
  const themeToggle = document.getElementById("theme-toggle");

  // --- OWASP LLM ELEMENTS ---
  const searchInput = document.getElementById("search-input");
  const categoryFilters = document.getElementById("category-filters");
  const vulnGrid = document.getElementById("vuln-grid");
  const modal = document.getElementById("vuln-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalContent = document.getElementById("modal-body");
  const architectureContainer = document.getElementById("architecture-diagram");
  const checklistContainer = document.getElementById("checklist-container");
  const auditScoreEl = document.getElementById("audit-score");
  const auditProgressEl = document.getElementById("audit-progress");
  const exportChecklistBtn = document.getElementById("export-checklist-btn");
  const resetChecklistBtn = document.getElementById("reset-checklist-btn");

  // --- NIS 2 / CYFUN ELEMENTS ---
  const sectorSelect = document.getElementById("sector-select");
  const orgSizeSelect = document.getElementById("org-size-select");
  const evaluatorResult = document.getElementById("evaluator-result");
  const sectorClassificationBadge = document.getElementById("sector-classification-badge");
  const cyfunControlsContainer = document.getElementById("cyfun-controls-container");
  const cyfunSearchInput = document.getElementById("cyfun-search-input");
  const keyMeasuresOnlyToggle = document.getElementById("key-measures-only-toggle");
  const cyfunSelectedLevelDisplay = document.getElementById("cyfun-selected-level-display");
  const cyfunTargetScore = document.getElementById("cyfun-target-score");
  const cyfunScoreDisplay = document.getElementById("cyfun-score-display");
  const cyfunProgressBar = document.getElementById("cyfun-progress-bar");
  const kmComplianceStatus = document.getElementById("km-compliance-status");
  const exportCyfunBtn = document.getElementById("export-cyfun-btn");
  const resetCyfunBtn = document.getElementById("reset-cyfun-btn");

  // --- STATE ---
  let currentFramework = "owasp";

  // OWASP State
  let activeCategory = "all";
  let searchQuery = "";
  let auditState = JSON.parse(localStorage.getItem("owasp_llm_checklist") || "{}");

  // NIS 2 State
  let selectedSectorId = NIS2_DATA.sectors[0].id;
  let selectedOrgSize = 3;
  let activeCyfunLevel = "all";
  let showKeyMeasuresOnly = false;
  let cyfunSearchQuery = "";
  let cyfunAuditState = JSON.parse(localStorage.getItem("nis2_cyfun_audit") || "{}");

  // --- FRAMEWORK SWITCHING LOGIC ---
  function setFramework(framework, updateHash = true) {
    currentFramework = framework;

    if (framework === "owasp") {
      viewOwasp.classList.remove("hidden-view");
      viewNis2.classList.add("hidden-view");

      btnSwitchOwasp.className =
        "flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 bg-white text-cyan-800 shadow-sm border border-slate-200";
      btnSwitchNis2.className =
        "flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 text-slate-600 hover:text-slate-900";

      brandIconBox.className =
        "w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 p-0.5 flex items-center justify-center shadow-sm transition-transform hover:scale-105";
      brandIconSvg.innerHTML = `
        <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"/>
        <path d="M12 8v4M12 16h.01"/>
      `;
      brandIconSvg.className = "w-5 h-5 text-cyan-600";
      brandSubtitle.textContent = "Security Hub";
      brandSubtitle.className = "text-[11px] uppercase font-bold tracking-widest text-cyan-700 block";
      brandTitle.textContent = "OWASP Top 10 LLM";

      externalLinkBtn.href = "https://genai.owasp.org";
      externalLinkLabel.textContent = "genai.owasp.org";

      ambientCyan.style.opacity = "1";
      ambientBlue.style.opacity = "1";
      ambientAmber.style.opacity = "0";

      if (updateHash) history.replaceState(null, "", "#owasp-llm");
    } else {
      viewNis2.classList.remove("hidden-view");
      viewOwasp.classList.add("hidden-view");

      btnSwitchNis2.className =
        "flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 bg-white text-amber-900 shadow-sm border border-slate-200";
      btnSwitchOwasp.className =
        "flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 text-slate-600 hover:text-slate-900";

      brandIconBox.className =
        "w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 p-0.5 flex items-center justify-center shadow-sm transition-transform hover:scale-105";
      brandIconSvg.innerHTML = `
        <path fill="currentColor" fill-rule="evenodd" d="M10 1.944A11.954 11.954 0 0117.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001A11.954 11.954 0 0110 1.944z" clip-rule="evenodd"/>
      `;
      brandIconSvg.className = "w-5 h-5 text-amber-600";
      brandSubtitle.textContent = "Compliance Hub";
      brandSubtitle.className = "text-[11px] uppercase font-bold tracking-widest text-amber-700 block";
      brandTitle.textContent = "EU NIS 2 & CyFun®";

      externalLinkBtn.href = "https://cyfun.eu";
      externalLinkLabel.textContent = "cyfun.eu";

      ambientCyan.style.opacity = "0.2";
      ambientBlue.style.opacity = "0.2";
      ambientAmber.style.opacity = "1";

      if (updateHash) history.replaceState(null, "", "#nis2-cyfun");
    }
  }

  btnSwitchOwasp.addEventListener("click", () => setFramework("owasp"));
  btnSwitchNis2.addEventListener("click", () => setFramework("nis2"));

  // ==========================================
  // SECTION 1: OWASP TOP 10 LOGIC (LIGHT THEME)
  // ==========================================
  const iconMap = {
    zap: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
    lock: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>`,
    truck: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/></svg>`,
    "alert-triangle": `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`,
    "shield-alert": `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"/></svg>`,
    cpu: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m16-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>`,
    "file-text": `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
    database: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>`,
    "help-circle": `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    activity: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>`
  };

  const getBadgeClass = (severity) => {
    switch (severity.toLowerCase()) {
      case "critical":
        return "bg-rose-50 text-rose-700 border border-rose-200";
      case "high":
        return "bg-amber-50 text-amber-800 border border-amber-200";
      case "medium":
        return "bg-sky-50 text-sky-700 border border-sky-200";
      default:
        return "bg-slate-100 text-slate-700 border border-slate-200";
    }
  };

  function renderCategoryButtons() {
    categoryFilters.innerHTML = OWASP_DATA.categories
      .map(
        (cat) => `
        <button
          class="cat-filter-btn px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
            activeCategory === cat.id
              ? "bg-cyan-50 text-cyan-800 border-cyan-400 font-bold shadow-sm"
              : "bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-50"
          }"
          data-category="${cat.id}"
        >
          ${cat.name}
        </button>
      `
      )
      .join("");

    document.querySelectorAll(".cat-filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.getAttribute("data-category");
        renderCategoryButtons();
        renderVulnerabilities();
      });
    });
  }

  function getFilteredVulnerabilities() {
    return OWASP_DATA.vulnerabilities.filter((v) => {
      const matchesCategory = activeCategory === "all" || v.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        v.id.toLowerCase().includes(q) ||
        v.title.toLowerCase().includes(q) ||
        v.summary.toLowerCase().includes(q) ||
        v.description.toLowerCase().includes(q) ||
        v.mitigations.some((m) => m.toLowerCase().includes(q)) ||
        v.scenarios.some((s) => s.title.toLowerCase().includes(q) || s.text.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }

  function renderVulnerabilities() {
    const list = getFilteredVulnerabilities();
    if (list.length === 0) {
      vulnGrid.innerHTML = `
        <div class="col-span-full py-16 text-center text-slate-500 bg-white rounded-2xl border border-slate-200">
          <p class="text-lg font-semibold text-slate-800">No vulnerabilities match your search query</p>
          <p class="text-sm mt-1 text-slate-500">Try searching for keywords like "RAG", "Injection", "LoRA", or "Wallet"</p>
        </div>
      `;
      return;
    }

    vulnGrid.innerHTML = list
      .map(
        (v) => `
        <article class="glass-card group relative p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:border-cyan-400 hover:shadow-lg cursor-pointer bg-white" onclick="openVulnModal('${v.id}')">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <span class="p-2.5 rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-100 group-hover:scale-105 group-hover:bg-cyan-100 transition-all">
                  ${iconMap[v.icon] || iconMap.zap}
                </span>
                <div>
                  <span class="text-xs font-mono font-semibold tracking-wider text-cyan-700">${v.code}</span>
                  <h3 class="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">${v.title}</h3>
                </div>
              </div>
              <span class="text-xs font-semibold px-2.5 py-1 rounded-full ${getBadgeClass(v.severity)}">
                ${v.severity}
              </span>
            </div>

            <p class="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
              ${v.summary}
            </p>

            <div class="space-y-2 mb-6">
              <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                Key Attack Variants
              </div>
              <ul class="text-xs text-slate-500 space-y-1 pl-2 border-l border-slate-200">
                ${v.subtypes.slice(0, 2).map((s) => `<li class="truncate">• <span class="text-slate-800 font-medium">${s.name}</span></li>`).join("")}
              </ul>
            </div>
          </div>

          <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span class="text-xs text-slate-500 flex items-center gap-1.5 font-mono">
              ${v.mitigations.length} Mitigations
            </span>
            <span class="inline-flex items-center gap-1 text-xs font-semibold text-cyan-700 group-hover:translate-x-1 transition-transform">
              Explore Risk &rarr;
            </span>
          </div>
        </article>
      `
      )
      .join("");
  }

  window.openVulnModal = function (id) {
    const v = OWASP_DATA.vulnerabilities.find((item) => item.id === id);
    if (!v) return;

    modalContent.innerHTML = `
      <div class="space-y-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div class="flex items-center gap-3">
            <span class="p-3 rounded-2xl bg-cyan-50 text-cyan-700 border border-cyan-200">
              ${iconMap[v.icon] || iconMap.zap}
            </span>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-sm font-mono font-bold text-cyan-700">${v.code}</span>
                <span class="text-xs px-2.5 py-0.5 rounded-full ${getBadgeClass(v.severity)}">${v.severity}</span>
              </div>
              <h2 class="text-2xl font-extrabold text-slate-900 mt-1">${v.title}</h2>
            </div>
          </div>
          <button onclick="shareVuln('${v.id}')" class="self-start sm:self-auto text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200 transition flex items-center gap-1.5">
            Share Link
          </button>
        </div>

        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">Vulnerability Overview</h4>
          <p class="text-slate-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">${v.description}</p>
        </div>

        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-3">Attack Subtypes &amp; Variants</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${v.subtypes
              .map(
                (st) => `
                <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h5 class="text-sm font-semibold text-slate-900 mb-1 flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
                    ${st.name}
                  </h5>
                  <p class="text-xs text-slate-600 leading-relaxed">${st.desc}</p>
                </div>
              `
              )
              .join("")}
          </div>
        </div>

        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-3">Real-World Attack Scenarios</h4>
          <div class="space-y-3">
            ${v.scenarios
              .map(
                (sc, idx) => `
                <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span class="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-cyan-200">
                    ${idx + 1}
                  </span>
                  <div>
                    <h6 class="text-sm font-semibold text-slate-900 mb-1">${sc.title}</h6>
                    <p class="text-xs text-slate-600 leading-relaxed">${sc.text}</p>
                  </div>
                </div>
              `
              )
              .join("")}
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between mb-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-2">
              Mitigation &amp; Prevention Controls
            </h4>
            <span class="text-xs text-slate-500 font-mono">${v.mitigations.length} measures</span>
          </div>
          <div class="space-y-2">
            ${v.mitigations
              .map(
                (m, mIdx) => `
                <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 group">
                  <span class="w-5 h-5 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 border border-emerald-200">
                    ${mIdx + 1}
                  </span>
                  <p class="text-xs sm:text-sm text-slate-800 flex-1 leading-relaxed">${m}</p>
                  <button onclick="copyToClipboard('${m.replace(/'/g, "\\'")}')" class="opacity-0 group-hover:opacity-100 transition p-1 text-slate-500 hover:text-slate-900" title="Copy">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                  </button>
                </div>
              `
              )
              .join("")}
          </div>
        </div>

        <div class="pt-4 border-t border-slate-200 flex flex-wrap gap-2 items-center">
          <span class="text-xs font-semibold text-slate-500">Framework Alignment:</span>
          ${v.taxonomies
            .map(
              (t) => `
              <span class="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                ${t}
              </span>
            `
            )
            .join("")}
        </div>
      </div>
    `;

    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  };

  function closeModal() {
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }

  modalCloseBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
  });

  function renderArchitecture() {
    architectureContainer.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${OWASP_DATA.architectureNodes
          .map(
            (node) => `
            <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all flex flex-col justify-between">
              <div>
                <h4 class="text-base font-bold text-slate-900 mb-1">${node.title}</h4>
                <p class="text-xs text-slate-600 mb-4">${node.desc}</p>
                <div class="mb-4">
                  <span class="text-[11px] font-bold uppercase tracking-wider text-rose-700 block mb-1">Applicable Vulnerabilities:</span>
                  <div class="flex flex-wrap gap-1.5">
                    ${node.threats
                      .map(
                        (t) => `
                        <span class="text-[11px] font-mono px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 border border-rose-200">
                          ${t}
                        </span>
                      `
                      )
                      .join("")}
                  </div>
                </div>
              </div>
              <div class="pt-3 border-t border-slate-100">
                <span class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-0.5">Recommended Defense:</span>
                <p class="text-xs text-slate-700 leading-normal">${node.safeguards}</p>
              </div>
            </div>
          `
          )
          .join("")}
      </div>
    `;
  }

  function renderChecklist() {
    let totalItems = 0;
    let checkedItems = 0;

    const sections = OWASP_DATA.vulnerabilities.map((v) => {
      const items = v.mitigations.map((m, idx) => {
        const itemKey = `${v.id}_m${idx}`;
        const isChecked = Boolean(auditState[itemKey]);
        totalItems++;
        if (isChecked) checkedItems++;

        return `
          <label class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer transition">
            <input
              type="checkbox"
              class="audit-checkbox mt-1 w-4 h-4 rounded text-cyan-600 bg-white border-slate-300 focus:ring-cyan-500"
              data-key="${itemKey}"
              ${isChecked ? "checked" : ""}
            />
            <span class="text-xs sm:text-sm ${isChecked ? "text-slate-400 line-through" : "text-slate-700"}">
              ${m}
            </span>
          </label>
        `;
      });

      return `
        <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm mb-4">
          <div class="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
            <div class="flex items-center gap-2">
              <span class="text-xs font-mono font-bold text-cyan-700">${v.code}</span>
              <h4 class="text-sm font-bold text-slate-900">${v.title}</h4>
            </div>
            <span class="text-xs px-2 py-0.5 rounded-full ${getBadgeClass(v.severity)}">${v.severity}</span>
          </div>
          <div class="space-y-1">
            ${items.join("")}
          </div>
        </div>
      `;
    });

    checklistContainer.innerHTML = sections.join("");
    const percentage = totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;
    auditScoreEl.textContent = `${percentage}%`;
    auditProgressEl.style.width = `${percentage}%`;

    document.querySelectorAll(".audit-checkbox").forEach((cb) => {
      cb.addEventListener("change", (e) => {
        const key = e.target.getAttribute("data-key");
        if (e.target.checked) {
          auditState[key] = true;
        } else {
          delete auditState[key];
        }
        localStorage.setItem("owasp_llm_checklist", JSON.stringify(auditState));
        renderChecklist();
      });
    });
  }

  exportChecklistBtn.addEventListener("click", () => {
    let md = `# OWASP Top 10 for LLM Applications (2025) - Security Audit Report\n\n`;
    md += `Generated: ${new Date().toLocaleString()}\n`;
    md += `Overall Defense Readiness: ${auditScoreEl.textContent}\n\n`;
    md += `## Checklist Status\n\n`;

    OWASP_DATA.vulnerabilities.forEach((v) => {
      md += `### ${v.code}: ${v.title} (${v.severity})\n`;
      v.mitigations.forEach((m, idx) => {
        const key = `${v.id}_m${idx}`;
        const isChecked = Boolean(auditState[key]);
        md += `- [${isChecked ? "x" : " "}] ${m}\n`;
      });
      md += `\n`;
    });

    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `owasp-llm-2025-security-audit.md`;
    a.click();
    URL.revokeObjectURL(url);
  });

  resetChecklistBtn.addEventListener("click", () => {
    if (confirm("Reset all checked mitigations in your local LLM audit?")) {
      auditState = {};
      localStorage.removeItem("owasp_llm_checklist");
      renderChecklist();
    }
  });

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderVulnerabilities();
  });

  window.copyToClipboard = function (text) {
    navigator.clipboard.writeText(text).then(() => {
      const toast = document.getElementById("toast");
      toast.classList.remove("opacity-0", "translate-y-4");
      setTimeout(() => {
        toast.classList.add("opacity-0", "translate-y-4");
      }, 2000);
    });
  };

  window.shareVuln = function (id) {
    const url = new URL(window.location.href);
    url.hash = `vuln-${id}`;
    navigator.clipboard.writeText(url.toString()).then(() => {
      alert(`Direct link copied: ${url.toString()}`);
    });
  };

  // ==========================================
  // SECTION 2: EU NIS 2 & CYFUN 2025 (LIGHT THEME)
  // ==========================================

  function initSectorDropdown() {
    sectorSelect.innerHTML = NIS2_DATA.sectors
      .map(
        (sec) => `
        <option value="${sec.id}" ${sec.id === selectedSectorId ? "selected" : ""}>
          ${sec.name} (${sec.annex})
        </option>
      `
      )
      .join("");

    sectorSelect.addEventListener("change", (e) => {
      selectedSectorId = e.target.value;
      updateEvaluatorResult();
    });

    orgSizeSelect.addEventListener("change", (e) => {
      selectedOrgSize = parseInt(e.target.value, 10);
      updateEvaluatorResult();
    });
  }

  function updateEvaluatorResult() {
    const sector = NIS2_DATA.sectors.find((s) => s.id === selectedSectorId) || NIS2_DATA.sectors[0];
    const isEssential = sector.annex === "Annex I" || (selectedOrgSize === 3 && sector.baseScore >= 180);
    const classification = isEssential ? "Essential Entity (Annex I)" : "Important Entity (Annex II)";

    let assuranceLevel = "important";
    let targetMaturity = "≥ 3.0 / 5.0";
    let fineText = NIS2_DATA.metadata.penalties.important;
    let exclusions = "Up to 3 non-key measures may be excluded (N/A = 3.0 pts).";

    if (isEssential) {
      assuranceLevel = "essential";
      targetMaturity = "≥ 3.5 / 5.0 (Each Category ≥ 3.0)";
      fineText = NIS2_DATA.metadata.penalties.essential;
      exclusions = "Up to 5 non-key measures may be excluded (N/A = 3.0 pts).";
    } else if (selectedOrgSize === 1 && sector.baseScore < 100) {
      assuranceLevel = "basic";
      targetMaturity = "≥ 2.5 / 5.0";
      exclusions = "1 non-key measure may be excluded (N/A = 2.5 pts).";
    }

    sectorClassificationBadge.innerHTML = `
      <span class="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
        isEssential
          ? "bg-rose-100 text-rose-800 border border-rose-300"
          : "bg-amber-100 text-amber-900 border border-amber-300"
      }">
        ${classification}
      </span>
    `;

    evaluatorResult.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <span class="text-[11px] font-mono uppercase text-slate-500 block mb-0.5">Required CyFun® Assurance Level</span>
          <div class="text-xl font-black text-slate-900 capitalize flex items-center gap-2 mt-1">
            ${assuranceLevel}
            <span class="text-xs font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold border border-amber-300">
              ${targetMaturity}
            </span>
          </div>
          <p class="text-xs text-slate-600 mt-2">${exclusions}</p>
        </div>

        <div>
          <span class="text-[11px] font-mono uppercase text-slate-500 block mb-0.5">Applicable Fine Exposure</span>
          <p class="text-xs text-rose-700 font-semibold leading-relaxed mt-1">${fineText}</p>
        </div>

        <div>
          <span class="text-[11px] font-mono uppercase text-slate-500 block mb-0.5">Mandatory Incident Notification Deadlines</span>
          <p class="text-xs text-slate-700 leading-relaxed mt-1">
            <strong class="text-amber-700">24h</strong> Early Warning &bull; <strong class="text-amber-700">72h</strong> Incident Assessment &bull; <strong class="text-amber-700">1mo</strong> Final Root-Cause Report to national CSIRT.
          </p>
        </div>
      </div>
    `;
  }

  function initCyfunFilters() {
    document.querySelectorAll(".cyfun-filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCyfunLevel = btn.getAttribute("data-level");
        document.querySelectorAll(".cyfun-filter-btn").forEach((b) => {
          b.className =
            "cyfun-filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold border transition bg-white text-slate-600 border-slate-300 hover:text-slate-900 hover:bg-slate-50";
        });
        btn.className =
          "cyfun-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold border transition bg-amber-50 text-amber-900 border-amber-300 shadow-sm";

        renderCyfunControls();
      });
    });

    if (cyfunSearchInput) {
      cyfunSearchInput.addEventListener("input", (e) => {
        cyfunSearchQuery = e.target.value.toLowerCase().trim();
        renderCyfunControls();
      });
    }

    keyMeasuresOnlyToggle.addEventListener("change", (e) => {
      showKeyMeasuresOnly = e.target.checked;
      renderCyfunControls();
    });
  }

  function renderCyfunControls() {
    let totalControls = 0;
    let sumScore = 0;
    let totalKM = 0;
    let compliantKM = 0;

    const levelMap = {
      all: { name: "All Assurance Levels (218 Controls)", target: "≥ 3.0 / 5.0" },
      basic: { name: "Basic Assurance Level (34 Controls)", target: "≥ 2.5 / 5.0" },
      important: { name: "Important Assurance Level (133 Controls)", target: "≥ 3.0 / 5.0" },
      essential: { name: "Essential Assurance Level (218 Controls)", target: "≥ 3.5 / 5.0" }
    };
    cyfunSelectedLevelDisplay.textContent = levelMap[activeCyfunLevel]?.name || "All Levels";
    cyfunTargetScore.textContent = levelMap[activeCyfunLevel]?.target || "≥ 3.0 / 5.0";

    const q = cyfunSearchQuery;

    const sections = NIS2_DATA.functions.map((fn) => {
      const visibleControls = fn.controls.filter((c) => {
        // Level matching (Basic shows all basic; Important shows basic+important; Essential shows all)
        const matchesLevel =
          activeCyfunLevel === "all" ||
          (activeCyfunLevel === "basic" && c.level === "basic") ||
          (activeCyfunLevel === "important" && (c.level === "basic" || c.level === "important")) ||
          (activeCyfunLevel === "essential" && (c.level === "basic" || c.level === "important" || c.level === "essential"));

        const matchesKM = !showKeyMeasuresOnly || c.isKey;

        // Search matching (by ID, subcategory, category, or requirement text)
        const matchesSearch =
          !q ||
          c.id.toLowerCase().includes(q) ||
          (c.subcategory && c.subcategory.toLowerCase().includes(q)) ||
          c.category.toLowerCase().includes(q) ||
          c.req.toLowerCase().includes(q);

        return matchesLevel && matchesKM && matchesSearch;
      });

      if (visibleControls.length === 0) return "";

      const controlItems = visibleControls.map((c) => {
        totalControls++;
        const currentScore = cyfunAuditState[c.id] || 1;
        sumScore += currentScore;

        if (c.isKey) {
          totalKM++;
          if (currentScore >= 2.5) compliantKM++;
        }

        return `
          <div class="p-4 rounded-xl ${
            c.isKey ? "border border-amber-300 bg-amber-50/50" : "border border-slate-200 bg-slate-50"
          } flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2 mb-1.5">
                <span class="text-xs font-mono font-bold text-amber-800">${c.id}</span>
                ${
                  c.subcategory && c.subcategory !== c.id
                    ? `<span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200/80 text-slate-700">${c.subcategory}</span>`
                    : ""
                }
                ${
                  c.isKey
                    ? `<span class="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">★ Key Measure (KM)</span>`
                    : ""
                }
                ${
                  c.isManagement
                    ? `<span class="text-[10px] uppercase font-mono font-semibold px-2 py-0.5 rounded bg-purple-100 text-purple-900 border border-purple-200">Management Aspect</span>`
                    : ""
                }
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 uppercase font-semibold">
                  ${c.level}
                </span>
                <span class="text-[10px] text-slate-500 font-medium">
                  ${c.category}
                </span>
              </div>
              <p class="text-xs sm:text-sm text-slate-800 leading-relaxed">${c.req}</p>
            </div>

            <!-- Score Selector (1 to 5) -->
            <div class="flex flex-col items-end shrink-0">
              <span class="text-[10px] font-mono uppercase text-slate-500 mb-1">Maturity Level (1-5)</span>
              <div class="flex items-center gap-1">
                ${[1, 2, 3, 4, 5]
                  .map(
                    (lvl) => `
                    <button
                      class="cyfun-score-btn w-8 h-8 rounded-lg font-mono text-xs font-bold transition border ${
                        currentScore === lvl
                          ? "bg-amber-500 text-slate-950 border-amber-600 shadow-sm"
                          : "bg-white text-slate-600 border-slate-300 hover:text-slate-900 hover:bg-slate-100"
                      }"
                      data-id="${c.id}"
                      data-score="${lvl}"
                    >
                      ${lvl}
                    </button>
                  `
                  )
                  .join("")}
              </div>
            </div>
          </div>
        `;
      });

      return `
        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <h3 class="text-base font-bold text-slate-900">${fn.name} (${fn.code})</h3>
            </div>
            <span class="text-xs text-slate-500 font-mono">${visibleControls.length} Controls</span>
          </div>
          <p class="text-xs text-slate-600 mb-4">${fn.desc}</p>
          <div class="space-y-3">
            ${controlItems.join("")}
          </div>
        </div>
      `;
    });

    cyfunControlsContainer.innerHTML =
      sections.filter((s) => s.length > 0).join("") ||
      `<div class="p-8 text-center text-slate-500 bg-white rounded-2xl border border-slate-200">No controls match the selected filters or search query.</div>`;

    const avgScore = totalControls > 0 ? (sumScore / totalControls).toFixed(1) : "0.0";
    cyfunScoreDisplay.textContent = `${avgScore} / 5.0`;
    const scorePct = Math.min(100, Math.round(((parseFloat(avgScore) - 1) / 4) * 100));
    cyfunProgressBar.style.width = `${Math.max(0, scorePct)}%`;

    if (totalKM > 0) {
      kmComplianceStatus.innerHTML = `
        <span class="${compliantKM === totalKM ? "text-emerald-700 font-bold" : "text-amber-800 font-bold"}">
          ${compliantKM} of ${totalKM} Key Measures
        </span> meet the maturity threshold (≥ 2.5 / 5.0).
      `;
    } else {
      kmComplianceStatus.innerHTML = `<span class="text-slate-500">No Key Measures in this view.</span>`;
    }

    document.querySelectorAll(".cyfun-score-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const score = parseInt(btn.getAttribute("data-score"), 10);
        cyfunAuditState[id] = score;
        localStorage.setItem("nis2_cyfun_audit", JSON.stringify(cyfunAuditState));
        renderCyfunControls();
      });
    });
  }

  exportCyfunBtn.addEventListener("click", () => {
    let md = `# CyberFundamentals (CyFun® 2025) & NIS 2 Self-Assessment Report\n\n`;
    md += `Generated: ${new Date().toLocaleString()}\n`;
    md += `Selected Assurance Level: ${cyfunSelectedLevelDisplay.textContent}\n`;
    md += `Average Maturity Score: ${cyfunScoreDisplay.textContent}\n`;
    md += `Key Measures Compliance: ${kmComplianceStatus.textContent.trim()}\n\n`;
    md += `## Evaluated Controls\n\n`;

    NIS2_DATA.functions.forEach((fn) => {
      md += `### Function: ${fn.name} (${fn.code})\n\n`;
      fn.controls.forEach((c) => {
        const score = cyfunAuditState[c.id] || 1;
        md += `#### [Maturity: ${score}/5] ${c.id} ${c.isKey ? "(★ Key Measure)" : ""} [${c.level.toUpperCase()}]\n`;
        md += `- **Category**: ${c.category}\n`;
        md += `- **Requirement**: ${c.req}\n\n`;
      });
    });

    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cyfun-2025-nis2-compliance-report.md`;
    a.click();
    URL.revokeObjectURL(url);
  });

  resetCyfunBtn.addEventListener("click", () => {
    if (confirm("Reset all ratings in your CyFun 2025 self-assessment?")) {
      cyfunAuditState = {};
      localStorage.removeItem("nis2_cyfun_audit");
      renderCyfunControls();
    }
  });

  // Dark mode toggle (optional)
  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
    const isDark = document.documentElement.classList.contains("dark-mode");
    localStorage.setItem("theme_preference", isDark ? "dark" : "light");
  });

  // Check URL Hash on load
  function checkUrlHash() {
    const hash = window.location.hash;
    if (hash === "#nis2-cyfun" || hash === "#nis2-classifier" || hash === "#cyfun-assessment") {
      setFramework("nis2", false);
    } else {
      setFramework("owasp", false);
    }

    if (hash && hash.startsWith("#vuln-")) {
      const id = hash.replace("#vuln-", "");
      openVulnModal(id);
    }
  }

  // Initial render
  renderCategoryButtons();
  renderVulnerabilities();
  renderArchitecture();
  renderChecklist();

  initSectorDropdown();
  updateEvaluatorResult();
  initCyfunFilters();
  renderCyfunControls();

  checkUrlHash();
});
