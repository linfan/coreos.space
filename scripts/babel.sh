#!/bin/bash

PARAM="--out-dir js/dist js/src"
PATH="node_modules/.bin:${PATH}"

if [[ "${1}" != "debug" && "${1}" != "debug-watch" ]]; then
    PARAM="--compact true ${PARAM}"
fi

if [[ "${1}" = "watch" || "${1}" = "debug-watch" ]]; then
    PARAM="--watch ${PARAM}"
    babel ${PARAM} 2>&1 >logs/babel.log &
else
    babel ${PARAM}
fi
