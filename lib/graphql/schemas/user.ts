const user = `#graphql
type User {
  id: ID!
  username: String
  email: String
  passwordHash: String
  dateCreated: Int
  tasks: [Task]
}`;

export default user;
