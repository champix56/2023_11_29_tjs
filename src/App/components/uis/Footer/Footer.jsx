import React from 'react'
import PropTypes from 'prop-types'
import styles from './Footer.module.css'
const Footer = props => {

  return (
      <div className={styles.Footer} data-testid="Footer">Copyright &copy; Orsys 2023</div>
  )
}



export default Footer