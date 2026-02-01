# ERTH Ecosystem Flywheel Dashboard

A Next.js visualization dashboard that explains the ERTH token economy's value flow across five key modules.

## Overview

This dashboard presents a **Two-Axis Value & Operations Matrix** showing how the ERTH ecosystem creates sustainable value through:

- **Supply Generation**: Project owners provide verified emissions data
- **Revenue Recirculation**: Enterprise cash flow funds token buybacks
- **Ecosystem Locking**: Strategic partners lock tokens for operational benefits

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm package manager

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the dashboard.

### Build for Production

```bash
# Create static export
npm run build
```

The static site will be generated in the `out/` directory, ready for deployment to any static hosting service.

## Project Structure

```
ERTH-Ecosystem-Flywheel/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page rendering EcosystemFlow
│   └── globals.css         # Global styles with Tailwind directives
├── components/
│   ├── EcosystemFlow.tsx   # Main dashboard component
│   └── Connector.tsx       # Arrow connector component
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs         # Configured for static export
└── README.md
```

## Features

- **Interactive Module Cards**: Hover over any module to see detailed descriptions
- **Visual Flow Connectors**: Arrows show the flow of data, revenue, and utility
- **Responsive Design**: Optimized for both desktop and mobile viewing
- **Static Export**: Pre-configured for easy deployment as a static site

## Technology Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library

## Module Breakdown

### Row 1: Strategic/Financial Layer

- **Token Layer**: Value capture through buyback & burn mechanism
- **Partners/Lockers**: Utility access and governance rights

### Row 2: Operational/Physical Layer

- **Project Owners**: Supply side providing verified emissions data
- **SaaS + MRV OpCo**: The automation engine converting data to value
- **Enterprise Users**: Capital providers through subscriptions and credit purchases

## Deployment

This project is configured for static export (`output: 'export'` in `next.config.mjs`), making it compatible with:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and deploy the `out/` directory.

## License

Private - ERTH Project
