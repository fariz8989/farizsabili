import React from "react";
import CarouselWork from "../Carousel/Carousel";
import Social from '../Social/Social'
import TechStack from "../Techstack/Tech";
import { Fade } from "react-awesome-reveal";

function Home(props) {
  function goTo(ref) {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <div className="px-12 md:px-32">
        <div className="md:h-screen py-28">
          <Fade direction="left">
          <div className=" flex flex-col text-center md:block items-center md:text-left">
            <span className="text-cyan font-mono text-3xl md:text-4xl">Hi,my name is</span>
            <h1 className="text-gray-200 my-6 font-bold text-5xl md:text-7xl">
              Ahmad Fariz Sabili.
            </h1>
            <h1 className="text-gray-400 my-6  font-bold text-4xl md:text-6xl">
              I'm Fullstack <span className="text-cyan">Web Developer</span>
            </h1>
            <div className="md:w-1/4 w-1/2 my-12">
              <button
                onClick={() => {
                  goTo(props.props.my_work);
                }}
                className="w-full rounded-sm text-navy bg-cyan border-cyan border-4 p-2 font-bold text-lg hover:text-cyan hover:bg-navy transition ease-out duration-300"
              >
                My Works
              </button>
            </div>
          </div>
          </Fade>
        </div>
        <Fade direction="right">
        <div id="about_me"  className="lg:h-screen my-6">
          <div className="flex">
            <h1 className="text-3xl border-cyan border-b-4 font-bold text-gray-300">
              About Me
            </h1>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 place-items-center">
            <div className="w-full  ">
              <p className="text-gray-500 text-xl  font-semibold">
                Hi,I'm Fariz regular student with interest in tech industry.My
                interest in Web Development grow when my cousin told me to try
                to make a website and i try to join udemy class and i felt that
                this is my passion.
              </p>
              <br />
              <p className="text-gray-500 text-xl text-justify font-semibold">
                I just graduated from Binar Academy Fullstack Web Development
                Bootcamp.I learned many things about Web Development like
                HTML,CSS,Javascript and using a Framework.Recently i made a
                Recipe Website with React,TailwindCSS and ExpressJS called{" "}
                <a href={"https://grands-recipe.vercel.app/"}>
                  <span className="text-cyan underline-text">
                    Grand's Recipe
                  </span>{" "}
                </a>
                where you can share your favourite recipe with other people.
              </p>
              <br />
              <p className="text-gray-500 text-xl text-justify font-semibold">
                This are few tech that I've been working with :
              </p>
              <div className="flex flex-wrap gap-4 my-2">
                {/* TechStack list start */}
                {/* Javascript */}
                <TechStack props={"javascript"} />
                {/* NodeJS */}
                <TechStack props={"nodejs"} />
                {/* NextJS */}
                <TechStack props={"nextjs"} />
                {/* ReactJS */}
                <TechStack props={"reactjs"} />
                {/* TechStack list end */}
              </div>
            </div>
            <div className="  ">
              <img
               className="rounded-lg md:w-80 w-72"
                src={
                  "https://ik.imagekit.io/92lyfgj0t/IMG_9577_zHpRiEwBo.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1663821466457"
                }
               
              />
            </div>
          </div>
        </div>
        </Fade>
        {/* My Work */}
        <Fade direction="left">
        <div id="my-work" >
          <div className="flex">
            <h1 className="text-3xl border-cyan border-b-4 font-bold text-gray-300">
              My Work
            </h1>
          </div>
          <CarouselWork />
        </div>
        </Fade>
        {/* Contact */}
        <Fade direction="right">
        <div  className="h-screen flex justify-center items-center">
          <div className="my-8 w-full md:w-3/5 flex flex-col justify-center items-center text-center">
            <h1 className="text-cyan text-6xl md:text-7xl font-bold">Get In Touch</h1>
            <span className="text-gray-500 font-semibold text-xl md:text-2xl">
              Currently I'am looking for new opportunities to work and develop my skill more further,if you intrested to work with me or just want to say hi,you can contact me on Whatsapp,Email or my social media   below
              </span>
              <div className="flex  fill-slate-200 gap-8 md:gap-16 justify-between my-6">
            {/* Social Logo */}
            <a className="fill-slate-200 md:w-12 md:h-12 w-8 h-8"href="https://github.com/fariz8989/">
            <Social props="github"/>
            </a>
            <a className="fill-slate-200 md:w-12 md:h-12 w-8 h-8" href="mailto:farizsabili060476@gmail.com">
            <Social  props="email"/>
            </a>
            <a className="fill-slate-200 md:w-12 md:h-12 w-8 h-8" href="https://www.linkedin.com/in/ahmad-fariz-sabili-7202b3217/">
            <Social props="linkedin"/>
            </a>
            <a className="fill-slate-200 md:w-12 md:h-12 w-8 h-8"href="https://www.instagram.com/farizsabili0604/">
            <Social props="instagram"/>
            </a>
            <a className="fill-slate-200 md:w-12 md:h-12 w-8 h-8" href="https://api.whatsapp.com/send/?phone=6281318449618&text&type=phone_number&app_absent=0">
            <Social props="whatsapp"/>
            </a>
              </div>
          </div>
        </div>
        </Fade>
      </div>
    </>
  );
}
export default Home;
