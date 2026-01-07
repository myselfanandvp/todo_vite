import { useState } from "react";
import { Button } from "../../../components/Button";
import TodoList from "./TodoList";
import { useEffect } from "react";
import Modal from "../../../components/Modal";
const TodoForm = () => {


  const [title, setTitle] = useState("");
 const [isModalOpen, setIsModalOpen] = useState(false);


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
    const trimmedTitle = title.trim()
    if (trimmedTitle.length === 0) return;

     const isDuplicate = data.some(
    item => item.todo.toLowerCase() === trimmedTitle.toLowerCase()
  );

    if (isDuplicate) {
      setIsModalOpen(true);
    return;
  }
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
     <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold text-red-600 mb-2">Oops!</h2>
        <p className="text-gray-500">Duplicate Value</p>
      </Modal>
      <form onSubmit={handleSubmit} className="flex  gap-3 p-4 bg-white rounded-lg shadow-sm">
       <div className="flex flex-col w-full gap-3">

 <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 rounded-md border border-gray-300"
        />
      
        <Button type="submit" title="Add" color="add" />
       </div>
       
       
      </form>

      <div className="flex gap-2 mt-4">
        <Button title="Active" onClick={() => setFilter("active")} />
        <Button title="Completed" onClick={() => setFilter("completed")} />
      </div>

      <TodoList
        data={filteredTodos}
        filter={filter}
        btn_fun={deleteHandler}
        onToggle={toggleComplete}
      />

 
    </div>
  );
};

export default TodoForm;
