👨‍💻 Tech Stack

    Frontend: Next.js (App Router, Server Actions), Tailwind CSS, Shadcn UI, Radix UI

    Backend: Node.js, Express

    Database: MongoDB with Prisma ORM

    Validation: Zod

    State & Data: Zustand, TanStack Query

    Language: TypeScript

🧱 Code Style & Architecture

    Use modern TypeScript, functional & declarative patterns.

    No class-based components. Prefer pure functions and hooks.

    Structure code with helpers, services, validators, types.

    Use camelCase for variables/functions, PascalCase for components.

    Use kebab-case for folder names (/components/user-form, /lib/validators).

⚙️ Frontend (Next.js)

    Prefer React Server Components over "use client" when possible.

    Use dynamic imports for code splitting.

    Optimize images using next/image with lazy loading and dimensions.

    Validate forms with Zod.

    Style using Tailwind CSS, Shadcn UI, Radix UI.

    Follow mobile-first, responsive, accessible design patterns.

📦 Backend (Express + Prisma + MongoDB)

    Use Prisma as the ORM for MongoDB access.

    Keep route handlers slim. Move logic to services/ or lib/.

    Always validate request body/query/params using Zod.

    Use early returns and guard clauses.

    Use async/await with try/catch and centralized error middleware.

📊 State Management & Data Fetching

    Use Zustand for local/global state. Keep stores focused and testable.

    Use TanStack Query for async data fetching and cache management.

    Prefer declarative patterns (useQuery, useMutation) over manual fetch.

    Let the libraries handle loading/error where possible.

🚨 Error Handling

    Use guard clauses and validate all inputs early.

    Return consistent errors — optionally create custom error classes.

    Never expose stack traces or internal errors in production.

🧪 Testing & DX

    Use Jest + React Testing Library for unit/component tests.

    Document functions using JSDoc for better AI & IDE autocomplete.

    Comment only where logic is not self-explanatory.

🧠 Methodology

    System 2 Thinking: Analyze before coding.

    Tree of Thoughts: Explore multiple solutions.

    Iterative Refinement: Optimize before finalizing.

✅ Prompt Examples to Use

    Use these as-is or tweak to fit your task:

- Convert this Mongoose schema to Prisma (MongoDB).
- Optimize this Next.js form to use Zod and Server Actions.
- Refactor this Zustand store to be more modular.
- Rewrite this Express route using early returns and clean code.
- Shorten this component while maintaining readability.
- Add TypeScript types and Zod validation to this API handler.
- Rewrite this component using Tailwind + Shadcn UI.
