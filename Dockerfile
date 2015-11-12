FROM node:4.2.1

ADD . /usr/app

WORKDIR /usr/app
RUN npm install
RUN npm run build

EXPOSE 3000
ENTRYPOINT npm run server
