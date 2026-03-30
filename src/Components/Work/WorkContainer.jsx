import { FiArrowUpRight } from "react-icons/fi";
import WorkCard from "./WorkCard";

function WorkContainer() {
  const workData = [
    {
      title: "Defund – Decentralized Crowdfunding Platform",
      image:
        "https://github.com/anuragbansall/Defund/raw/main/client/public/demo/dashboard.png",
      description:
        "A non-custodial crowdfunding platform built on Ethereum (Sepolia testnet) that enables users to create and fund campaigns transparently on-chain. Integrates MetaMask for secure wallet interactions and eliminates intermediaries by sending funds directly to campaign owners. Includes an AI-powered helper to enhance campaign titles and descriptions for better impact.",
      tags: [
        "React.js",
        "Solidity",
        "Ethereum",
        "Web3",
        "MetaMask",
        "Sepolia Testnet",
        "AI",
      ],
      link: "https://defund.vercel.app/",
    },
    {
      title: "Blendify – Real-Time Image Editor",
      image: "https://i.ibb.co/CsYxkRBF/Screenshot-2026-03-30-215625.png",
      description:
        "A browser-based image editor that enables real-time visual adjustments using intuitive controls. Users can modify brightness, contrast, saturation, and more with instant feedback, all powered by client-side processing with no backend required. Includes seamless image export functionality.",
      tags: ["React.js", "HTML5", "CSS3", "Canvas API"],
      link: "https://blendify-delta.vercel.app/",
    },
    {
      title: "Kensaku – RAG-Powered AI Chat App",
      image: "https://i.ibb.co/GvStsK01/Screenshot-2026-03-30-220441.png",
      description:
        "An AI chat application built using Retrieval-Augmented Generation (RAG) to deliver accurate, context-aware responses. It enhances traditional LLM outputs by retrieving relevant external knowledge, reducing hallucinations and improving answer reliability. Designed with a clean chat interface for seamless user interaction.",
      tags: ["React.js", "Node.js", "RAG", "LLM", "AI", "MongoDB"],
      link: "https://chat-gpt-online-ai.vercel.app/",
    },
    {
      title: "Fokus – Influencer Brand UI Experience",
      image: "https://i.ibb.co/qF4MBgYY/Screenshot-2026-03-30-220548.png",
      description:
        "A modern, high-conversion UI design inspired by the Fokus drink brand by Triggered Insaan. Built as part of an influencer hackathon, the project focuses on creating an engaging, visually rich product experience with smooth interactions, responsive layouts, and a strong brand identity using React and Tailwind CSS.",
      tags: [
        "React.js",
        "Tailwind CSS",
        "UI/UX",
        "Responsive Design",
        "Frontend Development",
      ],
      link: "https://fokus-energy.vercel.app/",
    },
    {
      title: "macOS Web – OS Simulator in Browser",
      image: "https://i.ibb.co/pBgFzMQv/Screenshot-2026-03-30-220714.png",
      description:
        "A macOS-inspired web application that simulates a real desktop operating system experience directly in the browser. Features draggable windows, a dynamic dock, and smooth UI interactions to replicate native macOS behavior using modern frontend technologies.",
      tags: [
        "React.js",
        "Tailwind CSS",
        "Framer Motion",
        "UI/UX",
        "Frontend Development",
      ],
      link: "https://macos-web-online.vercel.app/",
    },
    {
      title: "FloatDocs – Draggable Notes App",
      image:
        "https://github.com/anuragbansall/FloatDocs/raw/main/public/product-demo.png",
      description:
        "A minimalist note-taking application where users can create and manage sticky notes with smooth drag-and-drop interactions. Built with a focus on fluid UI experience, allowing users to freely position notes across the canvas using performant animations.",
      tags: [
        "React.js",
        "Framer Motion",
        "Drag & Drop",
        "UI/UX",
        "Frontend Development",
      ],
      link: "https://float-docs.vercel.app/",
    },
    {
      title: "ScreenVerse – Movies & TV Discovery App",
      image:
        "https://github.com/anuragbansall/ScreenVerse/raw/main/public/product.png",
      description:
        "A content discovery platform that helps users explore trending movies and TV shows in real time. Integrates with the IMDb API to fetch up-to-date data, featuring search, filtering, and categorized browsing with a clean and responsive UI.",
      tags: [
        "React.js",
        "Vanilla CSS",
        "REST API",
        "IMDb API",
        "Frontend Development",
      ],
      link: "https://screen-verse.vercel.app/",
    },
    {
      title: "Quizly – AI Quiz Generator",
      image: "/images/quizly.png",
      description:
        "A mobile app that generates multiple-choice quizzes instantly based on any user-provided topic. Leverages AI to create dynamic questions on demand, offering an interactive and engaging learning experience on the go.",
      tags: ["React Native", "Expo", "AI", "Mobile App", "JavaScript"],
      link: "https://github.com/anuragbansall/Quizly",
    },

    {
      title: "DeCare – Decentralized Healthcare Records",
      image: "https://i.ibb.co/M5g6r2Qy/Screenshot-2026-03-30-220913.png",
      description:
        "A decentralized healthcare application that enables secure collaboration between patients and providers using tamper-evident medical records. Built on a minimal and auditable Solidity smart contract, with a clean React + Vite + Tailwind UI and ethers v6 for seamless wallet and contract interactions.",
      tags: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Solidity",
        "Ethereum",
        "Ethers.js",
        "Web3",
      ],
      link: "https://decare-ten.vercel.app",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-8 md:gap-10">
      <section>
        <h3 className="text-xl md:text-2xl font-semibold mb-5">Projects</h3>
        <div className="columns-[22rem] md:columns-[28rem] gap-5">
          {workData.map((item, index) => (
            <WorkCard
              image={item.image}
              link={item.link}
              title={item.title}
              tags={item.tags}
              description={item.description}
              key={item.title}
              index={index}
            />
          ))}
        </div>
        <div className="mt-8 md:mt-10 flex justify-center">
          <a
            href="https://github.com/anuragbansall/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-zinc-300 px-6 py-3 text-sm md:text-base font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[--accent] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
          >
            View More on GitHub
            <span className="text-2xl ml-2 text-[var(--accent)]">
              <FiArrowUpRight />
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default WorkContainer;
