/** @jsxImportSource @emotion/react */
import { Inter } from 'next/font/google';

import styled from '@emotion/styled';
import { Button, Container, Grid, Stack } from '@mui/material';
import CustomSelect, { solutionCounterState } from '@/components/SolutionCounter';
import { RecoilRoot, selector, useRecoilState, useRecoilValue } from 'recoil';
import SolutionCounter from '@/components/SolutionCounter';
import { MouseEventHandler } from 'react';
import SolutionSelector from '@/components/SolutionSelector';
import { QueryClient, QueryClientProvider } from 'react-query';

const inter = Inter({ subsets: ['latin'] });

const queryClient = new QueryClient();
export default function Home() {
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Container>
            <Stack spacing={1}>
              <SolutionSelector></SolutionSelector>
            </Stack>
          </Container>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}
