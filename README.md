
# Expense Tracker

[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chart.js&logoColor=white)](https://www.chartjs.org/)
[![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?style=flat&logo=css3&logoColor=white)](https://github.com/css-modules/css-modules)

A comprehensive financial management application designed to help users monitor spending habits and maintain budget discipline. Features clean user interfaces, secure data storage, and interactive visualizations.

## Live Demo

[Try the App](https://expense-tracker-nextjs-coral.vercel.app/)

## Features

- **Expense Management**: Complete CRUD functionality with category assignment and date tracking
- **Visual Analytics**: Interactive charts showing spending patterns across categories and time periods
- **Smart Filtering**: Advanced filtering by date range, category, amount, and custom tags
- **Secure Authentication**: Firebase auth with email/password and social login options
- **Real-time Updates**: Data synchronization through Firestore across all devices
- **Export Functionality**: Data export in multiple formats (CSV, PDF) for record-keeping

## Tech Stack

- React (Hooks & Context API)
- Firebase Firestore
- Firebase Authentication
- Chart.js
- CSS Modules
- Vercel Deployment

## Installation

```bash
# Clone the repository
git clone https://github.com/Danny-Devs/expense-tracker-nextjs.git
cd expense-tracker-nextjs

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Firebase configuration

# Start the development server
npm run dev
```

## Usage

After starting the development server, the application will be available at `http://localhost:3000`. You can:

1. Create an account or log in
2. Add and categorize expenses
3. View spending analytics on the dashboard
4. Filter expenses by various criteria
5. Export your financial data as needed

## Challenges & Solutions

- **Complex data aggregation**: Efficient algorithms for calculating spending totals and trends
- **Responsive data visualization**: Dynamic charts that adjust to different screen sizes
- **Offline functionality**: Caching system using IndexedDB with automatic synchronization
- **Data security**: Comprehensive Firebase security rules for data isolation between users

## Future Enhancements

- Banking API integration for automatic transaction imports
- ML-based categorization of expenses using transaction descriptions
- Recurring expense tracking and future expense prediction
- Budget recommendation engine based on historical spending patterns

## License

MIT
