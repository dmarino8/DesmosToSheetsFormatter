import './App.css';
import React from 'react';

const copyTable = () => {
    var range = document.createRange();
    range.selectNode();
    window.getSelection().addRange(range);
    document.execCommand('copy');
}

const ActionButtons = ({setFormatActive}) => {
    return (
        <div className='Button-container'>
            <button onClick={() => setFormatActive(true)}>send</button>
            <button onClick={() => copyTable()}>copy</button>
            <button onClick={() => setFormatActive(false)}>back</button>
        </div>
    )
}

export default ActionButtons;