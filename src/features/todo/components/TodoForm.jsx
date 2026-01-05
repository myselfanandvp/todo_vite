import { useState } from "react";
import { Button } from "../../../components/Button";
import TodoList from "./TodoList";
import { useEffect } from "react";
const TodoForm = () => {


  const [title, setTitle] = useState("");
 


const [data, setData] = useState(() => {
  const stored = localStorage.getItem("todos");
  return stored ? JSON.parse(stored) : [];
});



const [filter, setFilter] = useState(() => {
  return localStorage.getItem("filter") || "active";
});


useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(data));
}, [data]);


  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim().length === 0) return;

    setData(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        todo: title.trim(),
        completed: false
      }
    ]);

    setTitle("");
  }

  const deleteHandler = (id) => {
    setData(prev => prev.filter(item => item.id !== id));
  };

  const toggleComplete = (id) => {
    setData(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const filteredTodos = data.filter(todo =>
    filter === "active" ? !todo.completed : todo.completed
  );

  return (
    <div>
     
      <form onSubmit={handleSubmit} className="flex  gap-3 p-4 bg-white rounded-lg shadow-sm">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 rounded-md border border-gray-300"
        />
        <Button type="submit" title="Add" color="add" />
      </form>

      <div className="flex gap-2 mt-4">
        <Button title="Active" onClick={() => setFilter("active")} />
        <Button title="Completed" onClick={() => setFilter("completed")} />
      </div>

      <TodoList
        data={filteredTodos}
        btn_fun={deleteHandler}
        onToggle={toggleComplete}
      />
    </div>
  );
};

export default TodoForm;
