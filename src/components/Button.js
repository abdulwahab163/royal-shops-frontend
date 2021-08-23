import React from 'react'

const Button = ({ text, bgColor, width, ...rest }) => {
    return (
        <button {...rest} style={{ display: 'block', width: width ? width : '100%', padding: '10px 0px', cursor: 'pointer', marginTop: '20px', backgroundColor: bgColor ? bgColor : '#5664d2', border: '1px solid transparent', color: '#FFFFFF', borderRadius: '5px' }}>{text}</button>
    )
}
export default Button;