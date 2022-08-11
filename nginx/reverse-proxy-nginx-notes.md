# ------------- Reverse Proxy with Nginx --------------
https://www.codingforentrepreneurs.com/courses/docker-and-docker-compose/lessons/reverse-proxy-with--nginx/
- create start/end git branches
    CMD: git checkout -b 8-start
    CMD: git checkout -b 8-end

- # add upstream server to nginx conf
- add prox_pass to location setting

- stop both containers
    CMD: docker stop + container ID

# reconfigure upstream server for other dokcer containers
- use host.docker.internal...

