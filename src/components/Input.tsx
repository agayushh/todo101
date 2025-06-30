import React, { useState } from "react";

const Input = () => {
  const [todoInput, setTodoInput] = useState("");

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
      <button className="bg-[#818cf8] text-[#0f172a] font-medium rounded-md p-2 w-20">
        Add
      </button>
    </div>
  );
};

export default Input;
