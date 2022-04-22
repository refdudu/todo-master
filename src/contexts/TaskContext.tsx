import { createContext, ReactNode, useEffect, useState } from "react";
import { Task } from "../@types/TaskType";

type CreateTaskProps = {
  value: string;
  categoryIndex: number;
};

type TaskContextProps = {
  tasks: Task[];
  createTask: ({ categoryIndex, value }: CreateTaskProps) => void;
  setInProgressTask: (task: Task) => void;
  text: string;
};

type TaskProviderProps = {
  children: ReactNode;
};

export const TaskContext = createContext({} as TaskContextProps);

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [firstCall, setFirstCall] = useState(true);
  const [text, setText] = useState("você não tem tarefas");

  function createTask({ value, categoryIndex }: CreateTaskProps) {
    const indexData = localStorage.getItem("task_index");

    if (indexData) {
      const index = parseInt(indexData);
      localStorage.setItem("task_index", `${index + 1}`);

      const task: Task = {
        id: index,
        value: value,
        categoryIndex: categoryIndex,
        inProgress: false,
        isCompleted: false,
        createdAt: new Date(),
        finishedAt: undefined,
      };

      setTasks((p) => [...p, task]);
    }
  }

  function getTasks(): Task[] | [] {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      const parsedTasks = JSON.parse(tasks);
      return parsedTasks;
    }
    return [];
  }

  function setInProgressTask(task: Task) {
    const othersTasks = tasks.filter((_task) => _task.id != task.id);
    task.inProgress = true;
    setTasks([...othersTasks, task]);
  }

  function handleSetText() {
    if (tasks) {
      if (tasks.length == 1) {
        setText("você tem uma tarefa");
      }
      if (tasks.length > 1) {
        setText(`você tem ${tasks.length} tarefas`);
      }
    }
  }

  useEffect(() => {
    const value = localStorage.getItem("task_index");
    if (!value) {
      localStorage.setItem("task_index", "0");
    }
  }, []);

  useEffect(() => {
    if (tasks.length === 0 && firstCall) {
      const tasks = getTasks();
      if (tasks) {
        setTasks(tasks);
      }
      setFirstCall(false);
    } else {
      handleSetText();
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    console.log(tasks);
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{ createTask, tasks, setInProgressTask, text }}
    >
      {children}
    </TaskContext.Provider>
  );
}
