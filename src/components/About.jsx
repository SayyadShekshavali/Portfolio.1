import React from "react";
import { Highlighter } from "@/components/ui/highlighter";
import { LineShadowText } from "./ui/line-shadow-text";
function About() {
  return (
    <section className="about-section p-2 gap-2" id="about">
      <div className="about-container">
        <div className="about-content text-left gap-4 flex flex-col">
          <h1 className="about-tag">
            Personal <LineShadowText>Snapshot</LineShadowText>
          </h1>

          <h2 className="-mt-3">
            Passionate Software Engineer
            <span>
              {" "}
              Building{" "}
              <Highlighter action="underline" color="#E2E8F0">
                Real-World Solutions
              </Highlighter>
              .
            </span>
          </h2>

          <p className="text-xl lg:text-2xl  pt-0  ">
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

          <p className="text-xl lg:text-2xl pt-0 ">
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
