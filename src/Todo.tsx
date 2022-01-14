import { VFC } from "react";
import { TodoType } from "./types/Todo";

export const Todo: VFC<Omit<TodoType, "id">> = (props) =>
  //omit<>で不要な型を取り除いている
  //props: Pick<TodoType, "userId" | "title" | "completed">
  //pickを使用することでTodoTypeから必要な型を取り出している
  {
    const { title, userId, completed = true } = props;
    //?をつけた場合はundifinedになる可能性があるのでその場合に備えて初期値を指定する方がいい
    const completedMark = completed ? "[完]" : "[未]";
    return <p>{`${completedMark} ${title}(ユーザー:${userId})`}</p>;
  };
