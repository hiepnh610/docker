import {useState, useEffect, MouseEvent, useCallback} from 'react';
import axios, {AxiosResponse, AxiosError} from 'axios';

interface TodoType {
  _id: string;
  name: string;
};

const url = 'http://localhost:9000/api/todo';

const App = () => {
  const [nameTodo, setNameTodo] = useState('');
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  const addTodo = (event: MouseEvent) => {
    event.preventDefault();

    axios
      .post(url, {name: nameTodo})
      .then((data: AxiosResponse) => {
        setTodoList([...todoList, data.data]);
      }).catch((error: AxiosError) => console.log('error', error.response));
  };

  const getTodo = useCallback(() => {
    axios
      .get(url)
      .then((data: AxiosResponse) => {
        setTodoList(data.data);
      }).catch((error: AxiosError) => console.log('error', error.response));
  }, []);

  const removeTodo = (id: string) => {
    axios
      .delete(url, {params: {id}})
      .then(() => {
        setTodoList(todoList.filter((todo) => todo._id !== id));
      }).catch((error: AxiosError) => console.log('error', error.response));
  };

  useEffect(() => {
    getTodo();
  }, [getTodo]);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-8 mt-8">
        <form className="flex col-start-5 col-span-4">
          <input
            type="text"
            className="outline-none border border-solid border-gray-300 bg-white px-4 py-2 w-full rounded-l-md"
            placeholder="Add a todo."
            onChange={(event) => setNameTodo(event.target.value)}
          />

          <button
            onClick={(event: MouseEvent) => addTodo(event)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-md focus:outline-none"
          >
            Add
          </button>
        </form>

        {!!todoList.length && (
          <div className="flex flex-col col-start-5 col-span-4">
            {todoList.map((todo: TodoType) => (
              <div
                key={todo._id}
                className="bg-white shadow-md rounded-md flex items-center justify-between pl-4 mb-4"
              >
                {todo.name}

                <button
                  onClick={() => removeTodo(todo._id)}
                  className="px-4 py-3 rounded-r-md text-white focus:outline-none bg-red-600 hover:bg-red-700 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
