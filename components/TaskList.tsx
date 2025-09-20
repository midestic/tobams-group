// components/TaskList.tsx
"use client";

import { useTasks } from "@/context/TaskContext";

interface TaskListProps {
  tasks: Array<{
    id: number;
    text: string;
    completed: boolean;
    createdAt: string;
  }>;
}

export default function TaskList({ tasks }: TaskListProps) {
  const { toggleTask, deleteTask } = useTasks();

  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mx-auto text-gray-300 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        <p>No tasks found. Add a task to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`p-4 rounded-xl border transition-all duration-300 ${
            task.completed
              ? "bg-green-50 border-green-200"
              : "bg-white border-gray-200 hover:shadow-md"
          }`}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-start space-x-3 flex-1">
              <button
                onClick={() => toggleTask(task.id)}
                className={`h-6 w-6 rounded-full flex items-center justify-center mt-1 ${
                  task.completed
                    ? "bg-green-500 border-green-500"
                    : "border-2 border-gray-300 hover:border-blue-400"
                }`}
              >
                {task.completed && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
              <div className="flex-1">
                <p
                  className={`${
                    task.completed
                      ? "line-through text-gray-600"
                      : "text-gray-800"
                  } break-words`}
                >
                  {task.text}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Added: {new Date(task.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-gray-400 hover:text-red-500 transition-colors p-1"
              aria-label="Delete task"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Individual Task Status Bar */}
          <div className="mt-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium text-gray-600">
                Progress
              </span>
              <span className="text-xs font-medium text-gray-600">
                {task.completed ? "100%" : "0%"}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${
                  task.completed ? "bg-green-500" : "bg-blue-500"
                }`}
                style={{ width: task.completed ? "100%" : "0%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
