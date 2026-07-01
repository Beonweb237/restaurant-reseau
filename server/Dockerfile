# Dockerfile for the backend

FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --production
COPY . .

EXPOSE 4000
CMD ["npm", "run", "dev"]
