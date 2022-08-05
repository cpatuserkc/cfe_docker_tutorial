# git repo
- to see repo url
    CMD: git remote -v
-clone a repo
    CMD: git clone REPO_URL

# ON MAIN branch
- to see all branches
    CMD: git branch
- create branch
    CMD: git checkout -b BRANCH_NAME
- switch to a branch
    CMD: git checkout BRANCH_NAME
- delete branch
    CMD: git branch -D BRANCH_NAME

# ADD TO REPO
- add by relpath
    CMD: git add pathToFile/Dir

# LOGS
- check log
    CMD: git log


# MERGE branches
- checkout the branch you wantto merge TO/your mainbranch
    CMD: git checkout BRANCH_NAME
- run merge, merge in branch name that you want to merge to current branch
    CMD: git merge BRANCH_NAME

# PULL
- pull 
    CMD: git pull origin BRANCH_NAME


