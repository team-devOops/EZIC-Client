import SolutionCounter, { solutionCounterState } from '@/components/SolutionCounter';
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { MouseEvent, MouseEventHandler } from 'react';
import { useQueries } from 'react-query';
import { apiResolver } from 'next/dist/server/api-utils/node';

const LabelWap = styled.div`
  text-align: center;
`;

const click = (e: MouseEvent<HTMLAnchorElement> | MouseEvent<HTMLButtonElement>, count: number) => {};

const SolutionSelector = () => {
  const count = useRecoilValue(solutionCounterState);

  //192.168.0.2

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
      <Button onClick={(e) => click(e, count)}>확인</Button>
    </>
  );
};

export default SolutionSelector;
