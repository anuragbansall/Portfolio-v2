import React from "react";
import WorkCard from "./WorkCard";

function WorkContainer() {
  const workData = [
    {
      title: "ScreenVerse",
      image:
        "https://github.com/anuragbansall/ScreenVerse/raw/main/public/product.png",
      link: "https://screen-verse.vercel.app//",
      description:
        "ScreenVerse allows users to discover the latest popular and trending movies and TV series. Users can view detailed information, such as descriptions, trailers, where the content is available for streaming, and much more. Additionally, users can explore detailed profiles of their favorite celebrities.",
      tags: ["React.js", "Tailwind CSS", "Redux Toolkit"],
    },
    {
      title: "FloatDocs",
      image:
        "https://github.com/anuragbansall/FloatDocs/raw/main/public/product-demo.png",
      link: "https://float-docs.vercel.app/",
      description:
        "FloatDocs is an innovative task management tool that reimagines the traditional to-do list. Each task is represented as a sticky note, which can be freely dragged and placed anywhere on the screen. This dynamic interface provides an interactive and visually engaging way to organize and manage your tasks.",
      tags: ["React.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Drawit",
      image: "https://github.com/anuragbansall/Drawit/raw/main/assets/Demo.png",
      link: "https://drawit-online.vercel.app/",
      description:
        "Drawit is an interactive whiteboard drawing app that lets users draw, erase, and customize their artwork with different pencil sizes and colors. It's designed for creative expression and offers a simple, user-friendly interface.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Shopping Web App",
      image:
        "https://github.com/anuragbansall/React-Shopping-Web-App/raw/main/public/product.png",
      link: "https://react-shopping-web-app.vercel.app/",
      description:
        "This project is a basic e-commerce web application built with React.js and Tailwind CSS. It showcases product data in cards, allowing users to view details, add, delete, and edit products, with all data stored locally.",
      tags: ["React.js", "Tailwind CSS"],
    },
    {
      title: "Typing Test Online",
      image:
        "https://github.com/anuragbansall/Typing-Test-Online/raw/main/assets/TypingTestWeb.png",
      link: "https://typing-test-online.vercel.app/",
      description:
        "This website allows users to test and improve their typing speed by typing a given random paragraph. Upon completion, users can analyze their performance by viewing their words per minute (WPM).",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "LiveCoderr",
      image: "https://i.ibb.co/0twqmw4/livecoderr.png",
      link: "https://livecoderr.vercel.app/",
      description:
        "An innovative online platform enabling users to code HTML, CSS, and JavaScript in real-time and visualize the output instantly.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Refokus - UI Clone",
      image:
        "https://github.com/anuragbansall/Refokus-UI-Clone/raw/main/public/product.png",
      link: "https://refokus-ui-clone-three.vercel.app/",
      description:
        "This project is a responsive website built with React.js and Tailwind CSS, featuring smooth animations powered by Framer Motion. The goal was to create an engaging user experience with seamless transitions and modern design practices. It was a rewarding experience to bring this project to life.",
      tags: ["React.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Music Card Favorites",
      image:
        "https://github.com/anuragbansall/Music-Card-Favorites/raw/main/public/product.png",
      link: "https://music-card-favorites.vercel.app/",
      description:
        "A simple React.js project styled with Tailwind CSS, featuring music cards where users can add tracks to their favorites and see the favorite count increase with each click.",
      tags: ["React.js", "Tailwind CSS"],
    },
    {
      title: "Random User Card Generator",
      image:
        "https://github.com/anuragbansall/Random-User-Card/raw/main/assets/product.png",
      link: "https://random-user-card-alpha.vercel.app/",
      description:
        "This project is a simple web application that generates a random user data card with just a click of a button. The user data includes details like name, email, gender, and more, displayed in a user-friendly card format.",
      tags: ["React.js", "Tailwind CSS", "Framer Motion"],
    },
  ];

  return (
    <div className="columns-[30rem] column-gap">
      {workData.map((item, index) => (
        <WorkCard
          image={item.image}
          link={item.link}
          title={item.title}
          tags={item.tags}
          description={item.description}
          key={index}
          index={index}
        />
      ))}
    </div>
  );
}

export default WorkContainer;
