import {Request, Response} from 'express';

import services from '../services';

const createTodo = async (req: Request, res: Response) => {
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

export default {
  createTodo,
};
