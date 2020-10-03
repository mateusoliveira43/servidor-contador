FROM node:12.18.4

WORKDIR /app

COPY ["package.json", "package-lock.json*", "nodemon.json","./"]

RUN npm i

COPY . .

CMD [ "npm", "run", "server" ]
