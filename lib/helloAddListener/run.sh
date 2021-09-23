#!/bin/bash

rm app*

browserify src/main.js --s dummy -o app.js
browserify src/main.js --s dummy | uglifyjs -c > app.min.js

