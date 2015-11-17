#!/bin/bash

#clean up
rm -rf dist
mkdir dist

#browserify
browserify src/js/*.js -o dist/bundle.js

#handlebars
handlebars src/templates/*.handlebars -f dist/templates.handlebars

#index
cp src/index.html dist/index.html

#libs
cp -r node_modules dist/

