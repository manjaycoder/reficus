import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full">
        <div className="max-w-screen-xl py-10 flex gap-32 mx-auto">
          <div className="basis-1/2">
            <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight text-white">
              refocus.
            </h1>
          </div>
          <div className="basis-1/2 flex gap-2">
            <div className="basis-1/3">
              <h4 className="mb-[10px] text-zinc-600">socials</h4>
              {["Linkdin", "instagram", "twitter", "x"].map((item, index) => (
                <a className="block mt-[10px] capitialize  text-zinc-600">{item}</a>
              ))}
            </div>
            <div className="basis-1/3">
              <h4 className="mb-[10px] text-zinc-600">socials</h4>
              {["Linkdin", "instagram", "twitter", "x"].map((item, index) => (
                <a className="block mt-[10px] capitialize  text-zinc-600">{item}</a>
              ))}
            </div>
            <div className="basis-1/2 text-white flex flex-col">
              <p className="text-right"> 
                Refokus is pioneering digital agency driven by design and
                empowered by technology.
                <img
                  class="w-[10rem] mt-10 ml-20"
                  src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
