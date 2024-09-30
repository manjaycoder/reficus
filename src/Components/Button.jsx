import { IoIosReturnRight } from "react-icons/io";


const Button = ({title="Get Started"}) => {
  return (
    <div className="w-40 px-3 py-2 bg-transparaent border- zinc-300 border-zinc-500 border-2 text-zinc-500  rounded-full flex items-center justify-between"><span className="inline-block text-sm font-medium">{title}</span><IoIosReturnRight />

        
    </div> 
  )
}

export default Button