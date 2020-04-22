const admin = require("firebase-admin");

const serviceAccount = require("./expense-tracker-d6b18-firebase-adminsdk-kaw2n-b1144f178a");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "social-media-7f318.appspot.com"
});

const db = admin.firestore();

module.exports = { admin, db };
