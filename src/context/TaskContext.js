"use client";
import React, { createContext, useState, useEffect } from "react";
import { fetchTasks } from "../utils/api";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [activeTasks, setActiveTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [playerLevel, setPlayerLevel] = useState(1);

  useEffect(() => {
    fetchTasks().then(setActiveTasks);
  }, []);

  const completeTask = (taskId) => {
    setActiveTasks((prevActive) => {
      const taskToComplete = prevActive.find((t) => t.id === taskId);
      if (!taskToComplete) return prevActive;
  
      setCompletedTasks((prevCompleted) => {
        // Avoid duplicates in completedTasks
        if (prevCompleted.some((t) => t.id === taskId)) return prevCompleted;
        return [...prevCompleted, taskToComplete];
      });
  
      return prevActive.filter((t) => t.id !== taskId);
    });
  };
  
  const uncompleteTask = (taskId) => {
    setCompletedTasks((prevCompleted) => {
      const taskToUncomplete = prevCompleted.find((t) => t.id === taskId);
      if (!taskToUncomplete) return prevCompleted;
  
      setActiveTasks((prevActive) => {
        // Avoid duplicates in activeTasks
        if (prevActive.some((t) => t.id === taskId)) return prevActive;
        return [...prevActive, taskToUncomplete];
      });
  
      return prevCompleted.filter((t) => t.id !== taskId);
    });
  };
  

  return (
    <TaskContext.Provider
      value={{
        activeTasks,
        completedTasks,
        completeTask,
        uncompleteTask,
        playerLevel,
        setPlayerLevel,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
