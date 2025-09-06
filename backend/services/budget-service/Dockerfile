# === Base stage for dependency installation ===
FROM node:18-alpine AS deps
WORKDIR /app

# Copy root package.json + lock
COPY package*.json ./

# Copy all workspaces' manifests only (no source yet, keeps cache efficient)
COPY common/package.json ./common/package.json
COPY services/budget-service/package.json ./services/budget-service/package.json

# Install dependencies (will install workspaces too)
RUN npm install

# === Build stage ===
FROM node:18-alpine AS builder
WORKDIR /app

# Copy node_modules from deps
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package*.json ./
COPY --from=deps /app/common/package.json ./common/package.json
COPY --from=deps /app/services/budget-service/package.json ./services/budget-service/package.json

# Now copy the actual source
COPY common ./common
COPY services/budget-service ./services/budget-service

# Build both common + budget-service
RUN npm run --workspace=common build && \
    npm run --workspace=services/budget-service build

# === Final stage ===
FROM node:18-alpine
WORKDIR /app

# Copy only built artifacts + production dependencies
COPY --from=builder /app/services/budget-service/dist ./dist
COPY --from=builder /app/common/dist ./common/dist
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package*.json ./

CMD ["node", "dist/main"]
