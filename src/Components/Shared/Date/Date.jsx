import DateStyles from "./Date.module.scss";
import PropTypes from "prop-types";

Date.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
}
/*
* Props:
- label
- handler
- value
- text
*/
export function Date(props){
    return (
        <div className={DateStyles.Date}>
            <label htmlFor={props.label}>{props.text}:{   }</label> 
            <input type="date" value={props.value} onChange={props.handler} id={props.label} name={props.label}/>
        </div>
    );
};