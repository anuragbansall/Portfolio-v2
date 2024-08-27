import React from 'react'
import WorkCard from './WorkCard'

function WorkContainer() {

  const workData = [
    {
      image: "https://github.com/anuragbansall/React-Shopping-Web-App/raw/main/public/product.png",
      link: "https://react-shopping-web-app.vercel.app/",
      title: "Shopping Web App",
      description: "This project is a basic e-commerce web application built with React.js and Tailwind CSS. It showcases product data in cards, allowing users to view details, add, delete, and edit products, with all data stored locally.",
      tags: ["React.js", "Tailwind CSS"],
    },
    {
      image: "https://github.com/anuragbansall/Typing-Test-Online/raw/main/assets/TypingTestWeb.png",
      link: "https://typing-test-online.vercel.app/",
      title: "Typing Test Online",
      description: "This website allows users to test and improve their typing speed by typing a given random paragraph. Upon completion, users can analyze their performance by viewing their words per minute (WPM).",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: "https://i.ibb.co/0twqmw4/livecoderr.png",
      link: "https://livecoderr.vercel.app/",
      title: "LiveCoderr",
      description: "An innovative online platform enabling users to code HTML, CSS, and JavaScript in real-time and visualize the output instantly.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: "https://github.com/anuragbansall/Refokus-UI-Clone/raw/main/public/product.png",
      link: "https://refokus-ui-clone-three.vercel.app/",
      title: "Refokus - UI Clone",
      description: "This project is a responsive website built with React.js and Tailwind CSS, featuring smooth animations powered by Framer Motion. The goal was to create an engaging user experience with seamless transitions and modern design practices. It was a rewarding experience to bring this project to life.",
      tags: ["React.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      image: "https://github.com/anuragbansall/Music-Card-Favorites/raw/main/public/product.png",
      link: "https://music-card-favorites.vercel.app/",
      title: "Music Card Favorites",
      description: "A simple React.js project styled with Tailwind CSS, featuring music cards where users can add tracks to their favorites and see the favorite count increase with each click.",
      tags: ["React.js", "Tailwind CSS"],
    },
    {
      image: "https://github.com/anuragbansall/Random-User-Card/raw/main/assets/product.png",
      link: "https://random-user-card-alpha.vercel.app/",
      title: "Random User Card Generator",
      description: "This project is a simple web application that generates a random user data card with just a click of a button. The user data includes details like name, email, gender, and more, displayed in a user-friendly card format.",
      tags: ["React.js", "Tailwind CSS", "Framer Motion"],
    },
  ]

  return (
    <div className='grid place-items-center md:grid-cols-2 gap-6'>
        {
          workData.map((item, index) => (
            <WorkCard
              image={item.image}
              link={item.link}
              title={item.title}
              tags={item.tags}
              description={item.description}
            />
          ))
        }
    </div>
  )
}

export default WorkContainer