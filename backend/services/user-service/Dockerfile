# === Base stage for dependency installation ===
FROM node:18-alpine AS deps
WORKDIR /app

# Copy root package.json + lock
COPY package*.json ./

# Copy all workspaces' manifests only (no source yet, keeps cache efficient)
COPY common/package.json ./common/package.json
COPY services/user-service/package.json ./services/user-service/package.json

# Install dependencies (will install workspaces too)
RUN npm install

# === Build stage ===
FROM node:18-alpine AS builder
WORKDIR /app

# Copy node_modules from deps
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package*.json ./
COPY --from=deps /app/common/package.json ./common/package.json
COPY --from=deps /app/services/user-service/package.json ./services/user-service/package.json

# Now copy the actual source
COPY common ./common
COPY services/user-service ./services/user-service

# Build both common + user-service
RUN npm run --workspace=common build && \
    npm run --workspace=services/user-service build

# === Final stage ===
FROM node:18-alpine
WORKDIR /app

# Copy only built artifacts + production dependencies
COPY --from=builder /app/services/user-service/dist ./dist
COPY --from=builder /app/common/dist ./common/dist
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package*.json ./

CMD ["node", "dist/main"]
