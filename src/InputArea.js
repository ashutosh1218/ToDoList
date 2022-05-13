import React, { useState } from "react";
export default function InputArea(props) {
    var [item, updateItem] = useState("");
    function handleChange(event) {
        const value = event.target.value;
        updateItem(value);
    }

    return (
        <div className="form">
            <input onChange={handleChange}
                type="text"
                value={item} />
            <button onClick={() => {
                props.click(item);
                updateItem("");
            }
            }>
                <span>Add</span>
            </button>
        </div>
    );
}