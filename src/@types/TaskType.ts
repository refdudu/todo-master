export type Task = {
  id: number;
  value: string;
  categoryIndex: number;
  isCompleted: boolean;
  inProgress: boolean;
  createdAt: Date;
  finishedAt?: Date | undefined;
};
