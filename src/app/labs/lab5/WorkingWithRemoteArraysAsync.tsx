"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { FaPencilAlt, FaPlusCircle, FaTrash } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import * as client from "./client";

const errorMessageOf = (error: unknown) =>
  axios.isAxiosError(error) ? error.response?.data?.message ?? error.message : String(error);

export default function WorkingWithRemoteArraysAsynchronously() {
  const [todos, setTodos] = useState<client.Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fetchTodos = async () => {
    setTodos(await client.fetchTodos());
  };
  const removeTodo = async (todo: client.Todo) => {
    setTodos(await client.removeTodo(todo));
  };
  const createNewTodo = async () => {
    setTodos(await client.createNewTodo());
  };
  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({
      title: "New Posted Todo",
      completed: false,
    });
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = async (todo: client.Todo) => {
    try {
      await client.deleteTodo(todo);
      setTodos(todos.filter((t) => t.id !== todo.id));
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(errorMessageOf(error));
    }
  };
  const editTodo = (todo: client.Todo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t)));
  };
  const updateTodo = async (todo: client.Todo) => {
    // editing is UI-only state, so it stays out of the PUT body
    const remote = { ...todo };
    delete remote.editing;
    try {
      await client.updateTodo(remote);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(errorMessageOf(error));
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div id="wd-working-with-remote-arrays-async">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (
        <p id="wd-todo-error-message" className="mb-2 max-w-md rounded bg-red-100 px-3 py-2 text-red-800">
          {errorMessage}
        </p>
      )}
      <h4 className="flex items-center gap-2">
        Todos
        <FaPlusCircle onClick={createNewTodo} id="wd-create-todo"
          className="cursor-pointer text-green-600" />
        <FaPlusCircle onClick={postNewTodo} id="wd-post-todo"
          className="cursor-pointer text-blue-600" />
      </h4>
      <ul className="m-0 max-w-md list-none divide-y divide-neutral-300 rounded border border-neutral-300 p-0">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2 px-3 py-2">
            <input type="checkbox" checked={todo.completed}
              onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })} />
            {todo.editing ? (
              <input className="rounded border border-neutral-300 px-2 py-0.5"
                value={todo.title}
                onChange={(e) =>
                  setTodos(todos.map((t) => (t.id === todo.id ? { ...t, title: e.target.value } : t)))
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo({ ...todo, editing: false });
                  }
                }} />
            ) : (
              <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>
            )}
            <span className="ml-auto flex items-center gap-2">
              <FaPencilAlt onClick={() => editTodo(todo)} id="wd-edit-todo"
                className="cursor-pointer text-blue-600" />
              <TiDelete onClick={() => deleteTodo(todo)} id="wd-delete-todo"
                className="cursor-pointer text-2xl text-red-600" />
              <FaTrash onClick={() => removeTodo(todo)} id="wd-remove-todo"
                className="cursor-pointer text-red-600" />
            </span>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
