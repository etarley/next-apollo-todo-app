// types.ts
export interface UserResponse {
  code: string;
  success: boolean;
  message: string;
  user?: User | null;
}

export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  ON_HOLD = 'ON_HOLD',
  CANCELLED = 'CANCELLED',
}

export interface Task {
  description: string | null;
    taskID: number;
    userID: number | null;
    dateCreated: Date | null;
    title: string;
    dueDate: Date | null;
    status: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "ON_HOLD" | "CANCELLED";
}

export interface TaskResponse {
  code: string;
  success: boolean;
  message: string;
  task?: Task | null;
}

export interface User {
  userId: number;
    username: string | null;
    email: string | null;
    passwordHash: string | null;
    dateCreated: Date | null;
}

export interface UserResponse {
  code: string;
  success: boolean;
  message: string;
  user?: User | null;
}


export interface Category {
  categoryID: number;
  name: string;
  description?: string | null;
}

export interface CategoryResponse {
  code: string;
  success: boolean;
  message: string;
  category?: Category | null;
}