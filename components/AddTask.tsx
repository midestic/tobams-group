import { Button } from "./ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import TaskForm from "./TaskForm";

export default function AddTask() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant="myBtn" size={"myBtn"}>
              Add Task
            </Button>
          </DialogTrigger>
          <DialogContent className="">
            <DialogHeader>
              <DialogTitle>Add Task</DialogTitle>
              <DialogDescription>
                Add your task in the input field
              </DialogDescription>
            </DialogHeader>

            <TaskForm />
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
