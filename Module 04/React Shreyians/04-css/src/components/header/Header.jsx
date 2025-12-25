import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div>
        <h1 className={styles.header}>Header</h1>
        <button className={styles.btn}>click me</button>
    </div>  
  )
}

export default Header