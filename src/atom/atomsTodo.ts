import { atom } from "recoil";

export interface TaskDetails {
  content: string;
  id: string;
}

export const todoAtom = atom<TaskDetails[]>({
  key: "todoAtom",
  default: [],
});
