import React, { useEffect } from "react";

function User({ user, onRemove, onToggle }) {

    // useEffect 사용 시 첫 번째 파라미터에는 함수, 두 번째 파라미터에는 의존값이 들어가 있는 배열 deps
    // useEffect에서 반환한 함수는 cleanup 함수
    // 1. 빈 deps의 경우, 
    //   a) 컴포넌트가 처음 나타날때에만 useEffect에 등록된 함수가 호출됨. (mount)
    //   b) 컴포넌트가 사라질 때 cleanup 함수가 호출됨. (unMount)
    // 2. deps가 비어있지 않을 경우
    //   a) mount시, deps 내부 값이 변화할 시 등록된 함수가 호출됨. (mount + update)
    //   b) unMount시, 업데이트 직전에 cleanup 함수가 호출됨. (unmount + willUpdate)
    // 3. deps 자체를 생략할 경우
    //   a) 컴포넌트가 리렌더링 될 때마다 등록된 함수가 호출됨. (render)
    //   b) 컴포넌트가 리렌더링 되기 직전에 cleanUp 함수가 호출됨. (willRender?)
    useEffect(() => {
        console.log('useEffect', user.username);
        return () => {
            console.log('return', user.username);
        };
    });

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {
                users.map(user => <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />)
            }
        </div>
    )
}

export default UserList;