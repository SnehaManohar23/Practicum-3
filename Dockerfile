FROM node:20.11.0-alpine

WORKDIR /arthmetic-service
COPY package*.json/ /arthmetic-service
RUN npm ci --omit=dev
COPY ./ /arithmetic-service/src

CMD ["npm" "start"]

EXPOSE 80

