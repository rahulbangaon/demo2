import React from 'react'
import './style.css';

const InputField = (props) => {
  return (
    <>
    <div className="input-container">
        <label>{props.label}</label>
        <input 
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
          />
        {props.error && props.isTouched ? <p className='input-error'>{props.error}</p> : null}  
    </div>

    </>
  )
}

export default InputField