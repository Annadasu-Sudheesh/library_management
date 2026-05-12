import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AddBook from './pages/AddBook'
import ViewBooks from './pages/ViewBooks'
import RegisterMember from './pages/RegisterMember'
import IssueBook from './pages/IssueBook'
import ReturnBook from './pages/ReturnBook'

export const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080'

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/view-books" element={<ViewBooks />} />
          <Route path="/register-member" element={<RegisterMember />} />
          <Route path="/issue-book" element={<IssueBook />} />
          <Route path="/return-book" element={<ReturnBook />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
