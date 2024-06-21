import { type Context, useContext } from "react";

export const useValidContext = <Type>(context: Context<Type | undefined>): Type => {
  const value = useContext<Type | undefined>(context);

  if (context === null || context === undefined) {
    throw new Error("Cannot use 'context' outside of a Context Provider");
  }

  return value!;
}