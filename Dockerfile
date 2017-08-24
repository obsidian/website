FROM node:latest as build

ARG NPM_CONFIG_LOGLEVEL=warn
RUN npm install -g yarn

ENV NODE_ENV development

WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install

COPY . /app/

CMD yarn start
