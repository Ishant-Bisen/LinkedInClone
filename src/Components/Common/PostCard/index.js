import React from 'react'
import  "./index.scss"

export default function PostCard({post}) {
  return (
    <div>
        <div className="postcard-main">
            <div className="postcard">
              <p className='timeStamp'>{post.timeStamp}</p>
              <p className='status'>{post.status }</p>
                
            </div>
        </div>
    </div>
  )
}
