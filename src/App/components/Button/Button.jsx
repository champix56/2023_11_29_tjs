import React from 'react'
import styles from './Button.module.css'

function Button(props){
    console.log(props)
    //afect impossible --> props.text+='coucou'
    return <button type={props.type} className={styles.Button}>{props.text}</button>
}
export default Button;