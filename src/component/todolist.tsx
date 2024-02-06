import React, { useState } from "react";
import TodoItem from "./todoItem";
import CreateTodo from "./createTodo";

//type 지정 -1
interface TList {
  id: number;
  text: string;
  completed: boolean;
}

function TodoList() {
  //지정한 타입 사용
  const [todoList, setTodoList] = useState<TList[]>([
    { id: 1, text: "할일 1", completed: false },
    { id: 2, text: "할일 2", completed: false },
  ]);
  const [inputText, setInputText] = useState("");

  //할일 입력값 감지
  const textTypingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  //HtmlFormElement의 submit함수를 처리 사용자가 폼을 제출하면 이 함수가 호출된다.

  const textInputHandler = (event: React.FormEvent<HTMLFormElement>) => {
    //이벤트가 페이지 리로딩되는것이나, 다른 기본동작의 수행을 막아주는역할
    event.preventDefault();

    //추가될 할일 설정
    const newTodo: TList = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    setInputText("");
  };
  return (
    <div className="todoListContainer">
      {todoList.map((list, index) => (
        <TodoItem key={list.id} text={list.text} completed={list.completed} />
      ))}
      <CreateTodo
        onChange={textTypingHandler}
        onSubmit={textInputHandler}
        InputText={inputText}
      />
    </div>
  );
}

export default TodoList;
