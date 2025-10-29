import React, { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum';
import { albumsData } from '../assets/assets';

const Displayed = () => {



  const displayRef =useRef();
  const location= useLocation();
  const isALlbum = location.pathname.includes("album");
  const albumId = isALlbum ? location.pathname.slice(-1) : "" ;
  const bgColor= albumsData[Number(albumId)].bgColor;

  useEffect(()=>{
    if (isALlbum){
      displayRef.current.style.background =`linear-gradient(${bgColor},#121212)`;
    }
    else{
       displayRef.current.style.background =`#121212`;
    }
  }, [isALlbum,bgColor]);


  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0' >
         <Routes>
            <Route path='/' element={<DisplayHome/>}/>
            <Route path='/album/:id' element={<DisplayAlbum/>}/>
         </Routes>

    </div>
  )
}

export default Displayed