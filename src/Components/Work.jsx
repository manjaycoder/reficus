import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const images = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "45%",
      left: "55%",
      isActive: true, // Set to true for demo purposes
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "49%",
      left: "45%",
      isActive: true, // Set to true for demo purposes
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "60%",
      left: "59%",
      isActive: true, // Set to true for demo purposes
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "60%",
      left: "49%",
      isActive: true, // Set to true for demo purposes
    },
  ];

  useEffect(() => {
    const targets = gsap.utils.toArray('.item-img');

    targets.forEach((obj) => {
      gsap.from(obj, {
        scrollTrigger: {
          trigger: obj,
          start: "top",
          end:"top",
          
          markers: false, // Set to false when not debugging
          toggleActions: "play none none normal", // Control play/pause behavior
        },
        x: -200,
        opacity: 0,
        duration: 2,
        ease: "power4.out",
      });
    });
  }, []);

  return (
    <div className="w-full mt-10 px-4">
      <div className="relative max-w-screen-xl mx-auto text-white text-center">
        <h1 className="text-[40vw] leading-none select-none font-medium tracking-tight">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map((elem, index) =>
            elem.isActive && (
              <img
                key={index}
                src={elem.url}
                className="absolute item-img w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                style={{ top: elem.top, left: elem.left }}
                alt={`Work Item ${index + 1}`} // Add alt text for accessibility
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
