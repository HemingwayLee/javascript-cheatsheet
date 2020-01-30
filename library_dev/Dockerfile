FROM ubuntu:16.04

RUN apt-get update && apt-get install -y nodejs npm vim

RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN node -v
RUN npm install -g gluejs

WORKDIR /home/src
COPY src /home/src

RUN gluejs --include /home/src/ --out app.js --command 'uglifyjs'

ENTRYPOINT ["/bin/bash"]
