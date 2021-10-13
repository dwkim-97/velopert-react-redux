import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    name: '',
    email: ''
  })
  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const [users, setUsers] = useState([
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
  ]);

  // useRef의 두 번째 용도: 컴포넌트 안에서 조회 및 수정할 수 있는 변수 관리
  // useRef로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않음
  // 컴포넌트 내부에 변수를 선언하지 않는 이유는, 리렌더링 될 때마다 값이 초기화 될 것이기 때문
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username, email
    }
    // setUsers([...users, user]); // spread 연산자 사용
    setUsers(users.concat(user)); // concat 함수 사용
    setInputs({
      username: '',
      email: ''
    })
    nextId.current += 1;
  }

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} />
    </>

  );
}

export default App;
