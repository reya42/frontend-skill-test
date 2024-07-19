import React from 'react'

const Detail = ({ image, caption, value}) => {
  return (
    <div className='single_detail'>
        <div className='circle'>
            <img src={image} alt={caption+ " Image"} />
        </div>
        <div className='data_container'>
            <div className="captions">
                {caption}
            </div>
            <div className="value">
                {value}
            </div>
        </div>
    </div>
  )
}

export default Detail