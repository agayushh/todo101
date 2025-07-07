import React, { useCallback } from "react";

const TodoComponent = React.memo(
  ({
    todo,
    id,
    onDelete,
  }: {
    todo: string;
    id: string;
    onDelete: (id: string) => void;
  }) => {
    const handleDelete = useCallback(
      (id: string) => {
        onDelete(id);
      },
      [id, onDelete]
    );

    return (
      <div className="text-[#d1d5db]">
        <li
          key={id}
          className="flex justify-between rounded-xl hover:bg-gray-600 p-3"
        >
          <div className="flex gap-x-4">
            <input type="checkbox" name="todo" id="todo" />
            {todo}
          </div>
          <button
            onClick={() => {
              handleDelete(id);
            }}
          >
            Delete
          </button>
        </li>
      </div>
    );
  }
);

export default TodoComponent;
