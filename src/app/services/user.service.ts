import {db} from '../../config/firebase.config';
import {User} from '../../interfaces/user.model';

export class UserService {
  /* async createUser(userData: User): Promise<User> {
    const userRef = db.collection('users');
    await userRef.doc().set(userData);
    return userData;
  }

  async getUserByEmail(email: string): Promise<String | null> {
    const userRef = db.collection('users');
    const snapshot = await userRef.where('email', '==', email).get();
    if (snapshot.empty) {
      return null;
    }
    return snapshot.docs[0].data().email;
  } */
}
