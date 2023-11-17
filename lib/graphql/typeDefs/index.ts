// Importing each schema from its respective file
import category from './category';
import mutations from './mutations';
import queries from './queries';
import task from './task';
import taskOrderByInput from './taskOrderByInput';
import taskStatus from './taskStatus';
import user from './user';

// Exporting all schemas
export { category, task, taskStatus, user, queries, mutations, taskOrderByInput };
