import {db} from '../../config/firebase.config';
import {Task} from '../interfaces/task.interface';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  Timestamp,
  updateDoc
} from 'firebase/firestore';

export class TaskService {
  async getAllTask(): Promise<Task[]> {
    const taskCollection = collection(db, 'tasks');
    const snapshot = await getDocs(taskCollection);
    if (snapshot.empty) {
      return [];
    }
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    })) as Task[];
  }

  async createTask(taskData: Task): Promise<Task> {
    const taskCollection = collection(db, 'tasks');
    const currentDate = Timestamp.fromDate(new Date());
    const docRef = await addDoc(taskCollection, {
      ...taskData,
      creationDate: currentDate
    });
    return {...taskData, creationDate: currentDate, id: docRef.id};
  }

  async updateTask(id: string, newData: Partial<Task>): Promise<Task | null> {
    const taskDocument = doc(db, 'tasks', id);
    const updatedDoc = await getDoc(taskDocument);
    if (!updatedDoc.exists()) {
      return null;
    }

    await updateDoc(taskDocument, newData);
    const refreshedDoc = await getDoc(taskDocument);
    return {id: refreshedDoc.id, ...refreshedDoc.data()} as Task;
  }

  async deleteTask(id: string): Promise<{message: string}> {
    const taskDocument = doc(db, 'tasks', id);
    const document = await getDoc(taskDocument);
    if (!document.exists()) {
      return {message: 'El documento no existe'};
    }
    await deleteDoc(taskDocument);
    return {message: 'El documento fue eliminado satisfactoriamente'};
  }
}
