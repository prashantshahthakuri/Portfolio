import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const socialLinks = [
    { icon: <FaFacebook />, link: "https://www.facebook.com/shah.thakuri.5836/" },
    { icon: <FaGithub />, link: "https://github.com/prashantshahthakuri" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/prashant-bikram-shah-8bb847227/" },
  ];

  return (
    <footer
      id="contact"
      className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-red-800">
          Prashant Bikram Shah
        </h2>
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {socialLinks.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noreferrer" className="text-2xl">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Contact;
