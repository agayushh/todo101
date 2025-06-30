import { useEffect, useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
    const [value, setValue] = useState<T>(() => {
        const json = localStorage.getItem(key);
        return json ? JSON.parse(json) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}