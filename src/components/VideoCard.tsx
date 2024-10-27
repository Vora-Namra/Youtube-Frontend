import React from 'react'

function VideoCard(props:any) {
  return (
    <div className='p-2 cursor-pointer'>
      <img src={props.image} alt="" className='rounded-xl' width='700' height='500'/>
      <div className='grid grid-cols-12 pt-2'>

        <div className='cols-span-1'>
          <img src={props.thumbImage} alt="" className='rounded-full w-20 '/>
        </div>
    <div className='col-span-11 pl-5'>
      <div>
        {props.title}
        </div>
 
        <div className='col-span-11 text-gray-400 text-base text-sm'>
         {props.author}
        </div>

        <div className='col-span-11 text-gray-400 text-base text-sm'>
        {props.views} | {props.timestamp}
        </div>
       
    </div>
        
        
      </div>
    </div>
  )
}

export default VideoCard