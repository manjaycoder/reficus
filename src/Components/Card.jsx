import { IoArrowForward } from "react-icons/io5";
const Card = ({width,start,para,hover="none",hover12="none"}) => {
  return (
    <div className={`bg-zinc-800 p-5 hover:${hover} hover:${hover12} rounded-xl text-white ${width}   min-h-[30rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>One heading</h3>
          <IoArrowForward />
        </div>

        <h1 className="text-3xl font-medium mt-10">what ever heading</h1>
      </div>

     
      <div className="down w-full ">
        {start===true &&(
            <>
             <h1 className="text-6xl font-semibold tracking-tight leading-none">
          Start a project
        </h1>
        <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50">
          
          Contact Us
        </button></>
           )
           
        }
        {para && (<p className="text-sm text-zinc-500 font-medium">
            Lorem ipsum dolor sit amet consectetur.
          </p>)}
        
      </div>
    </div>
  );
};

export default Card;
