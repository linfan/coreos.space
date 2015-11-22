#!/bin/bash

echo "Unwatch babel"
for pid in $(ps -ef | grep 'watch' | grep 'node_modules/.bin/babel' | grep '^[ ]*[0-9]\+[ ]\+[0-9]\+[ ]\+1' | awk '{print $2}'); do
    kill -15 $pid;
    echo "killed $pid"
done

echo "Unwatch jade"
for pid in $(ps -ef | grep 'watch' | grep 'node_modules/.bin/jade' | grep '^[ ]*[0-9]\+[ ]\+[0-9]\+[ ]\+1' | awk '{print $2}'); do
    kill -15 $pid;
    echo "killed $pid"
done

echo "Unwatch sass"
for pid in $(ps -ef | grep 'node-sass' | grep '^[ ]*[0-9]\+[ ]\+[0-9]\+[ ]\+1' | awk '{print $2}'); do
    kill -15 $pid;
    echo "killed $pid"
done

echo "Unwatch nodemon"
for pid in $(ps -ef | grep 'node_modules/.bin/nodemon' | grep '^[ ]*[0-9]\+[ ]\+[0-9]\+[ ]\+1' | awk '{print $2}'); do
    kill -15 $pid;
    echo "killed $pid"
done
