# ---- DJ STATIC FILES NGINX ----
# COMMANDS
# build
```
docker build -t nginx -f Dockerfile.nginx .
```
# run
```
docker run -p 8080:80 nginx
```