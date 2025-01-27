ARG NODE_VERSION=22-alpine

FROM node:${NODE_VERSION}

WORKDIR /usr/src/app

RUN npm i -g @angular/cli

# uso mounts para instalar as dependencias
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

USER node

EXPOSE 4200

ENTRYPOINT [ "docker/entrypoint.sh" ]
