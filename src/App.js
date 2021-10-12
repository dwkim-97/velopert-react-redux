import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper
    //Wrapper 태그 내부 태그들이 children으로 Wrapper에게 넘어감
    >
      <Hello name="react" color="red" />
      <Hello color="purple" />
    </Wrapper>
  );
}

export default App;
