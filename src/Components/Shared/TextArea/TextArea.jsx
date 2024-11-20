import PropTypes from "prop-types";
import TextAreaStyles from "./TextArea.module.scss";

TextArea.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
}

export function TextArea(props){
    return (
        <div className={TextAreaStyles.TextArea} >
            <label htmlFor={props.label}>{props.text}:{ }</label>
            <textarea id={props.label} value={props.value} onChange={props.handler}></textarea>
        </div>
    );
}