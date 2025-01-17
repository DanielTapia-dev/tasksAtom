import {doc, getDoc, setDoc} from 'firebase/firestore';
import {db} from '../../config/firebase.config';

export class UserService {
  async createUser(userData: {email: string; [key: string]: any}) {
    const email = userData.email;
    const {email: _, ...dataWithoutEmail} = userData;

    const userDataWithTutorial = {
      ...dataWithoutEmail,
      tutorial: false
    };

    const userDocument = doc(db, 'users', email);

    await setDoc(userDocument, userDataWithTutorial);
    return {email: userDocument.id, tutorial: false};
  }

  async getUserByEmail(
    email: string
  ): Promise<{exists: boolean; message: string}> {
    const userDocument = doc(db, 'users', email);
    const userSnapshot = await getDoc(userDocument);
    if (!userSnapshot.exists()) {
      return {exists: false, message: 'El usuario no existe.'};
    }
    return {exists: true, message: 'El usuario ya existe.'};
  }
}
