FROM node:12.18.4
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "nodemon.json","./"]

RUN npm i --production

COPY . .

CMD [ "npm", "run", "server" ]
