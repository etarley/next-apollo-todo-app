const mutations = `#graphql
type Mutation {
  # Mutations for Categories
  addCategory(name: String!, description: String): CategoryResponse
  updateCategory(categoryID: ID!, name: String, description: String): CategoryResponse
  deleteCategory(categoryID: ID!): CategoryResponse

  # Mutations for Tasks
  addTask(userID: ID, title: String!, description: String, dueDate: Int, status: TaskStatus): TaskResponse
  updateTask(taskID: ID!, userID: ID, title: String, description: String, dueDate: Int, status: TaskStatus): TaskResponse
  deleteTask(taskID: ID!): TaskResponse

  # Mutations for Users
  addUser(username: String, email: String, password: String): UserResponse
  updateUser(id: ID!, username: String, email: String, password: String): UserResponse
  deleteUser(id: ID!): UserResponse
}`;

export default mutations;
