import React from 'react'
import { pageLinks } from '../data';
import PageLink from './PageLink';


const PageLinks = ({parentClass, itemClass}) => {
  return (
    <ul className={parentClass} id={parentClass}>
        {pageLinks.map((link)=>{
            // return (
            //     <li key={link.id}>
            //         <a href={link.href} className={itemClass}> {link.text} </a>
            //     </li>
            // );
            return(
                <PageLink link={link} itemClass={itemClass} />
            )
        })}
    </ul>
  )
}

export default PageLinks