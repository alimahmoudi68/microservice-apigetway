<!-- Generated guidance for AI coding agents. Keep concise and actionable. -->
# Copilot / AI agent instructions

Purpose: get an AI coding agent productive quickly in this repository (Node.js API gateway scaffold).

- **Project snapshot:** minimal repo; source lives under `src/` and routing code is in [src/routes/authRoutes.ts](src/routes/authRoutes.ts) (file currently empty). No `package.json` or other project manifests were found in the workspace root.

- **Big picture / likely architecture:** folder name `api_getway` and `src/routes` indicate a TypeScript-based API gateway or microservice that organizes endpoints by `*Routes.ts`. Expect a small Node/Express or similar HTTP server; however, there is no package.json or tsconfig to confirm — ask the maintainer before assuming runtime details.

- **Where to look first (high value files):**
  - Source routes: [src/routes/authRoutes.ts](src/routes/authRoutes.ts)
  - Project root: check for `package.json`, `tsconfig.json`, `README.md`, and `.env` (none found during discovery).

- **Project-specific patterns (discoverable):**
  - Route modules appear to be named with a `Routes` suffix (example: `authRoutes.ts`). Follow the same naming when adding new route files.
  - Keep route handlers inside `src/routes/` rather than scattering across top-level `src` files.

- **Actionable agent workflow (do these in order):**
  1. Confirm runtime and package manager: ask the user whether this is `npm`/`yarn` and if a `package.json` is intentionally missing. Do not add dependencies without confirmation.
 2. If asked to implement routes or features, follow the `*Routes.ts` pattern and place new files in `src/routes/`.
 3. If asked to run or test locally and `package.json` is missing, request the project scripts or a preferred startup command; propose a conservative `npm init -y` + `npm install` approach only after approval.
 4. When editing code, keep TypeScript style (use `.ts` extension) and mirror existing naming conventions (e.g., `authRoutes.ts`).

- **Examples to reference when editing:**
  - Add routes under `src/routes/` and export a function or router object named consistently (e.g., `export const authRoutes = (router) => { ... }`).
  - When adding modules, prefer explicit filenames with `Routes` suffix so maintainers can quickly find new endpoints.

- **What I did and what I couldn't verify:**
  - Confirmed `src/routes/authRoutes.ts` exists but is empty.
  - No `package.json`, `tsconfig.json`, or README discovered — build/test commands are therefore unknown.

- **When to ask the user (important):**
  - Confirm the runtime (Node version), package manager, and any preferred scripts (`start`, `build`, `test`).
  - Confirm whether adding or modifying `package.json`, `tsconfig.json`, or CI files is allowed.

- **Keep edits minimal and discoverable:**
  - Don't infer frameworks or add large dependency changes without an explicit go-ahead. Document any assumptions clearly in PR descriptions.

If any section is unclear or you want me to expand examples (e.g., a starter `package.json` or a sample route implementation), tell me which area to flesh out and I'll update this file.
