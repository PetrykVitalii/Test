/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'
import styled from 'styled-components';
import { Provider } from 'react-redux';

interface Props {
}

const App: React.FC<Props> = () => {
  const a = Provider
    const fail = () => {
      const styledC: any = styled;
      console.log(styledC);
      if (Math.random() > 0.5) {
        document.body.style.background = "red"
      } else {
        document.body.style.background = "green"
      }
    }
  
    return (
        <Div onClick={fail}>My1 React and TypeScript App!</Div>
    )
};
  
const Div = styled.h1`
  font-size: 70px;
  font-weight: 900;
`;

export default App;
