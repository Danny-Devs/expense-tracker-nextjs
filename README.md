# Expense Tracker

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React Server Components](https://img.shields.io/badge/React_Server_Components-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components)
[![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=flat&logo=clerk&logoColor=white)](https://clerk.com/)
[![Neon](https://img.shields.io/badge/Neon-00E699?style=flat&logo=postgresql&logoColor=white)](https://neon.tech/)

A comprehensive financial management application designed to help users monitor spending habits and maintain budget discipline. Features clean user interfaces, secure data storage, and interactive visualizations.

## Live Demo

[Try the App](https://expense-tracker-nextjs-coral.vercel.app/)

## Features

- **Expense Management**: Complete CRUD functionality with category assignment and date tracking
- **Visual Analytics**: Interactive data visualizations showing spending patterns across categories and time periods
- **Smart Filtering**: Advanced filtering by date range, category, amount, and custom tags
- **Secure Authentication**: Clerk authentication with robust identity management and data privacy
- **Server-Side Rendering**: Optimized performance using Next.js and React Server Components
- **Export Functionality**: Data export in multiple formats (CSV, PDF) for record-keeping

## Tech Stack

- Next.js Framework
- React Server Components
- Clerk Authentication
- Neon PostgreSQL Database
- Tailwind CSS
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
# Add your Clerk and Neon configuration

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

- **Efficient data access patterns**: Optimized database queries for financial data with minimal latency
- **Server component architecture**: Strategic component design to leverage React Server Components
- **Form validation and security**: Comprehensive validation at both client and server levels
- **Data security**: Clerk authentication and row-level security in Neon for data isolation between users

## Future Enhancements

- Banking API integration for automatic transaction imports
- ML-based categorization of expenses using transaction descriptions
- Recurring expense tracking and future expense prediction
- Budget recommendation engine based on historical spending patterns

## License

MIT
