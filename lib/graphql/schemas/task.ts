const task = `#graphql
type Task {
  taskID: ID!
  user: User
  title: String!
  description: String
  dueDate: Int
  status: TaskStatus
  dateCreated: Int
}

type User {
  id: ID!
  username: String
  email: String
  passwordHash: String
  dateCreated: Int
  tasks: [Task]
}

type TaskStatus {
  statusID: ID!
  statusName: String!
}`;

export default task;
