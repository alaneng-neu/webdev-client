"use client";

import { useEffect, useState } from "react";
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import * as client from "./client";

export default function WorkingWithRemoteArraysAsynchronously() {
  const [todos, setTodos] = useState<client.Todo[]>([]);
  const fetchTodos = async () => {
    setTodos(await client.fetchTodos());
  };
  const removeTodo = async (todo: client.Todo) => {
    setTodos(await client.removeTodo(todo));
  };
  const createNewTodo = async () => {
    setTodos(await client.createNewTodo());
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div id="wd-working-with-remote-arrays-async">
      <h3>Working with Arrays Asynchronously</h3>
      <h4 className="flex items-center gap-2">
        Todos
        <FaPlusCircle onClick={createNewTodo} id="wd-create-todo"
          className="cursor-pointer text-green-600" />
      </h4>
      <ul className="max-w-md divide-y rounded border border-neutral-300">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2 px-3 py-2">
            <input type="checkbox" defaultChecked={todo.completed} />
            <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>
            <FaTrash onClick={() => removeTodo(todo)} id="wd-remove-todo"
              className="ml-auto cursor-pointer text-red-600" />
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
