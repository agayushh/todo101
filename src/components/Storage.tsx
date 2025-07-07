import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { todoAtom } from "../atom/atomsTodo.ts";

const STORAGE_KEY = "todos";

const Storage = () => {
  const [todos, setTodos] = useRecoilState(todoAtom);

  useEffect(() => {
    const storedTodos = localStorage.getItem(STORAGE_KEY);
    if (storedTodos) {
      const parsed = JSON.parse(storedTodos);
      setTodos(parsed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  return <div></div>;
};

export default Storage;
