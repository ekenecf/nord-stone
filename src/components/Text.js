import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { IoIosArrowForward } from 'react-icons/io'
import myText from '../service/textService'

function Text() {
  const notify = () => {
    if (!formInputs.text) {
      return alert('Please input text')
    }
    toast('You have successfully created a text!')
  }

  const [getText, setText] = useState([])
  const [formInputs, changeFormInputs] = useState({
    text: '',
  })

  const getTextInput = (e) => {
    changeFormInputs({
      ...formInputs,
      text: e.target.value,
    })
  }

  const handleGetText = async () => {
    const classText = new myText()
    const getAllText = await classText.getText()
    setText(getAllText.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const classText = new myText()
      await classText.addText(formInputs)
    } catch (err) {
      console.log(err)
    }
    handleGetText()
    formInputs.text = ''
  }

  useEffect(() => {
    handleGetText()
  }, [])

  return (
    <div className="text">
      <h2>Write to store</h2>
      <ToastContainer />
      <form onSubmit={(e) => handleSubmit(e)}>
        <textarea
          type="text"
          name="text"
          placeholder="Write here"
          rows="4"
          cols="50"
          required
          onChange={getTextInput}
        />
        <button onClick={notify} type="submit">
          Send
        </button>
      </form>
      {getText.length ? (
        getText.map((textData) => <p key={textData.id}>{textData.text}</p>)
      ) : (
        <p>No text Added yet</p>
      )}
      <NavLink to={'/calculate'}>
        Calculate <IoIosArrowForward className="foward" />
      </NavLink>
    </div>
  )
}

export default Text
