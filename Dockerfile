FROM node:20-alpine3.18

WORKDIR /server

COPY package.json .

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 8088

CMD ["npm", "start"]
