import React from 'react'
import Blog from "./Blog"
import Books from "./Books"
import MeetMe from "./MeetMe"
import Speciality from "./Speciality"
import Subscribe from "./Subscribe"

const Home = () => {
  return (
    <div>
        <Speciality />
        <Books />
        <Blog />
        <Subscribe />
        <MeetMe />
    </div>
  )
}

export default Home