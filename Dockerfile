FROM node:18.17.0-alpine AS production

WORKDIR /app
RUN npm install -g pnpm

COPY package*.json ./
RUN pnpm install

COPY . .
RUN pnpm build

CMD ["pnpm", "start", "-p", "3080"]