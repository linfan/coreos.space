FROM node:4.2.1

WORKDIR /usr/src/app
EXPOSE 3000

ADD . /usr/src/app
RUN npm install
RUN npm run build

CMD npm run server
