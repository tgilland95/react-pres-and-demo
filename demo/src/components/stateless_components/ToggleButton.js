import React from "react"

const styles = {
    fontSize: "1.5em",
    padding: "3px 8px",
    color: "white",
    background: "black",
    border: "none",
}
export const ToggleButton = (props) => {
    return (
        <button style={styles} onClick={props.handleClick}>
            {props.label}
        </button>
    )
}
