import { Button } from "../../../components/Button";

export default function TodoList({ data, filter, btn_fun, onToggle }) {
  const isEmpty = data.length === 0;

  const emptyMessage =
    filter === "active"
      ? "No active todos"
      : "No completed todos";

  return (
    <ul className="mt-4 overflow-y-scroll h-96 w-sm md:w-lg lg:2xl   border border-gray-700 rounded-2xl
    
      [&::-webkit-scrollbar]:w-0
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
    
    divide-y divide-gray-700 bg-[#282a36]">
      {/* Header */}
      <li className="grid sticky top-0 grid-cols-[40px_1fr_80px] px-4 py-2 bg-[#44475a] font-semibold text-sm text-[#f8f8f2] rounded-t-lg">
        <span></span>
        <span>Task</span>
        <span className="text-center">Action</span>
      </li>

      {/* Empty state */}
      {isEmpty ? (
        <li className="grid place-items-center px-4 py-10 text-gray-400 text-sm italic">
          {emptyMessage}
        </li>
      ) : (
        data.map((item) => (
          <li
            key={item.id}
            className="grid grid-cols-[40px_1fr_80px] items-center px-4 py-3 hover:bg-[#6272a4] transition-colors"
          >
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => onToggle(item.id)}
              className="h-4 w-4 cursor-pointer accent-pink-500"
            />

            {/* Todo text */}
            <span
              className={`${
                item.completed
                  ? "line-through decoration-red-500 text-gray-400"
                  : "text-[#f8f8f2]"
              }`}
            >
              {item.todo}
            </span>

            {/* Delete */}
            <div className="flex justify-center">
              <Button
                title="🗑️"
                color="delete"
                onClick={() => btn_fun(item.id)}
              />
            </div>
          </li>
        ))
      )}
    </ul>
  );
}
