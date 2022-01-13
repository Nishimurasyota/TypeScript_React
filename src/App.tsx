import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo.tsx";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  //stateに対する型の定義はuseState<>、<>の中に定義する
  const onclickFetchData = () => {
    //axiosで型の定義をする場合はgetなどの後に<>を記述してその中に記述する
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div className="App">
      <button onClick={onclickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo title={todo.title} userid={todo.userId} />
      ))}
    </div>
  );
}
