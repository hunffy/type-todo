interface InputTextProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
  InputText: string;
}
function CreateTodo({ onChange, onSubmit, InputText }: InputTextProps) {
  return (
    <div className="todoCreateContainer">
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          onChange={(e) => onChange(e)}
          type="text"
          placeholder="할 일을 입력하세요"
          value={InputText}
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default CreateTodo;
