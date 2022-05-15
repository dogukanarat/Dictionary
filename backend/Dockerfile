FROM node:18-slim

WORKDIR /usr/src/app

COPY ./yarn.lock ./
COPY ./package.json ./

COPY . .

RUN yarn install

EXPOSE 5000

CMD ["yarn", "start"]