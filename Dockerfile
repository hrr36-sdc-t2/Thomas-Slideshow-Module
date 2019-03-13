FROM node:11

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY LICENSE .
COPY README.md .
COPY newrelic.js .
COPY /server ./server
COPY /db ./db
COPY /images ./images
COPY /client/dist ./client/dist

RUN npm install --production

EXPOSE 3001

CMD [ "npm", "start" ]
