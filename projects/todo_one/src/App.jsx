import AppName from "./assets/components/appName";
import AddTodo from "./assets/components/addTodo";
import TodoItem1 from "./assets/components/todoItem1";
import Todoitem2 from "./assets/components/todoitem2";
import "./App.css";

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <div className="items">
        <AddTodo />
        <TodoItem1></TodoItem1>
        <Todoitem2></Todoitem2>
      </div>
    </center>
  );
}

export default App;
