import React, { useCallback } from "react";

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
    const handleDelete = useCallback(()=>{
      onDelete(index)
    }, [index, onDelete])

    return <div>
      <li className="group">
        <span>{todo}</span>
        <button className="group-hover:opacity-100 opacity-0" onClick={handleDelete}>Delete</button>
      </li>
    </div>;
  }
);

export default TodoItem;
