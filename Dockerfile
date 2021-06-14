FROM node:alpine

WORKDIR /app
COPY . .
RUN npm install --loglevel verbose
RUN npm run build
CMD npm start