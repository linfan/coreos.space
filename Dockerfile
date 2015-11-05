FROM node:4.2.1

ADD . /usr/app

RUN npm install
RUN npm run build-sr

WORKDIR /usr/app
EXPOSE 3000
ENTRYPOINT npm run server
