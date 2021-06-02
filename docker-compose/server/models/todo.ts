import mongoose, {Schema} from 'mongoose';

const TodoSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
  }, {
    timestamps: true,
  });

const Todo = mongoose.model('Todo', TodoSchema);

export default Todo;
