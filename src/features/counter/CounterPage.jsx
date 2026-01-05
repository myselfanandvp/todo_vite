import { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { Apilist } from "../../components/Apilist";
export default function Counter() {
  const [counter, setCounter] = useState(1);
  const [data, setData] = useState(null);

  const apiHandler = async (signal) => {
    try {
      const api = `https://jsonplaceholder.typicode.com/users/${counter}`;
      const response = await fetch(api,{signal});
      const data = await response.json();
      setData(data);
    } catch (error) {
        if (error.name !=="AbortError"){
            console.error(error)
        }
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    apiHandler(controller.signal);
    return () => {controller.abort();}
  }, [counter]);

  const increment = () => {
    setCounter((prev) => (prev < 10 ? prev + 1 : prev));
  };
  const reset = () => setCounter(1);
  const decrement = () => setCounter((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <h1 className="text-[200px] font-semibold text-violet-300 text-shadow-lg/80">
        {counter}
      </h1>
      {data && <Apilist data={data} />}
      <div className="flex gap-3">
        <Button
          color="add"
          key="increment_btn"
          onClick={increment}
          type="button"
          title="+"
        />
        <Button
          color="delete"
          key="reset_btn"
          onClick={reset}
          type="button"
          title="Reset"
        />
        <Button
          color="edit"
          key="decrement_btn"
          onClick={decrement}
          type="button"
          title="-"
        />
      </div>
    </div>
  );
}
