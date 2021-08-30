import React from 'react'

const style = {
    background: 'lightgreen',
    border: '2px solid green',
    fontDize: '50px',
    fontWeight: '700',
}

const Square = ({value, onClick}) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
);

export default Square; 