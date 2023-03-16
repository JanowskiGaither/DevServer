FROM node:lts
WORKDIR /App
COPY ./seeds.js .
COPY ./models ./models
COPY ./package.json .
RUN npm install -g nodemon
RUN npm install
EXPOSE 3000
CMD ["nodemon", "seeds.js"]