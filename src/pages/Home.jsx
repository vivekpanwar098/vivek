import React from 'react'
import Video from '../Components/home/Video'
import HomeHeroText from '../Components/home/HomeHeroText'
import HomeBottomText from '../Components/home/HomeBottomText'

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