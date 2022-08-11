# nginx

FROM "image"
COMMAND...
COPY . to abs path /www/data

# COPY
- cmd is COPY --source --dest
- source of "." is the same dir as the docker file
- destination of www/data = ?


# DOCKER Build
```
docker build -t nginx -f Dockerfile.nginx .
command + "-t = tag" + "your tag name" -f=DockerFileName + DirPath .
```
# RUN

```
docker run -p 8080:80 nginx
-- command + -p "port" (local host 8080 and container port 80) + container tag name

# Publish port
docker run -p 8080:80 newngx
-- command created the newngx index, vars -p PORT to run on
```

# Run the shell in linx, COPY the nginx config file from /etc/nginx/conf.d/default.conf
```
- same as sh for shell
    CMD: docker run -it CONTAINER_NAME /bin/bash
    NOTE - this MUST be in a WSL/linux terminal, it wont work on bash
```

# UPDATED the static.conf to reflect our static file dir that we assigned on the container /www/data/
```
RE run the build, re-run the container
```

```
docker images
-- comand to list the images in the current container
```

# Docker Compose
-- Version
-- services