import { useEffect, useRef, useDebugValue } from "react";

export const usePrevious = (value) => {
  const ref = useRef;

  //   useDebugValue
  useDebugValue("-- CUSTOM HOOK COM USEDEBUGVALUE --");
  useDebugValue("O número anterior é:" + value);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
