import mongoose, {Schema, Document, Model} from 'mongoose';

export interface ITodo extends Document {
  name: string;
}

const TodoSchema: Schema = new Schema({
    name: {
      type: String,
      required: true,
    },
  }, {
    timestamps: true,
  });

const Todo: Model<ITodo> = mongoose.model('Todo', TodoSchema);

export default Todo;
