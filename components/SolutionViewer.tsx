import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styled from '@emotion/styled';

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

const SolutionViewer = () => {
  return (
    <ReactMarkdownLayout>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{data}</ReactMarkdown>
    </ReactMarkdownLayout>
  );
};

export default SolutionViewer;
