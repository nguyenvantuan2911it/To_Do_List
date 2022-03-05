import React, { useState } from "react";
import Detail from "src/features/Detail";
import "./TodoItem.css";
TodoItem.propTypes = {};

function TodoItem(props) {
  const { todo, handleRemove, handleUpdate, handleCheckedTask } = props;
  const [showDetail, setShowDetail] = useState(false);
  return (
    <>
      <div>
        <div className="todo">
          <div className="infor">
            <input
              className="infor__checkbox"
              type="checkbox"
              onChange={(e) => {
                handleCheckedTask(todo.id);
              }}
            />
            <span className="infor__name">{todo.name}</span>
          </div>
          <div className="action">
            <button
              onClick={() => {
                setShowDetail(!showDetail);
              }}
              className="action__btn btn_detail"
            >
              Detail
            </button>
            <button
              onClick={() => {
                handleRemove(todo.id);
              }}
              className="action__btn btn_remove"
            >
              Remove
            </button>
          </div>
        </div>
        {showDetail && (
          <Detail todo={todo} handleUpdate={(value) => handleUpdate(value)} />
        )}
      </div>
    </>
  );
}

export default TodoItem;
