import gunung from '../image/gunung.jpg'

function Pembuka() { 
    
    return(
        <div className=" w-screen h-screen flex justify-center items-center flex-col px-60 bg-gradient-to-b from-blue-700 to-blue-500">
           
          
                <h1 className=" text-9xl"><b>C-Med</b></h1>
                <p className=" text-2xl">"Your health, your records, anytime, anywhere."</p>
                <div className="pt-10">
                <a href="/login"><button className=" font-bold w-96 h-16 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-opacity-50 border border-gray-100">Getting Started</button></a>
                </div>
           
        </div>
    )
 }
 
 export default Pembuka