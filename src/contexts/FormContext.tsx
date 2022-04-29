import { createContext, ReactNode, useState } from "react";

export const FormContext = createContext({});

interface FormProviderProps {
  children: ReactNode;
}

export function FormProvider({ children }: FormProviderProps) {
  const [taskValue, setTaskValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");

  function handleCreateTask() {}

  return <FormContext.Provider value={{}} children={children} />;
}
