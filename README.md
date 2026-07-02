# wax-concentrated-liquidity-roi-matrix — Concentrated Liquidity ROI Matrix

> **Status:** 🔒 Private (In Development) | Target Public Release: August 2026  
> **Category:** Advanced DeFi & Concentrated Liquidity Visualizers (Alcor v2)  
> **Parent Catalog:** [pixel-journey/wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

**A predictive analytics dashboard that inputs custom upper/lower price limits and calculates localized fee-generation efficiency against historical pool volume curves on WAX Alcor v2.**

---

## 1. Overview & Goal

This blueprint lets LPs input hypothetical or actual range bounds and instantly see projected fee income, IL risk, and overall ROI based on historical volume and volatility data from the pool.

**Why it matters:** Turns guesswork into data-driven LP decisions.

Public infra only.

**Target users:** Serious LPs and yield strategists.

**Success metrics:** Accurate projections, fast what-if analysis, clear ROI visualization.

---

## 2. Concepts & Inspiration

**Core concepts:**
- CL fee math (volume in range × fee tier)
- Historical volume curves from Hyperion
- Monte-Carlo style or historical backtesting for projections

**Inspirations:** Professional LP position simulators and backtesters.

**Related:** Complements the tick velocity and IL heat map blueprints.

---

## 3. Design Specifications

### 3.1 Visual & Interaction Design
- Main canvas: ROI projection chart (area or bar) with IL overlay
- Controls: Range sliders, fee tier selector, time horizon
- Summary cards: Expected fees, IL, net ROI, breakeven

### 3.2 Key Components
- `ROIMatrixChart.tsx`
- `RangeInputControls.tsx`
- `ProjectionSummary.tsx`

### 3.3 A11y & Performance
Full a11y support, efficient historical data caching.

---

## 4. Technical Architecture

**Stack:** Next.js 15 + TS + Tailwind + Recharts + React Query

**Data:** Alcor pool history + Hyperion volume data → ROI calculator engine

**Folder:** Standard blueprint structure.

---

## 5. Implementation Examples
Full calculator logic and chart examples in repo.

---

## 6. Demo & Testing
Mock/mainnet toggle, comprehensive tests.

---

## 7. Roadmap
Follows standard 4-phase template.

---

## 8. Visual References
Clean financial dashboard style — think professional portfolio analyzer meets DeFi LP tool.

---

## 9. Related Blueprints
`wax-alcor-v2-tick-cross-velocity`, `wax-lp-impermanent-loss-heat-map`, `wax-alcor-lp-behavioral-profiler`

---

## 10. License & Credits
MIT. Powered by public WAX data providers.

**Pixel Journey — Beautiful interfaces for public blockchain data.**
