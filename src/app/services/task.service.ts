import {db} from '../../config/firebase.config';
import {Task} from '../interfaces/task.interface';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  Timestamp,
  updateDoc,
  where
} from 'firebase/firestore';
import {TaskStatus} from '../Utils/constants';

export class TaskService {
  async getAllTasks(): Promise<Task[]> {
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

  async getAllActiveTasks() {
    const tasksCollection = collection(db, 'tasks');

    const filteredQuery = query(
      tasksCollection,
      where('status', '!=', TaskStatus.ELIMINADA),
      orderBy('creationDate', 'desc')
    );

    const querySnapshot = await getDocs(filteredQuery);

    const tasks = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    return tasks;
  }

  async getTasksByUser(email: string) {
    const tasksCollection = collection(db, 'tasks');

    const filteredQuery = query(
      tasksCollection,
      where('status', 'in', [TaskStatus.PENDIENTE, TaskStatus.COMPLETADA]),
      where('userEmail', '==', email),
      orderBy('userEmail'),
      orderBy('creationDate', 'desc')
    );

    const querySnapshot = await getDocs(filteredQuery);

    const tasks = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    return tasks;
  }

  async createTask(taskData: Task): Promise<Task> {
    const taskCollection = collection(db, 'tasks');
    const currentDate = Timestamp.fromDate(new Date());
    taskData.creationDate = currentDate;
    const docRef = await addDoc(taskCollection, taskData);
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
