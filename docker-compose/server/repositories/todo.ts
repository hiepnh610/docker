import Todo, {ITodo} from '../models/todo';
import type {TodoType} from '../types';

const createTodo = async (payload: TodoType) => {
  const {name} = payload;

  const todo: ITodo = new Todo({name});

  return await todo.save();
};

const getTodo = async () => {
  return await Todo.find();
};

const removeTodo = async (id: string) => {
  const query = {_id: id};
  return await Todo.deleteOne(query);
};

export default {
  createTodo,
  getTodo,
  removeTodo,
};
