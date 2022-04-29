import React, { HTMLInputTypeAttribute } from "react";
import { Container, ClearIcon } from "./styles";

interface Props extends React.HtmlHTMLAttributes<HTMLInputElement> {
  taskValue: string;
  setTaskValue: React.Dispatch<React.SetStateAction<string>>;
}

function Input({ taskValue, setTaskValue, ...props }: Props) {
  const [isFocus, setIsFocus] = React.useState(false);

  return (
    <Container isFocus={isFocus}>
      <input
        value={taskValue}
        onChange={({ currentTarget }) =>
          setTaskValue(currentTarget.value)
        }
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        {...props}
      />
      <ClearIcon onClick={() => setTaskValue("")} />
    </Container>
  );
}
export { Input };
