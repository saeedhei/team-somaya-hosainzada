# Discard ALL local changes and sync with remote - My Forked repo

# pull + push: Changes get merged → safer, nothing gets lost.
git checkout main
git pull origin main
git push origin main

# fetch + reset --hard: Hard synchronization with origin → faster, but extra commits on main will be removed.
git fetch origin
git checkout main
git reset --hard origin/main

