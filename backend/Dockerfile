FROM node:lts
WORKDIR /App
COPY ./app.js .
COPY ./package.json .
RUN npm install -g nodemon
RUN npm install
EXPOSE 3000
CMD ["nodemon", "src/app.js"]