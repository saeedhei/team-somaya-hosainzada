# pull + push: Changes get merged → safer, nothing gets lost.
git checkout main
git pull upstream main
git push origin main

# fetch + reset --hard: Hard synchronization with upstream → faster, but extra commits on main will be removed.
git fetch upstream
git checkout main
git reset --hard upstream/main



