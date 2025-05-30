'use client';
import React, { createContext, useState, useEffect } from "react";
import { fetchTasks } from "../utils/api";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [activeTasks, setActiveTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then(setActiveTasks);
  }, []);

  const completeTask = (taskId) => {
    setActiveTasks((prev) => {
      const completed = prev.find((t) => t.id === taskId);
      if (!completed) return prev;
      setCompletedTasks((c) => [...c, completed]);
      return prev.filter((t) => t.id !== taskId);
    });
  };

  const uncompleteTask = (taskId) => {
    setCompletedTasks((prev) => {
      const uncompleted = prev.find((t) => t.id === taskId);
      if (!uncompleted) return prev;
      setActiveTasks((a) => [...a, uncompleted]);
      return prev.filter((t) => t.id !== taskId);
    });
  };

  return (
    <TaskContext.Provider
      value={{ activeTasks, completedTasks, completeTask, uncompleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
