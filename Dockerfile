FROM coreos-space-base:latest

ADD . /usr/app

ENV NODE_ENV production
RUN make build-rel

EXPOSE 3000
ENTRYPOINT make run
