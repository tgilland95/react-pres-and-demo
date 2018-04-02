import React from "react"
import { Heading, Text, Quote, List, ListItem, Slide } from "spectacle"

export const KeyConcepts = () => (
    <Slide>
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Key Concepts
        </Heading>
        <List>
            <ListItem>Composition</ListItem>
            <ListItem>Unidirectional Dataflow</ListItem>
            <ListItem>Declarative</ListItem>
            <ListItem>Explicit Mutations</ListItem>
            <ListItem>Just JavaScript</ListItem>
        </List>
    </Slide>
)
