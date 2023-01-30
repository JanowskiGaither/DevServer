
# DevServer

This is the Dev Server set up.
It is set up to make the development process faster.
When ready to push to production use the Docker commit command
create a production image.

## Docker Commands

Each Container has a list of tested commands with descriptions
of what each command does and instructions for which directory the
commands should be executed in.

### Nginx Dev Container

###### Copy the current nginx config files of the dev server to your development machine directory containing all the source files.

- docker run --name tmp-nginx-container -d nginx-dev
- docker cp tmp-nginx-container:/etc/nginx/nginx.conf $(pwd)/nginx/nginx.conf
- docker rm -f tmp-nginx-container

###### Run Nginx-Dev Container on port 8000 of dev machine and bind mount the configuration directory.

- docker run -it --rm -dp 8000:80 \
--mount type=bind,src="$(pwd)/nginx/conf_dir/",target=/etc/nginx/conf.d/ \
--name tmp-nginx-dev \
nginx-dev

