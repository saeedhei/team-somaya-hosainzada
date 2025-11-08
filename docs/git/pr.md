#Pull Request in a Project Without a Fork
--> Use it when you are part of a team with direct access to the repository, allowing for quick collaboration and immediate integration of changes.

Step 1:
git clone https://github.com/saeedhei/team-somaya-hosainzada.git
cd team-somaya-hosainzada
Step 2:
git checkout -b feature/html-menu
Step 3:
git add .
git commit -m " a new feature html menu added "
Step 4:
git push origin feature/new-html

---

#Pull Request in a Project with Fork
--> Use it when you want to contribute to an external repository, especially in open-source projects, where you can make changes safely without impacting the original codebase.
Cloning for myself:
Step 1:
Press fork button on owner repo < https://github.com/saeedhei/team-somaya-hosainzada>, click create fork button

Step 2: Clone your fork to your computer from your own repo
git clone https://github.com/SomayaHossainzada/team-somaya-hosainzada.git
cd team-somaya-hosainzada

Step 3: Add the original repo as upstream (so you can sync later)
git remote add upstream https://github.com/saeedhei/team-somaya-hosainzada.git
git remote -v # check origin (your fork) and upstream (original)

Step 4: Sync the main branch from upstream before you start

git fetch upstream
git checkout main
git merge upstream/main
OR:
git pull upstream main

Step 5: Create a new branch for your work or switch to existing branch you created before

git checkout -b feature/html-menu-v2
Or
git switch feature/html-menu

Use a descriptive name (e.g. feature/add-login, bugfix/fix-typo).
Step 6: Make your changes, then stage and commit them

git add .
git commit -m "skeleton .tsx file renamed and fixrd and menu added"
git push origin main 