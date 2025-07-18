import React from 'react'
import './skeleton.scss'
const Skeleton = () => {
  return (
    <div className="skeleton">
      {Array(10)
        .fill()
        .map((_, inx) => (
          <div key={inx} className="skeleton__card">
            <div className="skeleton__img skeleton__anima"></div>
            <div className="skeleton__item skeleton__anima"></div>
            <div className="skeleton__item skeleton__anima"></div>
          </div>
        ))}
    </div>
  )
}

export default Skeleton
