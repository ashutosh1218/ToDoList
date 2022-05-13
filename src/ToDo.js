import React from "react";

export default function ToDo(props){
    // const [clicked, setClick]=useState(false);
    return (
    <div >
    <li
    /*style={{textDecoration:clicked?"line-through":"none"}}*/
    onClick={()=>{
        // setClick(prevValue=> !prevValue);
        props.onChecked(props.id);
        }}>{props.name} 
     </li>
     </div>
     )
}
