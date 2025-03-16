# Venice.io Accounting Tech Portal

A central hub for accessing Venice.io accounting applications and services.

## Features

- Single sign-on with Clerk authentication
- Dashboard with application tiles
- Airtable integration for content management
- Responsive design for all devices

## Tech Stack

- Next.js
- TypeScript
- TailwindCSS
- Clerk Authentication
- Airtable for lightweight data storage

## Getting Started

1. Clone this repository
2. Install dependencies with `npm install`
3. Copy `.env.example` to `.env.local` and add your credentials
4. Run the development server with `npm run dev`

## Airtable Structure

This application uses Airtable as a lightweight database with the following tables:

### Applications Table
- Name (text): Application name
- Description (text): Brief description
- URL (text): Application URL
- Icon (text): Icon identifier
- Status (single select): Active/Maintenance/Coming Soon
- Category (single select): Accounting/Reporting/Automation/Other

### UserPreferences Table
- UserId (text): Clerk user ID
- FavoriteApps (text): Comma-separated list of app IDs
- Theme (single select): light/dark
