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

<!-- Optional: add a table of the document/object types and their purpose here. -->

## Assumptions

- Node.js and npm are installed locally; the project uses npm (`package-lock.json`).
- A Sanity project and dataset already exist, and the person running the Studio has access to them.
- Each developer supplies their own `.env` file based on `.env.example`; real values are not committed.
- `sanity.config.ts` (the Studio) reads the project ID and dataset from environment variables, while `sanity.cli.ts` (CLI commands such as `deploy`) has them set directly. Both are assumed to point to the same project and dataset.
- The `production` dataset is used by default.
- Deploying with `npm run deploy` assumes the user is logged in to Sanity and has deploy permission for the project.
- This repository is the content-management side only; any website consuming the content lives elsewhere.

## Contributing

1. Create a branch for your change.
2. Follow the Prettier settings in `package.json` (no semicolons, single quotes, 100-character line width) and the existing ESLint configuration.
3. Open a pull request describing the change.

## License

Marked as `UNLICENSED` and `private` in `package.json`. No license is granted for reuse.