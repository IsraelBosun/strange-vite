import doctor from "../../assets/author1.png"
import book from "../../assets/About.jpeg"
import { AiOutlineArrowRight } from "react-icons/ai"
import { FaBriefcaseMedical, FaBookOpen } from "react-icons/fa"
import { MdBusinessCenter } from "react-icons/md"
import bp from "../../assets/books/bp-control.png"
import funded from "../../assets/books/get-funded.png"
import headstart from "../../assets/books/headstart.png"
import opinion from "../../assets/books/opinion.png"



export const navLinks = [
    {
      id: 1,
      href: "/",
      link: "Home",
    },
    // {
    //   id: 2,
    //   href: "about",
    //   link: "About",
    // },
    {
      id: 3,
      href: "books",
      link: "Books",
    },
    // {
    //   id: 4,
    //   href: "blog",
    //   link: "Blog",
    // },
    {
      id: 5,
      href: "contact",
      link: "Contact",
    },
  ];

  export const exploreWorlds = [
    {
      id: 'world-1',
      imgUrl: book,
      title: 'How I handle Stress',
    },
    {
      id: 'world-2',
      imgUrl: funded,
      title: 'Your health and you',
    },
    {
      id: 'world-3',
      imgUrl: headstart,
      title: 'Making Money is not hard',
    },
    {
      id: 'world-4',
      imgUrl: book,
      title: 'How to love your family',
    },
    // {
    //   id: 'world-5',
    //   imgUrl: book,
    //   title: 'Hawkins Labs',
    // },
  ];

export const Xervices = [
  {
    id: 1,
    image: <FaBriefcaseMedical />,
    title: "Medical Doctor",
    text: "I provide exceptional medical care and have extensive experience in treating diverse medical conditions.",
    learn: "Learn more",
    icon: <AiOutlineArrowRight />,
  },
  {
    id: 2,
    image: <FaBookOpen />,
    title: "Author",
    text: "I have authored numerous bestselling books on entrepreneurship that have transformed many lives.",
    learn: "Learn more",
    icon: <AiOutlineArrowRight />,
  },
  {
    id: 3,
    image: <MdBusinessCenter />,
    title: "Entrepreneur",
    text: "I have founded and managed multiple successful businesses, creating wealth and job opportunities.",
    learn: "Learn more",
    icon: <AiOutlineArrowRight />,
  }
]

export const Specialization = [
  {
    id: 1,
    image: <MdBusinessCenter />,
    title: "Explore Ideas together",
    text: "I provide exceptional medical care and have extensive experience in treating diverse medical conditions.",
    learn: "Learn more",
    icon: <AiOutlineArrowRight />,
  },
  {
    id: 2,
    image: <MdBusinessCenter />,
    title: "Bring those ideas to life",
    text: "I have authored numerous bestselling books on entrepreneurship that have transformed many lives.",
    learn: "Learn more",
    icon: <AiOutlineArrowRight />,
  },
  {
    id: 3,
    image: <MdBusinessCenter />,
    title: "Ship better outcomes",
    text: "I have founded and managed multiple successful businesses, creating wealth and job opportunities.",
    learn: "Learn more",
    icon: <AiOutlineArrowRight />,
  }
]

export const data = [
  {
    id: 1,
    avatar: doctor,
    review: "Dr. Oluwole's webinar on hypertension provided practical tips for managing the condition. Highly recommend!",
    name: "Favour Ori",
    school: "Business Man"
  },
  {
    id: 2,
    avatar: doctor,
    review: "Dr. Oluwole's book on managing hypertension is an insightful guide for patients to live a healthy life",
    name: "Wewimo Timi",
    school: "Banker"
  },
  {
    id: 3,
    avatar: doctor,
    review: "As a hypertensive patient, Dr. Oluwole's care has been instrumental in my journey to better health.",
    name: "Raji Opeyemi",
    school: "University Professor"
  },
  {
    id: 4,
    avatar: doctor,
    review: "Dr. Oluwole's hypertension clinic provides exceptional care and support for patients. Highly recommended!",
    name: "Aliu Funmilayo",
    school: "Politician"
  },
  {
    id: 5,
    avatar: doctor,
    review: "Dr. Oluwole's webinar on hypertension provided practical tips for managing the condition. Highly recommend!",
    name: "Ganiyu Dasola.",
    school: "House Wife"
  },
]

export const blogging = [
  {
    id: 1,
    image: book,
    title:"Do this to prevent hypertension",
    text: 'Hypertension has been called the silent killer at the darkest of times',
    button: "CONTINUE READING..."
  },
  {
    id: 2,
    image: book,
    title:"How to raise money for your business",
    text: 'Raising money is one of the most difficult part of entrepreneurship, but I have the key',
    button: "CONTINUE READING..."
  },
  {
    id: 3,
    image: book,
    title:"How to raise money for your business",
    text: 'Raising money is one of the most difficult part of entrepreneurship, but I have the key',
    button: "CONTINUE READING..."
  }
]

export const books = [
  {
    id: 1,
    image: bp,
    category: "Health",
    title: "30-Day Blood Pressure Control",
    price: "#1,650",
    details: "This book provides a comprehensive guide on how to effectively manage and cure hypertension. It covers topics such as understanding the causes of hypertension, adopting a healthy lifestyle, implementing dietary changes, and exploring medical treatment options. With practical tips and expert advice, this book will empower you to take control of your health and overcome hypertension for good.",
    Link: 'https://www.google.com'
  },
  {
    id: 2,
    image: bp,
    category: "Health",
    title: "7 Days Of Heart Care",
    price: "#8,500",
    details: "Choosing the right life partner is one of the most important decisions you'll ever make. This book offers valuable insights and practical advice on finding and attracting your ideal partner. It covers topics such as self-discovery, relationship compatibility, effective communication, and building a strong and fulfilling partnership. Whether you're single or in a relationship, this book will guide you on the path to finding lasting love and happiness.",
    Link: 'https://www.google.com'
  },
  {
    id: 3,
    image: bp,
    category: "Health",
    title: "Blood Pressure Tranquilizers",
    price: "#1,050",
    details: "In this book, you'll discover practical strategies and tips for maintaining a healthy lifestyle in Nigeria. It covers various aspects of health, including nutrition, exercise, stress management, and disease prevention. With a focus on the Nigerian context, this book provides relevant and actionable advice to help you live your best and healthiest life. Whether you're looking to lose weight, improve your fitness, or enhance your overall well-being, this book is your ultimate guide.",
    Link: 'https://www.google.com'
  },
  {
    id: 3,
    image: funded,
    category: "Entrepreneurship",
    title: "Get Funded",
    price: "#2,000",
    details: "Starting a business can be challenging, especially when it comes to financing. This book offers valuable insights and practical advice on how to secure funding for your business. It covers various financing options, including loans, grants, crowdfunding, and angel investors. Whether you're a startup founder or an aspiring entrepreneur, this book will equip you with the knowledge and tools to navigate the complex world of business financing and set your venture up for success.",
    Link: 'https://www.google.com'
  },
  {
    id: 4,
    image: headstart,
    category: "Entrepreneurship",
    title: "Fight",
    price: "#1,200",
    details: "Achieving financial independence and building everlasting wealth is a goal shared by many. In this book, you'll learn proven strategies and principles for creating and preserving wealth. It covers topics such as personal finance, investing, entrepreneurship, and wealth mindset. Whether you're just starting your wealth-building journey or looking to enhance your financial knowledge, this book will provide you with the insights and guidance you need to achieve lasting financial success.",
    Link: 'https://www.google.com'
  },
  {
    id: 5,
    image: headstart,
    category: "Entrepreneurship",
    title: "Headstart",
    price: "#1,100",
    details: "Making money is a skill that can be learned and mastered. This book offers practical tips and strategies for generating income and building financial abundance. It covers various income sources, including entrepreneurship, investing, and passive income streams. Whether you're looking to start a side hustle, grow your existing business, or explore new avenues for income, this book will inspire and guide you on your money-making journey.",
    Link: 'https://www.google.com'
  },
   {
    id: 2,
    image: headstart,
    category: "Self help",
    title: "The Missing Link",
    price: "#1,050",
    details: "Procrastination can hinder your productivity and prevent you from reaching your goals. In this book, you'll discover effective techniques for overcoming procrastination and getting things done. It offers practical strategies, time management tips, and prioritization techniques to help you tackle your most challenging tasks head-on. Whether you're a student, professional, or anyone looking to overcome procrastination and boost your productivity, this book will provide you with the tools and motivation you need.",
    Link: 'https://www.google.com'
  },
];


export const testimonials = [
  {
    id: 1,
    title: "What inspired you to become a doctor?",
    response: "As someone who is passionate about healthcare, writing, and business, becoming a doctor author and entrepreneur was a natural progression for me. I wanted to combine my interests and create something meaningful that could make a positive impact on people's lives."
  },
  {
    id: 2,
    title: "What kind of books have you written?",
    response: "I have written books on a variety of topics related to healthcare, wellness, and personal development. Some of my titles include 'Healthy Habits for a Happy Life,' 'The Mind-Body Connection,' and 'Entrepreneurial Medicine.'"
  },
  {
    id: 3,
    title: "What kind of medical services do you offer?",
    response: "I offer a range of medical services, including general health check-ups, disease prevention and management, and personalized treatment plans. My goal is to help patients achieve optimal health and well-being."
  },
  {
    id: 4,
    title: "How can I improve my overall health and wellness?",
    response: "Improving your overall health and wellness involves adopting a holistic approach that encompasses healthy eating, regular exercise, stress management, and adequate sleep. I recommend incorporating these habits into your daily routine to achieve optimal health."
  },
  {
    id: 5,
    title: "What kind of entrepreneurial advice do you offer?",
    response: "As an entrepreneur, I have learned the importance of having a strong vision, staying focused, and being willing to take calculated risks. I offer advice on how to identify opportunities, build a strong team, and develop effective business strategies." 
  }
];


export const bloggers = [
  {
    id: 1,
    image: book,
    category: "Health",
    title:"Do this to prevent hypertension and sleep properly every day at night",
    // date: 'October 21, 2022',
    preview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia ducimus velit, reprehenderit ipsum nostrum assumenda facere non placeat at corrupti minus hic dignissimos!",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia ducimus velit, reprehenderit ipsum nostrum assumenda facere non placeat at corrupti minus hic dignissimos! Dolores vero vel, illum quibusdam voluptatem quidem esse optio ipsam reprehenderit quod odit cum voluptatibus deserunt ducimus magni voluptates. Fugit, quas sint distinctio rem culpa modi soluta repellendus nam ducimus et, ratione omnis eum! Odit consequatur at laudantium sapiente doloribus, rem iusto quas ad repellat quae nihil facilis voluptatem eos nobis voluptatibus minima fugiat, ratione eligendi, necessitatibus dolores? Quae dolor recusandae est! Aliquam eveniet dolorem quas unde eos itaque sint corporis, rem enim accusantium repudiandae dicta aspernatur possimus soluta dolorum tempora aut, modi eius harum! Sit nostrum dicta id mollitia nesciunt illum, minima laboriosam necessitatibus quam maxime autem quae quaerat ex dolores perferendis facilis quia tempore. Quam obcaecati quo, nulla excepturi vero dolor officia aut quidem incidunt eveniet voluptas dignissimos expedita. Omnis voluptas, ut laudantium architecto nostrum, quibusdam maxime eveniet voluptatem blanditiis at mollitia. Voluptatibus quam dolor est, repellat qui eaque fugit sequi enim minus deleniti libero nesciunt officia corporis explicabo nihil itaque expedita beatae porro deserunt debitis earum molestiae repudiandae eum voluptatem. Voluptatem, sed, vitae ab dolorum quibusdam quaerat maxime praesentium commodi tempora sequi consectetur.",
    date: "October 23, 2023"
  },
  {
    id: 2,
    image: book,
    category: "Entrepreneurship",
    title:"Do this to prevent hypertension and sleep properly every day at night",
    // date: 'October 21, 2022',
    preview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia ducimus velit, reprehenderit ipsum nostrum assumenda facere non placeat at corrupti minus hic dignissimos!",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia ducimus velit, reprehenderit ipsum nostrum assumenda facere non placeat at corrupti minus hic dignissimos! Dolores vero vel, illum quibusdam voluptatem quidem esse optio ipsam reprehenderit quod odit cum voluptatibus deserunt ducimus magni voluptates. Fugit, quas sint distinctio rem culpa modi soluta repellendus nam ducimus et, ratione omnis eum! Odit consequatur at laudantium sapiente doloribus, rem iusto quas ad repellat quae nihil facilis voluptatem eos nobis voluptatibus minima fugiat, ratione eligendi, necessitatibus dolores? Quae dolor recusandae est! Aliquam eveniet dolorem quas unde eos itaque sint corporis, rem enim accusantium repudiandae dicta aspernatur possimus soluta dolorum tempora aut, modi eius harum! Sit nostrum dicta id mollitia nesciunt illum, minima laboriosam necessitatibus quam maxime autem quae quaerat ex dolores perferendis facilis quia tempore. Quam obcaecati quo, nulla excepturi vero dolor officia aut quidem incidunt eveniet voluptas dignissimos expedita. Omnis voluptas, ut laudantium architecto nostrum, quibusdam maxime eveniet voluptatem blanditiis at mollitia. Voluptatibus quam dolor est, repellat qui eaque fugit sequi enim minus deleniti libero nesciunt officia corporis explicabo nihil itaque expedita beatae porro deserunt debitis earum molestiae repudiandae eum voluptatem. Voluptatem, sed, vitae ab dolorum quibusdam quaerat maxime praesentium commodi tempora sequi consectetur.",
    date: "October 23, 2023"
  },
  {
    id: 3,
    image: book,
    category: "Marriage",
    title:"Do this to prevent hypertension and sleep properly every day at night",
    // date: 'October 21, 2022',
    preview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia ducimus velit, reprehenderit ipsum nostrum assumenda facere non placeat at corrupti minus hic dignissimos!",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia ducimus velit, reprehenderit ipsum nostrum assumenda facere non placeat at corrupti minus hic dignissimos! Dolores vero vel, illum quibusdam voluptatem quidem esse optio ipsam reprehenderit quod odit cum voluptatibus deserunt ducimus magni voluptates. Fugit, quas sint distinctio rem culpa modi soluta repellendus nam ducimus et, ratione omnis eum! Odit consequatur at laudantium sapiente doloribus, rem iusto quas ad repellat quae nihil facilis voluptatem eos nobis voluptatibus minima fugiat, ratione eligendi, necessitatibus dolores? Quae dolor recusandae est! Aliquam eveniet dolorem quas unde eos itaque sint corporis, rem enim accusantium repudiandae dicta aspernatur possimus soluta dolorum tempora aut, modi eius harum! Sit nostrum dicta id mollitia nesciunt illum, minima laboriosam necessitatibus quam maxime autem quae quaerat ex dolores perferendis facilis quia tempore. Quam obcaecati quo, nulla excepturi vero dolor officia aut quidem incidunt eveniet voluptas dignissimos expedita. Omnis voluptas, ut laudantium architecto nostrum, quibusdam maxime eveniet voluptatem blanditiis at mollitia. Voluptatibus quam dolor est, repellat qui eaque fugit sequi enim minus deleniti libero nesciunt officia corporis explicabo nihil itaque expedita beatae porro deserunt debitis earum molestiae repudiandae eum voluptatem. Voluptatem, sed, vitae ab dolorum quibusdam quaerat maxime praesentium commodi tempora sequi consectetur.",
    date: "October 23, 2023"
  },
  {
    id: 4,
    image: book,
    category: "Health",
    title:"Do this to prevent hypertension and sleep properly every day at night",
    // date: 'October 21, 2022',
    preview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia ducimus velit, reprehenderit ipsum nostrum assumenda facere non placeat at corrupti minus hic dignissimos!",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia ducimus velit, reprehenderit ipsum nostrum assumenda facere non placeat at corrupti minus hic dignissimos! Dolores vero vel, illum quibusdam voluptatem quidem esse optio ipsam reprehenderit quod odit cum voluptatibus deserunt ducimus magni voluptates. Fugit, quas sint distinctio rem culpa modi soluta repellendus nam ducimus et, ratione omnis eum! Odit consequatur at laudantium sapiente doloribus, rem iusto quas ad repellat quae nihil facilis voluptatem eos nobis voluptatibus minima fugiat, ratione eligendi, necessitatibus dolores? Quae dolor recusandae est! Aliquam eveniet dolorem quas unde eos itaque sint corporis, rem enim accusantium repudiandae dicta aspernatur possimus soluta dolorum tempora aut, modi eius harum! Sit nostrum dicta id mollitia nesciunt illum, minima laboriosam necessitatibus quam maxime autem quae quaerat ex dolores perferendis facilis quia tempore. Quam obcaecati quo, nulla excepturi vero dolor officia aut quidem incidunt eveniet voluptas dignissimos expedita. Omnis voluptas, ut laudantium architecto nostrum, quibusdam maxime eveniet voluptatem blanditiis at mollitia. Voluptatibus quam dolor est, repellat qui eaque fugit sequi enim minus deleniti libero nesciunt officia corporis explicabo nihil itaque expedita beatae porro deserunt debitis earum molestiae repudiandae eum voluptatem. Voluptatem, sed, vitae ab dolorum quibusdam quaerat maxime praesentium commodi tempora sequi consectetur.",
    date: "October 23, 2023"
  },
  {
    id: 5,
    image: book,
    category: "Entrepreneurship",
    title:"Do this to prevent hypertension and sleep properly every day at night",
    // date: 'October 21, 2022',
    preview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia ducimus velit, reprehenderit ipsum nostrum assumenda facere non placeat at corrupti minus hic dignissimos!",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia ducimus velit, reprehenderit ipsum nostrum assumenda facere non placeat at corrupti minus hic dignissimos! Dolores vero vel, illum quibusdam voluptatem quidem esse optio ipsam reprehenderit quod odit cum voluptatibus deserunt ducimus magni voluptates. Fugit, quas sint distinctio rem culpa modi soluta repellendus nam ducimus et, ratione omnis eum! Odit consequatur at laudantium sapiente doloribus, rem iusto quas ad repellat quae nihil facilis voluptatem eos nobis voluptatibus minima fugiat, ratione eligendi, necessitatibus dolores? Quae dolor recusandae est! Aliquam eveniet dolorem quas unde eos itaque sint corporis, rem enim accusantium repudiandae dicta aspernatur possimus soluta dolorum tempora aut, modi eius harum! Sit nostrum dicta id mollitia nesciunt illum, minima laboriosam necessitatibus quam maxime autem quae quaerat ex dolores perferendis facilis quia tempore. Quam obcaecati quo, nulla excepturi vero dolor officia aut quidem incidunt eveniet voluptas dignissimos expedita. Omnis voluptas, ut laudantium architecto nostrum, quibusdam maxime eveniet voluptatem blanditiis at mollitia. Voluptatibus quam dolor est, repellat qui eaque fugit sequi enim minus deleniti libero nesciunt officia corporis explicabo nihil itaque expedita beatae porro deserunt debitis earum molestiae repudiandae eum voluptatem. Voluptatem, sed, vitae ab dolorum quibusdam quaerat maxime praesentium commodi tempora sequi consectetur.",
    date: "October 23, 2023"
  },
  {
    id: 6,
    image: book,
    category: "Marriage",
    title:"Do this to prevent hypertension and sleep properly every day at night",
    // date: 'October 21, 2022',
    preview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia ducimus velit, reprehenderit ipsum nostrum assumenda facere non placeat at corrupti minus hic dignissimos!",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia ducimus velit, reprehenderit ipsum nostrum assumenda facere non placeat at corrupti minus hic dignissimos! Dolores vero vel, illum quibusdam voluptatem quidem esse optio ipsam reprehenderit quod odit cum voluptatibus deserunt ducimus magni voluptates. Fugit, quas sint distinctio rem culpa modi soluta repellendus nam ducimus et, ratione omnis eum! Odit consequatur at laudantium sapiente doloribus, rem iusto quas ad repellat quae nihil facilis voluptatem eos nobis voluptatibus minima fugiat, ratione eligendi, necessitatibus dolores? Quae dolor recusandae est! Aliquam eveniet dolorem quas unde eos itaque sint corporis, rem enim accusantium repudiandae dicta aspernatur possimus soluta dolorum tempora aut, modi eius harum! Sit nostrum dicta id mollitia nesciunt illum, minima laboriosam necessitatibus quam maxime autem quae quaerat ex dolores perferendis facilis quia tempore. Quam obcaecati quo, nulla excepturi vero dolor officia aut quidem incidunt eveniet voluptas dignissimos expedita. Omnis voluptas, ut laudantium architecto nostrum, quibusdam maxime eveniet voluptatem blanditiis at mollitia. Voluptatibus quam dolor est, repellat qui eaque fugit sequi enim minus deleniti libero nesciunt officia corporis explicabo nihil itaque expedita beatae porro deserunt debitis earum molestiae repudiandae eum voluptatem. Voluptatem, sed, vitae ab dolorum quibusdam quaerat maxime praesentium commodi tempora sequi consectetur.",
    date: "October 23, 2023"
  }
];

export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 1,
    },
  },
};

export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: i * 0.5 },
  }),
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const planetVariants = (direction) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : '100%',
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      duration: 1.8,
      delay: 0.5,
    },
  },
});

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.5,
    },
  },
};

const styles = {
  innerWidth: '2xl:max-w-[1280px] w-full',
  interWidth: 'lg:w-[80%] w-[100%]',

  paddings: 'sm:p-16 xs:p-8 px-6 py-12',
  yPaddings: 'sm:py-16 xs:py-8 py-12',
  xPaddings: 'sm:px-16 px-6',
  topPaddings: 'sm:pt-16 xs:pt-8 pt-12',
  bottomPaddings: 'sm:pb-16 xs:pb-8 pb-12',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-start items-start',
  flexEnd: 'flex justify-end',
  navPadding: 'pt-[98px]',

  // hero section
  heroHeading:
      'font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white',
  heroDText:
      'md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]',
};

export default styles;

