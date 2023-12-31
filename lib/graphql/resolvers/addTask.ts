import { db } from '@/db';
import { tasks } from '@/db/schema/tasks';
import { TaskResponse, TaskStatus } from '@/lib/types'; // Import TaskResponse type

export async function addTask(
  _: any,
  args: {
    userID: number;
    title: string;
    description?: string | null;
    dueDate: Date | string;
    status: TaskStatus;
  },
): Promise<TaskResponse> {
  try {
    const dueDate = new Date(args.dueDate);

    const task = await db
      .insert(tasks)
      .values({
        ...args,
        dueDate,
      })
      .returning({
        taskID: tasks.taskID,
        userID: tasks.userID,
        title: tasks.title,
        description: tasks.description,
        dueDate: tasks.dueDate,
        status: tasks.status,
        dateCreated: tasks.dateCreated, // Assuming this field is auto-generated by the database
      });

    return {
      code: '200',
      success: true,
      message: 'Task successfully added',
      task: task[0],
    };
  } catch (error) {
    console.error('Failed to add task:', error);

    return {
      code: '400',
      success: false,
      message: 'Failed to add task',
      task: null,
    };
  }
}
