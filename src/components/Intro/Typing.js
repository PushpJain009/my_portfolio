import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
  return (
    <Typewriter
      options={{
        strings: [
          "MERN Stack Developer",
          "React JS Developer",
          "Full Stack Developer",
        ],
        autoStart: true,
        loop: true,
        // deleteSpeed: 50,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Typing;
