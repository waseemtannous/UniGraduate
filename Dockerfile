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

# build command for arm64 and amd64
# docker buildx build --platform linux/amd64,linux/arm64 -t unigraduate .