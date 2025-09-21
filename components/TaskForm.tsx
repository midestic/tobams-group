"use client";

import { useState } from "react";
import { useTasks } from "@/context/TaskContext";
import { Button } from "./ui/button";

export default function TaskForm() {
  const [input, setInput] = useState<string>("");
  const { addTask } = useTasks();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex gap-2 max-md:flex-col">
        <input
          type="text"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          placeholder="Enter a new task..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none  "
        />
        <Button variant={"myBtn"} size={"myBtn"} type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Add
        </Button>
      </div>
    </form>
  );
}
