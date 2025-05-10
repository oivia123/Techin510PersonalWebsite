"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "description", label: "Description" },
  { id: "process", label: "Process" },
  { id: "solution", label: "Solution" },
  { id: "results", label: "Results" },
  { id: "learnings", label: "Learnings" },
];

export default function Project2() {
  useEffect(() => {
    if (!window.location.hash) {
      const el = document.getElementById("overview");
      if (el) {
        el.scrollIntoView({ behavior: "auto" });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* 顶部导航栏 */}
      <header className="w-full flex items-center px-8 py-6 border-b border-gray-100 bg-white sticky top-0 z-50 shadow-sm">
        <Link href="/" className="text-lg font-bold tracking-wide text-green-500">SHANGMING (OLIVIA) ZHUO</Link>
      </header>
      {/* 左侧锚点导航 */}
      <nav className="hidden lg:flex flex-col gap-4 sticky top-32 h-fit min-w-[160px] pl-8 text-sm text-gray-500">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="hover:text-green-600 transition font-medium">
            {s.label}
          </a>
        ))}
      </nav>
      {/* 右侧主内容区 */}
      <main className="flex-1 max-w-5xl mx-auto px-4 pb-16">
        {/* Overview */}
        <section id="overview" className="mb-16 scroll-mt-32">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-green-700">Home Care Service Design for the Elderly with Disabilities</h1>
          <div className="text-green-500 font-semibold mb-2 text-xs uppercase tracking-wider">Service System Design | User Research | UIUX Design</div>
          <div className="mb-4 text-sm text-gray-600">One-stop elderly care home service platform in Shanghai</div>
          <div className="flex flex-wrap gap-6 mb-6 text-xs text-gray-500">
            <div><span className="font-semibold text-gray-700">Company:</span> Shanghai Municipal Commission of Economy and Informatization</div>
            <div><span className="font-semibold text-gray-700">Role:</span> Service Designer, User Researcher, UIUX Designer</div>
            <div><span className="font-semibold text-gray-700">Team:</span> Shangming Zhuo, Yudi Cao</div>
            <div><span className="font-semibold text-gray-700">Year:</span> 2024</div>
          </div>
          <Image src="/2 Overview.jpg.png" alt="Overview" width={1200} height={800} className="rounded-xl border mb-4" />
        </section>
        {/* Description */}
        <section id="description" className="mb-16 scroll-mt-32">
          <h2 className="text-xl font-bold mb-4">Project Description</h2>
          <div className="mb-4">
            <div className="font-semibold mb-1">Problem</div>
            <div className="text-gray-700 text-sm mb-2">The current public home care services provided by the Shanghai municipal government for elderly individuals with disabilities—such as the Long-term Care Insurance and the community-based home care system—face challenges: Families of disabled elderly individuals find it difficult to fully understand the policies they are entitled to, the service content and quality within the stipulated home care service hours lack clear standards, and caregivers often lack experience in communicating with families and addressing issues. These problems create inconvenience and challenges for accompanying family members, caregivers, and community eldercare workers.</div>
            <div className="font-semibold mb-1">Solution</div>
            <div className="text-gray-700 text-sm mb-2">"Hu Xiao Hu" (Shanghai Little Helper) addresses these issues systematically, creating a one-stop service platform and enhancing the care service system. It ensures the precise delivery of care policies, efficient organization of care services, and reduces the pressure on both service recipients and industry personnel. By improving service accuracy and efficiency, it contributes to the sustainable development of public eldercare services in Shanghai. Specifically, the solution focuses on two key components: providing specific applicable policy resources and organizing appropriate care service components to ensure more accurate, accessible, and personalized service delivery.</div>
            <div className="font-semibold mb-1">Background</div>
            <div className="text-gray-700 text-sm mb-2">Professor Fei Hu, commissioned by the Shanghai Municipal Commission of Economy and Informatization, initiated a project to identify service gaps in Shanghai's public service system and propose service improvements. As part of this initiative, a team of 12 members, including myself, conducted a PEST analysis of public services in Shanghai and identified gaps and improvement opportunities in long-term care services for elderly individuals with disabilities. Building upon these findings, Yudi and I carried out an in-depth study focusing on the Siping Road Subdistrict in Yangpu District, Shanghai.</div>
            <div className="font-semibold mb-1">Deliverables</div>
            <div className="text-gray-700 text-sm">1. The design of care service system and key service touchpoints.<br/>2. A research paper is currently under submission, titled "Mass Customization as a Model for Precision Public Service Delivery: A Case Study on Long-Term Care Insurance Home Care for Disabled Elderly".</div>
          </div>
        </section>
        {/* Process */}
        <section id="process" className="mb-16 scroll-mt-32">
          <h2 className="text-xl font-bold mb-4">Process</h2>
          {/* TODO: Add process steps and images as needed, using the Framer reference for structure */}
          <div className="mb-8">
            <h3 className="font-semibold mb-2">STEP 1 — Desktop Research & Preliminary Investigation</h3>
            <p className="text-gray-700 text-sm mb-4">Conducted desktop research and preliminary field investigation to understand the overall context. Confirmed the inclusion of three key roles—family members, caregivers, and service managers—in the in-depth interviews, and finalized the interview guide along with the toolkits used for information recording and stakeholder interaction during the interviews.</p>
            <Image src="/2 Process 1.png" alt="Step 1" width={1200} height={800} className="rounded-xl border mb-8" />
          </div>
          <div className="mb-8">
            <h3 className="font-semibold mb-2">STEP 2 — In-depth Interviews with Key Stakeholders</h3>
            <p className="text-gray-700 text-sm mb-4">Conducted in-depth interviews with key stakeholders using self-created toolkits to obtain detailed research evidence.</p>
            <Image src="/2 Process 2.jpg" alt="Step 2" width={1200} height={800} className="rounded-xl border mb-8" />
          </div>
          <div className="mb-8">
            <h3 className="font-semibold mb-2">STEP 3 — Analysis and Synthesis of Research Evidence</h3>
            <p className="text-gray-700 text-sm mb-4">Organized and analyzed the research evidence, including the development of a Service Ecology Map, Family Types and Target Family Types, and Persona of Family Caregivers, Stakeholder Map, System Map, and Customer Profile. The System Map fully illustrates the absence, redundancy, or institutional issues of material, financial, information, and labor flows among different stakeholders within the system, as well as the effective resources currently available through these flows. By mapping the Customer Profiles of the three key roles, we identified the connections and conflicts between their jobs, pains, and gains under six scenarios, allowing us to derive system-level takeaways rather than insights from a single-user perspective.</p>
            <Image src="/2 Process 3.jpg" alt="Step 3-1" width={1200} height={800} className="rounded-xl border mb-8" />
            <Image src="/2 Process 4.jpg" alt="Step 3-2" width={1200} height={800} className="rounded-xl border mb-8" />
            <Image src="/2 Process 5.jpg" alt="Step 3-3" width={1200} height={800} className="rounded-xl border mb-8" />
            <Image src="/2 Process 6.png" alt="Step 3-4" width={1200} height={800} className="rounded-xl border mb-8" />
            <Image src="/2 Process 7.png" alt="Step 3-5" width={1200} height={800} className="rounded-xl border mb-8" />
          </div>
          <div className="mb-8">
            <h3 className="font-semibold mb-2">STEP 4 — Structuring "How Might We" Questions and Generating Service Ideas</h3>
            <p className="text-gray-700 text-sm mb-4">We integrated the pain points, needs, and available resources across the seven aspects and structured seven "How Might We" questions accordingly. Based strictly on these "How Might We" questions, we proposed a series of service improvement ideas, aiming to efficiently and precisely address user problems by leveraging the currently available resources. Furthermore, we organized these ideas according to their importance and relevance.</p>
            <Image src="/2 Process 8.png" alt="Step 4-1" width={1200} height={800} className="rounded-xl border mb-8" />
            <Image src="/2 Process 9.png" alt="Step 4-2" width={1200} height={800} className="rounded-xl border mb-8" />
            <Image src="/2 Process 10.png" alt="Step 4-3" width={1200} height={800} className="rounded-xl border mb-8" />
            <Image src="/2 Process 11.png" alt="Step 4-4" width={1200} height={800} className="rounded-xl border mb-8" />
          </div>
        </section>
        {/* Solution */}
        <section id="solution" className="mb-16 scroll-mt-32">
          <h2 className="text-xl font-bold mb-4">Solution</h2>
          <div className="mb-8">
            <p className="text-gray-700 text-sm mb-6">For the ideas derived from the research analysis, the "Hu Xiao Hu" platform proposes a systematic solution that enhances service accuracy and quality assurance. The solution consists of three key components: first, the provision of specific and accessible policy resources to improve information transparency and policy accessibility; second, the rational arrangement of personalized care service components to better match service content with family needs and service capacity; and third, the provision of targeted support and guidance for caregivers to improve their service experience and problem-solving capacity. This project specifically focuses on the first two components—improving policy accessibility and organizing personalized care service content—as the primary directions for service optimization.</p>
            <Image src="/2 Solution 1.png" alt="Solution 1" width={1200} height={800} className="rounded-xl border mb-8" />
            <Image src="/2 Solution 2.png" alt="Solution 2" width={1200} height={800} className="rounded-xl border mb-8" />
            <Image src="/2 Solution 3.png" alt="Solution 3" width={1200} height={800} className="rounded-xl border mb-8" />
          </div>
        </section>
        {/* Results */}
        <section id="results" className="mb-16 scroll-mt-32">
          <h2 className="text-xl font-bold mb-4">Results</h2>
          <div className="text-gray-700 text-sm mb-2 font-semibold">Project Impact</div>
          <div className="text-gray-700 text-sm mb-4">Our project was successfully presented to the Director of the Siping Road Subdistrict Office in Yangpu District, Shanghai. The director expressed high recognition of the proposed solution and hoped for its prompt implementation. The proposal has already been shared with frontline community eldercare staff for further adoption. During the internal presentation and evaluation, our project received the highest score among eight competing teams.</div>
          <div className="text-gray-700 text-sm mb-2 font-semibold">Presentation at WDCC</div>
          <div className="text-gray-700 text-sm mb-4">We were invited to present this project as a representative case of public service design practice in Shanghai at the 2024 World Design Cities Conference (WDCC).</div>
          <div className="text-gray-700 text-sm mb-2 font-semibold">Paper Submission (ServDes 2025)</div>
          <div className="text-gray-700 text-sm mb-4">We developed an academic paper based on this project, which is currently under review at ServDes 2025.</div>
          <div className="text-gray-700 text-sm mb-2 font-semibold">Home+ Service Design Competition</div>
          <div className="text-gray-700 text-sm">Our project received the Excellence Award in the Home+ Service Design Competition.</div>
        </section>
        {/* Learnings */}
        <section id="learnings" className="mb-16 scroll-mt-32">
          <h2 className="text-xl font-bold mb-4">Learnings</h2>
          <div className="mb-2 font-semibold text-gray-700">Service Design — The Service Recipient Is Not Always the King</div>
          <div className="text-gray-700 text-sm mb-4">In my previous user experience projects, I was accustomed to a user-centered design mindset: uncovering user needs through research and striving to meet them through design. However, service design—especially in the public sector—requires a systemic perspective. With limited governmental resources, the challenge becomes "dancing in shackles": how to allocate finite resources efficiently while still ensuring accessibility and equity in public service delivery.</div>
          <div className="mb-2 font-semibold text-gray-700">User Research — Toolkits Should Be Designed with Empathy</div>
          <div className="text-gray-700 text-sm">Users are not designers. We should not assume they know everything, nor should we ask overly technical questions based on our own accumulated research knowledge. Instead, we must adopt the perspective of the interviewee and thoughtfully design toolkits that guide them to share information relevant to our research focus. In our early research, we mistakenly designed a printed form for care workers to fill out, overlooking that many had limited literacy and found written tasks difficult. The form proved ineffective, and we later shifted to a verbal Q&A format, which allowed for more accessible and insightful responses.</div>
        </section>
      </main>
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
                <li><a href="/" className="hover:text-green-600">Home</a></li>
                <li><a href="/#about" className="hover:text-green-600">About</a></li>
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