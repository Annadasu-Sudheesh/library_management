import { useEffect, useState } from 'react'
import { API_BASE } from '../App'

export default function ReturnBook() {
  const [issues, setIssues] = useState([])

  async function load() {
    const res = await fetch(`${API_BASE}/api/issues`)
    if (res.ok) setIssues(await res.json())
  }

  useEffect(() => { load() }, [])

  async function handleReturn(id) {
    const res = await fetch(`${API_BASE}/api/issues/return/${id}`, { method: 'POST' })
    if (res.ok) load()
    else alert('Failed to return')
  }

  return (
    <div>
      <h3>Return Books</h3>
      <table style={{ width: '100%' }}>
        <thead>
          <tr><th>Book</th><th>Member</th><th>Issued On</th><th>Action</th></tr>
        </thead>
        <tbody>
          {issues.map(i => (
            <tr key={i.id}>
              <td>{i.book?.title}</td>
              <td>{i.member?.name}</td>
              <td>{i.issueDate}</td>
              <td>{i.returnDate ? 'Returned' : <button onClick={() => handleReturn(i.id)}>Return</button>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
