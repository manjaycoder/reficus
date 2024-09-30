import Product from "./Product"
const Products = () => {
    var products=[
        {title:"you",description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",url:"https://refocus-clone-aman.vercel.app/assets/arqitel-D3jJRwFT.mp4",live:true,case:false},
        {title:"TTR",description:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design. another showcase to celebr" ,url:"https://refocus-clone-aman.vercel.app/assets/ttr-CUQdDHBj.mp4",live:true,case:false},
        {title:"YIR ",description:"Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",url:"https://refocus-clone-aman.vercel.app/assets/yir-BzJiRbqx.mp4",live:true,case:false},
        {title:"Yah",description:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop." ,url:"https://refocus-clone-aman.vercel.app/assets/yahoo-D7WzLbum.mp4",live:true,case:true},
        {title:"Rai",description:"We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease." ,url:"https://refocus-clone-aman.vercel.app/assets/rainfall-BZC7HG1T.mp4",live:true,case:true}
        
    ]
  return (
    <div className="mt-10">
        {products.map((val,index)=><Product val={val}/>)}
        
    </div>
  )
}

export default Products