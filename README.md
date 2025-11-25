# Portfolio Website

This repository hosts the Next.js implementation of the personal portfolio site. The original Vite build was migrated to Next.js 14 using the App Router, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- Next.js 14 App Router with hybrid server and client components
- Tailwind CSS design system backed by shadcn/ui primitives
- Light and dark mode with a shared theme provider
- Docker workflows for development and production deployments

## Requirements

- Node.js 18 or newer
- npm 9 or newer
- Docker and Docker Compose (optional for container workflows)

## Local Development

```bash
npm install
npm run dev
```

The development server listens on http://localhost:8080.

## Production Build

```bash
npm run build
npm run start
```

Set the `PORT` environment variable if you need a different binding. The provided Docker setup defaults to port 8080.

## Docker Usage

Development container:

```bash
docker compose up --build
```

Production container:

```bash
docker compose -f docker-compose.prod.yml up --build -d
```

Each compose file maps container port 8080 to the host and includes a health check against `http://localhost:8080`.

## Project Structure

```
.
|-- Dockerfile
|-- Dockerfile.prod
|-- docker-compose.yml
|-- docker-compose.prod.yml
|-- next.config.mjs
|-- public/
`-- src/
    |-- app/
    |-- components/
    |-- hooks/
    `-- lib/
```

## License

This project is released under the MIT License.
