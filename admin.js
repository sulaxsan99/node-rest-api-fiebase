var admin = require("firebase-admin");

var serviceAccount = require("./nodeapp-3001c-firebase-adminsdk-mejbc-94c8ff060f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
  
});
const db =admin.firestore();
db.settings({ ignoreUndefinedProperties: true })
module.exports={admin,db}