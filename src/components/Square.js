import React from 'react'

const style = {
    background: 'lightblue',
    border: '2px solid white',
    fontSize: '75px',
    fontWeight: '700',
    color: '#4D6668'

}

const Square = ({value, onClick}) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
);

export default Square; 