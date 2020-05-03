
FROM node:12.2.0-alpine 

WORKDIR /usr/server

COPY package*.json ./

RUN npm install

COPY . . 

CMD [ "npm", "start" ]