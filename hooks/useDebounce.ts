"use client";
import { useState, useEffect } from "react";

export function useDebounce(value: string, time = 500) {
  const [dbounceValue, setdbounceValue] = useState(value);

  useEffect(() => {
    let id = setTimeout(() => {
      setdbounceValue(value);
    }, time || 500);

    return () => {
      clearTimeout(id);
    };
  }, [value, time]);

  return { dbounceValue };
}
