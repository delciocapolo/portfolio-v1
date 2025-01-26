ARG NODE_VERSION=22-alpine

FROM node:${NODE_VERSION}

# ENV NODE_ENV production

WORKDIR /usr/src/app

COPY docker/entrypoint.sh entrypoint.sh

RUN npm i -g @angular/cli

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

COPY .. .

EXPOSE 4200

RUN chmod +x ./entrypoint.sh

ENTRYPOINT [ "/usr/src/app/entrypoint.sh" ]