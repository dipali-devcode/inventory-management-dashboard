📦 Inventory Dashboard

A modern Inventory Management Dashboard built with React, Redux Toolkit, and Firebase Authentication.
The application provides real-time insights into inventory health, analytics, reports, and user-authenticated access.

🚀 Live Demo

🔗 Application URL:  
https://inventory-management-dashboard-self.vercel.app/login

🧑‍💼 Demo Admin Credentials (for evaluation only):

Email: admin@gmail.com  
Password: admin@123

⚠️ Note: These credentials are provided only for demo and evaluation purposes.

🚀 Live UI Reference

UI design reference used for implementation:
🔗 https://app.visily.ai/projects/ca02388e-d129-471c-8e65-5460022684f8/boards/2452663/presenter?play-mode=All+screens

✨ Features Implemented
🔐 Authentication
Firebase Email/Password authentication
Login page with:
    Loading state
    Error handling for invalid credentials
    Protected routes
Logout from:
    Settings page
    Topbar profile dropdown

📊 Dashboard
    Overview metrics
    Low stock alerts
    Category-wise summary
    Recently added products

📦 Inventory Management
    Inventory overview metrics
    Search products by name or category
    Paginated inventory table   
    Reorder recommendations
    Slow-moving inventory
    Supplier performance overview
    
📈 Analytics
    Key performance indicators (KPIs)
    Inventory trends visualization
    Stock health breakdown
    Category-level analytics (API-driven)

📑 Reports
    Summary cards
    Category summary table
    Low stock report table

⚙️ Settings
    Profile section
    Logged-in user email
    Logout action
    Application info (static, read-only)
    Preferences section placeholder (no theme changes implemented)

🧩 Global UI Handling
    Centralized loading screen
    Centralized error screen
    Redux uiSlice for global UI state
    Graceful API failure handling

🧱 Tech Stack
    Frontend: React + Vite  
    State Management: Redux Toolkit  
    Routing: React Router  
    Authentication: Firebase Authentication (Email/Password)  
    Charts & Data Visualization: Recharts 
    Icons: React Icons / Lucide  
    Styling: Custom CSS  

📁 Project Structure
inventory-dashboard/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── analytics/
│ │ │ ├── AnalyticsKPIs.jsx
│ │ │ ├── AnalyticsKPIs.css
│ │ │ ├── CategoryAnalytics.jsx
│ │ │ ├── CategoryAnalytics.css
│ │ │ ├── InventoryTrends.jsx
│ │ │ ├── InventoryTrends.css
│ │ │ ├── StockHealthBreakdown.jsx
│ │ │ └── StockHealthBreakdown.css
│ │ ├── common/
│ │ │ ├── LoadingScreen.jsx
│ │ │ ├── LoadingScreen.css
│ │ │ ├── ErrorScreen.jsx
│ │ │ └── ErrorScreen.css
│ │ ├── dashboard/
│ │ │ ├── DashboardMetrics.jsx
│ │ │ ├── DashboardMetrics.css
│ │ │ ├── LowStockAlerts.jsx
│ │ │ ├── LowStockAlerts.css
│ │ │ ├── CategorySummary.jsx
│ │ │ ├── CategorySummary.css
│ │ │ ├── RecentProducts.jsx
│ │ │ └── RecentProducts.css
│ │ ├── inventory/
│ │ │ ├── InventoryTable.jsx
│ │ │ ├── InventoryTable.css
│ │ │ ├── OverviewMetrics.jsx
│ │ │ ├── OverviewMetrics.css
│ │ │ ├── ReorderRecommendations.jsx
│ │ │ ├── ReorderRecommendations.css
│ │ │ ├── SlowMovingInventory.jsx
│ │ │ ├── SlowMovingInventory.css
│ │ │ ├── SupplierPerformance.jsx
│ │ │ └── SupplierPerformance.css
│ │ ├── layout/
│ │ │ ├── Sidebar.jsx
│ │ │ ├── Sidebar.css
│ │ │ ├── Topbar.jsx
│ │ │ └── Topbar.css
│ │ └── reports/
│ │ ├── ReportsSummaryCards.jsx
│ │ ├── ReportsSummaryCards.css
│ │ ├── CategorySummaryTable.jsx
│ │ ├── CategorySummaryTable.css
│ │ ├── LowStockReportTable.jsx
│ │ └── LowStockReportTable.css
│ ├── firebase/
│ │ └── firebase.js
│ ├── pages/
│ │ ├── Auth/
│ │ │ ├── Login.jsx
│ │ │ └── Login.css
│ │ ├── Dashboard.jsx
│ │ ├── Inventory.jsx
│ │ ├── Analytics.jsx
│ │ ├── Reports.jsx
│ │ ├── Settings.jsx
│ │ └── Settings.css
│ ├── store/
│ │ ├── authSlice.js
│ │ ├── productsSlice.js
│ │ ├── searchSlice.js
│ │ ├── selectors.js
│ │ ├── uiSlice.js
│ │ └── index.js
│ ├── App.jsx
│ ├── main.jsx
│ └── global.css
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md

🔧 Setup & Run Locally
1️⃣ Install dependencies
npm install

2️⃣ Firebase Configuration

Create src/firebase/firebase.js and add your Firebase config:

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_AUTH_DOMAIN",
projectId: "YOUR_PROJECT_ID",
appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

🔒 Firebase credentials are intentionally NOT committed to Git

3️⃣ Start the project
npm run dev

🔄 API Used

Products API: https://dummyjson.com/products

Used for:
    Dashboard
    Inventory
    Analytics
    Reports

🛑 Notes

- Demo admin credentials are shared in the Live Demo section for easy access
- Firebase authentication is enabled (email/password)
- No backend/server implemented (frontend-only project)
- No role-based access (admin/user)
- Project is feature-complete and stable
