import { Route, Routes } from "react-router-dom";
import { CounterLayout } from "./features/counter/CounterLayout";
import TodoPage from "./features/todo/TodoPage";
import { UserForm } from "./features/userform/Userform";
function App() {
  return (
    <Routes>

      <Route path="/" element={<CounterLayout/>}/>
      <Route path="/todo" element={<TodoPage/>}/>
    <Route path="/form" element={<UserForm/>}/>
    </Routes>
   

  );
}

export default App;