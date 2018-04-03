import React from "react"
export const DemoNav = (props) => {
    const styles = {
        buttons: {
            fontSize: "1.7em",
            border: "none",
            color: "white",
            background: "#222",
            margin: "32px 8px",
            cursor: "pointer"

        },
        selectedButton: {
            fontSize: "1.7em",
            border: "none",
            color: "#222",
            background: "white",
            margin: "32px 8px",
            cursor: "auto"
        },
        clearButton: {
            fontSize: "2em",
            border: "none",
            color: "#222",
            background: "tomato",
            display: "block"
        },
    }
    return (
        <div>
            <button style={styles.clearButton} onClick={()=> props.selectDemo("")}>X</button>
            {props.demos.map((demo) => {
                return (
                    <button
                        onClick={() => props.selectDemo(demo)}
                        style={
                            props.selectedDemo === demo
                                ? styles.selectedButton
                                : styles.buttons
                        }
                        key={demo}
                    >
                        {demo}
                    </button>
                )
            })}
        </div>
    )
}
