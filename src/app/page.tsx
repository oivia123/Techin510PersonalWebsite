"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState("All");
  const projects = [
    {
      id: 1,
      category: "User Research",
      title: "Coffee Packaging User Research for Gen Z – for Goglio",
      date: "Feb 2024 - Mar 2024",
      tag: "User Research",
      img: "/1731558279.jpg",
      desc: "Graphic findings, user research for Gen Z coffee packaging preferences.",
    },
    {
      id: 2,
      category: "Service System",
      title: "Home Care Service Design for the Elderly with Disabilities",
      date: "Mar 2024 - Aug 2024",
      tag: "Service System",
      img: "/截屏2025-04-06 14.24.58.png",
      desc: "Service system design for elderly home care, focusing on accessibility and user needs.",
    },
  ];
  let filtered = projects;
  if (filter === "User Research") filtered = [projects[0]];
  if (filter === "Service System" || filter === "Interface") filtered = [projects[1]];

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans">
      {/* 顶部导航栏 */}
      <header className="w-full flex justify-between items-center px-8 py-6 border-b border-gray-100 bg-white sticky top-0 z-50 shadow-sm">
        <div className="text-lg font-bold tracking-wide text-green-500">SHANGMING (OLIVIA) ZHUO</div>
        <nav className="space-x-8 text-sm font-medium">
          <Link href="#" className="hover:text-green-500 transition">Home</Link>
          <Link href="#portfolio" className="hover:text-green-500 transition">Portfolio</Link>
          <Link href="#experience" className="hover:text-green-500 transition">Experience</Link>
          <Link href="#references" className="hover:text-green-500 transition">References</Link>
          <Link href="#about" className="hover:text-green-500 transition">About</Link>
        </nav>
      </header>

      {/* Hero 区域 */}
      <section id="home" className="max-w-4xl mx-auto mt-48 flex flex-col items-center text-center scroll-mt-24">
        <div className="text-xs text-green-500 font-semibold mb-2">Open to Work (User Researcher / PM / UIUX Designer)</div>
        <h1 className="text-3xl sm:text-5xl font-bold mb-6 leading-snug tracking-tight">
          Hi, I'm Shangming—a designer who enjoys turning constraints into opportunities and delivering creative solutions for every stakeholder
        </h1>
        <div className="flex gap-4 mt-2">
          <Link href="#about" className="px-6 py-2 rounded-full bg-green-500 text-white font-semibold shadow hover:bg-green-600 transition">Read More</Link>
          <Link href="#portfolio" className="px-6 py-2 rounded-full border border-green-500 text-green-500 font-semibold hover:bg-green-50 transition">Portfolio</Link>
        </div>
      </section>

      {/* Portfolio 区域 */}
      <section id="portfolio" className="max-w-4xl mx-auto mt-32 px-4 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-8">Portfolio</h2>
        {/* 分类筛选 */}
        <div className="flex flex-wrap gap-4 mb-8 text-sm font-medium">
          <button
            className={`px-4 py-1 rounded-full ${filter === "All" ? "bg-green-500 text-white shadow" : "border border-green-500 text-green-500 hover:bg-green-50"} transition`}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            className={`px-4 py-1 rounded-full ${filter === "User Research" ? "bg-green-500 text-white shadow" : "border border-green-500 text-green-500 hover:bg-green-50"} transition`}
            onClick={() => setFilter("User Research")}
          >
            User Research
          </button>
          <button
            className={`px-4 py-1 rounded-full ${filter === "Service System" ? "bg-green-500 text-white shadow" : "border border-green-500 text-green-500 hover:bg-green-50"} transition`}
            onClick={() => setFilter("Service System")}
          >
            Service System
          </button>
          <button
            className={`px-4 py-1 rounded-full ${filter === "Interface" ? "bg-green-500 text-white shadow" : "border border-green-500 text-green-500 hover:bg-green-50"} transition`}
            onClick={() => setFilter("Interface")}
          >
            Interface
          </button>
        </div>
        {/* 项目卡片列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((project) => (
            <Link
              key={project.id}
              href={
                project.id === 1
                  ? "/coffee-packaging-user-research-for-gen-z-for-goglio"
                  : "/home-care-service-design-for-the-elderly-with-disabilities"
              }
              className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden flex flex-col transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              style={{ textDecoration: 'none' }}
            >
              <div className="w-full aspect-video relative bg-white">
                <Image src={project.img} alt={project.title} fill style={{ objectFit: 'contain' }} sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-400">{project.date}</span>
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-semibold">{project.tag}</span>
                </div>
                <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{project.desc}</p>
                <span className="mt-auto text-green-500 hover:underline text-sm font-medium">Read More</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Experiences 区域 */}
      <section id="experience" className="max-w-4xl mx-auto mt-32 px-4 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-8">Experiences</h2>
        <div className="flex flex-col gap-12">
          {/* Cargill 1 */}
          <div className="flex gap-6 items-start">
            <Image src="/cargill.png" alt="Cargill Logo" width={48} height={48} className="object-contain mt-1" />
            <div>
              <div className="font-semibold text-lg">Cargill Investment (China) Co., Ltd.</div>
              <div className="text-green-600 font-medium text-sm mb-1">Digital Marketing PM Intern <span className="text-gray-400 font-normal">(Oct. 2023 ‐ Jun. 2024)</span></div>
              <div className="text-gray-700 text-sm leading-relaxed">
                Led the development of a smart dairy cow database within 5 months, successfully creating an automated product that significantly improved data processing efficiency. Collaborated with business stakeholders to define customer requirements, managed vendors, and supported post-launch testing and iteration to complete the project. Leveraged AI tools to generate market insights, achieving over 1,000 shares and strengthening client relationships. Designed impactful keynote presentations for high-profile summits, showcasing exceptional skills in data visualization and communication.
              </div>
            </div>
          </div>
          {/* Bosch */}
          <div className="flex gap-6 items-start">
            <Image src="/bosch.png" alt="Bosch Logo" width={48} height={48} className="object-contain mt-1" />
            <div>
              <div className="font-semibold text-lg">Bosch (China) Investment Ltd.</div>
              <div className="text-green-600 font-medium text-sm mb-1">UI/UX Intern <span className="text-gray-400 font-normal">(Jul. 2023 ‐ Oct. 2023)</span></div>
              <div className="text-gray-700 text-sm leading-relaxed">
                Conducted interviews with APAC leaders to develop a GS service evaluation framework and delivered a UX report with strategic improvements; mapped user journeys, facilitated workshops, and provided insights to enhance LBP services; researched China's new energy vehicle market and delivered a detailed report praised by German HQ; delivered UI/UX training on storyboarding, journey mapping, and Figma design; created project showcases, team branding materials, and event designs.
              </div>
            </div>
          </div>
          {/* Cargill 2 */}
          <div className="flex gap-6 items-start">
            <Image src="/cargill.png" alt="Cargill Logo" width={48} height={48} className="object-contain mt-1" />
            <div>
              <div className="font-semibold text-lg">Cargill Investment (China) Co., Ltd.</div>
              <div className="text-green-600 font-medium text-sm mb-1">Market Intern <span className="text-gray-400 font-normal">(Feb. 2023 ‐ May. 2023)</span></div>
              <div className="text-gray-700 text-sm leading-relaxed">
                Designed and supervised booth materials and on-site operations for a 3-day farming conference, ensuring smooth execution; defined virtual character usage scenarios, developed character stories, and collaborated with suppliers to evaluate feasibility and costs; created brand-aligned posters, banners, and promotional videos, managing content distribution on WeChat and Tiktok to enhance online visibility.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* References 区域 */}
      <section id="references" className="max-w-4xl mx-auto mt-32 px-4 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-8">References</h2>
        <div className="flex flex-col gap-10">
          {/* 推荐语1 */}
          <div>
            <p className="text-base text-gray-800 mb-4 italic border-l-4 border-green-400 pl-4">“Shangming stands out for her perseverance, clear logical thinking, and diligence. At Bosch, she worked on key UX projects such as EPIC and OKR, producing well-organized research reports and providing valuable personal insights in interviews and data analysis. Her dedication, proactivity, and problem-solving abilities consistently exceeded expectations.”</p>
            <div className="ml-4">
              <div className="font-semibold text-green-700">Li Pan</div>
              <div className="text-sm text-gray-500">Regional Lead for GS UX, Bosch APAC</div>
            </div>
          </div>
          {/* 推荐语2 */}
          <div>
            <p className="text-base text-gray-800 mb-4 italic border-l-4 border-green-400 pl-4">“Shangming impressed me with her diligence, quick response, and attention to detail. She first joined the CAN team as a marketing intern supporting digital product-related tasks. Due to her outstanding performance, I later recruited her as a Product Manager Intern. In this role, she demonstrated strong skills in information organization, communication, and graphic design, and helped integrate emerging tech tools to improve team productivity. In the Automated Dairy Cow Database project, she actively coordinated between development and business teams, promoting collaboration and ensuring steady progress through effective time management.”</p>
            <div className="ml-4">
              <div className="font-semibold text-green-700">Adam Wang</div>
              <div className="text-sm text-gray-500">Digital Marketing Lead, Cargill Animal Nutrition</div>
            </div>
          </div>
        </div>
      </section>

      {/* About 区域 */}
      <section id="about" className="max-w-4xl mx-auto mt-32 px-4 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-8">I'm Shangming</h2>
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* 文字介绍 */}
          <div className="md:w-1/2 w-full text-base text-gray-800 leading-relaxed flex-1">
            <p className="mb-4">Nice to meet you! 👋👋</p>
            <p className="mb-4">I'm currently pursuing a dual Master's degree: an <b>MS in Technology Innovation</b> at the University of Washington and an <b>MA in Product Service System Design</b> at Tongji University. UW gives me the tools to bring smart-connected ideas to life, while Tongji has grounded me in design thinking and system-level problem solving.</p>
            <p className="mb-4">This journey has shaped me into a confident, hands-on learner. I feel just as comfortable having in-depth conversations with families of disabled elders as I do soldering circuits, reading datasheets, designing PCBs, building prototypes, or training machine learning models.</p>
            <p className="mb-4">Outside of work, I'm a baking blogger🧑‍🍳 (I share my own 🍰recipes on social media), a tennis player🎾, a climber🧗, and someone who loves sketching quietly in museums🎨.</p>
            <p className="mb-4">I'm deeply focused and persistent. I thrive on learning through challenge and growth—after all, the most meaningful UX project I'll ever design is my own life.</p>
          </div>
          {/* 个人照片 */}
          <div className="flex-shrink-0 w-full md:w-1/2 flex-1">
            <div className="rounded-xl overflow-hidden shadow border border-gray-100 bg-white w-full h-full relative">
              <Image src="/photo.jpeg" alt="Shangming Zhuo" fill style={{objectFit: 'cover'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer 区域 */}
      <footer className="w-full border-t border-gray-200 mt-32 py-10 bg-white text-gray-700">
        <div className="max-w-4xl mx-auto flex flex-col gap-4 px-4">
          <div>
            <div className="font-bold text-2xl text-green-700 mb-1">Shangming (Olivia) Zhuo</div>
            <div className="text-green-500 font-semibold mb-6 uppercase text-xs tracking-wider">User Researcher | PM | UIUX Designer</div>
          </div>
          <div className="flex flex-row gap-32 mb-4">
            <div>
              <div className="font-semibold text-gray-500 mb-1 uppercase text-sm tracking-wider">Navigation</div>
              <ul className="text-base space-y-1">
                <li><a href="#" className="hover:text-green-600">Home</a></li>
                <li><a href="#about" className="hover:text-green-600">About</a></li>
                <li><a href="/Product Designer&UIUX Designer_ShangmingZhuo.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">Resume</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-gray-500 mb-1 uppercase text-sm tracking-wider">Portfolio</div>
              <ul className="text-base space-y-1">
                <li><a href="/coffee-packaging-user-research-for-gen-z-for-goglio" className="hover:text-green-600">Project 1</a></li>
                <li><a href="/home-care-service-design-for-the-elderly-with-disabilities" className="hover:text-green-600">Project 2</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center text-xs text-gray-400 mt-4 gap-2">
            <div>© 2025 – Shangming Zhuo, ALL RIGHTS RESERVED</div>
            <div className="space-x-4">
              <a href="#" className="hover:text-green-600">Privacy Policy</a>
              <a href="#" className="hover:text-green-600">Cookies</a>
              <a href="#" className="hover:text-green-600">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
