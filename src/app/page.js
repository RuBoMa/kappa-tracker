"use client";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";
import Link from "next/link";

export default function Home() {
  const { activeTasks, completeTask } = useContext(TaskContext);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Escape from Tarkov Kappa Tasks
      </h1>
      <Link
        href="/completed"
        className="text-blue-600 hover:underline mb-4 block"
      >
        View Completed Tasks
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activeTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onComplete={() => completeTask(task.id)}
            completeButtonText="Complete"
          />
        ))}
      </div>
    </main>
  );
}
