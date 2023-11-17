const queries = `#graphql
type Query {
  # Query to get a list of all categories
  allCategories: CategoryResponse

  # Query to get a specific category by ID
  category(categoryID: ID!): CategoryResponse

  # Query to get a list of all tasks
  allTasks(orderBy: TaskOrderByInput, status: TaskStatus, userID: ID, dueDateRange: [Int]): TaskResponse

  # Query to get a specific task by ID
  task(taskID: ID!): TaskResponse

  # Query to get a list of all users
  allUsers(username: String, email: String): UserResponse

  # Query to get a specific user by ID
  user(id: ID!): UserResponse
}`;

export default queries;
