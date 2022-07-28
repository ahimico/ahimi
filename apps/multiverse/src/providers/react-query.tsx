import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { makeQueryClient } from '~configs';

interface ReactQueryProviderInterface {
  children: ReactNode;
  state: unknown;
  devtool?: boolean;
}
export function ReactQueryProvider({
  children,
  state,
  devtool = false,
}: ReactQueryProviderInterface) {
  const [queryClient] = useState(makeQueryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={state}>{children}</Hydrate>
      {devtool && (
        <ReactQueryDevtools position="bottom-left" initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
}
