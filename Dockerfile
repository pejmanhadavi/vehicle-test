FROM node:16

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "node", "dist/src/main.js" ]

EXPOSE 3000