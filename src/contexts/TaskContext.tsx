import { createContext, ReactNode, useEffect, useState } from "react";
import { Category, CategoryTasks } from "../@types/CategoryType";
import { Task } from "../@types/TaskType";
import { useCategory } from "../hooks/useCategory";

type CreateTaskProps = {
  value: string;
  categoryIndex: number;
};

type TaskContextProps = {
  tasks: Task[];
  filteredTasks: CategoryTasks[];
  createTask: ({ categoryIndex, value }: CreateTaskProps) => void;
  setInProgress: (task: Task) => void;
  setIsCompleted: (task: Task) => void;
  deleteTask: (taskID: number) => void;
  text: string;
};

type TaskProviderProps = {
  children: ReactNode;
};

export const TaskContext = createContext({} as TaskContextProps);

export function TaskProvider({ children }: TaskProviderProps) {
  const [firstTime, setFirstTime] = useState(true);
  const { categories } = useCategory();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<CategoryTasks[]>(
    []
  );
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

  function divideByCategory() {
    const categoriesTasks = [] as { [index: number]: any[] };

    for (const task of tasks) {
      if (!categoriesTasks[task.categoryIndex]) {
        categoriesTasks[task.categoryIndex] = [];
      }
      categoriesTasks[task.categoryIndex].push(task);
    }

    const toArrayCategoriesTasks = [] as CategoryTasks[];

    for (const taskIndex in categoriesTasks) {
      if (categoriesTasks[taskIndex].length === 0) {
        return categoriesTasks[taskIndex].splice(
          parseInt(taskIndex),
          1
        );
      }

      const category = categories.find(
        (obj) =>
          obj.value === categoriesTasks[taskIndex]?.[0].categoryIndex
      );

      if (category !== undefined) {
        toArrayCategoriesTasks.push({
          tasks: categoriesTasks[taskIndex],
          category,
        });
      }
    }

    const orderCategoriesByTasksInProgress =
      toArrayCategoriesTasks.sort(
        (a, b) =>
          b.tasks.filter((task) => task.inProgress).length -
          a.tasks.filter((task) => task.inProgress).length
      );

    return orderCategoriesByTasksInProgress;
  }

  function setInProgress(task: Task) {
    const othersTasks = tasks.filter((_task) => _task.id != task.id);
    if (task.inProgress) {
      task.inProgress = false;
    } else {
      task.inProgress = true;
    }

    task.isCompleted = false;
    task.finishedAt = undefined;

    setTasks([...othersTasks, task]);
  }
  function setIsCompleted(task: Task) {
    const othersTasks = tasks.filter((_task) => _task.id != task.id);

    if (task.isCompleted) {
      task.isCompleted = false;
      task.finishedAt = undefined;
    } else {
      task.isCompleted = true;
      task.finishedAt = new Date();
    }
    task.inProgress = false;

    setTasks([...othersTasks, task]);
  }

  function deleteTask(taskID: number) {
    const othersTasks = tasks.filter(({ id }) => id !== taskID);

    setTasks(othersTasks);
  }

  // only first call
  useEffect(() => {
    const value = localStorage.getItem("task_index");
    setFirstTime(false);
    if (!value) {
      localStorage.setItem("task_index", "0");
    }
    if (tasks.length === 0) {
      const tasks = localStorage.getItem("tasks");
      if (tasks != null) {
        const parsedTasks = JSON.parse(tasks);
        setTasks(parsedTasks);
      }
    }
  }, []);

  useEffect(() => {
    if (!firstTime) {
      const orderTasks = divideByCategory();
      setFilteredTasks(orderTasks);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        createTask,
        tasks,
        filteredTasks,
        setInProgress,
        setIsCompleted,
        deleteTask,
        text,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
