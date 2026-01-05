import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Counter from "./CounterPage"

export const CounterLayout = () => {
    return (
        <div className="min-h-screen w-screen flex flex-col">
            <Header title="Counter"/>
            <main className="bg-gray-700 flex-1 flex justify-center items-center">
            <Counter/>
            </main>
            <Footer />
        </div>

    )
}