import React from 'react'
import "./styles/Loading.css"
const Loading = ({isLoading}) => {
    
  return (
    <div className={`Loading ${isLoading && "noShow"}`}>
    
      <div className='ball_circle'>
        <div className='ball_red'></div>
        <div className='ball_line'>
          <div className='ball_inter_white'></div>
        </div>
        <div className='ball_white'></div>
      </div>
    </div>
  )
}

export default Loading