#!/bin/bash

PARAM="--hierarchy --out views/html views/jade"
PATH="node_modules/.bin:${PATH}"

if [[ "${1}" = "debug" || "${1}" = "debug-watch" ]]; then
    PARAM="--pretty ${PARAM}"
fi

if [[ "${1}" = "watch" || "${1}" = "debug-watch" ]]; then
    PARAM="--watch ${PARAM}"
    jade ${PARAM} 2>&1 >logs/jade.log &
else
    jade ${PARAM}
fi
