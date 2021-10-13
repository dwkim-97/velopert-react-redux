import React, { useRef } from 'react';
import UserList from './UserList';

function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'velopert@a.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@e.com'
    },
    {
      id: 3,
      username: 'kdw',
      email: 'kdw@naver.com'
    }
  ]

  // useRef의 두 번째 용도: 컴포넌트 안에서 조회 및 수정할 수 있는 변수 관리
  // useRef로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않음
  // 컴포넌트 내부에 변수를 선언하지 않는 이유는, 리렌더링 될 때마다 값이 초기화 될 것이기 때문
  const nextId = useRef(4);
  const onCreate = () => {

    nextId.current += 1;
  }

  return <UserList users={users} />;
}

export default App;
