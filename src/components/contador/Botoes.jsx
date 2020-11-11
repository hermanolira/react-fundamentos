import React from 'react'

export default props =>
    <>
        <button onClick={e => props.onInc()}>+</button>
        <button onClick={props.onDec}>-</button>
    </>