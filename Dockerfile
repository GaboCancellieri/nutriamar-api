FROM node:17

WORKDIR /usr/share/nutriamar-api

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build
COPY .env .dist

CMD [ "node", "./dist/server.js" ]