FROM node:22-bookworm-slim

WORKDIR /usr/src/app

# Install development tools
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Wrangler CLI for Cloudflare development
# RUN npm install -g wrangler

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Expose port 3000 for Next.js development server
EXPOSE 3000

# Start Next.js in development mode
CMD ["npm", "run", "dev"]
