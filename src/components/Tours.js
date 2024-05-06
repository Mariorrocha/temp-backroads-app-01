import React from 'react'
import Title from '../components/Title'
import { tours } from '../data'
import Tour from './Tour'

const Tours = () => {
  return (
    <section className="section" id="tours">
        <Title title='featured' subtitle='tours'/>
    
      <div className="section-center featured-center">

        {tours.map((link) => {
            // const {id, image, date, title, info, location, duration, cost} = link
            // return (
            //     <article className="tour-card" key={id}>
            //         <div className="tour-img-container">
            //             <img src={image} className="tour-img" alt="" />
            //             <p className="tour-date">{date}</p>
            //         </div>
            //         <div className="tour-info">
            //             <div className="tour-title">
            //             <h4>{title}</h4>
            //             </div>
            //             <p>
            //                 {info}
            //             </p>
            //                 <div className="tour-footer">
            //             <p>
            //                 <span><i className="fas fa-map"></i></span> {location}
            //             </p>
            //             <p>{`${duration} days`}</p>
            //             <p>{`from $${cost}`}</p>
            //             </div>
            //         </div>
            //     </article>
            // )
            return <Tour key={link.id} {...link}/>
            
        })}
      </div>
    </section>
  )
}

export default Tours