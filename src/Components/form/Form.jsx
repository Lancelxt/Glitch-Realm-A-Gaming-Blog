import React from 'react'
import '../form/Form.css'

function Form(props) {
  return (
    <form >
    <input type="text" placeholder={props.placeholder} />
    <button>{props.text}</button>
    </form>

  )
}

export default Form