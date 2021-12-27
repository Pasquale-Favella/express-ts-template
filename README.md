# express-ts-template
express.js with typescript template

## Overview

Use this project to quickly create a Express.js with Typescript application.

This project is pre-configured with below libraries

- Dependencies :
  - Express
  
- Dev Dependencies :
  - Typescript
  - dotenv
  - ts-node
  - nodemon
  
### How to reuse this project?

* Clone this repo.
* Rename project folder name to what ever the new project you want.
* Edit package.json , update values of "name" , "description" and "author" with proper names.
* Rename .env.sample file in .env to add your environment variables
* Start coding in src folder.

### Run project

`npm install`

To install project dipendencies and generate node_modules folder

`npm run dev`

To start local development with nodemon hot-reload

`npm run start`

compile application in dist folder and runs dist/app.js.

Access application at http://localhost:4000/hello for greeting json message
