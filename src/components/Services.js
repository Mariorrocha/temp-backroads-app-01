import React from 'react'
import Title from '../components/Title'
import { services } from '../data'
import Service from './Service'

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title='our' subtitle='services'/>
      <div className="section-center services-center">
        
        {services.map((link)=> {
            // const {id, icon, title, text } = link
            // return(
            //     <article className="service" key={id}>
            //         <span className="service-icon"><i className={icon}></i></span>
            //         <div className="service-info">
            //             <h4 className="service-title">{title}</h4>
            //             <p className="service-text">
            //                 {text}
            //             </p>
            //         </div>
            //     </article>
            // )
            return <Service key={link.id} link={link}/>
            
        })}

      </div>
    </section>
  )
}

export default Services