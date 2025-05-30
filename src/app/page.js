"use client";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";
import Link from "next/link";

export default function Home() {
  const { activeTasks, completeTask, playerLevel, setPlayerLevel } =
    useContext(TaskContext);

  const filteredTasks = activeTasks.filter(
    (task) => !task.minPlayerLevel || task.minPlayerLevel <= playerLevel
  );

  return (
    <main className="relative max-w-4xl mx-auto p-6">
      {/* Background image with transparency */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 -z-10"
        style={{ backgroundImage: "url('/goons.webp')" }}
        aria-hidden="true"
      />

      <h1 className="text-3xl font-bold mb-4">
        Escape from Tarkov Kappa Tasks
      </h1>

      <div className="mb-6">
        <label htmlFor="level" className="block font-medium mb-1">
          Your Level:
        </label>
        <input
          id="level"
          type="number"
          min={1}
          max={100}
          value={playerLevel}
          onChange={(e) => setPlayerLevel(Number(e.target.value))}
          className="border rounded px-2 py-1 w-20"
        />
      </div>

      <Link href="/completed" className="text-blue-600 hover:underline mb-4 block">
        View Completed Tasks
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTasks.map((task) => (
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
