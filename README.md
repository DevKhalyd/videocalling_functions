# Functions for Videocalling App

Basically reacts to the changes in the database

# Commands

`firebase emulators:start` Start to emulate

**See all the commands avaible:** https://firebase.google.com/docs/emulator-suite/install_and_configure

# Organize files

https://firebase.google.com/docs/functions/organize-functions

https://stackoverflow.com/questions/43486278/how-do-i-structure-cloud-functions-for-firebase-to-deploy-multiple-functions-fro

# Errors

When deploy your functions maybe you need to do some changes in the firebase.json and package.json

Your files looks like something like:

**firebase.json**

```json
{
  "firestore": {
    "rules": "firestore.rules",
    "indexes": "firestore.indexes.json"
  },
  "functions": {},
  "emulators": {
    "functions": {
      "port": 5001
    },
    "firestore": {
      "port": 8080
    },
    "ui": {
      "enabled": true
    },
    "auth": {
      "port": 9099
    }
  }
}
```

**package.json**

```json
{
  "name": "functions",
  "description": "Cloud Functions for Videocalling App on Firebase",
  "scripts": {
    "serve": "firebase emulators:start --only functions",
    "shell": "firebase functions:shell",
    "start": "npm run shell",
    "deploy": "firebase deploy --only functions",
    "logs": "firebase functions:log"
  },
  "engines": {
    "node": "14"
  },
  "main": "index.js",
  "dependencies": {
    "bcrypt": "^5.0.1",
    "firebase-admin": "^9.8.0",
    "firebase-functions": "^3.14.1"
  },
  "devDependencies": {
    "firebase-functions-test": "^0.2.0"
  },
  "private": true
}
```

Resource:
https://github.com/pulyaevskiy/firebase-functions-interop/issues/24#issuecomment-393471002