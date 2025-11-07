// src/components/Navbar.jsx
import { useState } from "react";
import avatarImg from "../assets/prashant.jpg";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about"); // default active

  const menuItems = [
    { id: "about",   label: "About"   },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50 flex items-center justify-between px-6 py-4 shadow-md">
    
      <div className="flex items-center">
        <img
          src={avatarImg}
          alt="Prashant"
          className="w-12 h-12 rounded-full object-cover border-2 border-gray-400"
        />
      </div>

      <ul className="flex items-center gap-8 text-sm font-medium flex-wrap">
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollTo(item.id)}
              className={`relative ${
                activeSection === item.id ? "text-cyan-400" : ""
              }`}
            >
              {item.label}

              
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}