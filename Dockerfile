# build react app from client folder
FROM node:12.2.0-alpine as build
WORKDIR /app
COPY client/package.json ./
RUN npm install
COPY client/ .
RUN npm run build

# node server to serve react app
FROM node:12.2.0-alpine
WORKDIR /app
COPY server/package.json ./
RUN npm install
COPY server/ .
COPY --from=build /app/build ./build
EXPOSE 5000
CMD ["npm", "start"]