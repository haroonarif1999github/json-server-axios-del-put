import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './EmpCreat.css'

const EmpCreat = () => {
  const [showAlert, setShowAlert] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [active, setActive] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)

    const empData = { name, email, phone, active }

    try {
      const res = axios.post('http://localhost:8000/employee', empData)
      console.log(res)
      alert('Submitted the data successfully! 😊')
      navigate('/')
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="title">Welcome</div>
        <div className="subtitle">Let's create your account!</div>
        <div className="input-container ic1">
          <input required id="firstname" className="input" type="text" placeholder="Enter name" name="name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="input-container ic1">
          <input id="firstname" className="input" type="text" placeholder="Enter email" name="email" required value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="input-container ic2">
          <input required id="lastname" className="input" type="number" placeholder="Enter phone" name="phone" value={phone} onChange={e => setPhone(e.target.value)} />
        </div>
        <div className="input-container ic2">
          <input checked={active} onChange={e => setActive(e.target.checked)} type='checkbox' className='form-check-input' />
        </div>

        <div>
          {showAlert ? <div>data dave been saved!</div> : null}
          <button className='submit' type='submit'>Submit</button>
          <Link to='/' className='btn btn-danger'>Back</Link>
        </div>
      </form>
    </div>
  )
}

export default EmpCreat
