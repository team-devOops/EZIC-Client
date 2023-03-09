import { useRouter } from 'next/router';
import Solution from '@/components/Solution';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { RecoilRoot } from 'recoil';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import { Container, Stack } from '@mui/material';

import SolutionViewer from '@/components/SolutionViewer';

const queryClient = new QueryClient();

const solution = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Stack spacing={1}>
          <Solution></Solution>
        </Stack>
        <SolutionViewer></SolutionViewer>
      </Container>
    </QueryClientProvider>
  );
};

export default solution;
