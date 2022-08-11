# BUILD Cmd

'''
docker build -t express-app -f Dockerfile.express-app .
'''

# RUN cmd
'''
docker run -p 8080:8000 -e PORT=8000 express-app
'''
# run w/ remove
'''
docker run -it --rm express-app /bin/bash
'''

# BASH
'''
docker run -it express-app /bin/bash
'''
