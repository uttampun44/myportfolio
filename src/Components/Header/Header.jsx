import React, { useState } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <div className={styles.headerContainer}>
        <header className={styles.header}>
               <nav className='navbar'>
                 <div className={styles.headerRow}>
                     <div className={styles.headerHeading}>
                          <h1>Uttam Pun</h1>
                     </div>
                      <div className={styles.headerNavlink}>
                         <Link to='/'>Home</Link>
                         <Link to='/technologyblog'>Technology Blog</Link>
                         <Link to='/'>Contact us</Link>
                      </div>
                 </div>
               </nav>
        </header>
    </div>
  )
}

export default Header