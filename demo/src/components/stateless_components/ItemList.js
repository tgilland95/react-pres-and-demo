import React from "react"
export const ItemList = (props) => {
    return (
        <div>
            <h3>List Items</h3>
            <h4>Count: {props.items.length}</h4>
            <ul>
                {props.items.map((item, index) => (
                    <li key={`${index}-${item}`}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
