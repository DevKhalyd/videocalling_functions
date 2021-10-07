// Example of how to run and deploy functions
// https://firebase.google.com/docs/functions/get-started#set-up-node.js-and-the-firebase-cli

// Java Error:
//https://stackoverflow.com/questions/56819840/firebase-cloud-functions-emulator-throws-exited-with-code-1-error

// Examples:
// https://firebase.google.com/docs/firestore/extend-with-functions#specific-documents
const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

const usersCollection = 'users'

// Listens for new messages added to users collection
// Then
exports.encryptUserPassword = functions.firestore.document(`/${usersCollection}/{documentId}`)
    .onCreate((snap, _) => {
        const data = snap.data();
        let password = data.password;
        password = `${password}-encrypt this one`
        functions.logger.log('Data in the map', data);
        // You must return a Promise when performing asynchronous tasks inside of Functions.
        // TODO: Add to the collections usernames this username as busy
        return snap.ref.update({ password });
    });

/*
The Firebase CLI automatically installs the Firebase and Firebase SDK
for Cloud Functions Node modules when you initialize your project.
To add 3rd party libraries to your project, you can modify
package.json and run npm install.For more information,
see Handle Dependencies. (https://firebase.google.com/docs/functions/handle-dependencies)
*/


/*
Use bcrypt
https://www.npmjs.com/package/bcrypt
More: https://firebase.google.com/docs/firestore/extend-with-functions
*/