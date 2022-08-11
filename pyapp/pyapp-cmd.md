# BUILD Cmd

'''
docker build -t pyapp-2 -f Dockerfile.py-app .
'''

# RUN cmd
'''
docker run -p 8080:8000 pyapp-2
'''

# RUN cmd ALT PORT/PROXY
'''
docker run -p 8080:8000 pyapp-2
'''

# RUN script
'''
docker run -it pyapp-2 /bin/bash
'''

# review running containers
'''
docker ps
'''