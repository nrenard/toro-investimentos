FROM node:12-alpine

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

COPY .env.example .env

EXPOSE 3333

RUN npm run build

CMD ["npm","start"]