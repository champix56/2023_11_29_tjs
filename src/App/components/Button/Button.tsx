import React from 'react'
import styles from './Button.module.css'
import { Interface } from 'readline'
interface IButtonProps {
    type?:'button'|'submit'|'reset'|undefined
    text:string
}
function Button(props:IButtonProps) {
    console.log(props)
    //afect impossible --> props.text+='coucou'
    return <button type={props.type} className={styles.Button}>{props.text}</button>
}
export default Button;