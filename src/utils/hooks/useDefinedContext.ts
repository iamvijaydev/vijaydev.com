import React, { useContext } from 'react';

export const useDefinedContext = <TContext>(
  contextProvider: React.Context<TContext | undefined>
): TContext => {
  const context = useContext(contextProvider);

  if (!context) {
    throw new Error(
      'Cannot use the context without providing it in the parent component'
    );
  }

  return context;
};