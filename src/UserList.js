import React from "react";

function User({ user }) {
    return (
        <div>
            <b>{user.name}</b> <sapn>({user.email})</sapn>
        </div>
    )
}

function UserList() {
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

    return (
        <div>
            {
                // 리액트에서 배열 렌더링 시 key props 필요
                // key props가 있어야 배열 내부의 값을 추가/삭제할 때 최적화된 방식으로 진행
                users.map(user => <User user={user} key={user.id} />)
            }
        </div>
    )
}

export default UserList;