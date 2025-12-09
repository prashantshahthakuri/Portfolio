import React from "react";

function Skills() {
  return (
    <section id="skills" className="max-w-2xl   mx-auto my-10 p-6  bg-gray-800 rounded-lg shadow text-gray-100 cursor-pointer hover:shadow-xl hover:shadow-orange-100 transition-shadow duration-100">
      <h2 className="text-3xl font-bold mb-4 text-center text-blue-400">Skills</h2>
      <p className="mb-6 text-lg text-gray-400">
        I am passionate about frontend development, enjoying the creation of modern, user-friendly interfaces and responsive, interactive web applications. I stay current through Git-based version control for collaboration, emphasizing clean code, cross-browser compatibility, and performance optimization in my projects. Daily practice and portfolio builds, like real estate dashboards, sharpen these skills for scalable, visually appealing results aligned with industry standards.
      </p>
      <ul className="list-disc list-inside space-y-2 text-base">
        <li>
          <span className="font-semibold text-blue-300 text-xl text-center">Frontend Development:</span>
          <ul className="ml-5 list-disc list-inside mb-4">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Tailwind CSS</li>
          </ul>
        </li>
        <li>
          <span className="font-semibold text-center text-blue-300 text-xl">Tools: </span>
          <ul className="ml-5 list-disc list-inside mb-4">
            <li>Github</li>
            <li>Vercel</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default Skills;
