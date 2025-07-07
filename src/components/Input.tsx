import React, { useCallback, useState } from "react";

const Input = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = useCallback(() => {
    const trimmedInput = todoInput.trim();
    if (trimmedInput && !todos.includes(trimmedInput)) {
      setTodos((prev) => [...prev, todoInput]);
    }
    setTodoInput("");
  }, [todos, todoInput]);

  const deleteTodo = useCallback((indexToDelete: number) => {
    setTodos((prev) =>
      prev.filter((_, index) => {
        return index !== indexToDelete;
      })
    ); 
  }, []);

  return (
    <div className="outline-none rounded-md w-[90%] ml-6 mt-5 flex items-center justify-between bg-transparent outline-[#d1d5db] outline-1 focus-within:outline-[#818cf8] focus:outline-2">
      <input
        type="text"
        placeholder="Enter todo"
        value={todoInput}
        onChange={(e) => {
          setTodoInput(e.target.value);
        }}
        className="p-2 w-full bg-transparent outline-none text-[#d1d5db]"
      />
      <button
        className="bg-[#818cf8] text-[#0f172a] font-medium rounded-md p-2 w-20"
        onClick={()=>{addTodo()}}
      >
        Add
      </button>
      <div>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}
              <button onClick={()=>{deleteTodo(index)}}>Delete</button>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Input;
