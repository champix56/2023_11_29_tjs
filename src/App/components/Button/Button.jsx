import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";
const Button = (props) => {
  console.log(props);
  //afect impossible --> props.text+='coucou'
  return (
    <button
      onClick={(evt) => {
        //console.log(evt);
        props.onButtonClicked();
      }}
      type={props.type}
      className={styles.Button}
      style={{ backgroundColor: props.bgColor }}
    >
      {props.text}
    </button>
  );
};
//https://fr.legacy.reactjs.org/docs/typechecking-with-proptypes.htm
Button.propTypes = {
  text: PropTypes.string.isRequired,
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
