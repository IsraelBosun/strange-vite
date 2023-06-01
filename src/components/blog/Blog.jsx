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