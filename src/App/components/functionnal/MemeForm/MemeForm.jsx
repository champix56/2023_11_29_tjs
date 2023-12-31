import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MemeForm.module.css";
import Button from "../../uis/Button/Button";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { save, update } from "../../../store/current";

let initialMemeOnEditorMount; //=props.meme;
const MemeForm = (props) => {
  //const [images, setimages] = useState([])
  /* const [state, setstate] = useState(props.meme);
  useEffect(() => {
    setstate(props.meme);
  }, [props]);
*/

  useEffect(() => {
    initialMemeOnEditorMount = props.meme;
  }, []);
  const manageStringChangeEvent = (evt) => {
    let newState = { ...props.meme };
    newState[evt.target.name] = evt.target.value;
    props.onMemeChange(newState);
  };
  const manageNumberChangeEvent = (evt) => {
    let newState = { ...props.meme };
    newState[evt.target.name] = Number(evt.target.value);
    props.onMemeChange(newState);
  };
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          if (props.onMemeSubmit) {
            props.onMemeSubmit(props.meme);
          }
          //
        }}
        onReset={(evt) => {
          props.onMemeChange(initialMemeOnEditorMount);
          // setstate(props.meme);
        }}
      >
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input
          name="titre"
          id="titre"
          value={props.meme.titre}
          onChange={manageStringChangeEvent}
        />
        <hr />
        <label htmlFor="imageId">
          <h2>Image</h2>
        </label>
        <br />
        <select
          name="imageId"
          id="imageId"
          value={props.meme.imageId}
          onChange={manageNumberChangeEvent}
        >
          <option value="-1">No image</option>
          {props.images.map((img, position) => (
            <option key={position} value={img.id}>
              {img.titre}
            </option>
          ))}
        </select>
        <hr />
        <label htmlFor="text">
          <h2>texte</h2>
        </label>
        <br />
        <input
          name="text"
          id="text"
          type="text"
          value={props.meme.text}
          onChange={manageStringChangeEvent}
        />
        <br />
        <label htmlFor="x">
          <h2 className={styles.inline}>x :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="x"
          id="x"
          type="number"
          value={props.meme.x}
          onChange={manageNumberChangeEvent}
        />
        <label htmlFor="y">
          <h2 className={styles.inline}>y :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="y"
          id="y"
          type="number"
          value={props.meme.y}
          onChange={manageNumberChangeEvent}
        />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color">
          <h2 className={styles.inline}>color :</h2>
        </label>
        <input
          name="color"
          id="color"
          type="color"
          value={props.meme.color}
          onChange={manageStringChangeEvent}
        />
        <br />
        <label htmlFor="fontSize">
          <h2 className={styles.inline}>font-size :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontSize"
          id="fontSize"
          type="number"
          min="0"
          value={props.meme.fontSize}
          onChange={manageNumberChangeEvent}
        />
        px
        <br />
        <label htmlFor="fontWeight">
          <h2 className={styles.inline}>font-weight :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontWeight"
          id="fontWeight"
          type="number"
          min="100"
          step="100"
          max="900"
          value={props.meme.fontWeight}
          onChange={manageStringChangeEvent}
        />
        <br />
        <input
          name="underline"
          id="underline"
          type="checkbox"
          checked={props.meme.underline}
          onChange={(evt) => {
            props.onMeme.change({
              ...props.meme,
              underline: evt.target.checked,
            });
          }}
        />
        &nbsp;
        <label htmlFor="underline">
          <h2 className={styles.inline}>underline</h2>
        </label>
        &nbsp;<h2 className={styles.inline}>/</h2>&nbsp;
        <label htmlFor="italic">
          <h2 className={styles.inline}>italic</h2>
        </label>
        &nbsp;
        <input
          name="italic"
          id="italic"
          type="checkbox"
          checked={props.meme.italic}
          onChange={(evt) => {
            props.onMemeChange({ ...props.meme, italic: evt.target.checked });
          }}
        />
        <hr />
        <br />
        <label htmlFor="frameSizeX">
          <h2 className={styles.inline}>frame size X :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="frameSizeX"
          id="frameSizeX"
          type="number"
          min="0"
        />
        px
        <br />
        <label htmlFor="frameSizeY">
          <h2 className={styles.inline}>frame size y :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="frameSizeY"
          id="frameSizeY"
          type="number"
          min="0"
        />
        px
        <br />
        <hr />
        <br />
        <div className={styles.flexCols2}>
          <Button type={"reset"} bgColor={"tomato"}>
            Cancel
          </Button>
          <Button type={"submit"} bgColor={"skyblue"}>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};
MemeForm.propTypes = {
  meme: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
  onMemeChange: PropTypes.func.isRequired,
  onMemeSubmit: PropTypes.func,
};
MemeForm.defaultProps = {};

export default MemeForm;

export const MemeFormHookConnected = (props) => {
  const images = useSelector((s) => s.ressources.images);
  const current = useSelector((s) => s.current);
  const dispatch = useDispatch();
  return (
    <MemeForm
      {...props}
      images={images}
      meme={current}
      onMemeChange={(meme) => {
        dispatch(update(meme));
      }}
      onMemeSubmit={(meme) => {
        dispatch(save(meme));
      }}
    />
  );
};

/*
function mapStateToProps(state, props) {
  return { ...props, images: state.images };
}
function mapDispatchToProps(dispacth) {
  return {
    onMemeChange: (meme) => {
      dispacth(creatorUpdate(meme));
    },
  };
}
export const MemeFormConnectConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemeForm);
*/
