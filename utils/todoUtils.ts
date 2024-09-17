import { Todo } from "@/interface/todo";

export const getFilteredTodos = (
  todos: Todo[],
  filter: string,
  search: string,
) => {
  let filteredTodos = todos;

  if (filter === "active") {
    filteredTodos = todos.filter(todo => !todo.completed);
  } else if (filter === "completed") {
    filteredTodos = todos.filter(todo => todo.completed);
  }

  if (search.trim()) {
    filteredTodos = filteredTodos.filter(todo =>
      todo.text.toLowerCase().includes(search.toLowerCase()),
    );
  }

  return filteredTodos;
};
