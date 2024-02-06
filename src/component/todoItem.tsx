interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onClickDelete(id: number): void;
}

function TodoItem({ id, text, completed, onClickDelete }: TodoItemProps) {
  return (
    <li className="todoContainer">
      {completed ? <button>완료됨</button> : <button>완료하기</button>}
      <p className="todoContent">{text}</p>
      <div className="buttonContainer">
        <button type="button" className="updateBtn">
          수정
        </button>
        <button
          onClick={() => onClickDelete(id)}
          type="button"
          className="deleteBtn"
        >
          삭제
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
