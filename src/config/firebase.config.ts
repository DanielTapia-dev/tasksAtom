import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

const firebaseParams = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL
};

admin.initializeApp({
  credential: admin.credential.cert(firebaseParams)
});

const db = admin.firestore();
export {db};
