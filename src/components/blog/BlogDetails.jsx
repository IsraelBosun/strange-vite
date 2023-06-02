import React, { useState } from 'react'
import { bloggers } from '../container/Data'
import { useParams } from "react-router-dom"
import Header from '../container/Header'
import image from "../../assets/About.jpeg"
import Banner from '../container/Banner'
import Blog from './Blog'
import ReactMarkdown from "react-markdown"


const BlogDetails = ({blogs}) => {

  const {id} = useParams();
  console.log(id)

  // const blokes = bloggers.find((finder => {
  //   return finder.id === parseInt(id)
  // }))

  
  let blokes = {}
  if(blokes){
    let arr = blogs.data.filter(blog=> blog.id == id)
    blokes = arr[0]
  } else {
    blokes = {}
  }
   console.log(blokes)

  // console.log(blokes)

  return (

    <div className='section'>
      <Banner />
        <article className=' pb-28'>
          <section className='spacy-y-2 border border-blue-600 text-white'>
            <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
              <div className='absolute top-0 w-full h-full opacity-10 blur-sm p-10'>
                <img src={`http://localhost:1337${blokes.attributes.Banner.data.attributes.url}`} alt="blog imagiing" className=' h-full w-full' />
              </div>

              <section className='p-5 bg-blue-600 w-full'>
                <div className='flex flex-col md:flex-row justify-between gap-y-5'>
                  <div>
                    <h1 className='text-4xl font-extrabold'>{blokes.attributes.title}</h1>
                    <ReactMarkdown className='line-break mt-3'>{blokes.attributes.date}</ReactMarkdown>
                  </div>
                  {/* <div className='flex items-center space-x-2'> */}
                    {/* <img src={image} alt="" className='rounded-full w-10 h-10'  /> */}
                    {/* <div className='w-64'>
                      <h3 className='text-lg font-bold'>Dr Oluwole Marcus</h3> */}
                      {/* <div>About Dr</div> */}
                    {/* </div> */}
                  {/* </div> */}
                </div>
                <div>
                  <h2 className='italic pt-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde aliquid totam alias fuga quas autem possimus sit perferendis eaque qui.</h2>
                  <div className='flex items-center justify-end mt-auto space-x-2'>
                    <p className='bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mt-4'>{blokes.attributes.category}</p>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </article>
      <ReactMarkdown className=''>
        {blokes.attributes.body}
      </ReactMarkdown>
      <ReactMarkdown>{blokes.attributes.testing}</ReactMarkdown>
    </div>
  )
}

export default BlogDetails