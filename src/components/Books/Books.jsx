import { useState } from 'react'
import { Tab } from '@headlessui/react'
import {Link} from "react-router-dom";
import book from "../../assets/About.jpeg"
import Header from "../container/Header"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Books() {
  let [categories] = useState({
    Health: [
      {
        id: 1,
        image: book,
        category: "Health",
        title: "How to cure Hypertension",
        price: "#1000",
        details: "This book provides a comprehensive guide on how to effectively manage and cure hypertension. It covers topics such as understanding the causes of hypertension, adopting a healthy lifestyle, implementing dietary changes, and exploring medical treatment options. With practical tips and expert advice, this book will empower you to take control of your health and overcome hypertension for good."
      },
      {
        id: 2,
        image: book,
        category: "Health",
        title: "How to marry the right person",
        price: "#8500",
        details: "Choosing the right life partner is one of the most important decisions you'll ever make. This book offers valuable insights and practical advice on finding and attracting your ideal partner. It covers topics such as self-discovery, relationship compatibility, effective communication, and building a strong and fulfilling partnership. Whether you're single or in a relationship, this book will guide you on the path to finding lasting love and happiness."
      },
      {
        id: 3,
        image: book,
        category: "Health",
        title: "Living Healthy in Nigeria",
        price: "#1050",
        details: "In this book, you'll discover practical strategies and tips for maintaining a healthy lifestyle in Nigeria. It covers various aspects of health, including nutrition, exercise, stress management, and disease prevention. With a focus on the Nigerian context, this book provides relevant and actionable advice to help you live your best and healthiest life. Whether you're looking to lose weight, improve your fitness, or enhance your overall well-being, this book is your ultimate guide."
      },
    ],
    Entrepreneurship: [
      {
        id: 1,
        image: book,
        category: "Entrepreneurship",
        title: "Head Start: Financing your businesss",
        price: "#1200",
        details: "Starting a business can be challenging, especially when it comes to financing. This book offers valuable insights and practical advice on how to secure funding for your business. It covers various financing options, including loans, grants, crowdfunding, and angel investors. Whether you're a startup founder or an aspiring entrepreneur, this book will equip you with the knowledge and tools to navigate the complex world of business financing and set your venture up for success."
      },
      {
        id: 2,
        image: book,
        category: "Entrepreneurship",
        title: "Everlasting Wealth",
        price: "#1050",
        details: "Achieving financial independence and building everlasting wealth is a goal shared by many. In this book, you'll learn proven strategies and principles for creating and preserving wealth. It covers topics such as personal finance, investing, entrepreneurship, and wealth mindset. Whether you're just starting your wealth-building journey or looking to enhance your financial knowledge, this book will provide you with the insights and guidance you need to achieve lasting financial success."
      },
      {
        id: 3,
        image: book,
        category: "Entrepreneurship",
        title: "How to make money",
        price: "#1050",
        details: "Making money is a skill that can be learned and mastered. This book offers practical tips and strategies for generating income and building financial abundance. It covers various income sources, including entrepreneurship, investing, and passive income streams. Whether you're looking to start a side hustle, grow your existing business, or explore new avenues for income, this book will inspire and guide you on your money-making journey."
      },
    ],
    SelfHelp: [
      {
        id: 1,
        image: book,
        category: "Self help",
        title: "How to be resilent in life",
        price: "#9900",
        details: "Life is full of challenges and setbacks, but resilience is the key to overcoming them and thriving. This book explores the concept of resilience and provides practical strategies for developing resilience in various areas of life. It covers topics such as mindset, emotional intelligence, coping skills, and building a support network. Whether you're facing personal or professional challenges, this book will empower you to bounce back, adapt, and grow stronger in the face of adversity."
      },
      {
        id: 2,
        image: book,
        category: "Self help",
        title: "How to eat that frog",
        price: "#1050",
        details: "Procrastination can hinder your productivity and prevent you from reaching your goals. In this book, you'll discover effective techniques for overcoming procrastination and getting things done. It offers practical strategies, time management tips, and prioritization techniques to help you tackle your most challenging tasks head-on. Whether you're a student, professional, or anyone looking to overcome procrastination and boost your productivity, this book will provide you with the tools and motivation you need."
      },
    ],
  });

  // Rest of the component code...



  return (
    <article className="">
        <Header title ="Books Section" image ={book}>
            This is a repository of my books, you can get them here, some are for free
        </Header>
        <div className = "w-full  section max-w-md px-2 py-7 sm:px-0">
      <Tab.Group >
        <Tab.List className="flex shadow-lg gap-2 space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none p-2 focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className=''>
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className=""
            >
              <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="rounded-xl mt-6 p-2 bg-gradient shadow-2xl bg-white rounded-md"
                  >
                        <img src={post.image} className='rounded-xl' alt="courses" />
                        <div className='mt-2 text-xs text-blue-600'>{post.category}</div>
                        <div className='flex items-center justify-between mt-3'>
                            <div className='text-sm   font-bold '>{post.title}</div>
                            <div className='text-blue-600 font-bold'>{post.price}</div>
                        </div>
                        <div className='flex items-center mt-3 justify-center'>
                          <Link to = {`/books/${post.id}`} className='px-2 py-2 font-bold w-full text-white bg-blue-600 rounded-lg text-sm hover:text-blue-600 hover:bg-white border text-center'>Order</Link>  
                        </div>

                   
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      </div>
    </article>
  )
}
