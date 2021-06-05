FROM node:16.2.0-alpine

WORKDIR /app/

COPY package.json yarn.lock /app/

RUN yarn install

COPY . .

RUN yarn build

FROM nginx:1.21-alpine

COPY /app/dist /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/nginx.conf
