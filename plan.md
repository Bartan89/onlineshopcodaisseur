
STEP 1:

✅ do the models and relations in figma 
[] do the general setup


- npm init
- .gitignore (add modules/)
- github repo
- git init <<<
- git addRemote add. commit push
- .ElephantSQL
- add it to postico
- 
- npm i sequelize-cli sequelize pg
- config.json


PLan after basic structure:

- 


Try to create a UML where you can see the models and their attributes as well as the relationships between the entities.

Remember you can also start thinking on what routes your API is going to need.





Create a new folder and inside it a new npm project using npm init -y

Initialize a git repository git init and create a .gitignore file

Install express, pg, sequelize and sequelize-cli.

Initialize a new sequelize structure using npx sequelize-cli init.

Create a new ElephantSQL instance.

Tweak the config/config.json "development" key with your postgres credentials.
Also remember to make the change on models/index.js (check day 1, sequelize setup)
Run the db:migrate command to make sure the database connection is working. You should see a message similar to this: