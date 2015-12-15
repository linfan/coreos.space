FROM node:4.2.1

ADD . /usr/app
WORKDIR /usr/app

ENV NODE_ENV development
RUN npm install
RUN apt-get install -y make

ENV NODE_ENV production
RUN make build-rel

EXPOSE 3000
ENTRYPOINT make run
