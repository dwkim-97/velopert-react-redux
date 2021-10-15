import React, { useRef, useState, useMemo } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

// 단순 함수 사용시 input이 바뀔 때에도 컴포넌트가 리렌더링 됨.
function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
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
      email: 'velopert@a.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@e.com',
      active: false
    },
    {
      id: 3,
      username: 'kdw',
      email: 'kdw@naver.com',
      active: false
    }
  ]);

  // useRef의 두 번째 용도: 컴포넌트 안에서 조회 및 수정할 수 있는 변수 관리
  // useRef로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않음
  // 컴포넌트 내부에 변수를 선언하지 않는 이유는, 리렌더링 될 때마다 값이 초기화 될 것이기 때문
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username, email,
    }
    // setUsers([...users, user]); // spread 연산자 사용
    setUsers(users.concat(user)); // concat 함수 사용
    setInputs({
      username: '',
      email: ''
    })
    nextId.current += 1;
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  const onToggle = id => {
    // map 함수를 사용하면 불변성을 지키면서 
    setUsers(
      users.map(user => user.id === id ? {
        ...user, active: !user.active
      } : user))
  }

  // useMemo의 첫 번째 파라미터에는 어떻게 연산할지 정의하는 함수를, 두 번째 파라미터에는 deps 배열을 넣어주면 된다. 
  // 만약 deps 배열 내부의 값이 바뀌면, 등록된 함수를 호출해서 값을 연산해주고, 아니면 이전에 연산한 값을 재사용한다.
  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수: {count}</div>
    </>

  );
}

export default App;
