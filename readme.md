# Blog App

[Visit the Website](blog-app-git-main-yeshwanth-d-rs-projects.vercel.app)

This project is a blog app built with a modern stack including React, TypeScript, Vite, Prisma, Hono, and Cloudflare Workers. It includes a backend for handling user authentication and blog management, and a frontend for user interaction.

## Features

- User authentication (signup and signin)
- Create, update, and view blog posts
- JWT-based authentication
- Prisma ORM for database management
- Tailwind CSS for styling

## Tech Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **Backend**: Hono, Prisma, Cloudflare Workers
- **Common**: Zod for schema validation

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/blog-app.git
    cd blog-app
    ```

2. Install dependencies for each package:

    ```sh
    cd backend
    npm install
    cd ../frontend
    npm install
    cd ../common
    npm install
    ```

### Environment Variables

Create a `.env` file in the [backend](http://_vscodecontentref_/0) and [frontend](http://_vscodecontentref_/1) directories and add the following environment variables:

#### Backend

```env
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
VITE_BACKEND_URL=https://your_backend_url
```
#### Frontend

```env
VITE_BACKEND_URL=https://your_backend_url
```
## Backend

The backend is built with Hono and Prisma, and runs on Cloudflare Workers.

### Development

To start the backend in development mode, run:

```sh
cd backend
npm run dev
```
### Deployment

To deploy the backend, run:

```sh
cd backend
npm run deploy
```

## Frontend

The frontend is built with React, TypeScript, and Vite.

### Development

To start the frontend in development mode, run:

```sh
cd frontend
npm run dev
```

### Build

To build the frontend for production, run:

```sh
cd frontend
npm run build
```

## Common

The common package contains shared code, including Zod schemas for validation. It is also published as a separate package.

