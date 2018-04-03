import React, { Component } from "react"
import { ControlledInput } from "../stateless_components/index"
export class InputDemo extends Component {
    state = {
        controlledValue: "",
    }
    handleInputChange = (newVal) => this.setState({ controlledValue: newVal })
    render() {
        return (
            <div style={styles.wrapper}>
                <div style={styles.section}>
                    <h4>uncontrolled input</h4>
                    <input
                        style={{
                            fontSize: "1.5em",
                        }}
                    />
                </div>
                <div style={styles.section}>
                    <h4>controlled input</h4>
                    <ControlledInput
                        val={this.state.controlledValue}
                        handleInputChange={this.handleInputChange}
                    />
                </div>
                <div style={styles.section}>{JSON.stringify(this.state)}</div>
            </div>
        )
    }
}

const styles = {
    wrapper: {
        display: "inline-flex",
        width: "100%",
        height: "auto",
    },
    section: {
        margin: "0",
        padding: "30px",
        display: "block",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "50%",
    },
    AddButton: {
        fontSize: "1.5em",
        padding: "3px 8px",
        color: "white",
        background: "black",
        border: "none",
    },
    DisabledAddButton: {
        fontSize: "1.5em",
        padding: "3px 8px",
        color: "black",
        background: "black",
        border: "none",
    },
    InputComponent: {
        fontSize: "1.5em",
    },
}
