import React, { Component } from "react"
import { ToggleButton } from "../stateless_components/index"
export class ToggleButtonDemo extends Component {
    state = {
        controlledValue: false,
    }
    handleClick = () => {
        this.setState({ controlledValue: !this.state.controlledValue })

        /* this would work too */
        /*
        const oldVal = !this.state.controlledValue
        this.setState({ controlledValue: oldVal })
        */
    }
    /**
     * this would also work the same:
     * handleClick = () => {
     *     const oldVal = !this.state.controlledValue
     * this.setState({ controlledValue: oldVal })
     * }
     * */
    render() {
        return (
            <div style={styles.wrapper}>
                <div style={styles.section}>
                    <h3>Value: {this.state.controlledValue.toString()}</h3>
                </div>
                <div style={styles.section}>
                    <h4>controlled input</h4>
                    <ToggleButton
                        val={this.state.controlledValue}
                        handleClick={this.handleClick}
                        label="toggle button"
                    />
                </div>
                <div style={styles.section}>
                    {JSON.stringify(this.state, null, 2)}
                </div>
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
}
