const taskOrderByInput = `#graphql
input TaskOrderByInput {
  field: TaskSortableField!
  direction: OrderDirection!
}

enum TaskSortableField {
  TASK_ID
  TITLE
  DUE_DATE
  DATE_CREATED
  USER_ID
  STATUS_ID
}

enum OrderDirection {
  ASC
  DESC
}`;

export default taskOrderByInput;
