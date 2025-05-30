"use client";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import TaskCard from "../../components/TaskCard";
import Link from "next/link";

export default function Completed() {
  const { completedTasks, uncompleteTask } = useContext(TaskContext);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Completed Tasks</h1>

      <Link href="/" className="text-blue-600 hover:underline mb-4 block">
        View Active Tasks
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {completedTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onComplete={() => uncompleteTask(task.id)}
            completeButtonText="Uncomplete"
          />
        ))}
      </div>
    </main>
  );
}
