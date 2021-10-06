// Example of how to run and deploy functions
// https://firebase.google.com/docs/functions/get-started#set-up-node.js-and-the-firebase-cli
const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

// 
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

/*
The Firebase CLI automatically installs the Firebase and Firebase SDK 
for Cloud Functions Node modules when you initialize your project. 
To add 3rd party libraries to your project, you can modify 
package.json and run npm install.For more information, 
see Handle Dependencies. (https://firebase.google.com/docs/functions/handle-dependencies)
*/

