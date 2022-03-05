import { TextField } from "@mui/material";
import React from "react";
import TodoItem from "./components/TodoItem";

function TodoList(props) {
  const {
    todoList,
    handleRemove,
    handleUpdate,
    handleRemoveMultipleTask,
    handleSearch,
    handleCheckedTask,
    checkedTask,
  } = props;

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
          todoList
            .sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
            .map((todo, index) => (
              <div key={index}>
                <TodoItem
                  todo={todo}
                  handleRemove={(id) => handleRemove(id)}
                  handleUpdate={(value) => handleUpdate(value)}
                  handleCheckedTask={(id) => handleCheckedTask(id)}
                  checkedTask={checkedTask}
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
              handleRemoveMultipleTask();
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
