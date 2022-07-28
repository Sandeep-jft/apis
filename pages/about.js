import React from 'react'
import Styles from '../styles/about.module.css'
import styles from '../styles/about.module.scss'

const about = () => {
  return (
    <div>
        <h2 className={styles.highlight}>About page</h2>
        <button className='btn highlight__button' >Button</button>
    </div>
  )
}

export default about