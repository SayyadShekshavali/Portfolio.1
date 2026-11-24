import React from "react";
import { Highlighter } from "@/components/ui/highlighter";
import { LineShadowText } from "./ui/line-shadow-text";
function About() {
  return (
    <section className="about-section p-2 gap-1" id="about">
      <div className="about-container">
        <div className="about-content text-left gap-1 flex flex-col">
          <p className="about-tag sm:text-lg md:text-xl lg:text-xl font-semibold viga-font">
            Personal <LineShadowText>Snapshot</LineShadowText>
          </p>

          <p className="-mt-3 font-semibold sm:text-sm md:text-sm lg:text-base">
            Passionate Software Engineer
            <span>
              {" "}
              Building{" "}
              <Highlighter action="underline" color="#E2E8F0">
                Real-World Solutions
              </Highlighter>
              .
            </span>
          </p>

          <p className="sm:text-sm md:text-lg lg:text-lg  pt-0  ">
            I am a passionate Software Engineer with hands-on experience in
            <Highlighter action="highlight" color="#64748B">
              full-stack development
            </Highlighter>
            , building real-world applications using JavaScript, React.js,
            Node.js, and MongoDB. During my internship, I contributed to
            developing{" "}
            <Highlighter action="box" color="#CBD5E1">
              20+ features
            </Highlighter>
            , resolving{" "}
            <Highlighter action="underline" color="#64748B">
              20+ defects
            </Highlighter>
            , and delivering business-impacting solutions.
          </p>

          <p className="sm:text-sm md:text-lg lg:text-lg pt-2 ">
            Along with building projects involving{" "}
            <Highlighter action="highlight" color="#E2E8F0">
              AI integration
            </Highlighter>{" "}
            and{" "}
            <Highlighter action="circle" color="#CBD5E1">
              real-time collaboration
            </Highlighter>
            , I have solved{" "}
            <Highlighter action="box" color="#94A3B8">
              500+ DSA problems on LeetCode
            </Highlighter>
            . I bring strong technical fundamentals, practical experience,
            adaptability, and the determination to prove my abilities through my
            work. I am looking for an opportunity to demonstrate my skills and
            contribute to an organization's success.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
