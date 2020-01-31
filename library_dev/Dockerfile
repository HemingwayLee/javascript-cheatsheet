FROM ubuntu:16.04

RUN apt-get update && apt-get install -y nodejs npm vim

RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN node -v
RUN npm install -g uglify-js
RUN npm install -g browserify

WORKDIR /home
COPY src /home/src
COPY run.sh /home/run.sh

RUN /home/run.sh

ENTRYPOINT ["/bin/bash"]
