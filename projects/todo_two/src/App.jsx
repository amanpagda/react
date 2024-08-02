import AppName from "./assets/components/appName";
import AddTodo from "./assets/components/addTodo";
import TodoItems from "./assets/components/todoitems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Aman",
      dueDate: "4/10/2023",
    },
    {
      name: "Pagda",
      dueDate: "4/10/2023",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <div className="items">
        <AddTodo />
      </div>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
