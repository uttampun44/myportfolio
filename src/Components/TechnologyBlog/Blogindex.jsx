import React from 'react'
import Reactblog from './Reactblog'
import Header from '../Header/Header'
import style from './Blog.module.css';
import { Link } from 'react-router-dom';
function Blogindex() {
  return (
    <main>
          <section>
                 <div className={style.blogindexContainer}>
                     <div className={style.blogrowContainer}>
                         <div className={style.blogRow}>
                             <div className={style.blogOne}>
                                   <h7>Is CRA (Create React App) dead?</h7>
                                   <p>The truth is that CRA is not dead; it still exists.
                                   It is easy for beginners who want to learn, react, upgrade their javascript skills, and learn new tools.
                                   But there are a few things that make Vite more better than CRA.</p>
                                  <Link to='/reactblog'>Read More ...</Link>
                             </div>
                         </div>
                     </div>
                 </div>
          </section>
    </main>
  )
}

export default Blogindex