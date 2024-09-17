// __tests__/todoUtils.test.ts
import { getFilteredTodos } from "../utils/todoUtils";

test("should filter todos based on search and filter", () => {
    const todos = [
        { id: "1", text: "Buat fitur tambah todo", completed: false },
        { id: "2", text: "Buat fitur delete todo", completed: true },
        { id: "3", text: "Buat unit test", completed: false },
    ];
    const result = getFilteredTodos(todos, "all", "tambah");
    expect(result).toEqual([
        { id: "1", text: "Buat fitur tambah todo", completed: false },
    ]);
});
