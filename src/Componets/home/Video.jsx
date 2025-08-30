import React from 'react'

const Video = () => {
  return (
    <div className='w-full h-full'>
        <video className='w-full h-full object-cover' autoPlay loop muted src="../../../public/video/Video.mp4"></video>
    </div>
  )
}

export default Video