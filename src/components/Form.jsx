import React, { useState, useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'

const Form = ({addNote}) => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const alert = useContext(AlertContext)
  const submitHandler = (e) => {
  e.preventDefault()

  if(title.trim() || text.trim()) {
    addNote(title, text)
    alert.show('Note created!', 'success')
    setTitle('')
    setText('')
  } else {
    alert.show("Note can't be empty!")
  }
}

  return (
    <form onSubmit={submitHandler}>
        <div className="form-group">
            <input className="form-control" type="text" placeholder="Title" value={title} onChange={(e) => (setTitle(e.target.value))}></input>
            <input className="form-control" type="text" placeholder="Text" value={text} onChange={(e) => (setText(e.target.value))}></input>
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
  )
}

export default Form;