# === Base stage for dependency installation ===
FROM node:18-alpine AS deps

WORKDIR /app

# Copy all package manifests (for monorepo)
COPY package*.json ./
COPY tsconfig*.json .

# Copy full monorepo layout for workspace resolution
COPY common ./common
COPY services/expense-service ./services/expense-service

# Install only the auth-service workspace
RUN npm install

# === Build stage ===
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package manifests and workspace structure
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/package-lock.json ./package-lock.json
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/common ./common
COPY --from=deps /app/services/expense-service ./services/expense-service

# Rebuild the workspace tree so npm can resolve workspaces
RUN npm run --workspace=common build && \
    npm run --workspace=services/expense-service build

# === Final stage ===
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/services/expense-service/dist ./dist
COPY --from=builder /app/common/dist ./common/dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

CMD ["node", "dist/main"]
