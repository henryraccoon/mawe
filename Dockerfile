# Build Stage
FROM node:14 as builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
RUN npm run build

# Runtime Stage
FROM node:14

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist/ ./dist/
COPY package*.json ./

EXPOSE 4000

CMD ["npm", "start"]