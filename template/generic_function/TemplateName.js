import React,{ useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './TemplateName.module.css'
const templateNameInitialState={}
const TemplateName = props => {
  const [state, setstate] = useState(templateNameInitialState)
  useEffect(() => {
    //mount
    return () => {
     //unmount
    };
  }, [])
  return (
      <div className={styles.TemplateName} data-testid="TemplateName">component templateName</div>
  )
}

TemplateName.propTypes = {}
TemplateName.defaultProps = {}

export default TemplateName