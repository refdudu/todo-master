export interface Task  {
  id: number;
  value: string;
  categoryIndex: number;
  isCompleted: boolean;
  inProgress: boolean;
  createdAt: Date;
  finishedAt?: Date | undefined;
  startedAt?: Date | undefined;
};
