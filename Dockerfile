FROM node:11

WORKDIR /app

RUN mkdir ./server
RUN mkdir ./db
RUN mkdir ./images
RUN mkdir -p ./client/dist

COPY LICENSE .
COPY README.md .
COPY newrelic.js .
COPY package*.json ./
COPY ./server ./server
COPY ./db ./db
COPY ./images ./images
COPY ./client/dist ./client/dist

RUN npm install --production

EXPOSE 3001

CMD [ "npm", "start" ]