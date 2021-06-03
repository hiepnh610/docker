import {Request, Response} from 'express';

import services from '../services';

const createTodo = async (req: Request, res: Response): Promise<void> => {
  const {name} = req.body;

  if (!name) {
    res.status(400).json({
      message: 'The name field is missing.',
    });

    return;
  }

  try {
    const todo = await services.todo.createTodo({name});

    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({
      message: 'Something error happened.',
    });
  }
};

const getTodo = async (_req: Request, res: Response): Promise<void> => {
  try {
    const todo = await services.todo.getTodo();

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({
      message: 'Something error happened.',
    });
  }
};

const removeTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const {id}: {id?: string} = req.query;

    if (!id) {
      res.status(400).json({
        message: 'The id field is missing.',
      });

      return;
    }

    await services.todo.removeTodo(id);

    res.status(200).json({message: 'Removed.'});
  } catch (error) {
    res.status(500).json({
      message: 'Something error happened.',
    });
  }
};

export default {
  createTodo,
  getTodo,
  removeTodo,
};
