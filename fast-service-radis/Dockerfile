FROM node:lts-alpine

WORKDIR /usr/src/app

RUN npm install nodemon -g

USER node

COPY package*.json yarn.* ./

RUN yarn

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "yarn", "start" ]