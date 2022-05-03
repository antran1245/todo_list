import React, { useState } from "react";

export default function ToDo(props) {
    const [checked, setChecked] = useState('')
    const check = (e) => {
        e.target.checked? setChecked('line-through'): setChecked('') 
    }
    const removeButton = (item) => (e) => {
        props.remove(item)
    }

    return(
        <div style={item}>
            <p style={{textDecoration: checked}}>{props.content}</p>
            <div>
                <input type="checkbox" onChange={check}/>
                <button style={remove} onClick={removeButton(props.content)}>Remove</button>
            </div>
        </div>
    );
}

const item = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
}

const remove = {
    backgroundColor: 'red',
    border: 'none',
    height: '40px',
    color: 'white',
    borderRadius: '10px'
}