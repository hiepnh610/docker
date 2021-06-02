import repositories from '../repositories';
import type {TodoType} from '../types';

const createTodo = async (payload: TodoType) => {
  return await repositories.todo.createTodo(payload);
};

const getTodo = async () => {
  return await repositories.todo.getTodo();
};

const removeTodo = async (id: string) => {
  return await repositories.todo.removeTodo(id);
};

export default {
  createTodo,
  getTodo,
  removeTodo,
};
