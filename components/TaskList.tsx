"use client";

import { useTasks } from "@/context/TaskContext";
import { MoreHorizontal, MessageSquare, Paperclip, Check } from "lucide-react";
import TaskCube from "./TaskCube";

interface TaskListProps {
  tasks: Array<{
    id: number;
    text: string;
    completed: boolean;
    createdAt: string;
    subtitle?: string;
    progress?: { current: number; total: number };
    dueDate?: string;
    comments?: number;
    attachments?: number;
  }>;
}

export default function TaskList({ tasks }: TaskListProps) {
  const { toggleTask, deleteTask } = useTasks();

  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No tasks found. Add a task to get started!</p>
      </div>
    );
  }

  return (
    <div className="flex items-start mt-[50px] w-full">
      <div className="space-y-4 flex flex-wrap gap-4  w-[70%] max-md:w-full">
        {tasks.map((task) => {
          const progressValue = task.completed
            ? 100
            : task.progress
            ? (task.progress.current / task.progress.total) * 100
            : 0;

          return (
            <div
              key={task.id}
              className="p-4 rounded-xl border bg-white shadow-sm hover:shadow-md transition-all duration-300 w-[30%] max-md:w-[100%]"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start space-x-3 flex-1">
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`h-6 w-6 rounded-full flex items-center justify-center mt-1 border-2 transition-colors ${
                      task.completed
                        ? "bg-green-500 border-green-500"
                        : "border-gray-300 hover:border-blue-400"
                    }`}
                  >
                    {task.completed && <Check className="h-4 w-4 text-white" />}
                  </button>

                  <div>
                    <h3
                      className={`font-semibold ${
                        task.completed
                          ? "line-through text-gray-500"
                          : "text-gray-800"
                      }`}
                    >
                      {task.text}
                    </h3>
                    {task.subtitle && (
                      <p className="text-sm text-gray-500 mt-0.5">
                        {task.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>

              <div className="mb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-500">Progress</span>
                  <span className="text-xs text-gray-600 font-medium">
                    {task.progress
                      ? `${task.progress.current}/${task.progress.total}`
                      : task.completed
                      ? "1/1"
                      : "0/1"}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      task.completed ? "bg-green-500" : "bg-orange-400"
                    }`}
                    style={{ width: `${progressValue}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {task.dueDate
                    ? new Date(task.dueDate).toLocaleDateString()
                    : new Date(task.createdAt).toLocaleDateString()}
                </span>
                <div className="flex items-center space-x-4 text-gray-400 text-sm">
                  <span className="flex items-center space-x-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>{task.comments ?? 0}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Paperclip className="h-4 w-4" />
                    <span>{task.attachments ?? 0}</span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="max-md:hidden">
        <TaskCube />
      </div>
    </div>
  );
}
