import React from 'react'
import moment from 'moment'
const Article = ({title,date,length,snippet}) => {
    console.log(date);
  return (
    <article className='post'>
        <h2>{title}</h2>
        <div className="post-info">
            <span>{moment(date).format('dddd Do, YYY')}</span>
            <span>{length} min red</span>
        </div>
        <p>{snippet}</p>
    </article>
  )
}

export default Article