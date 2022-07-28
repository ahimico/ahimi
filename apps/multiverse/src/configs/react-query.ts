import { QueryClient } from '@tanstack/react-query';

export const makeQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false, retry: 0, staleTime: 5_000 },
    },
  });
};
