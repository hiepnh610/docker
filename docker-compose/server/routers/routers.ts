import {Router} from 'express';

import controllers from '../controllers';

const routers: Router = Router();

routers.route('/todo').post(controllers.todo.createTodo);

export default routers;
