FROM node:4.2.1

ADD . /usr/app
ENV NODE_ENV production

WORKDIR /usr/app
RUN npm install
RUN npm run build

EXPOSE 3000
ENTRYPOINT npm run server
