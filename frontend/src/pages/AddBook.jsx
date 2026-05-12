import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_BASE } from '../App'

export default function AddBook() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [isbn, setIsbn] = useState('')
  const [copies, setCopies] = useState(1)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    const resp = await fetch(`${API_BASE}/api/books`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, author, isbn, copies })
    })
    if (resp.ok) {
      navigate('/view-books')
    } else {
      alert('Failed to add book')
    }
  }

  return (
    <div>
      <h3>Add Book</h3>
      <form onSubmit={handleSubmit} style={{ maxWidth: 420 }}>
        <div>
          <label>Title</label>
          <input value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Author</label>
          <input value={author} onChange={e => setAuthor(e.target.value)} required />
        </div>
        <div>
          <label>ISBN</label>
          <input value={isbn} onChange={e => setIsbn(e.target.value)} />
        </div>
        <div>
          <label>Copies</label>
          <input type="number" value={copies} min={1} onChange={e => setCopies(Number(e.target.value))} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
