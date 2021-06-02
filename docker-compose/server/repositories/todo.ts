import Todo from '../models/todo';
import type {TodoType} from '../types';

const todo = new Todo();

const createTodo = async (payload: TodoType) => {
  const {name} = payload;

  todo.name = name;

  return await todo.save();
};

export default {
  createTodo,
};
