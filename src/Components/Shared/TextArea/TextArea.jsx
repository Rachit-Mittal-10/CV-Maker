import PropTypes from "prop-types";
import TextAreaStyles from "./TextArea.module.scss";

TextArea.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    text: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export function TextArea(props){
    return (
        <div className={TextAreaStyles.TextArea} >
            <label htmlFor={props.label}>{props.text}:{ }</label>
            <textarea id={props.label} value={props.value} onChange={props.onChange}></textarea>
        </div>
    );
}