# Portfolio Website



This repository contains the Next.js implementation of the personal portfolio site. The earlier Vite build has been migrated to Next.js 14 with the App Router, TypeScript, Tailwind CSS, and shadcn/ui.# Johannes Nguyen Portfolio



## FeaturesThis is the source code for my personal tech portfolio, rebuilt with **Next.js 14**, Tailwind CSS, and shadcn/ui. The app ships with Docker workflows for both local development and production and keeps the Swiss-inspired visual language from the previous Vite build.



- React server and client components via the Next.js App Router🔗 **Live Project:** [j551n.com](https://j551n.com)

- Component library built with shadcn/ui and Tailwind CSS

- Light and dark theme support---

- Docker workflows for development and production

## 🚀 Project Overview

## Getting Started

This portfolio showcases my technical projects, skills, and experience. It’s built to be easily deployed and maintained using Docker.

### Prerequisites

---

- Node.js 18 or newer

- npm 9 or newer## 🐳 Dockerized Setup



### Local DevelopmentThis project uses Docker Compose for container orchestration.



```bash### 🧱 Docker Compose Configuration

git clone https://github.com/j551n-ncloud/Homepage.git

cd Homepage```yaml

npm install

npm run devversion: '3.8'

```

services:

Visit http://localhost:3000 to view the site locally.  web:

    build:

### Production Build      context: .

      dockerfile: Dockerfile.prod

```bash      container_name: johannes-nguyen-portfolio-prod

npm run build      ports:

npm run start        - "3000:3000"

```    restart: always

    healthcheck:

## Docker Usage      test: ["CMD", "wget", "--spider", "-q", "http://localhost:80"]

      interval: 30s

Docker Compose files are provided for both development and production environments.      timeout: 10s

      retries: 3

Development:    networks:

      - portfolio-network

```bash

docker compose up --buildnetworks:

```  portfolio-network:

    driver: bridge

Production:

```

```bash

docker compose -f docker-compose.prod.yml up --build -d### 📦 Features

```

- 🔄 **Hot-reloading:** Local source code is mounted directly into the container for seamless development when using `docker-compose.yml`.

## Project Structure- ♻️ **Auto-restart:** Automatically restarts if the container stops unexpectedly.

- 💡 **Healthcheck:** Ensures the app is healthy and responding on port `3000`.

```

.---

├── Dockerfile

├── Dockerfile.prod## 🛠️ Getting Started

├── docker-compose.yml

├── docker-compose.prod.yml### Prerequisites

├── next.config.mjs

├── public/- [Node.js 18+](https://nodejs.org/)

└── src/- [npm 9+](https://www.npmjs.com/)

    ├── app/            Next.js app router entry points- [Docker](https://www.docker.com/products/docker-desktop)

    ├── components/     Shared UI pieces and page sections- [Docker Compose](https://docs.docker.com/compose/install/)

    ├── hooks/          Custom React hooks

    └── lib/            Utilities and helpers### Run the App

```

```bash

## Licensegit clone https://github.com/j551n-ncloud/Homepage.git

cd Homepage

This project is released under the MIT License.npm install

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### Run with Docker (development)

```bash
docker compose up --build
```

### Run with Docker (production)

```bash
docker compose -f docker-compose.prod.yml up --build -d
```

Open [http://localhost:3000](http://localhost:3000) to verify the container is up.

---

## 📁 Project Structure

```
.
├── Dockerfile
├── Dockerfile.prod
├── docker-compose.yml
├── docker-compose.prod.yml
├── next.config.mjs
├── next-env.d.ts
├── public/
└── src/
  ├── app/            # Next.js app router
  ├── components/     # UI building blocks and page sections
  ├── hooks/          # Custom React hooks
  └── lib/            # Utility helpers
```

---

## 🤝 Contributing

Feel free to fork the repo and submit pull requests! Suggestions and improvements are always welcome.

---

## 🧾 License

This project is licensed under the MIT License.

