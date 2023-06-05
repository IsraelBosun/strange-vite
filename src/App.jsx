import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/container/Footer"
import Contact from "./components/contact/Contact"
import Books from "./components/Books/Books"
import BooksDetails from "./components/Books/BookDetails"
import PrivacyPolicy from './components/privacy/PrivacyPolicy'
import Blog from "./components/blog/Blog"
import BlogDetails from "./components/blog/BlogDetails"
import './App.css'
// import useFetch from "./components/hooks/UseFetch"

function App() {
  // const { loading, error, data} = useFetch('http://localhost:1337/api/marcuses?populate=*');
  // const [count, setCount] = useState(0)

  // if (loading) return <p>loading</p>
  // if (error) return <p>Error :(</p>

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/books" element={<Books />} />
          {/* <Route path="/books/:id" element={<BooksDetails />} /> */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          {/* <Route path="/blog" element={<Blog blogs={data?data:""} />} />
          <Route path="/blog/:id" element={<BlogDetails blogs={data?data:""} />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
