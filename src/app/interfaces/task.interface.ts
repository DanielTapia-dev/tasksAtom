import {Timestamp} from 'firebase/firestore';

export interface Task {
  id: string;
  title: string;
  description: string;
  creationDate: Timestamp;
  status: string;
  email: string;
}
