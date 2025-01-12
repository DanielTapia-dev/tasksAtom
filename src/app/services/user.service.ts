import {db} from '../../config/firebase.config';
import {User} from '../../interfaces/user.model';

export class UserService {
  async createUser(userData: User): Promise<User> {
    const userRef = db.collection('users');
    const snapshot = await userRef.where('email', '==', userData.email).get();
    if (snapshot.empty) {
      await userRef.doc().set(userData);
      return userData;
    }

    return userData;
  }

  async getAllUsers(): Promise<User[]> {
    const snapshot = await db.collection('users').get();
    return snapshot.docs.map((doc) => doc.data() as User);
  }
}
