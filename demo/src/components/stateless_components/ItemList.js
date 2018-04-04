import React from "react"
export const ItemList = (props) => {
    let items = props.sorted ? props.items.sort() : props.items
    items = props.filterString ? props.items.filter(e => e !== props.filterString) : props.items

    return (
        <div style={styles.main}>
            <h3>
                {props.label} - Count: {items.length}
            </h3>
            <ul style={styles.list}>
                {items.map((item, index) => (
                    <li style={styles.listItem} key={`${index}-${item}`}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

const styles = {
    main: {},
    list: {
        listStyle: "none",
    },
    listItem: {
        margin: "10px 0px",
        fontSize: "1.4em",
        padding: "4px 2px",
    },
}
