import React from 'react'
import './Dock.css'
import { Book, Github, HouseExclamationFill, PersonFill } from 'react-bootstrap-icons'
function Dock() {
  return (
    <div className='dock'>
      <HouseExclamationFill/>
      <Book/>
      <PersonFill/>
      <Github/>
    </div>
  )
}

export default Dock