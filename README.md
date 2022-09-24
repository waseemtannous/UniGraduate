# UniGraduate

## Run Locally

Make sure to change "proxy" value to "http://localhost:5000" in package.json

client:

```bash
cd client
npm install
npm start
```

server:

```bash
cd server
npm install
npm run server
```

## Run Using Docker

Make sure to change "proxy" value to "http://server:5000" in package.json

```bash
docker-compose up -d --build
```
