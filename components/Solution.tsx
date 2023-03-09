import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { useEffect, useState } from 'react';
import { randomTest } from '@/global/api/SolutionAPI';

const Solution = () => {
  const router = useRouter();
  const { count } = router.query;
  const { refetch } = useQuery('SOLUTION_FETCH', () => randomTest({ questionCnt: Number(count) }), { enabled: false });
  const [solution, setSolution] = useState<any>();
  useEffect(() => {
    if (!router.isReady) return;
    console.log(count);
    refetch().then((data) => setSolution(data.data));
  }, [router.isReady]);

  return (
    <div>
      <h1>{solution?.question || ''}</h1>
      <div>
        <pre>{solution?.answer || ''}</pre>
      </div>
    </div>
  );
};
export default Solution;

// {
//   "regDate": "2023-03-04T08:22:13",
//     "regId": 0,
//     "updDate": null,
//     "updId": null,
//     "question": "스택의 특징",
//     "answer": "FIFO이다.",
//     "level": null,
//     "useYn": "Y",
//     "qseq": 1
// }
