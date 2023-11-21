const user = `#graphql
type User {
  userId: ID!
  username: String
  email: String
  passwordHash: String
  dateCreated: Date
  tasks: [Task]
}`;

export default user;
