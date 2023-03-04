import { useRouter } from 'next/router';
import Solution from '@/components/Solution';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient();
const solution = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Solution></Solution>
    </QueryClientProvider>
  );
};

export default solution;
