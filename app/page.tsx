"use client";

import TaskList from "@/components/TaskList";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useState } from "react";
import { useTasks } from "@/context/TaskContext";
import AddTask from "@/components/AddTask";

export default function Home() {
  const { tasks } = useTasks();
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="flex justify-between items-center  w-[100%] px-[24px] max-md:pb-[100px]">
      <Tabs defaultValue="board" className="w-[100%]">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger value="board">
              <Image
                src={"/icons/brand.svg"}
                width={18}
                height={18}
                alt="brand"
              />
              Board view
            </TabsTrigger>
            <TabsTrigger value="task">
              <div className="w-[18px] h-[18px] rounded-full flex justify-center items-center bg-[#1C1D2214]">
                +
              </div>
              Add new task
            </TabsTrigger>
          </TabsList>

          <div className="w-[50%] flex justify-end max-md:hidden">
            <div className="flex items-center gap-[10px]">
              <p>Filter</p>
              <p>Sort</p>
              <span className="border flex justify-center items-center w-[26px] h-[26px] rounded-full">
                {" "}
                <Image
                  src={"/icons/dot.svg"}
                  width={10}
                  height={10}
                  alt="more"
                />{" "}
              </span>
              <Button
                variant={"myBtn"}
                size={"myBtn"}
                children="New template"
              />
            </div>
          </div>
        </div>
        <TabsContent value="board">
          <TaskList tasks={filteredTasks} />
        </TabsContent>
        <TabsContent value="task">
          <AddTask />
        </TabsContent>
      </Tabs>
    </div>
  );
}
