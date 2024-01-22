FROM node:18.17.0-alpine AS production

WORKDIR /app

# COPY --from=builder /usr/src/app/node_modules ./node_modules
# COPY --from=builder /usr/src/app/dist ./dist
# COPY --from=builder /usr/src/app/prisma ./prisma

CMD ["pnpm", "start", "-p", "3000"]