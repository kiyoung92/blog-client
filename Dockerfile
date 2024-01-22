FROM node:18.17.0-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18.17.0
WORKDIR /app
COPY --from=build /app ./
EXPOSE 3080
CMD ["npm", "start"]