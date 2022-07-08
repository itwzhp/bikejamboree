FROM node:14.15.0-alpine as build

WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
RUN npm ci

COPY . /usr/src/app/
RUN npm run build
RUN npm ci --only=production

FROM node:14.15.0-alpine as run

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/static static
COPY --from=build /usr/src/app/node_modules node_modules
COPY --from=build /usr/src/app/package.json .
COPY --from=build /usr/src/app/nuxt.config.js .
COPY --from=build /usr/src/app/.env .env
COPY --from=build /usr/src/app/.nuxt .nuxt


ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000

CMD ["npm", "start"]
