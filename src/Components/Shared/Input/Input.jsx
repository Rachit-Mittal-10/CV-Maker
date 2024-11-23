import InputStyles from "./Input.module.scss";
import {PropTypes} from "prop-types";

Input.propTypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
}

export function Input(props){
    return (
        <div className={InputStyles.Input}>
            <label htmlFor={props.label}>{props.text}:{ }</label>
            <input value={props.value} id={props.label} name={props.label} onChange={props.onChange} type={props.type}/>
        </div>
    );
}