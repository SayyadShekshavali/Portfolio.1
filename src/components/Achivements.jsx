
import React from "react";

const achievements = [
  {
    number: "01",
    icon: "🏆",
    category: "OPEN SOURCE CONTRIBUTION",
    title: "GirlScript Summer of Code 2025",
    description:
      "Proud to have contributed to GirlScript Summer of Code 2025, gaining valuable open-source experience and collaborating with the developer community.",
    tag: "GSSoC 2025 Contributor",
    link: "https://github.com/SayyadShekshavali",
  },
  {
    number: "02",
    icon: "🌟",
    category: "PROFESSIONAL NETWORK",
    title: "1,400+ LinkedIn Followers",
    description:
      "Built a professional network of 1,400+ followers by sharing my developer journey, connecting with tech enthusiasts and engaging with the developer community.",
    tag: "Community Growth",
    link: "https://www.linkedin.com/in/sayyad-shekshavali/",
  },
  {
    number: "03",
    icon: "💻",
    category: "PROBLEM SOLVING",
    title: "560+ LeetCode Problems Solved",
    description:
      "Solved 560+ coding problems and earned 8 LeetCode badges, continuously improving my Data Structures, Algorithms and problem-solving skills.",
    tag: "8 Badges Earned",
    link: "https://leetcode.com/u/SayyadShekshavali/",
  },
];

const stats = [
  {
    number: "560+",
    label: "Problems Solved",
    icon: "⌘",
  },
  {
    number: "08",
    label: "LeetCode Badges",
    icon: "🏅",
  },
  {
    number: "1.4K+",
    label: "LinkedIn Followers",
    icon: "👥",
  },
  {
    number: "2025",
    label: "GSSoC Contributor",
    icon: "🚀",
  },
];

const Achievements = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b12] px-5 text-white sm:px-8 lg:px-[8%]">

      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <span className="text-xs font-bold tracking-[4px] text-lime-400">
          MILESTONES & RECOGNITION
        </span>

        <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          My
          <span className="text-lime-400"> Achievements.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
          Every milestone tells a story of consistency, learning
          and growth. Here are some achievements that represent
          my journey as a developer.
        </p>

        <a
          href="#milestones"
          className="mt-9 inline-flex items-center gap-4 rounded-lg bg-lime-400 px-6 py-3.5 font-bold text-black transition hover:-translate-y-1 hover:bg-lime-300"
        >
          Explore My Journey <span>↘</span>
        </a>

        <div className="pointer-events-none absolute right-0 top-24 hidden text-8xl font-black text-white/[0.025] lg:block">
          2025
        </div>
      </section>

      {/* Statistics */}
      <section className="grid grid-cols-2 gap-4 pb-24 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group rounded-2xl border border-white/10 bg-[#101620] p-6 transition duration-300 hover:-translate-y-2 hover:border-lime-400/50"
          >
            <div className="text-2xl">{stat.icon}</div>

            <h2 className="mt-4 text-3xl font-extrabold text-lime-400 sm:text-4xl">
              {stat.number}
            </h2>

            <p className="mt-2 text-xs text-slate-400 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      {/* Achievements */}
      <section id="milestones" className="pb-24">
        <div className="mb-12">
          <span className="text-xs font-bold tracking-[3px] text-lime-400">
            01 / MY MILESTONES
          </span>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Achievements That
            <span className="text-lime-400"> Define Me.</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            A few milestones I'm proud of throughout my
            development and problem-solving journey.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((item) => (
            <article
              key={item.number}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101620] p-7 transition duration-300 hover:-translate-y-2 hover:border-lime-400/60 hover:shadow-[0_15px_45px_rgba(163,230,53,0.07)]"
            >
              <div className="absolute right-6 top-5 text-5xl font-black text-white/[0.04]">
                {item.number}
              </div>

              <div className="grid h-14 w-14 place-items-center rounded-xl bg-lime-400/10 text-3xl">
                {item.icon}
              </div>

              <span className="mt-7 text-[10px] font-bold tracking-[2px] text-lime-400">
                {item.category}
              </span>

              <h3 className="mt-3 text-xl font-bold leading-snug transition group-hover:text-lime-400">
                {item.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                {item.description}
              </p>

              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="rounded-full bg-lime-400/10 px-3 py-2 text-xs text-lime-400">
                  {item.tag}
                </span>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${item.title}`}
                  className="text-2xl text-white transition hover:text-lime-400"
                >
                  ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="mb-20 rounded-2xl border border-white/10 bg-[radial-gradient(ellipse_at_center,_rgba(163,230,53,0.10),_transparent_70%)] px-6 py-20 text-center sm:px-12">
        <span className="text-xs font-bold tracking-[4px] text-lime-400">
          THE JOURNEY CONTINUES
        </span>

        <h2 className="mt-6 text-4xl font-extrabold sm:text-5xl">
          Small Steps.
          <span className="mt-2 block text-lime-400">
            Big Achievements.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-slate-400">
          Always learning, building and pushing myself to
          achieve more. These milestones are just the beginning.
        </p>

        <a
          href="https://www.linkedin.com/in/sayyad-shekshavali/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-lg bg-lime-400 px-7 py-4 font-bold text-black transition hover:-translate-y-1 hover:bg-lime-300"
        >
          Connect With Me ↗
        </a>
      </section>
    </main>
  );
};

export default Achievements;
