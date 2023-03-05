import SolutionCounter, { solutionCounterState } from '@/components/SolutionCounter';
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { MouseEvent, MouseEventHandler, useCallback } from 'react';
import { useQueries, useQuery } from 'react-query';

import { randomSolutionAPI } from '@/global/api/SolutionAPI';

import { useRouter } from 'next/router';
import { AxiosError } from 'axios';

const LabelWap = styled.div`
  text-align: center;
`;

const SolutionSelector = () => {
  const count = useRecoilValue(solutionCounterState);
  const router = useRouter();
  const { refetch } = useQuery('SOLUTION_FETCH', () => randomSolutionAPI(String(count)), { enabled: false });

  const moveSolution = useCallback(async (e: MouseEvent<HTMLAnchorElement> | MouseEvent<HTMLButtonElement>, count: number) => {
    const res = await refetch();
    console.log(res);
    if (res.isError) {
      const err = res.error as AxiosError;
      alert(err.message);
      return;
    }
    await router.push({ pathname: '/solution', query: { count } });
  }, []);

  return (
    <>
      <LabelWap>
        <label>문제수를 고르세요</label>
      </LabelWap>
      <SolutionCounter
        items={[
          { name: '1', value: '1' },
          { name: '2', value: '2' },
          { name: '3', value: '3' },
        ]}
      ></SolutionCounter>

      <Button onClick={(e) => moveSolution(e, count)}>확인</Button>
    </>
  );
};

export default SolutionSelector;
