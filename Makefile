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

package:
	zip -r -q pkg/itrip-automation-webapp.zip views img js style -x views/jade/* views/jade/*/* style/sass/* js/src/*/*

release: build-rel package
	send-file-to itrip3 pkg/itrip-automation-webapp.zip
	ssh-to itrip3 "cd /home/aoliday/web && export NODE_ENV=production && ./update.sh 2>&1 >logs/release.log"

run:
	node js/dist/server/server.js