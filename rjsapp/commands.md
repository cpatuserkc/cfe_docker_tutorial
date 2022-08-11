# BUILD Cmd

'''
docker build -t rjsapp -f Dockerfile.rjs-app .
'''

# RUN cmd
'''
docker run -p 8080:8000 -e PORT 3000 rjsapp
'''

