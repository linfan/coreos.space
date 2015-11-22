#!/bin/bash

PARAM="--recursive --output style/css/ style/sass/"
PATH="node_modules/.bin:${PATH}"

if [[ "${1}" != "debug" && "${1}" != "debug-watch" ]]; then
    PARAM="--output-style compressed ${PARAM}"
fi

if [[ "${1}" = "watch" || "${1}" = "debug-watch" ]]; then
    PARAM="--watch ${PARAM}"
    node-sass ${PARAM} 2>&1 >logs/sass.log &
else
    node-sass ${PARAM}
fi
