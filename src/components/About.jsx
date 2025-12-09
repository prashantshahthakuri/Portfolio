import { TypeAnimation } from "react-type-animation"
import avatarImg from '../assets/prashantthakuri.jpg'
function About () {
  return (
    <section id="about" className="py-4 px-7w md:px-7 lg:px-20 font-sans mt-16 md:mt-24 lg:mt-32 ">
        <div className=" flex flex-col-reverse md:flex-row justify-between items-center">
            <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
            
                <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-blue-400  ">
                    <TypeAnimation 
                    sequence={[
                        "Hi, I am Prashant Bikram Shah",
                        1200,
                        "Frontend Developer",
                        1200,
                    ]}
                    speed={200}
                    repeat={Infinity}
                    className="text-4xl font-bold text-blue-500" 
                    ></TypeAnimation>
                </h2>
                <p className="text-xl sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
                    I am an eager beginner frontend developer with a growing passion for building efficient and user-friendly web applications.I am on the lookout for an internship opportunity in order to develop my skills, contribute to a team, and gain useful industry experience.Proficient in using GitHub for version control, I manage my projects effectively and collaborate well in team environments. Additionally, I deploy and host applications with Vercel, ensuring fast and reliable delivery.
                </p>
                <button className="bg-purple-500 text-white px-3 py-3 font-semibold rounded-md shadow hover:bg-purple-600 transition cursor-pointer  ">Say Hello!</button>   
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end ">
            <img src={avatarImg} alt="Prashant Bikram Shah" 
            className="w-60 h-60 rounded-full object-cover "
            />
            </div>
        </div>
    </section>
  )
}

export default About