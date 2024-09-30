import Button from "./Button.jsx";

const Navbar = () => {
  return (
    
      <div className="max-w-screen-xl mx-auto py-6 flex items-center bg-black border-b-[1px] justify-between">
        
        <div className="n-left flex items-center">   <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" />
        <div className="links flex gap-14 ml-20 ">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
            <a
              className="text-sm flex text-white font-regular items-center gap-1"
              href="#"
            >
              {elem.length === 0 ? (
                <span className="w-[2px] h-7 bg-zinc-600"></span>
              ) : (index==1)?<span
              style={{ boxShadow: "0 0 0.45em #00FF19" }}
              className="inline-block w-1 h-1  rounded-full gap-1 bg-green-500 "
            ></span>:null}
              {elem}
            </a>
          ))}</div>
     
        </div>
        <Button
        className="button-1"
        scale={1.2}
        speed={0.3}
        onClick={() => {
          console.log('Button clicked');
        }}
      >
        Hover Me
      </Button>
        
        </div>
     
    
        
        
    
    
  );
};

export default Navbar;
