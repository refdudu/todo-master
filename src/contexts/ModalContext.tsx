import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

type ModalContextProps = {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  taskID: number;
  setTaskID: React.Dispatch<React.SetStateAction<number>>;
};

export const ModalContext = createContext({} as ModalContextProps);

type ModalProviderProps = {
  children: ReactNode;
};

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [taskID, setTaskID] = useState(0);

  return (
    <ModalContext.Provider
      value={{ isOpened, setIsOpened, taskID, setTaskID }}
    >
      {children}
    </ModalContext.Provider>
  );
}
