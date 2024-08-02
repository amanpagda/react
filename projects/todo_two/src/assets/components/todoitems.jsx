import TodoItem from "./todoitem";

const TodoItems = ({ todoItems }) => {
  return (
    <div className="items">
      {todoItems.map((item) => (
        <TodoItem todoName={item.dueDate} todoDate={item.name}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
