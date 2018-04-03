import React from "react"
export const ControlledInput = (props) => (
    <input
        placeholder={props.placeholder}
        type="text"
        value={props.val}
        style={styles}
        onChange={(e) => props.handleInputChange(e.target.value)}
    />
)

const styles = {
    fontSize: "1.5em",
}
