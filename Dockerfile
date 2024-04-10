#
# 🏡 Production Build
#
FROM node:21-alpine as build

WORKDIR /app

COPY --chown=node:node . .

RUN npm ci

# Set to production environment
ENV NODE_ENV production

# Generate the production build. The build script runs "vite build" to compile the application.
RUN npx nuxt build

# Set Docker as a non-root user
USER node

#
# 🚀 Production Server
#
FROM node:21-alpine as prod

WORKDIR /app

# Copy only the necessary files
COPY --chown=node:node --from=build /app/.output ./.output

# Set Docker as non-root user
USER node

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
