// Custom hook tehtävien hallintaan useReducerilla
import { useReducer, useCallback } from "react";
import { Task } from "../types";

// Reducer-actionit
type Action =
  | { type: "ADD"; payload: { text: string } }
  | { type: "TOGGLE"; payload: { id: string } };

// Reducer-funktio: käsittelee tilan muutokset
function todosReducer(state: Task[], action: Action): Task[] {
  switch (action.type) {
    case "ADD": {
      const trimmed = action.payload.text.trim();
      if (!trimmed) return state;

      // Luo uusi tehtävä
      const newTask: Task = {
        id: String(Date.now()),
        text: trimmed,
        done: false,
      };

      // Lisää listan loppuun
      return [...state, newTask];
    }

    case "TOGGLE": {
      // Vaihda tehtävän done-tila
      return state.map((t) =>
        t.id === action.payload.id ? { ...t, done: !t.done } : t
      );
    }

    default:
      return state;
  }
}

export function useTodos(initial: Task[] = []) {
  // useReducer hallitsee tehtävälistan tilaa
  const [tasks, dispatch] = useReducer(todosReducer, initial);

  // Lisää uusi tehtävä
  const addTask = useCallback((text: string) => {
    dispatch({ type: "ADD", payload: { text } });
  }, []);

  // Vaihda tehtävän tila (tehty/tekemättä)
  const toggleTask = useCallback((id: string) => {
    dispatch({ type: "TOGGLE", payload: { id } });
  }, []);

  return {
    tasks,
    addTask,
    toggleTask,
  };
}

export default useTodos;
