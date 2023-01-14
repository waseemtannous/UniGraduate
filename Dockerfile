# build react app from client folder
FROM node as build
WORKDIR /app
COPY client/package.json ./
RUN npm install
COPY client/ .
RUN npm run build

# node server to serve react app
FROM node
WORKDIR /app
COPY server/package.json ./
RUN npm install
COPY server/ .
COPY --from=build /app/build ./build
EXPOSE 8080
CMD ["npm", "start"]