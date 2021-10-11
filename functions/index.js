// Example of how to run and deploy functions
// https://firebase.google.com/docs/functions/get-started#set-up-node.js-and-the-firebase-cli

// Java Error:
// https://stackoverflow.com/questions/56819840/firebase-cloud-functions-emulator-throws-exited-with-code-1-error

// Examples:
// https://firebase.google.com/docs/firestore/extend-with-functions#specific-documents
const admin = require("firebase-admin");
const functions = require("firebase-functions");
const { encryptPassword } = require("./utils/utils");
// The Firebase Admin SDK to access Firestore.
admin.initializeApp();

const usersCollection = 'users'
const usernamesUnavaible = 'usernames_unavaible'

// TODO: Test just the functions no the firestore. Configure the emulators.
// TODO: Use https://cloud.google.com/functions/docs/configuring/env-var

// When a new user is created in the collections $usersCollection the password is encrypted.
// Also  adds a new document to $usernamesUnavaible collection to identify if the username is duplicated.
// Lastly, add a new param in the user to search for array and fetch the user that contains that characters.
exports.updateUser = functions.firestore.document(`/${usersCollection}/{documentId}`)
    .onCreate((snap, _) => {
        const data = snap.data();
        const password = data.password;
        const username = data.username;
        encryptPassword(password, (err, newPassword) => {
            functions.logger.log('EncryptedPassword: ', newPassword);
            if (!err)
                return snap.ref.update({ newPassword });
        })
        functions.logger.log('Adding to a new collection');
        // Add to the collections usernames this username as unavaible
        snap.ref.firestore.collection(usernamesUnavaible).add({ username });

        functions.logger.log('Lastly, converto to a list');
        return snap.ref.set({ username_query: username.split('') }, { merge: true });
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