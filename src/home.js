import React from 'react'
// import Fb from "./fb.png"

 const Home = () => {
  return (
    <>
    {/* <div className='bg-gray-100 h-screen w-full' > */}
   
    <div className='container mt-48 md:flex mx-auto justify-center items-center '>
    
    <div className='left w-1/3 mx-14'>
        {/* <img className={Fb} alt=''  ></img> */}
        <h1 className='text-8xl font-bold mb-2 text-blue-600'>Facebook</h1>
        <p className='text-xl mx-6'>Facebook helps you connect and share with the people in your life</p>
    </div>
    <div className='right flex flex-col w-1/4 bg-white p-8 rounded-xl' >
        <input className="px-4 h-12 my-2 border-1 border-gray-200 border rounded-lg" type="text" placeholder='Email address or phone number'>

        </input>
        <input className="px-4 h-12 my-2 border-1 border-gray-200 border rounded-lg" text="password" placeholder='Password'>

        </input>
        <button className='bg-blue-600 cursor-pointer hover:underline hover:bg-blue-700 text-white  py-3 rounded-md font-bold my-2'>Log In</button>
        <span className='text-blue-600 text-center my-2 text-sm'>Forgotten Password?</span> 
        <hr className='my-2'></hr>
        <button className='bg-green-500 hover:bg-green-700 w-fit mx-auto px-4  cursor-pointer hover:underline  text-white  py-3 rounded-md font-bold my-2' >Create  New Account</button>
    </div>
    
    
    
    </div>
    {/* </div> */}
 
    

  
    
    
    </>
  )
}


export default Home;
