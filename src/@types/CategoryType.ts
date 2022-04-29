export interface Category {
  value: number;
  label: string;
}

export interface Task {
  id: number;
  value: string;
  categoryIndex: number;
  isCompleted: boolean;
  inProgress: boolean;
  createdAt: Date;
  finishedAt?: Date | undefined;
  startedAt?: Date | undefined;
}

export interface CategoryTasks {
  tasks: Task[];
  category: Category;
}
