import {Router} from 'express';

import controllers from '../controllers';

const routers: Router = Router();

routers.route('/todo').post(controllers.todo.createTodo);

routers.route('/todo').get(controllers.todo.getTodo);

routers.route('/todo').delete(controllers.todo.removeTodo);

export default routers;
