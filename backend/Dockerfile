FROM node:18-slim

WORKDIR /usr/src/app

COPY ./yarn.lock ./
COPY ./package.json ./

COPY . .

RUN apt update
RUN apt install make gcc g++ python -y
RUN yarn install

EXPOSE 5000

CMD ["yarn", "start"]