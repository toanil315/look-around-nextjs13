import React from "react";
import { TodoType } from "../../../types/TodoTypes";
import { notFound } from "next/navigation";

export const dynamicParams = true;

interface PageProps {
  params: {
    todoId: string;
  };
}

const fetchTodoItem = async (todoId: string) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );
  const todoItem = result.json();
  return todoItem;
};

const TodoPage = async ({ params }: PageProps) => {
  const todoItem: TodoType = await fetchTodoItem(params.todoId);

  if (!todoItem.id) {
    return notFound();
  }

  return (
    <div className="p-4">
      <div className="p-5 bg-yellow-200 shadow-lg">
        <p>#No {todoItem.id}</p>
        <p className="font-medium text-gray-600">{todoItem.title}</p>
        <div className="w-full h-[1px] bg-gray-400 my-2"></div>
        <p className="text-right">By user {todoItem.userId}</p>
      </div>
    </div>
  );
};

export default TodoPage;

export async function generateStaticParams() {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: TodoType[] = await result.json();

  return todos.slice(0, 10).map((todoItem) => {
    return { todoId: todoItem.id.toString() };
  });
}
