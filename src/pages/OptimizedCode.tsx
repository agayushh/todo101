import React, { useEffect, useState, useCallback, useMemo } from "react";

const STORAGE_KEY = "todos";

const OptimizedCode = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  // Load todos from localStorage on mount
  useEffect(() => {
    try {
      const storedTodos = localStorage.getItem(STORAGE_KEY);
      if (storedTodos) {
        const parsedTodos = JSON.parse(storedTodos);
        if (Array.isArray(parsedTodos)) {
          setTodos(parsedTodos);
        }
      }
    } catch (error) {
      console.error("Failed to load todos from localStorage:", error);
    }
  }, []);

  // Save todos to localStorage whenever todos change (with debouncing effect)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      } catch (error) {
        console.error("Failed to save todos to localStorage:", error);
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [todos]);

  // Optimized add todo function
  const addTodo = useCallback(() => {
    const trimmedInput = todoInput.trim();
    if (trimmedInput && !todos.includes(trimmedInput)) {
      setTodos((prev) => [...prev, trimmedInput]);
      setTodoInput("");
    }
  }, [todoInput, todos]);

  // Optimized delete todo function
  const deleteTodo = useCallback((indexToDelete: number) => {
    setTodos((prev) => prev.filter((_, index) => index !== indexToDelete));
  }, []);

  // Optimized input change handler
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTodoInput(e.target.value);
    },
    []
  );

  // Optimized key down handler
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        addTodo();
      }
    },
    [addTodo]
  );

  // Memoized todo count
  const todoCount = useMemo(() => todos.length, [todos]);

  // Memoized empty state
  const isEmpty = useMemo(() => todoCount === 0, [todoCount]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Todo App ({todoCount})
        </h1>

        {/* Input Section */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter your todo"
            value={todoInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            maxLength={100}
          />
          <button
            onClick={addTodo}
            disabled={!todoInput.trim()}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        {isEmpty ? (
          <div className="text-center text-gray-500 py-8">
            <p>No todos yet. Add one above!</p>
          </div>
        ) : (
          <ul className="space-y-2">
            {todos.map((todo, index) => (
              <TodoItem
                key={`${todo}-${index}`}
                todo={todo}
                index={index}
                onDelete={deleteTodo}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// Memoized TodoItem component to prevent unnecessary re-renders
const TodoItem = React.memo(
  ({
    todo,
    index,
    onDelete,
  }: {
    todo: string;
    index: number;
    onDelete: (index: number) => void;
  }) => {
    const handleDelete = useCallback(() => {
      onDelete(index);
    }, [index, onDelete]);

    return (
      <li className="flex items-center justify-between bg-gray-50 p-3 rounded-md group hover:bg-gray-100 transition-colors">
        <span className="text-gray-800 flex-1 break-words pr-2">{todo}</span>
        <button
          onClick={handleDelete}
          className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label={`Delete ${todo}`}
        >
          Delete
        </button>
      </li>
    );
  }
);

TodoItem.displayName = "TodoItem";

export default OptimizedCode;
