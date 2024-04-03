import React, { useEffect, useRef } from "react";
import me from "../AboutMe/me.jpeg";
import { Typed } from "react-typed";

function AboutMe() {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const options = {
        strings: [
          "Hello everyone and welcome to my portfolio, my name is Stephon and I am a motivated Full Stack Engineer proficient in HTML, CSS, and JavaScript programming languages. My background is in Web Development and Agile Methodologies. I provide a high level of service to clients in custom development for applications and website proprietary customizations.",
        ],
        typeSpeed: 20,
      };
      const typed = new Typed(typedRef.current, options);
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className="page2 w-full h-full bg-black py-80 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          src={me}
          alt="/"
          className="rounded-xl border-double border-sky-400 border-4"
        />
        <div className="text-white tracking-wide text-2xl">
          <h1>About Me</h1>
          <br />
          <span ref={typedRef}></span>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
