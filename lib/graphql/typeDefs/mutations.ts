const mutations = `#graphql
type Mutation {
  # Mutations for Categories
  addCategory(name: String!, description: String): Category
  updateCategory(categoryID: ID!, name: String, description: String): Category
  deleteCategory(categoryID: ID!): Category

  # Mutations for Tasks
  addTask(userID: ID, title: String!, description: String, dueDate: Int, status: TaskStatus): Task
  updateTask(taskID: ID!, userID: ID, title: String, description: String, dueDate: Int, status: TaskStatus): Task
  deleteTask(taskID: ID!): Task

  # Mutations for Users
  addUser(username: String, email: String, password: String): User
  updateUser(id: ID!, username: String, email: String, password: String): User
  deleteUser(id: ID!): String
}`;

export default mutations;
