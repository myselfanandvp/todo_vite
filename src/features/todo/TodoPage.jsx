import TodoForm from "./components/TodoForm";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function TodoPage() {
    return (
        <div className="min-h-screen flex flex-col">

            <Header title="Todo" />
            <main className=" md:flex-col bg-gray-700 flex-1 flex justify-center items-center">

                <TodoForm />
  
            </main>
            <Footer />

        </div>
    )
}

export default TodoPage