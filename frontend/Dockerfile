FROM nginx:latest
COPY ./src/dist /srv/http/example-app/src/dist
COPY ./nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80