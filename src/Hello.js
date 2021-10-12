import React from 'react';

function Hello({ color, name, isSpecial }) { // 비구조화 할당
    return (
        <div style={{ color }}>
            {isSpecial && <b>*</b>} {/*단축 평가 논리 계산법*/}
            hello {name}!
        </div>
    )
}

// Hello 컴포넌트의 기본 props 설정
Hello.defaultProps = {
    name: "이름없음"
}

export default Hello;

// JSX: 리액트 컴포넌트에서 XML 형식의 값을 반환해주는 것