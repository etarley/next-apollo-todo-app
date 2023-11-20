const task = `#graphql
type Task {
  taskID: ID!
  userID: ID
  title: String!
  description: String
  dueDate: Int
  status: TaskStatus
  dateCreated: Int
}
`;

export default task;
