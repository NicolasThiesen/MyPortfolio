FROM node

WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .

RUN yarn install

EXPOSE 3333

CMD [ "yarn", "dev"]