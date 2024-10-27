import React from 'react'
import VideoCard from './VideoCard'

function VideoGrid() {
  return (
    <div className='grid grid-cols-4 gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {VIDEOS.map((video, index) => (
          <div key={index}>
            <VideoCard
              title={video.title}
              image={video.image}
              author={video.author}
              views={video.views}
              timestamp={video.timestamp}
              thumbImage={video.thumbImage}
            />
          </div>
        ))}
    </div>
  )
}

const VIDEOS = [{
  title: 'Snap X Satranga | Full version',
  image: 'photo.jpg',
  thumbImage: 'thumb.jpg',
  author: 'T-series',
  views: '1.2M',
  timestamp: "2 years ago",
}, {
  title: 'Chaleya (Hindi) | Full version',
  image: 'photo1.jpg',
  thumbImage: 'thumb.jpg',
  author: 'T-series',
  views: '1.2M',
  timestamp: "2 years ago",
}, {
  title: 'Snap X Satranga | Full version',
  image: 'photo.jpg',
  thumbImage: 'thumb.jpg',
  author: 'T-series',
  views: '1.2M',
  timestamp: "2 years ago",
}, {
  title: 'Chaleya (Hindi) | Full version',
  image: 'photo1.jpg',
  thumbImage: 'thumb.jpg',
  author: 'T-series',
  views: '1.2M',
  timestamp: "2 years ago",
}, {
  title: 'Snap X Satranga | Full version',
  image: 'photo.jpg',
  thumbImage: 'thumb.jpg',
  author: 'T-series',
  views: '1.2M',
  timestamp: "2 years ago",
}, {
  title: 'Chaleya (Hindi) | Full version',
  image: 'photo1.jpg',
  thumbImage: 'thumb.jpg',
  author: 'T-series',
  views: '1.2M',
  timestamp: "2 years ago",
}, {
  title: 'Snap X Satranga | Full version',
  image: 'photo.jpg',
  thumbImage: 'thumb.jpg',
  author: 'T-series',
  views: '1.2M',
  timestamp: "2 years ago",
}, {
  title: 'Chaleya (Hindi) | Full version',
  image: 'photo1.jpg',
  thumbImage: 'thumb.jpg',
  author: 'T-series',
  views: '1.2M',
  timestamp: "2 years ago",
}, {
  title: 'Snap X Satranga | Full version',
  image: 'photo.jpg',
  thumbImage: 'thumb.jpg',
  author: 'T-series',
  views: '1.2M',
  timestamp: "2 years ago",
}, {
  title: 'Chaleya (Hindi) | Full version',
  image: 'photo1.jpg',
  thumbImage: 'thumb.jpg',
  author: 'T-series',
  views: '1.2M',
  timestamp: "2 years ago",
}, {
  title: 'Snap X Satranga | Full version',
  image: 'photo.jpg',
  thumbImage: 'thumb.jpg',
  author: 'T-series',
  views: '1.2M',
  timestamp: "2 years ago",
}, {
  title: 'Chaleya (Hindi) | Full version',
  image: 'photo1.jpg',
  thumbImage: 'thumb.jpg',
  author: 'T-series',
  views: '1.2M',
  timestamp: "2 years ago",
}, ]

export default VideoGrid
