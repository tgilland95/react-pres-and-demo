import React, { Component } from "react"
import { AppButton, ControlledInput, ItemList } from "../stateless_components/"
export class InteractiveListDemo extends Component {
    state = {
        inputVal: "",
        listItems: [],
    }
    handleInputChange = (val) => this.setState({ inputVal: val })
    handleAddItem = () => {
        this.setState({
            listItems: [...this.state.listItems, this.state.inputVal],
            inputVal: "",
        })
        /* this works too */
        /*
        let newListItems = this.state.listItems
         newListItems.push(this.state.inputVal)
         this.setState({
             listItems: newListItems,
             inputVal: "",
        })
        */
    }

    render() {
        return (
            <div>
                <div style={styles.wrapper}>
                    <div style={styles.section}>
                        <ControlledInput
                            val={this.state.inputVal}
                            handleInputChange={this.handleInputChange}
                        />
                        {this.state.inputVal.trim().length > 0 && (
                            <AppButton
                                handleAddItem={this.handleAddItem}
                                disabled={
                                    !this.state.inputVal.trim().length > 0
                                }
                                value="+"
                            />
                        )}
                    </div>
                    <div style={styles.section}>
                        <ItemList items={this.state.listItems} />
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
