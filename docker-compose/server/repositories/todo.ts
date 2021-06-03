import Todo, {ITodo} from '../models/todo';
import type {TodoType, DeleteOneType} from '../types';

const createTodo = async (payload: TodoType): Promise<ITodo> => {
  const {name} = payload;

  const todo: ITodo = new Todo({name});

  return await todo.save();
};

const getTodo = async (): Promise<ITodo[]> => {
  return await Todo.find();
};

const removeTodo = async (id: string): Promise<DeleteOneType> => {
  const query = {_id: id};
  return await Todo.deleteOne(query);
};

export default {
  createTodo,
  getTodo,
  removeTodo,
};
