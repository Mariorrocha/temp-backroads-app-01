import React from 'react'

const Ttitle = ({title, subtitle}) => {
  return (
    <div className="section-title">
        <h2>
          {title} <span>{subtitle}</span>
        </h2>
    </div>
  )
}

export default Ttitle