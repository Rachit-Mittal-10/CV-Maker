import ButtonStyles from "./Button.module.scss";
import PropTypes from "prop-types";

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string,

}

export function Button(props){
    return (
        <div className={ButtonStyles.Button}>
            <button type="button" onClick={props.onClick}>{props.text}</button>
        </div>
    );
}