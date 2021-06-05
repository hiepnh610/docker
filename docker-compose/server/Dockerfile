FROM node:16.2.0-alpine

WORKDIR /app/

RUN npm install -g nodemon

COPY package.json yarn.lock /app/

RUN yarn install

COPY . .

EXPOSE 9000

CMD [ "nodemon", "server.ts" ]
