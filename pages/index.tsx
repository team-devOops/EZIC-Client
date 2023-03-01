/** @jsxImportSource @emotion/react */
import { Inter } from 'next/font/google';

import styled from '@emotion/styled';
import { Button, Container, Grid, Stack } from '@mui/material';
import CustomSelect from '@/global/components/CustomSelect';

const inter = Inter({ subsets: ['latin'] });

const LabelWap = styled.div`
  text-align: center;
`;

const SolutionCounter = () => {
  return (
    <CustomSelect
      items={[
        { name: '1', value: '1' },
        { name: '2', value: '2' },
        { name: '3', value: '3' },
      ]}
    ></CustomSelect>
  );
};

export default function Home() {
  return (
    <>
      <Container>
        <Stack spacing={1}>
          <LabelWap>
            <label>문제수를 고르세요</label>
          </LabelWap>
          <SolutionCounter></SolutionCounter>
          <Button>확인</Button>
        </Stack>
      </Container>
    </>
  );
}
