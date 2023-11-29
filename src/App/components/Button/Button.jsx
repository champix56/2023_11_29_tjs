import React from 'react'
import styles from './Button.module.css'
import PropTypes from 'prop-types'
const Button=(props)=>{
    console.log(props)
    //afect impossible --> props.text+='coucou'
    return <button type={props.type} className={styles.Button}>{props.text}</button>
}
//https://fr.legacy.reactjs.org/docs/typechecking-with-proptypes.htm
Button.propTypes={
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['submit','reset','button']).isRequired,
    size: PropTypes.shape({
        margin: PropTypes.shape({
          bottom: PropTypes.string,
          right: PropTypes.string
        }),
        padding: PropTypes.shape({
          h: PropTypes.string,
          w: PropTypes.string  
        })
    })
}


export default Button;