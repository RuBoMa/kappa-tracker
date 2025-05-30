"use client";
import { useEffect, useState } from "react";
import { fetchTasks } from "../utils/api";
import TaskCard from "../components/TaskCard";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Escape from Tarkov Kappa Tasks
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </main>
  );
}
