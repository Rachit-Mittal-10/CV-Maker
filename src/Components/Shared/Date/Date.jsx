import DateStyles from "./Date.module.scss";

export function Date(props){
    return (
        <div className={DateStyles.Date}>
            <label htmlFor={props.label}>{props.label}:{   }</label> 
            <input type="date" value={props.value} onChange={props.handler} id={props.label} name={props.label}/>
        </div>
    );
}