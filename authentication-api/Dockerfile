FROM node:18-alpine as base

USER node
WORKDIR /application

FROM base as dependecies
USER root
RUN apk add --update --no-cache build-base

USER node

COPY --chown=node:node /package.json .
COPY --chown=node:node /package-lock.json .

FROM dependecies as build-dependencies
RUN echo "[installing project dependencies]" \
  && npm ci

FROM base as dev
COPY --from=build-dependencies --chown=node:node /application/node_modules .
COPY --from=dependecies --chown=node:node /application/package.json .
COPY --chown=node:node /src .

CMD ["npm", "run", "start"]
