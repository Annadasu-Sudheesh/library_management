import { useEffect, useState } from 'react'
import { API_BASE } from '../App'

export default function IssueBook() {
  const [books, setBooks] = useState([])
  const [members, setMembers] = useState([])
  const [bookId, setBookId] = useState('')
  const [memberId, setMemberId] = useState('')

  useEffect(() => { load() }, [])

  async function load() {
    const b = await fetch(`${API_BASE}/api/books`)
    const m = await fetch(`${API_BASE}/api/members`)
    if (b.ok) setBooks(await b.json())
    if (m.ok) setMembers(await m.json())
  }

  async function handleIssue(e) {
    e.preventDefault()
    if (!bookId || !memberId) return alert('Select both')
    const res = await fetch(`${API_BASE}/api/issues/issue/${bookId}/${memberId}`, { method: 'POST' })
    if (res.ok) {
      alert('Book issued')
      setBookId('')
      setMemberId('')
    } else alert('Failed to issue')
  }

  return (
    <div>
      <h3>Issue Book</h3>
      <form onSubmit={handleIssue} style={{ maxWidth: 420 }}>
        <div>
          <label>Book</label>
          <select value={bookId} onChange={e => setBookId(e.target.value)}>
            <option value="">--select--</option>
            {books.map(b => <option key={b.id} value={b.id}>{b.title}</option>)}
          </select>
        </div>
        <div>
          <label>Member</label>
          <select value={memberId} onChange={e => setMemberId(e.target.value)}>
            <option value="">--select--</option>
            {members.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
          </select>
        </div>
        <button type="submit">Issue</button>
      </form>
    </div>
  )
}
