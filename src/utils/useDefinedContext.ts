import type { Context } from 'react';
import { useContext } from 'react';

export const useDefinedContext = <ContextType>(
  ContextInst: Context<ContextType | undefined>
): ContextType => {
  const context = useContext(ContextInst);

  if (!context) {
    throw new Error('Cannot use context without wrapping the parent with Context Provider');
  }

  return context;
}