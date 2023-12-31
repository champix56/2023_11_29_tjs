import React, { useEffect, useState } from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";
const Button = (props) => {
 // console.log(props);
  //afect impossible --> props.text+='coucou'
  const [isClicked, setisClicked] = useState({
    clickState: false,
    info2: "coucou",
  });
  useEffect(() => {
    //la valeur a changer
    if (isClicked.clickState) {
      setTimeout(() => {
        setisClicked({ ...isClicked, clickState: false });
      }, 230);
    }
  }, [isClicked]);
  return (
    <button
      onClick={(evt) => {
        //console.log(evt);
        setisClicked({ ...isClicked, clickState: true });
        // setTimeout(() => {
        //   setisClicked({ ...isClicked, clickState: true });
        // }, 700);
        if (props.onButtonClicked!==undefined ) {
          props.onButtonClicked();
        }
      }}
      type={props.type}
      className={
        styles.Button + (isClicked.clickState ? " " + styles.clicked : "")
      }
      style={{ backgroundColor: props.bgColor }}
    >
      {props.children}
    </button>
  );
};
//https://fr.legacy.reactjs.org/docs/typechecking-with-proptypes.htm
Button.propTypes = {
  onButtonClicked: PropTypes.func,
  children: PropTypes.any.isRequired,
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  size: PropTypes.shape({
    margin: PropTypes.shape({
      bottom: PropTypes.string,
      right: PropTypes.string,
    }),
    padding: PropTypes.shape({
      h: PropTypes.string,
      w: PropTypes.string,
    }),
  }),
};
Button.defaultProps = {
  type: "button",
};

export default Button;
