#!/bin/bash

PATH="node_modules/.bin:${PATH}"

nodemon js/dist/server/server.js 2>&1 >logs/nodemon.log &
