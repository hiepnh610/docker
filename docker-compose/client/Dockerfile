FROM node:16.2.0-alpine as builder

WORKDIR /app/

COPY package.json yarn.lock /app/

RUN yarn install

COPY . .

RUN yarn build

FROM nginx:1.21-alpine

COPY --from=builder /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
