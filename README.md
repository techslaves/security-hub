# Security Hub: OWASP Top 10 for LLM Applications (2025) & EU NIS 2 Directive (CyFun® 2025)

A modern, high-performance, **clean light-themed** website for GitHub Pages providing **two completely separate, independent cybersecurity framework hubs**:

1. 🤖 **OWASP Top 10 for Large Language Model Applications (2025 Edition / v2.0)**
2. 🇪🇺 **EU NIS 2 Directive (EU 2022/2555) & CyberFundamentals Framework (CyFun® 2025)**

---

## 🎨 Theme & User Experience

- **Crisp Light Aesthetic**: Clean white cards, soft slate-50 background, subtle pastel glowing accents, and high-contrast typography.
- **Independent Framework Switcher**: Dedicated segmented pill toggle (`OWASP Top 10 LLM` vs `EU NIS 2 & CyFun®`) with zero crossover between standards.
- **Responsive & Accessible**: Optimized for all viewports from mobile to 4K monitors.

---

## 🏛️ Architecture: Completely Separated Modules

```text
                  ┌────────────────────────────────────────┐
                  │    Top-Level Framework Navigation      │
                  │   [OWASP LLM 2025] | [EU NIS 2 CyFun]  │
                  └───────────────┬────────────────┬───────┘
                                  │                │
            ┌─────────────────────┴──┐          ┌──┴─────────────────────────┐
            │  OWASP Top 10 for LLM  │          │   EU NIS 2 & CyFun® 2025   │
            ├────────────────────────┤          ├────────────────────────────┤
            │ • 10 Core LLM Threats  │          │ • NIS 2 Statutory Scope    │
            │ • What's New in 2025   │          │ • Annex I & II Sectors     │
            │ • Deep Dive Modal View │          │ • Fines (€10M / 2%) & 24h  │
            │ • Threat Architecture  │          │ • CyFun-Selection Tool     │
            │ • LLM Defense Audit    │          │ • 6 Functions (GV, ID, PR, │
            │ • Markdown Export      │          │   DE, RS, RC) Assessment   │
            │                        │          │ • Key Measures (KM) Filter │
            │                        │          │ • Markdown Audit Export    │
            └────────────────────────┘          └────────────────────────────┘
```

---

## 🌟 Module 1: OWASP Top 10 for LLMs (2025 Edition)

- **Pure OWASP Standard**: Direct representation of `LLM01:2025` to `LLM10:2025` from [genai.owasp.org](https://genai.owasp.org).
- **Vulnerabilities**:
  - `LLM01:2025` - Prompt Injection (Direct, Indirect, Multimodal, Payload Splitting)
  - `LLM02:2025` - Sensitive Information Disclosure (PII, Inversion Attacks)
  - `LLM03:2025` - Supply Chain (LoRA adapters, Safetensors vs Pickle, Hugging Face)
  - `LLM04:2025` - Data and Model Poisoning (Pre-training, fine-tuning, Sleeper Agents)
  - `LLM05:2025` - Improper Output Handling (XSS, SSRF, SQL Injection, RCE)
  - `LLM06:2025` - Excessive Agency (Autonomous tools, human-in-the-loop, scopes)
  - `LLM07:2025` - System Prompt Leakage (Preambles, internal business logic)
  - `LLM08:2025` - Vector and Embedding Weaknesses (RAG security, semantic leaks)
  - `LLM09:2025` - Misinformation (Hallucinations, package hallucinations, liability)
  - `LLM10:2025` - Unbounded Consumption (Denial of Wallet, API floods, Model stealing)
- **Interactive Features**: Real-time search, category filters, threat modeling architecture diagram (Appendix 1), and defense readiness checklist with Markdown export.

---

## 🌟 Module 2: EU NIS 2 Directive & CyberFundamentals (CyFun® 2025)

- **Pure Belgian CCB Standard**: Sourced directly from the official Centre for Cybersecurity Belgium (CCB) *CyFun® 2025 Conformity Assessment Scheme* (implementing Directive (EU) 2022/2555).
- **Scope & Legal Obligations**:
  - Essential Entities (Annex I) vs Important Entities (Annex II)
  - Sanctions: Up to **€10,000,000 or 2% turnover** (Essential) or **€7,000,000 or 1.4% turnover** (Important) + personal managerial liability
  - Mandatory incident notification: **24h Early Warning**, **72h Notification**, and **1 Month Final Report** to national CSIRT.
- **Interactive CyFun-Selection Classifier**:
  - Evaluates 16 industry sectors and organization sizes (Large, Medium, Small).
  - Determines entity classification and recommended assurance level (**Basic**, **Important**, or **Essential**).
- **Interactive CyFun® Self-Assessment Tool**:
  - Covers all 6 functions: **Govern (GV), Identify (ID), Protect (PR), Detect (DE), Respond (RS), Recover (RC)**.
  - Filter by assurance level and toggle **Key Measures (KM) Only**.
  - Rate maturity levels (1 to 5) per control with live calculated average score against target thresholds ($\ge 2.5$, $\ge 3.0$, or $\ge 3.5$).
  - One-click export to `cyfun-2025-nis2-compliance-report.md`.

---

## 🚀 Local Preview

```powershell
cd C:\Users\eruts\.gemini\antigravity\scratch\owasp-llm-top10-site
# Using Python
python -m http.server 8000

# Or using Node
npx serve
```
Visit `http://localhost:8000`.

---

## 🌐 Deploy to GitHub Pages

1. **Commit your files**:
   ```bash
   cd owasp-llm-top10-site
   git add .
   git commit -m "feat: light color theme and separated framework modules"
   ```

2. **Push to your GitHub repository**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository **Settings** &rarr; **Pages**.
   - Select **Deploy from a branch** &rarr; `main` &rarr; `/ (root)`.
   - Click **Save**.
