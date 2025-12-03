import React from "react";

function Skills() {
  return (
    <section id="skills" className="max-w-2xl   mx-auto my-10 p-6  bg-gray-800 rounded-lg shadow text-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-center text-blue-400">Skills</h2>
      <p className="mb-6 text-lg">
        I am passionate about frontend development and enjoy building modern, user-friendly interfaces.My skill set enables me to create responsive and interactive web applications.
      </p>
      <ul className="list-disc list-inside space-y-2 text-base">
        <li>
          <span className="font-semibold text-blue-300">Frontend Development:</span>
          <ul className="ml-5 list-disc list-inside">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Tailwind CSS</li>
          </ul>
        </li>
        <li>
          <span className="font-semibold text-center text-blue-300">Tools: </span>
          <ul className="ml-5 list-disc list-inside">
            <li>Github</li>
            <li>Vercel</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default Skills;
