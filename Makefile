all:

clean:
	rm -rf js/dist/* view/html/* style/css/* pkg/*

jade-debug:
	scripts/jade.sh debug

jade-watch:
	scripts/jade.sh debug-watch

jade:
	scripts/jade.sh

sass-debug:
	scripts/sass.sh debug

sass-watch:
	scripts/sass.sh debug-watch

sass:
	scripts/sass.sh

babel-debug:
	scripts/babel.sh debug

babel-watch:
	scripts/babel.sh debug-watch

babel:
	scripts/babel.sh

build: clean jade-debug babel-debug sass-debug

build-rel: clean jade babel sass

unwatch:
	scripts/unwatch.sh

watch: unwatch babel-watch sass-watch jade-watch
	scripts/nodemon.sh

run:
	node js/dist/server/server.js

docker-build:
	docker build -t coreos-space:$(date +%Y-%m-%d) .

docker-run:
	docker run -d --restart=always --name dont-delete-me -p 80:3000 coreos-space:$(date +%Y-%m-%d)
