import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper
    //Wrapper 태그 내부 태그들이 children으로 Wrapper에게 넘어감
    >
      {/* isSpecial은 자바스크립트 값이므로 {true}의 형태 */}
      <Hello name="react" color="red" isSpecial={true} />

      {/* 단순히 isSpecial만 입력하면 알아서 {true}값으로 들어감*/}
      <Hello name="velopert" color="red" isSpecial />

      <Hello color="purple" />
    </Wrapper>
  );
}

export default App;
