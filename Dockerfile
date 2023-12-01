FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=5123

EXPOSE 5123

CMD [ "npm", "start" ]