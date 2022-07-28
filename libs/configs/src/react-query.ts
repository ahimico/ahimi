import { QueryClient, QueryClientConfig } from '@tanstack/react-query';

const DEFAULT_CONFIG = {
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: 0, staleTime: 5_000 },
  },
};
export const makeQueryClient = (config: QueryClientConfig = DEFAULT_CONFIG) => {
  return new QueryClient(config);
};
