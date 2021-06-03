import repositories from '../repositories';
import type { TodoType, DeleteOneType } from '../types';

const createTodo = async (payload: TodoType): Promise<TodoType> => {
  return await repositories.todo.createTodo(payload);
};

const getTodo = async (): Promise<TodoType[]> => {
  return await repositories.todo.getTodo();
}

const removeTodo = async (id: string): Promise<DeleteOneType> => {
  return await repositories.todo.removeTodo(id);
}

export default {
  createTodo,
  getTodo,
  removeTodo,
};
