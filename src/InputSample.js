import React, { useState, useRef } from "react";

function InputSample() {
    // 객체 형태의 state
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const nameInput = useRef();

    const { name, nickname } = inputs; // 구조 분해 할당

    const onChange = e => {
        const { value, name } = e.target;

        // 기존의 inputs을 그대로 가져온 뒤에, [name] property를 오버라이딩해주는 방식
        // 리액트에서 객체를 수정할 때 input[name]의 식으로 직접 수정하면 상태 변화가 아니므로
        // 업데이트 되지 않는다. 따라서 기존 객체를 직접 수정하는 것이 아니라, 새로운 객체를 만들고
        // 새 객체에 변화를 주는 방식으로 진행해야 한다.
        // 이는 "리액트의 불변성을 지킨다"는 개념, 컴포넌트 업데이트 성능 최적화에 필요함.
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        })
        nameInput.current.focus();
    }

    return (
        <div>
            <input name='name' placeholder='이름' onChange={onChange} value={name} ref={nameInput} />
            <input name='nickname' placeholder='닉네임' onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample;