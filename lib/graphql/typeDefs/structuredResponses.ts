const structuredResponses = `#graphql
type CategoryResponse {
  code: String!
  success: Boolean!
  message: String!
  category: Category
}

type TaskResponse {
  code: String!
  success: Boolean!
  message: String!
  task: Task
}

type UserResponse {
  code: String!
  success: Boolean!
  message: String!
  user: User
}`;

export default structuredResponses;
