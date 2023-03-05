import { useRouter } from 'next/router';
import Solution from '@/components/Solution';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import { Container, Stack } from '@mui/material';

import remarkGfm from 'remark-gfm';

const queryClient = new QueryClient();

const ReactMarkdownLayout = styled.div`
  background-color: cyan;
`;

const data = `
# 안녕 
## 반가워 
* 1 * 2

---- 
* 반갑다 
> 인생은 무엇일까?
`;

const solution = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Stack spacing={1}>
          <Solution></Solution>
        </Stack>

        <ReactMarkdownLayout>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{data}</ReactMarkdown>
        </ReactMarkdownLayout>
      </Container>
    </QueryClientProvider>
  );
};

export default solution;
