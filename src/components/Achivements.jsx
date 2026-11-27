import React, { useState } from "react";

const achievements = [
  {
    number: "01",
    logo: "/achievements/tcs_logo.jpg",
    title: "TCS CodeVita Rank",
    description:
      "Secured Global Rank 10110 in TCS CodeVita Season 13, a coding competition by Tata Consultancy Services, and received a rank certificate recognizing my coding skills.",
    proof: "/achievements/tcs-cert.png",
    year: "2025",
  },
  {
    number: "02",
    logo: "/achievements/gssoc_logo.jpg",
    title: "GSSOC Contributor 2025",
    description:
      "Participated as an Open Source Contributor in GirlScript Summer of Code 2025 and was recognized for strong performance, dedication and commitment to the program.",
    proof: "/achievements/gssoc-cert.png",
    year: "2025",
  },
  {
    number: "03",
    logo: "/achievements/ldn-logo.png",
    title: "1,400+ LinkedIn Followers",
    description:
      "Grew my LinkedIn network to 1,400+ followers while posting consistently, connecting with the tech community and continuing to learn from others.",
    proof: "/achievements/ldn.png",
    year: "2024",
  },
  {
    number: "04",
    logo: "/achievements/lt-logo.png",
    title: "570+ DSA Problems Solved on LeetCode",
    description:
      "Solved 500+ Data Structures and Algorithms problems on LeetCode, strengthening my problem-solving, logical thinking and algorithm design skills.",
    proof: "/achievements/lt-p.png",
    year: "2025",
  },
];

const Achivements = () => {
  const [activeProof, setActiveProof] = useState(null);

  const angles = ["-2deg", "2deg", "2deg", "-2deg"];

  const handleCardClick = (item) => {
    if (!item.proof) return;

    if (window.matchMedia("(max-width: 639px)").matches) {
      setActiveProof((current) =>
        current === item.number ? null : item.number,
      );
    }
  };

  return (
    <section
      id="achievements"
      className="w-full overflow-hidden bg-white px-3 py-12 text-neutral-900 sm:px-6 sm:py-16 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-8 text-center sm:mb-12">
          <p className="mb-2 text-[9px] tracking-[0.2em] text-neutral-500 sm:mb-3 sm:text-xs sm:tracking-[0.25em]">
            MILESTONES & MOMENTS
          </p>

          <h2 className="text-2xl font-semibold sm:text-4xl lg:text-5xl">
            My <span className="text-neutral-400">Achievements.</span>
          </h2>
        </div>

        {/* Always 2 x 2 cards */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 px-1 py-3 sm:gap-x-8 sm:gap-y-12 sm:px-4">
          {achievements.map((item, index) => {
            const isProofVisible = activeProof === item.number;

            return (
              <article
                key={item.number}
                onClick={() => handleCardClick(item)}
                style={{
                  "--card-tilt": angles[index],
                  animation: `achievementFloat 4s ease-in-out ${
                    index * 0.55
                  }s infinite`,
                }}
                className="achievement-card group relative h-[205px] overflow-visible rounded-lg border border-white bg-[#f3f3f3] p-2.5 text-neutral-800 shadow-[3px_5px_12px_rgba(60,45,25,0.18)] transition-colors duration-300 hover:bg-[#f0e6d2] min-[400px]:h-[220px] min-[400px]:p-3 sm:h-[230px] sm:rounded-xl sm:p-6"
              >
                {/* Pushpin */}
                <div className="absolute -top-2.5 left-1/2 z-30 -translate-x-1/2 sm:-top-3">
                  <div className="relative h-4 w-4 rounded-full border border-[#8b2922] bg-[#b94b3e] shadow-[1px_3px_4px_rgba(0,0,0,0.3)] sm:h-5 sm:w-5">
                    <div className="absolute left-[3px] top-[2px] h-1 w-1 rounded-full bg-white/60 sm:left-[4px] sm:top-[3px] sm:h-1.5 sm:w-1.5" />
                  </div>
                  <div className="mx-auto h-1.5 w-[2px] bg-[#777064] sm:h-2" />
                </div>

                {/* Card information */}
                <div
                  className={`relative z-10 flex h-full flex-col transition-opacity duration-300 ${
                    isProofVisible ? "opacity-0" : "opacity-100"
                  } sm:opacity-100 sm:group-hover:opacity-0`}
                >
                  {/* Logo and achievement name */}
                  <div className="flex items-center gap-1.5 sm:gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center sm:h-10 sm:w-11">
                      <img
                        src={item.logo}
                        alt={`${item.title} logo`}
                        className="max-h-7 max-w-7 rounded-lg object-contain sm:max-h-10 sm:max-w-11"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="line-clamp-2 text-[10px] font-semibold leading-tight text-[#39352d] min-[400px]:text-[11px] sm:text-base lg:text-lg">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-2 line-clamp-6 text-left text-[9px] leading-[1.15rem] text-[#716957] min-[400px]:text-[10px] sm:mt-4 sm:text-xs sm:leading-5 lg:text-sm">
                    {item.description}
                  </p>

                  {/* Small proof label */}
                  {item.proof && (
                    <span className="mt-auto w-fit pt-1.5 text-[7px] font-medium uppercase tracking-[0.12em] text-[#887e6b] transition-colors duration-300 group-hover:text-[#39352d] sm:pt-3 sm:text-[9px] sm:tracking-[0.16em]">
                      View proof ↗
                      <span className="ml-1 normal-case sm:hidden">(Tap)</span>
                    </span>
                  )}
                </div>

                {/* Proof image */}
                {item.proof && (
                  <div
                    className={`absolute inset-0 z-20 flex items-center justify-center rounded-lg bg-black p-1 transition-all duration-300 sm:rounded-xl ${
                      isProofVisible ? "opacity-100" : "opacity-0"
                    } sm:group-hover:opacity-100`}
                  >
                    <img
                      src={item.proof}
                      alt={`${item.title} proof`}
                      className="max-h-full w-full rounded-md object-contain sm:rounded-lg"
                    />

                    <span className="absolute bottom-2 right-3 text-[8px] text-white sm:hidden">
                      Tap to close ✕
                    </span>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      {/* Floating animation */}
      <style>{`
        @keyframes achievementFloat {
          0%, 100% {
            transform: translateY(0) rotate(var(--card-tilt));
          }

          50% {
            transform: translateY(-8px) rotate(var(--card-tilt));
          }
        }

        @media (max-width: 600px) {
          @keyframes achievementFloat {
            0%, 100% {
              transform: translateY(0) rotate(var(--card-tilt));
            }

            50% {
              transform: translateY(-5px) rotate(var(--card-tilt));
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .achievement-card {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Achivements;
