FROM node:lts-alpine

RUN mkdir /app/

WORKDIR /app

COPY package.json yarn.* ./

RUN yarn
RUN yarn add react-scripts -g

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
