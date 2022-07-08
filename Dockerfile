FROM node:14.15.0-alpine as build

WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
RUN npm ci

COPY . /usr/src/app/
RUN npm run build
#RUN npm ci --only=production #TODO czegoś brakuje do uruchomienia

FROM node:14.15.0-alpine as run

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/static static
COPY --from=build /usr/src/app/node_modules node_modules
COPY --from=build /usr/src/app/package.json .
COPY --from=build /usr/src/app/nuxt.config.js .
COPY --from=build /usr/src/app/.env* .
COPY --from=build /usr/src/app/.nuxt .nuxt
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh


ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV APP_ENVIRONMENT=dev

EXPOSE 3000

CMD ["npm", "start"]
