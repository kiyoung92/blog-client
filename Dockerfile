FROM node:18.17.0-alpine as build
WORKDIR /app
COPY package*.json ./
RUN pnpm install
COPY . .
RUN pnpm run build

FROM node:18.17.0
WORKDIR /app
COPY --from=build /app ./
EXPOSE 3080
CMD ["pnpm", "start"]