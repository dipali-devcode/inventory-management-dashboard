📦 Inventory Management Dashboard

A modern, API-driven inventory management dashboard built using React, Redux Toolkit, and REST APIs, designed with clean architecture and real-world analytics use cases.

This project demonstrates end-to-end frontend development including dashboards, analytics, and reports — all derived from live API data.

🚀 Features Overview
🧭 Application Structure

Sidebar navigation with routing

Modular page-based architecture

Centralized state management using Redux Toolkit

API-driven data flow (no static or mock data)

📊 Pages & Functionality
1️⃣ Dashboard

Provides a high-level snapshot of inventory health.

Includes:

Key Metrics Cards (Total Products, Stock Units, Low Stock, Out of Stock)

Low Stock Alerts

Category Summary

Real-time metrics derived from API data

2️⃣ Inventory Page

Core inventory management view.

Includes:

Inventory listing fetched from API

Stock status indicators

Reorder recommendations

Slow-moving inventory identification

Fully Redux-managed state

3️⃣ Analytics Page

Data-driven analytics built using Recharts, powered entirely by API data.

Includes:

KPI summary cards

Inventory Stock Level Trends (derived from API data)

Stock Health Breakdown (In Stock / Low / Out of Stock)

Category-wise analytics (product count & stock volume)

Defensive handling of loading and empty states

4️⃣ Reports Page

Structured, enterprise-style reporting view.

Includes:

Summary cards (products, stock, low stock, out of stock)

Category Summary Report (aggregated inventory data)

Low Stock Operational Report

Clean tabular data presentation for decision-making

🛠️ Tech Stack

React (Functional Components & Hooks)

Redux Toolkit (Global state management)

React Router DOM (Routing)

Recharts (Data visualization)

REST APIs (Inventory data source)

CSS (Modular, component-scoped styling)

Git & GitHub (Version control)

🧱 Folder Structure (Simplified)
src/
 ├─ components/
 │  ├─ Sidebar.jsx
 │  ├─ Topbar.jsx
 │
 ├─ pages/
 │  ├─ dashboard/
 │  ├─ inventory/
 │  ├─ analytics/
 │  └─ reports/
 │     ├─ Reports.jsx
 │     ├─ ReportsSummaryCards.jsx
 │     ├─ CategorySummaryTable.jsx
 │     └─ LowStockReportTable.jsx
 │
 ├─ store/
 │  ├─ store.js
 │  └─ inventorySlice.js
 │
 ├─ App.jsx
 └─ main.jsx

🔄 Data Flow Architecture

Inventory data fetched from REST API

Stored centrally in Redux Toolkit store

Shared across:

Inventory

Dashboard

Analytics

Reports

No duplicate API calls

All metrics and analytics derived from the same source of truth

🧠 Key Engineering Decisions

No static or fake analytics data

Defensive checks for API loading states

Reusable components with clear responsibilities

Step-by-step incremental development

Resume-focused clean architecture

▶️ Getting Started
git clone <repository-url>
cd inventory-dashboard
npm install
npm run dev

📌 Future Enhancements (Planned)

Export reports to CSV/PDF

Sorting & filtering in reports

Advanced analytics (time-series when backend supports it)

Role-based access (Admin / Manager)

💼 Resume Highlight

Built a complete inventory management dashboard using React and Redux Toolkit with API-driven dashboards, analytics, and reporting modules, featuring real-time metrics, data visualization, and enterprise-style reports.

👤 Author

Dipali Thigale
Frontend Developer
React | Redux Toolkit | APIs | Data-driven UI
