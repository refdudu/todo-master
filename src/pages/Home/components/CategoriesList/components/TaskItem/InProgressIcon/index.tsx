import { useEffect, useState } from "react";

import { IconEmpty, IconOne, IconTwo, IconFull } from "./styles";

type InProgressProps = {
  isMouseHover: boolean;
};

function InProgress({ isMouseHover }: InProgressProps) {
  const [index, setIndex] = useState(Math.floor(Math.random() * 4));

  // useEffect(() => {
  //   let timeout: any;
  //   if (isMouseHover) {
  //     timeout = setTimeout(() => {
  //       if (index >= 3) return setIndex(0);
  //       setIndex((p) => p + 1);
  //     }, 500);
  //     return () => {
  //       timeout;
  //     };
  //   }
  // }, [index, isMouseHover]);
  return (
    <>
      {index === 0 && <IconEmpty />}
      {index === 1 && <IconOne />}
      {index === 2 && <IconTwo />}
      {index >= 3 && <IconFull />}
    </>
  );
}
export { InProgress };
