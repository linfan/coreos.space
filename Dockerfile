FROM node:4.2.1

ADD . /usr/app
ENV NODE_ENV production

WORKDIR /usr/app
RUN npm install
RUN apt-get install -y make
RUN make build-rel

EXPOSE 3000
ENTRYPOINT make run
