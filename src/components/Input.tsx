import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { todoAtom, type TaskDetails } from "../atom/atomsTodo";
import TodoComponent from "./TodoComponent";
import { v4 as uuidv4 } from "uuid";

const Input = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useRecoilState<TaskDetails[]>(todoAtom);

  const addTodo = useCallback(() => {
    const trimmedInput = todoInput.trim();
    if (
      trimmedInput &&
      !todos.some((todo) => {
        return todo.content === trimmedInput;
      })
    ) {
      setTodos((prev) => [
        ...prev,
        {
          content: todoInput,
          id: uuidv4(),
        },
      ]);
    }
    setTodoInput("");
  }, [todos, todoInput]);

  const deleteTodo = useCallback((idToDelete: string) => {
    setTodos((prev) =>
      prev.filter((todo) => {
        return todo.id !== idToDelete;
      })
    );
  }, []);

  return (
    <div>
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
          onClick={() => {
            addTodo();
          }}
        >
          Add
        </button>
      </div>
      <div className="m-9">
        {todos.map((todo, id) => {
          return (
            <TodoComponent
              key={todo.id}
              todo={todo.content}
              id={todo.id}
              onDelete={deleteTodo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Input;
