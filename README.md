# Venice.io Accounting Tech Portal

A central hub for accessing Venice.io accounting applications and services.

## Features

- Dashboard to access all Venice.io applications
- Secure authentication with Clerk
- Simple application cards with status indicators
- Easy setup for adding new applications
- Responsive design for all devices
- Airtable integration for managing applications (optional)

## Tech Stack

- Next.js with App Router
- TypeScript
- TailwindCSS
- Clerk Authentication
- Airtable for lightweight data storage (optional)

## Getting Started

1. Clone this repository
2. Install dependencies with `npm install`
3. Copy `.env.example` to `.env.local` and verify the Clerk API keys are there
4. Run the development server with `npm run dev`

## Authentication

This project uses Clerk for authentication. The following features are integrated:

- User sign up and sign in
- Profile management
- Password reset
- Email verification
- Session management

Clerk is pre-configured with the following environment variables:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YmlnLWltcC01MS5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY=sk_test_8aWOrN36s2zK0UkuAI362uDSF21NeQh7mBIaSqHhC7
```

## Project Structure

```
/venice-io-accounting-portal
├── /src
│   ├── /app                     # Next.js App Router pages
│   │   ├── /dashboard           # Dashboard and application pages
│   │   │   ├── /analytics       # Analytics page
│   │   │   ├── /profile         # User profile page
│   │   │   ├── /settings        # Settings page
│   │   │   └── page.tsx         # Main dashboard (applications grid)
│   │   ├── /sign-in             # Sign in page
│   │   ├── /sign-up             # Sign up page
│   │   └── page.tsx             # Landing page
│   ├── /components              # Reusable components
│   │   └── AppCard.tsx          # Application card component
│   ├── /lib                     # Library code
│   │   └── airtable.ts          # Airtable integration
│   └── /utils                   # Utility functions
│       └── applications.ts      # Application utilities
├── /public                      # Static assets
└── package.json                 # Dependencies and scripts
```

## Adding Applications

There are two ways to add applications to the Venice.io portal:

### 1. Using Airtable (Recommended)

1. Set up an Airtable base with the following structure:
   - Table name: `Applications`
   - Fields:
     - `Name` (Single line text)
     - `Description` (Long text)
     - `URL` (Single line text)
     - `Status` (Single select: "Active", "Coming Soon", "Maintenance")
     - `Category` (Single line text)
     - `Icon` (Single line text, optional)

2. Configure your Airtable API key and base ID in the settings page or directly in your `.env.local` file:
   ```
   AIRTABLE_API_KEY=key...
   AIRTABLE_BASE_ID=app...
   ```

### 2. Direct Code Editing

Edit the `utils/applications.ts` file to modify the `defaultApplications` array:

```typescript
const defaultApplications: Application[] = [
  {
    id: 'app-id',
    name: 'Application Name',
    description: 'Application description',
    url: 'https://app.venice.io',
    status: 'Active', // or 'Coming Soon' or 'Maintenance'
    category: 'Category',
  },
  // Add more applications here
];
```

## Clerk Authentication Settings

You can customize the Clerk authentication experience by going to the [Clerk Dashboard](https://dashboard.clerk.dev/) and:

1. Customizing the sign-in/sign-up appearance
2. Enabling/disabling social login providers
3. Setting up email templates
4. Configuring multi-factor authentication
5. Managing user roles and permissions

## Development

The application is structured to make it easy to add or modify features:

- Add new dashboard features by creating files in the dashboard directory
- Modify authentication by editing the sign-in and sign-up pages
- Add new application card styles by editing the AppCard component
- Customize the appearance by modifying globals.css and tailwind.config.js

## License

Copyright © 2025 Venice.io. All rights reserved.
