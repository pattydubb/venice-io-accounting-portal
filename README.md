# Venice.io Accounting Tech Portal

A central hub for accessing Venice.io accounting applications and services.

## Features

- Dashboard to access all Venice.io applications
- Secure authentication with Clerk
- Simple application cards with status indicators
- Easy setup for adding new applications
- Responsive design for all devices
- Optional Airtable integration for managing applications dynamically

## Tech Stack

- Next.js with App Router
- TypeScript
- TailwindCSS
- Clerk Authentication
- Airtable for lightweight data storage (completely optional)

## Getting Started

1. Clone this repository
2. Install dependencies with `npm install`
3. Copy `.env.example` to `.env.local` with the Clerk API keys already populated
4. Run the development server with `npm run dev`
5. Access the portal at http://localhost:3000

The application is already set up with your Clerk authentication credentials, so it will work out of the box with authentication. You don't need to set up Airtable to get started - the portal will use built-in default applications automatically.

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

### 1. Direct Code Editing (Recommended for Getting Started)

The simplest way to add applications is to edit the `defaultApplications` array in `src/utils/applications.ts`:

```typescript
const defaultApplications: Application[] = [
  {
    id: 'recked',
    name: 'RecKed',
    description: 'Automatic bank reconciliation tool',
    url: 'https://recked.venice.io',
    status: 'Active',
    category: 'Reconciliation',
  },
  // Add more applications here
  {
    id: 'your-app-id',
    name: 'Your App Name',
    description: 'App description',
    url: 'https://app.venice.io',
    status: 'Active', // or 'Coming Soon' or 'Maintenance'
    category: 'Your Category',
  },
];
```

### 2. Using Airtable (Optional - for Dynamic Management)

If you want to manage applications without modifying code, you can set up Airtable:

1. Set up an Airtable base with the following structure:
   - Table name: `Applications`
   - Fields:
     - `Name` (Single line text)
     - `Description` (Long text)
     - `URL` (Single line text)
     - `Status` (Single select: "Active", "Coming Soon", "Maintenance")
     - `Category` (Single line text)
     - `Icon` (Single line text, optional)

2. Get your Airtable API key and Base ID

3. Add them to your `.env.local` file:
   ```
   AIRTABLE_API_KEY=key...
   AIRTABLE_BASE_ID=app...
   ```

4. Or enter them in the Settings page in the portal

This is completely optional - the portal will work perfectly fine without Airtable by using the default applications.

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
