const queries = `#graphql
type Query {
  # Query to get a list of all categories
  allCategories: [Category]

  # Query to get a specific category by ID
  category(categoryID: ID!): Category

  # Query to get a list of all tasks
  allTasks(orderBy: TaskOrderByInput, status: TaskStatus, userID: ID, dueDateRange: [Int]): [Task]

  # Query to get a specific task by ID
  task(taskID: ID!): Task

  # Query to get a list of all users
  allUsers(username: String, email: String): [User]

  # Query to get a specific user by ID
  user(id: ID!): User
}`;

export default queries;
