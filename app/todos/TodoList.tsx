import Link from "next/link";
import React from "react";
import { TodoType } from "../../types/TodoTypes";

const fetchTodos = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await result.json();
  return todos;
};

const TodoList = async () => {
  const todosData: TodoType[] = await fetchTodos();

  return (
    <div>
      {todosData.map((todoItem) => {
        return (
          <div key={todoItem.id}>
            <Link href={`/todos/${todoItem.id}`}>To do {todoItem.id}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
