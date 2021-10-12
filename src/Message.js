import React, { useState } from 'react';

const Message = () => {
    const [message, setMessage] = useState('');

    return (
        <div>
            <input
                type='text'
                value={message}
                placeholder='Enter a message'
                onChange={e => {
                    const val = e.target.value;
                    setMessage(prev => prev + val)
                }}
            />
            <p>
                <strong>{message}</strong>
            </p>
        </div>
    )
}

export default Message;