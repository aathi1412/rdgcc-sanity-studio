# RDGCC Sanity Studio

A Sanity Studio for managing editable content for the RDGCC website assessment.

## Features

- Sanity Studio (v6) for content management
- Custom content schemas defined in `schemaTypes/`
- Structure tool for browsing and editing documents
- Vision tool for running GROQ queries against the dataset
- TypeScript configuration with ESLint and Prettier settings
- Project ID and dataset configured through environment variables

## Setup

### Prerequisites

- Node.js and npm (the repository includes a `package-lock.json`)
- Access to the Sanity project this Studio connects to

### Steps

1. Clone the repository

   ```bash
   git clone https://github.com/aathi1412/rdgcc-sanity-studio.git
   ```

2. Navigate into the project

   ```bash
   cd rdgcc-sanity-studio
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Configure environment variables

   ```bash
   cp .env.example .env
   ```

   Then open `.env` and set your values (see [Environment Variables](#environment-variables)).

5. Start the Studio

   ```bash
   npm run dev
   ```

   Sanity prints the local URL in the terminal once the Studio is running.

## Environment Variables

Defined in `.env.example` and read in `sanity.config.ts`:

| Variable                   | Description                          | Example value     |
| -------------------------- | ------------------------------------ | ----------------- |
| `SANITY_STUDIO_PROJECT_ID` | ID of the Sanity project to connect  | `your-project-id` |
| `SANITY_STUDIO_DATASET`    | Dataset the Studio reads and writes  | `production`      |

## Usage

Scripts available in `package.json`:

| Command                  | Runs                   | Purpose                              |
| ------------------------ | ---------------------- | ------------------------------------ |
| `npm run dev`            | `sanity dev`           | Start the Studio locally             |
| `npm run start`          | `sanity start`         | Start the Studio                     |
| `npm run build`          | `sanity build`         | Build the Studio for production      |
| `npm run deploy`         | `sanity deploy`        | Deploy the Studio to Sanity          |
| `npm run deploy-graphql` | `sanity graphql deploy`| Deploy the GraphQL API               |

## Project Architecture

This repository contains only the Sanity Studio (the content editing interface). It connects to a hosted Sanity project and dataset; no front-end application is included.

```
rdgcc-sanity-studio/
├── schemaTypes/        # Content schema definitions, exported and registered in the Studio
├── sanity.config.ts    # Studio configuration: name, project, dataset, plugins, schema
├── sanity.cli.ts       # Sanity CLI configuration: API target and deployment settings
├── tsconfig.json       # TypeScript configuration
├── eslint.config.mjs   # ESLint configuration
├── .env.example        # Template for required environment variables
└── package.json        # Dependencies and scripts
```

How the pieces fit together:

- **`sanity.config.ts`** defines a single workspace titled "RDGCC Sanity Studio". It reads the project ID and dataset from environment variables, registers the `structureTool` and `visionTool` plugins, and loads all schema types from `schemaTypes/`.
- **`sanity.cli.ts`** configures the Sanity CLI (used by `deploy`, `build`, and similar commands) with the API target and deployment settings, with auto-updates enabled.
- **`schemaTypes/`** holds the content model. Adding a new type means creating it here and adding it to the exported `schemaTypes` list.

Main technologies: Sanity `^6.16.0`, React `^19.2.4`, styled-components, and TypeScript `^5.8`.

## Content Model

Content types are defined in `schemaTypes/` and registered in `sanity.config.ts` through the `schemaTypes` export. Open the Studio after setup to see the available document types and their fields.

## Content Management

The Studio provides editable content for the RDGCC Success Stories page, including:

- Site settings and navigation
- Header and footer content
- Success Stories page content
- Case study cards
- Images and image alt text
- CTA labels and URLs
- Feature icons
- SEO title and description

## Assumptions

- Node.js and npm are installed locally and the project uses npm.
- A Sanity project and `production` dataset already exist.
- The person running the Studio has access to the Sanity project.
- Each developer provides their own `.env` file based on `.env.example`; real environment values are not committed.
- `sanity.config.ts` reads the project ID and dataset from environment variables, while `sanity.cli.ts` uses its configured project and dataset for CLI operations. Both are assumed to reference the same Sanity project and dataset.
- Deploying with `npm run deploy` requires the user to be authenticated with Sanity and have the required permissions.
- The Sanity Studio is maintained separately from the Astro frontend.

## Deployment

The Sanity Studio is deployed using Sanity's hosting.

The deployed Studio requires Sanity authentication. Users must have access to the Sanity project to sign in and manage content.

The deployed Studio URL is:

https://rdgcc-success-stories.sanity.studio

## License

Marked as `UNLICENSED` and `private` in `package.json`. No license is granted for reuse.
