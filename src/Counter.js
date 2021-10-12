import React, { useState } from "react";

function Counter() {
    const [number, setNumber] = useState(0);

    /*
    아예 새로운 값(다음 상태)을 setter에 넣어 업데이트하는 방식
    const onIncrease = () => setNumber(number + 1);
    const onDecrease = () => setNumber(number - 1);
    */

    // 이전 상태값을 사용하는 함수형 업데이트 방식(컴포넌트 최적화)
    // setNumber의 경우, 파라미터로 함수를 넘겨주면 해당 함수가 실행되는 방식으로 구현되어 있음.
    const onIncrease = () => setNumber(prevNumber => prevNumber + 1);
    const onDecrease = () => setNumber(prevNumber => prevNumber - 1);

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;