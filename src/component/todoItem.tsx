interface TodoItemProps {
  text: string;
  completed: boolean;
}

function TodoItem({ text, completed }: TodoItemProps) {
  return (
    <li className="todoContainer">
      {completed ? <button>완료됨</button> : <button>완료하기</button>}
      <p className="todoContent">{text}</p>
      <div className="buttonContainer">
        <button type="button" className="updateBtn">
          수정
        </button>
        <button type="button" className="deleteBtn">
          삭제
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
