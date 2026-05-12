import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_BASE } from '../App'

export default function RegisterMember() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    const res = await fetch(`${API_BASE}/api/members`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    })
    if (res.ok) navigate('/')
    else alert('Failed')
  }

  return (
    <div>
      <h3>Register Member</h3>
      <form onSubmit={handleSubmit} style={{ maxWidth: 420 }}>
        <div>
          <label>Name</label>
          <input value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
