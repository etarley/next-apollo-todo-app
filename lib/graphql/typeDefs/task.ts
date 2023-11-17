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
`;

export default task;
