import repositories from '../repositories';
import type {TodoType} from '../types';

const createTodo = async (payload: TodoType) => {
  return await repositories.todo.createTodo(payload);
};

export default {
  createTodo,
};
