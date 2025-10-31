# pull + push: Changes get merged → safer, nothing gets lost.
همگام‌سازی سریع fork با upstream

git checkout main && git pull upstream main && git push origin main

کنترل بیشتر و دیدن تغییرات قبل از ادغام

git fetch upstream && git checkout main && git merge upstream/main && git push origin main

# fetch + reset --hard: Hard synchronization with upstream → faster, but extra commits on main will be removed.
git fetch upstream
git checkout main
git reset --hard upstream/main



