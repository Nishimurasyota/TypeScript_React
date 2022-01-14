import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { TodoType } from "./types/Todo";
import { Text } from "./Text";
import { UserPropfile } from "./UserPropfile";
import { User } from "./types/User";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const user: User = {
  name: "syota",
  hobbies: ["野球", "読書"]
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
      <UserPropfile user={user} />
      <Text color={"red"} fontSize={"18px"} />
      <button onClick={onclickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
