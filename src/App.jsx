import React, { useContext } from 'react'
import Sidebar from './Components/Sidebar'
import Player from './Components/Player'
import Displayed from './Components/Displayed'
import { PlayerContext } from './context/PlayerContext'

const App = () => {



  const {audioRef,track} = useContext(PlayerContext);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Displayed/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
     
    </div>
  )
}

export default App