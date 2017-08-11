FROM node:latest as build

ARG NPM_CONFIG_LOGLEVEL=warn
RUN npm install -g yarn

WORKDIR /build
COPY package.json yarn.lock /build/
RUN yarn install
COPY . /build
RUN yarn build

FROM nginx:alpine
COPY --from=build /build/public /usr/share/nginx/html
