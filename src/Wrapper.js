import React from 'react';

// children은 props의 기본 속성
function Wrapper({ children }) {
    const style = {
        border: '2px solid black',
        padding: '16px',
    };

    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Wrapper;