import React, { Component } from "react"
import { AppButton, ControlledInput, ItemList } from "../stateless_components/"
export class ListDemo extends Component {
    state = {
        inputVal: "",
        listItems: [
            "oranges",
            "apples",
            "bananas",
            "kiwi",
            "pineapple",
            "grapefruit",
            "lemon",
        ],
    }
    handleInputChange = (val) => this.setState({ inputVal: val })
    render() {
        return (
            <div>
                <div style={styles.wrapper}>
                    <div style={styles.section}>
                        <br />
                        <ItemList
                            items={this.state.listItems}
                            label={"normal"}
                        />
                    </div>
                    <div style={styles.section}>
                        <ItemList
                            items={this.state.listItems}
                            sorted={true}
                            label={"sorted"}
                        />
                    </div>
                    <div style={styles.section}>
                        <ItemList
                            items={this.state.listItems}
                            filterString={"apples"}
                            label={"filtered"}
                        />
                    </div>
                    <div style={styles.section}>
                        {JSON.stringify(this.state, null, 2)}
                    </div>
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
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "50%",
    },

    InputComponent: {
        fontSize: "1.5em",
    },
}
