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

export default function Project1() {
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
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-green-700">Coffee Packaging User Research for Gen Z – for Goglio</h1>
          <div className="text-green-500 font-semibold mb-2 text-xs uppercase tracking-wider">User Research</div>
          <div className="mb-4 text-sm text-gray-600">Identify packaging preferences and deliver design briefs for Gen Z coffee consumers</div>
          <div className="flex flex-wrap gap-6 mb-6 text-xs text-gray-500">
            <div><span className="font-semibold text-gray-700">Company:</span> Goglio S.p.A.</div>
            <div><span className="font-semibold text-gray-700">Role:</span> User Researcher</div>
            <div><span className="font-semibold text-gray-700">Team:</span> Yue Yu, Shangming Zhuo, Zeyu Dai, Bingyan Zheng</div>
            <div><span className="font-semibold text-gray-700">Year:</span> 2024</div>
          </div>
          <Image src="/1 Overview.jpg" alt="Overview" width={1200} height={800} className="rounded-xl border mb-4" />
        </section>
        {/* Description */}
        <section id="description" className="mb-16 scroll-mt-32">
          <h2 className="text-xl font-bold mb-4">Project Description</h2>
          <div className="mb-4">
            <div className="font-semibold mb-1">Problem</div>
            <div className="text-gray-700 text-sm mb-2">Goglio has already established advanced vacuum packaging technology and a mature production line. However, the wide variety of packaging designs and functional variations available on the market today have prompted the company to reflect: <i>beyond vacuum-sealed freshness, what other needs and expectations do users have for coffee packaging?</i></div>
            <div className="font-semibold mb-1">Solution</div>
            <div className="text-gray-700 text-sm mb-2">We chose Generation Z users, who are becoming the main force in coffee consumption. Through a case study and interviews, we identified our research question: <i>"Package as Collections"</i>. Based on this research question, we conducted a survey to explore three sub-questions: What are the preferences of collectible packaging? What are the criteria of collectible packaging? How does collecting affect users' behavior? After analyzing the qualitative findings, we proceeded with quantitative research focusing on packaging price sensitivity and the difficulty users face in discarding packaging. In addition, we conducted two cultural probe workshops to study users' decision-making related to collection behaviors. Finally, we cross-analyzed all findings from each stage and synthesized three design briefs, each supported by clear user research evidence, including detailed descriptions of packaging performance and visual examples.</div>
            <div className="font-semibold mb-1">Background</div>
            <div className="text-gray-700 text-sm mb-2">As the world's only supplier capable of providing a complete coffee packaging system, Goglio has established partnerships with numerous coffee brands, including Nestlé, Starbucks, and illy. Commissioned by Mr. Hui Li, Goglio's Commercial & Sales Director, and under the guidance of Prof. Avril Accolla, our team of four conducted a user research project focusing on Generation Z coffee consumers.</div>
            <div className="font-semibold mb-1">Deliverables</div>
            <div className="text-gray-700 text-sm">Three design briefs, along with corresponding detailed descriptions of packaging performance, visual examples, and supporting user research evidence.</div>
          </div>
        </section>
        {/* Process */}
        <section id="process" className="mb-16 scroll-mt-32">
          <h2 className="text-xl font-bold mb-4">Process</h2>
          {/* 依次插入所有Process图片和文字说明 */}
          <div className="mb-8">
            <h3 className="font-semibold mb-2">STEP 1 — Case Study</h3>
            <p className="text-gray-700 text-sm mb-4">We began by selecting 20 representative and well-known coffee packaging cases, with 4 cases focused on each of the following five key aspects: performance, operability, experience, system, and sustainability. We conducted case studies on these examples and summarized the key insights from each, and systematically labeled using the format &lt;β-num&gt;.</p>
            <div className="flex flex-col gap-4 mb-8">
              <Image src="/1 Process 1.jpg" alt="Case Study 1" width={1200} height={800} className="rounded-xl border object-cover w-full" />
              <Image src="/1 Process 2.jpg" alt="Case Study 2" width={1200} height={800} className="rounded-xl border object-cover w-full" />
              <Image src="/1 Process 3.jpg" alt="Case Study 3" width={1200} height={800} className="rounded-xl border object-cover w-full" />
            </div>
          </div>
          <div className="mb-8">
            <h3 className="font-semibold mb-2">STEP 2 — User Interview</h3>
            <p className="text-gray-700 text-sm mb-4">We conducted one-hour in-depth interviews with a total of 20 users, and analyzed the transcripts by breaking them down using the ANA framework (Ability, Necessity, Aspiration). The extracted content was then categorized based on topic types across the full coffee packaging purchase and usage journey, and systematically labeled using the format &lt;α-num&gt;.</p>
            <Image src="/1 Process 4.jpg" alt="Survey Results" width={1200} height={800} className="rounded-xl border mb-8" />
          </div>
          <div className="mb-8">
            <h3 className="font-semibold mb-2">STEP 4 — Research Stage1: Survey</h3>
            <p className="text-gray-700 text-sm mb-4">Building on the previously identified research question, this phase aimed to gather further user insights on the three sub-questions under the theme of "Package as Collections" through a survey. The survey questions were strictly formulated based on the three sub-questions derived from the earlier research question. We conducted a question-by-question analysis of the survey results, and systematically labeled the takeaways collected in this phase using the format &lt;1-num&gt;. Interestingly, based on the survey findings, we also identified three types of collectors: Active collectors, Passive collectors, and Co-existers.</p>
            <Image src="/1 Process 6.jpg" alt="Survey Results" width={1200} height={800} className="rounded-xl border mb-8 w-full object-cover" />
          </div>
          <div className="mb-8">
            <h3 className="font-semibold mb-2">STEP 5 — Level3 Research Questions From Research1 Results</h3>
            <p className="text-gray-700 text-sm mb-4">Based on the insights from Research 1, we proposed new Level 3 research questions: "What is users' price acceptance when purchasing only for the package?" and "What kinds of packaging make it hard to throw away?" Accordingly, we designed two sets of questionnaires for further investigation: Research 2.1 – Price Sensitivity Measurement and Research 2.2 – Scale Survey.</p>
            <Image src="/1 Process 7.jpg" alt="Level3 Research Questions" width={1200} height={800} className="rounded-xl border mb-8 w-full object-cover" />
          </div>
          <div className="mb-8">
            <h3 className="font-semibold mb-2">STEP 6 — Research Stage2.1: Price Sensitivity Measurement</h3>
            <p className="text-gray-700 text-sm mb-4">We received a total of 94 completed questionnaires. Among them, 36 users reported that they would buy a product just for its packaging. We recorded the price they were willing to pay for packaging alone. The takeaways collected in this phase were systematically labeled using the format &lt;2.1-num&gt;.</p>
            <Image src="/1 Process 8.jpg" alt="Price Sensitivity Measurement" width={1200} height={800} className="rounded-xl border mb-8 w-full object-cover" />
          </div>
          <div className="mb-8">
            <h3 className="font-semibold mb-2">STEP 7 — Research Stage2.2: Scale Survey</h3>
            <p className="text-gray-700 text-sm mb-4">We received a total of 62 completed questionnaires. From a packaging style matrix of 6 materials × 7 forms, we selected 18 common packaging types and presented them with images. Users were asked to rate the perceived disposability of each packaging style on a five-point scale, ranging from "easy to throw away" to "very hard to throw away." The takeaways collected in this phase were systematically labeled using the format &lt;2.2-num&gt;.</p>
            <Image src="/1 Process 9.jpg" alt="Scale Survey" width={1200} height={800} className="rounded-xl border mb-8 w-full object-cover" />
          </div>
          <div className="mb-8">
            <h3 className="font-semibold mb-2">STEP 8 — Cultural Probe Focus From Research1 Results</h3>
            <p className="text-gray-700 text-sm mb-4">In addition, certain behavioral patterns observed in Results 1 subtly reflected underlying user needs. For example, users who were "forced to collect because it was hard to throw away" may actually reveal a need for simple or minimal packaging. We selected two such cases for further exploration through cultural probes. Taking the example mentioned above, this behavior could be linked to a cultural environment or personal preference oriented toward minimization. Therefore, we designed probes to investigate users' psychological responses and decision-making tendencies when facing minimization, not limited to coffee packaging.</p>
            <Image src="/1 Process 10.jpg" alt="Cultural Probe Focus" width={1200} height={800} className="rounded-xl border mb-8 w-full object-cover" />
          </div>
          <div className="mb-8">
            <h3 className="font-semibold mb-2">STEP 9 — Cultural Probe A: "Partner"</h3>
            <p className="text-gray-700 text-sm mb-4">We hypothesized that people who value coffee packaging and those who primarily need the coffee itself could potentially act as partners, exchanging the parts they don't need for the parts they do. We discovered that coffee packaging and coffee content can be compared to the yolk and white of a boiled egg—users may only desire one part, while the other holds little to no value for them. Based on this insight, we organized a cultural probe workshop themed "Partner", bringing together "yolk-only" and "white-only" users to explore behavioral patterns of exchange that allow both sides to maximize their benefit. The takeaways collected in this phase were systematically labeled using the format &lt;A-num&gt;.</p>
            <Image src="/1 Process 11.jpg" alt="Cultural Probe A: Partner" width={1200} height={800} className="rounded-xl border mb-8 w-full object-cover" />
            <Image src="/1 Process 12.png" alt="Process 12" width={1200} height={800} className="rounded-xl border mb-8 w-full object-cover" />
            <Image src="/1 Process 13.jpg" alt="Process 13" width={1200} height={800} className="rounded-xl border mb-8 w-full object-cover" />
            <Image src="/1 Process 14.jpg" alt="Process 14" width={1200} height={800} className="rounded-xl border mb-8 w-full object-cover" />
          </div>
          <div className="mb-8">
            <h3 className="font-semibold mb-2">STEP 10 — Cultural Probe B: "Minimize"</h3>
            <p className="text-gray-700 text-sm mb-4">We hypothesized that users find it hard to discard packaging because it is not simple enough and has been perceived to hold secondary value. To explore this idea, we organized a cultural probe workshop themed "Minimize." Eight participants were invited to bring an item they personally found useless but had never been able to throw away. Through group debates on whether each item should be discarded and the reasons behind their decisions, we examined what kinds of factors give "extra value" to otherwise useless items, and what kinds of reasoning can be used to challenge or counter the notion of extra value. The takeaways collected in this phase were systematically labeled using the format &lt;B-num&gt;.</p>
            <Image src="/1 Process 15.jpg" alt="Process 15" width={1200} height={800} className="rounded-xl border mb-8 w-full object-cover" />
          </div>
          <div className="mb-8">
            <h3 className="font-semibold mb-2">STEP 11 — Summarizing and Clustering Insights from Each Research Phase</h3>
            <p className="text-gray-700 text-sm mb-4">At this point, all user information had been collected, as shown in the diagram below. The data units from different research phases were reorganized and mixed for cross-analysis, allowing for new cluster formation. The resulting cluster insights were systematically labeled using the format &lt;#-num&gt; and categorized accordingly, leading to the identification of three distinct design paths.</p>
            <Image src="/1 Process 16.jpg" alt="Process 16" width={1200} height={800} className="rounded-xl border mb-8 w-full object-cover" />
            <Image src="/1 Process 17.jpg" alt="Process 17" width={1200} height={800} className="rounded-xl border mb-8 w-full object-cover" />
            <Image src="/1 Process 18.jpg" alt="Process 18" width={1200} height={800} className="rounded-xl border mb-8 w-full object-cover" />
           
          </div>
        </section>
        {/* Solution */}
        <section id="solution" className="mb-16 scroll-mt-32">
          <h2 className="text-xl font-bold mb-4">Solution</h2>
          <div className="mb-8">
            <p className="text-gray-700 text-sm mb-6">Based on the clustering and synthesis of user insights across all research phases, we identified three valuable design paths: balancing conflicting needs while emphasizing common ones, transforming passive behavior into proactive engagement, and promoting mutual exchange to meet complementary needs. For each path, we developed a corresponding design brief grounded in solid user research evidence. Each brief outlines the required packaging performance in detail and is accompanied by visual examples to illustrate the design direction.</p>
            <div className="mb-6">
              <div className="font-semibold mb-1">Design Brief 1 - Balance the conflict needs and Emphasize the common needs</div>
              <div className="text-gray-700 text-sm mb-4">For this design path, our goal is to make it collectible and easy to keep, while not being overly packaged or hard to discard.</div>
              <Image src="/1 Solution 1.jpg" alt="Solution 1" width={1200} height={800} className="rounded-xl border mb-8" />
            </div>
            <div className="mb-6">
              <div className="font-semibold mb-1">Design Brief 2 - Transform passivity into proactivity</div>
              <div className="text-gray-700 text-sm mb-4">For this design path, our goal is to inspire users to enhance the value of ordinary packaging—such as by leaving tangible information or traces, or creating abstract memories through interaction with the package—in order to motivate them to actively collect it.</div>
              <Image src="/1 Solution 2.jpg" alt="Solution 2" width={1200} height={800} className="rounded-xl border mb-8" />
            </div>
            <div className="mb-6">
              <div className="font-semibold mb-1">Design Brief 3 - Promote mutual help for complementary needs</div>
              <div className="text-gray-700 text-sm mb-4">For this design path, our goal is to help users find partners with complementary needs, guiding them to make joint purchases and fulfill their respective needs, thereby avoiding unnecessary consumption and the burden of unwanted components.</div>
              <Image src="/1 Solution 3.jpg" alt="Solution 3" width={1200} height={800} className="rounded-xl border" />
            </div>
          </div>
        </section>
        {/* Results */}
        <section id="results" className="mb-16 scroll-mt-32">
          <h2 className="text-xl font-bold mb-4">Results</h2>
          <div className="text-gray-700 text-sm mb-2 font-semibold">Entering the Design Phase</div>
          <div className="text-gray-700 text-sm mb-4">Our research findings were recognized by Mr. Hui Li and selected as the user research foundation for the next stage of packaging product design.</div>
        </section>
        {/* Learnings */}
        <section id="learnings" className="mb-16 scroll-mt-32">
          <h2 className="text-xl font-bold mb-4">Learnings</h2>
          <div className="mb-2 font-semibold text-gray-700">User Research – The Importance of an Open Mindset</div>
          <div className="text-gray-700 text-sm mb-4">At the beginning of the user interviews, I was genuinely surprised to learn that some users purchased coffee products solely to collect the packaging—a motivation I personally could not relate to. However, as more than one participant mentioned this behavior, I realized that studying the "Package as Collections" group was indeed valuable, even though I was not part of the target audience. I made a conscious effort to set aside my personal assumptions, focus entirely on the users' perspectives, and empathize with their needs through objective analysis.</div>
          <div className="mb-2 font-semibold text-gray-700">Cross Analysis – A Repetitive and Reflective Process</div>
          <div className="text-gray-700 text-sm">User insight analysis is not a linear process; rather, it involves both progression and repetition. For example, we initially identified the Level 1 research question "Package as Collections" through interview and case study results. However, their value extended beyond that stage. These results were revisited in later mapping phases, where cross-referencing with new information enabled us to generate additional meaningful insights through comparison and clustering.</div>
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
                <li>
                  <a href="/coffee-packaging-user-research-for-gen-z-for-goglio" className="hover:text-green-600">Project 1</a>
                </li>
                <li>
                  <a href="/#portfolio" className="hover:text-green-600">Project 2</a>
                </li>
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