import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ padding: 12, borderBottom: '1px solid #ddd', marginBottom: 12 }}>
      <Link to="/" style={{ marginRight: 12 }}>Home</Link>
      <Link to="/add-book" style={{ marginRight: 12 }}>Add Book</Link>
      <Link to="/view-books" style={{ marginRight: 12 }}>View Books</Link>
      <Link to="/register-member" style={{ marginRight: 12 }}>Register Member</Link>
      <Link to="/issue-book" style={{ marginRight: 12 }}>Issue Book</Link>
      <Link to="/return-book" style={{ marginRight: 12 }}>Return Book</Link>
    </nav>
  )
}
