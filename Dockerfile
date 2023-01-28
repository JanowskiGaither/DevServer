FROM node:lts
WORKDIR /App
COPY . .
RUN npm install --global serve
EXPOSE 3000
CMD ["serve", "public/"]