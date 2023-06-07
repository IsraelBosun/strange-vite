import React from 'react'
import { Link } from "react-router-dom"
import Banner from "../container/Banner"
import BlogList from "../container/BlogList"
import marcus from "../../assets/marcus.png"

const Blog = ({blogs}) => {
  return (
    <div className = "section">
        <Banner />
        <BlogList blogs = {blogs?blogs:""}/>
        </div>
  )
}

export default Blog


// import React, { useEffect, useState } from 'react'


// const Blog = (url) => {

//   const [data, setdata] = useState(null);
//   const [loading, setloading] = useState(null);
//   const [error, seterror] = useState(null)

//   useEffect(() => {
//     const fetchData = async () => {
//       setloading(true)

//       try {
//         const res = await fetch(url);
//         const json = await res.json();

//         setdata(json)
//         setloading(false)
//       } catch (error) {
//         seterror(error);
//         setloading(false)
//       }
//     }

//     fetchData()
//   }, [url])


//   return { data, error, loading}
// }

// export default Blog;

// import React, { useState, useEffect} from 'react'

// const Blog = (url) => {

//   const [data, setdata] = useState(null);
//   const [loading, setloading] = useState(null);
//   const [error, seterror] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//         setloading(true)
//         try {
//           const res = await fetch(url)
//           const json = await res.json()
//           setdata(json)
//         } catch (error) {
//           setloading(false)
//           seterror(error)
//         }
//     }

//     fetchData();
//   }, [url])

//   return { data, loading, error}
// }

// export default Blog