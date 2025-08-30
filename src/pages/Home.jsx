import React from 'react'
import Video from '../Componets/home/Video'
import HomeHeroText from '../Componets/home/HomeHeroText'
import HomeBottomText from '../Componets/home/HomeBottomText'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className='h-screen w-screen relative pd-5 overflow-hidden  flex flex-col justify-between'>
        <HomeHeroText />
        <HomeBottomText />
      </div>

    </div>
  )
}

export default Home