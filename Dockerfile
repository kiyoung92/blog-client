FROM node:18.17.0-alpine AS production

WORKDIR /app
RUN npm install -g pnpm

COPY package*.json ./
RUN pnpm install

COPY . .
RUN pnpm build

# # COPY --from=builder /usr/src/app/node_modules ./node_modules
# # COPY --from=builder /usr/src/app/dist ./dist
# # COPY --from=builder /usr/src/app/prisma ./prisma

CMD ["pnpm", "start", "-p", "3080"]