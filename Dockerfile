FROM node:latest

RUN mkdir /usr/src/node
WORKDIR /usr/src/node
COPY . /usr/src/node

RUN npm install

RUN npm install -g typescript
RUN tsc

EXPOSE 3003
CMD ["npm", "run", "start"]