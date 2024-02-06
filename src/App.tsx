import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="todoListContainer">
        <li className="todoContainer">
          <button className="completeBtn">완료</button>
          <p className="todoContent">할 일1</p>
          <div className="buttonContainer">
            <button className="updateBtn">수정</button>
            <button className="deleteBtn">삭제</button>
          </div>
        </li>
        <li className="todoContainer">
          <button className="completeBtn">완료</button>
          <p className="todoContent">할 일2</p>
          <div className="buttonContainer">
            <button className="updateBtn">수정</button>
            <button className="deleteBtn">삭제</button>
          </div>
        </li>
        <div className="todoCreateContainer">
          <form>
            <input type="text" placeholder="할 일을 입력하세요" />
            <button>등록</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
