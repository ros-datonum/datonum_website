# --- build stage: compile the Astro static site ---
FROM node:22-alpine AS build
WORKDIR /app

# Install deps against the lockfile for reproducible builds.
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest (including .env, so PUBLIC_HUBSPOT_* inline into the client bundle).
COPY . .
RUN npm run build

# --- serve stage: nginx serves the built files (the shared Caddy container handles TLS + routing) ---
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# nginx:alpine already EXPOSEs 80 and starts nginx.
