import { useEffect, useState } from 'react'
import { API_BASE } from '../App'

export default function ViewBooks() {
  const [books, setBooks] = useState([])

  async function load() {
    const res = await fetch(`${API_BASE}/api/books`)
    if (res.ok) setBooks(await res.json())
  }

  useEffect(() => { load() }, [])

  async function handleDelete(id) {
    if (!confirm('Delete this book?')) return
    const res = await fetch(`${API_BASE}/api/books/${id}`, { method: 'DELETE' })
    if (res.ok) load()
    else alert('Delete failed')
  }

  return (
    <div>
      <h3>Books</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Copies</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map(b => (
            <tr key={b.id}>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.isbn}</td>
              <td>{b.copies}</td>
              <td><button onClick={() => handleDelete(b.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
