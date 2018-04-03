import React, { Component } from "react"
import { AddButton, ControlledInput, ItemList } from "../stateless_components/"
export class ListDemo extends Component {
    state = {
        inputVal: "",
        listItems: [],
    }
    handleInputChange = (val) => this.setState({ inputVal: val })
    handleAddItem = () => {
        let newListItems = this.state.listItems
        newListItems.push(this.state.inputVal)
        this.setState({
            listItems: newListItems,
            inputVal: "",
        })
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <div style={styles.section}>
                    <AddButton
                        handleAddItem={this.handleAddItem}
                        disabled={!this.state.inputVal.trim().length > 0}
                    />
                    <ControlledInput
                        val={this.state.inputVal}
                        handleInputChange={this.handleInputChange}
                    />
                </div>
                <div style={styles.section}>
                    <ItemList items={this.state.listItems} />
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
