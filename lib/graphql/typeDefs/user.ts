const user = `#graphql
type User {
  id: ID!
  username: String
  email: String
  passwordHash: String
  dateCreated: Timestamp
  tasks: [Task]
}`;

export default user;
