FROM node:latest

WORKDIR /app
COPY ./src ./src
RUN yarn
CMD ["yarn", "dev"]