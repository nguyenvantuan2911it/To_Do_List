import { TextField } from "@mui/material";
import React, { useState } from "react";
import TodoItem from "./components/TodoItem";

function TodoList(props) {
  const {
    todoList,
    handleRemove,
    handleUpdate,
    handleRemoveMultipleTask,
    handleSearch,
  } = props;
  const [checkedTask, setCheckedTask] = useState([]);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: 800 }}>
      <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: 34 }}>
        To Do List
      </h1>
      <div>
        <TextField
          label="Search..."
          variant="outlined"
          style={{ width: "96%", marginBottom: 30 }}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "-22px",
          minHeight: 280,
        }}
      >
        {todoList &&
          todoList.map((todo, index) => (
            <div key={index}>
              <TodoItem
                todo={todo}
                handleRemove={(id) => handleRemove(id)}
                handleUpdate={(value) => handleUpdate(value)}
                handleCheckedTask={(id) => {
                  const index = checkedTask.findIndex(
                    (checkId) => checkId === id
                  );
                  if (index !== -1) {
                    checkedTask.splice(index, 1);
                    setCheckedTask([...checkedTask]);
                  } else {
                    setCheckedTask([...checkedTask, id]);
                  }
                }}
              />
            </div>
          ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0px 10px",
          alignItems: "center",
        }}
      >
        <h3>Bulk Action</h3>
        <div
          style={{
            display: "flex",
            gap: 50,
            alignItems: "center",
          }}
        >
          <button
            style={{
              width: 120,
              height: 36,
              backgroundColor: "#2196f3",
              borderRadius: 6,
              border: "none",
            }}
          >
            Done
          </button>
          <button
            style={{
              width: 120,
              height: 36,
              backgroundColor: "#D9534F",
              borderRadius: 6,
              border: "none",
            }}
            onClick={() => {
              handleRemoveMultipleTask(checkedTask);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
