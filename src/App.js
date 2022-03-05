import { useState } from "react";
import "./App.css";
import AddTask from "./features/AddTask";
import TodoList from "./features/TodoList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function App() {
  const [checkedTask, setCheckedTask] = useState([]);

  const [defaultValues, setDefaultValues] = useState({
    name: "",
    description: "",
    date: new Date(),
    pioryty: "Normal",
  });

  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList"))
  );

  const handleRemove = (id) => {
    const index = todoList.findIndex((todo) => todo.id === id);
    const newList = [...todoList];
    newList.splice(index, 1);
    localStorage.setItem("todoList", JSON.stringify(newList));
    setTodoList(newList);
    toast.success("Xoá task thành công");
  };
  
  const handleUpdate = (data) => {
    const index = todoList.findIndex((todo) => todo.id === data.id);
    const newList = [...todoList];
    newList[index] = data;
    localStorage.setItem("todoList", JSON.stringify(newList));
    setTodoList(newList);
    toast.success("Cập nhật task thành công");
  };

  const handleRemoveMultiple = () => {
    if (checkedTask.length > 0) {
      const todoList = JSON.parse(localStorage.getItem("todoList")) || [];
      const newTodoList = [...todoList];
      checkedTask.forEach((item) => {
        let taskIndex = todoList.findIndex((todo) => todo.id === item);
        newTodoList.splice(taskIndex, 1);
      });
      setTodoList(newTodoList);
      localStorage.setItem("todoList", JSON.stringify(newTodoList));
      toast.success("Xoá task thành công");
      setCheckedTask([]);
    } else {
      toast.warning("Bạn chưa chọn mục task nào !!!");
    }
  };

  return (
    <div
      className="App"
      style={{
        marginTop: 50,
        width: 1500,
        margin: "50px auto",
        border: "1px solid black",
        position: "relative",
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <div style={{ padding: "20px 30px", display: "flex", gap: 50 }}>
        <AddTask
          handleAddTask={(formValue) => {
            const todoList = JSON.parse(localStorage.getItem("todoList")) || [];
            const newTodoList = [...todoList];
            newTodoList.push(formValue);
            localStorage.setItem("todoList", JSON.stringify(newTodoList));
            setTodoList(newTodoList);
            toast.success("Thêm task mới thành công");
            setDefaultValues({
              name: "",
              description: "",
              date: new Date(),
              pioryty: "Normal",
            });
          }}
          defaultValues={defaultValues}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            width: 1,
            height: "100%",
            borderLeft: "1px solid black",
          }}
        ></div>
        <TodoList
          todoList={todoList}
          handleRemove={handleRemove}
          handleUpdate={handleUpdate}
          handleRemoveMultipleTask={handleRemoveMultiple}
          handleSearch={(keyword) => {
            const todoList = JSON.parse(localStorage.getItem("todoList")) || [];
            const arraySearch = todoList.filter(
              (item) => item.name.indexOf(keyword) !== -1
            );
            setTodoList(arraySearch);
          }}
          handleCheckedTask={(id) => {
            const index = checkedTask.findIndex((checkId) => checkId === id);
            const newCheckedTask = [...checkedTask];
            if (index !== -1) {
              newCheckedTask.splice(index, 1);
              setCheckedTask([...newCheckedTask]);
            } else {
              setCheckedTask([...newCheckedTask, id]);
            }
          }}
          checkedTask={checkedTask}
        />
      </div>
    </div>
  );
}

export default App;
