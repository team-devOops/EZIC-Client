import SolutionCounter, { solutionCounterState } from '@/components/SolutionCounter';
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { MouseEvent, MouseEventHandler, useCallback } from 'react';
import { useQueries, useQuery } from 'react-query';

import { randomSolutionSeq, randomTest } from '@/global/api/SolutionAPI';

import { useRouter } from 'next/router';
import { AxiosError } from 'axios';

const LabelWap = styled.div`
  text-align: center;
`;

const TEST_MAX_COUNT = 10;

const items = Array.from({ length: TEST_MAX_COUNT }, (_, i) => {
  return { name: String(i + 1), value: String(i + 1) };
});

const SolutionSelector = () => {
  const count = useRecoilValue(solutionCounterState);
  const router = useRouter();
  const { refetch } = useQuery('SOLUTION_FETCH', () => randomTest({ questionCnt: count }), { enabled: false });

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
      <SolutionCounter items={items}></SolutionCounter>

      <Button onClick={(e) => moveSolution(e, count)}>확인</Button>
    </>
  );
};

export default SolutionSelector;
