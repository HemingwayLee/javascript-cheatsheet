FROM node:12

RUN apt-get update && apt-get install -y tree

RUN mkdir -p /home/app/
COPY . /home/app/
WORKDIR /home/app/
RUN npm install
RUN npm run build
RUN tree .


