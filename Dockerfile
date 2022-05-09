FROM node:16-alpine

WORKDIR /usr/app

COPY . .

RUN npm install && npm i -g @nestjs/cli && npm i -g typeorm

EXPOSE 3000

CMD ["nest", "start" , "--watch"]