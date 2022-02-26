FROM node:carbon-alpine

COPY package*.json ./

COPY . .

RUN npm install --production

RUN npm install -g typescript

RUN tsc

WORKDIR /dist

COPY . .

EXPOSE 8000

CMD ["node","app"]
