FROM node:alpine

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install --loglevel verbose
COPY . .
RUN npm run build
CMD npm start