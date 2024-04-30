FROM node:18 AS node_modules

WORKDIR /app

COPY package.json yarn.lock ./

# install dev dependencies too
RUN set -x && yarn

COPY . .
RUN set -x && yarn build

EXPOSE 3000

CMD [ "yarn", "run", "start:prod" ]
