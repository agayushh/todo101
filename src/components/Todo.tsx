import React, { useCallback } from "react";

const Todo = React.memo(
  ({
    todo,
    index,
    onDelete,
  }: {
    todo: string;
    index: number;
    onDelete: (index: number) => void;
  }) => {
    const handleDelete = useCallback(
      (index: number) => {
        onDelete(index);
      },
      [index, onDelete]
    );

    return (
      <div className="text-[#d1d5db]">
        <li
          key={index}
          className="flex justify-between rounded-xl hover:bg-gray-600 p-3"
        >
          <div className="flex gap-x-4">
            <input type="checkbox" name="todo" id="todo" />
            {todo}
          </div>
          <button
            onClick={() => {
              handleDelete(index);
            }}
          >
            Delete
          </button>
        </li>
      </div>
    );
  }
);

export default Todo;
